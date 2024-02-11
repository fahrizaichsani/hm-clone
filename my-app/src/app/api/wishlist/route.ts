import { WishlistModel } from "@/db/models/Wishlist";
import { WishlistInput } from "@/types";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const idUser = request.headers.get("x-userId") as string;
    const wishlist = await WishlistModel.addWishlist({
      productId: body.productId,
      userId: idUser,
    });
    return NextResponse.json({ data: wishlist });
  } catch (error: any) {
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

export async function GET(request: Request) {
  try {
    const idUser = request.headers.get("x-userId") as string;
    const wishlist = await WishlistModel.getAllWishlist(idUser);

    return NextResponse.json({ data: wishlist });
  } catch (error: any) {
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
