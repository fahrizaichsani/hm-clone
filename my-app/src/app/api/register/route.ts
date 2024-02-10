import { UserModel } from "@/db/models/User";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const compareEmail = await UserModel.getUserByEmail(body.email);
    if (compareEmail) {
      throw Error("Email already exists");
    }
    const user = await UserModel.register(body);
    
    return NextResponse.json({
      data: user
    });
  } catch (error: any) {
    if (error.message === "Email already exists") {
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
