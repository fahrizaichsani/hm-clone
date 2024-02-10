import { comparePass } from "@/db/helpers/bcrypt";
import { signToken } from "@/db/helpers/jwt";
import { UserModel } from "@/db/models/User";
import { UserBody, UserLoginSchema } from "@/zod-types";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body: UserBody = await request.json();
    const validation = UserLoginSchema.safeParse(body);
    if (!validation.success) {
      throw validation.error;
    }

    const user = await UserModel.getUserByEmail(body.email);
    if (!user) {
      throw Error("Invalid email/password");
    }

    const comparePassword = comparePass(body.password, user.password);
    if (!comparePassword) {
      throw Error("Invalid email/password");
    }

    const access_token = signToken({
      _id: user._id,
      email: user.email,
    });

    cookies().set("Authorization", `Bearer ${access_token}`)

    return NextResponse.json(
      {
        access_token,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.message === "Invalid email/password") {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 400,
        }
      );
    }

    if (error instanceof ZodError) {
      const errPath =
        (error.issues[0].path[0] as string).charAt(0).toUpperCase() +
        (error.issues[0].path[0] as string).slice(1);
      const errMessage = error.issues[0].message.toLowerCase();
      return NextResponse.json(
        {
          error: errPath + " " + errMessage,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
