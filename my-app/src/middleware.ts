import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayload } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  const access_token = cookies().get("Authorization")?.value.split(" ")[1];

  if (!access_token) {
    return NextResponse.json(
      {
        error: "Authentication failed",
      },
      {
        status: 401,
      }
    );
  }

  const decoded = await readPayload<{ _id: string; email: string }>(
    access_token
  );
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-email", decoded.email);
  requestHeaders.set("x-userId", decoded._id);

  const response = NextResponse.next({
    request: {
        headers: requestHeaders
    }
  });
  return response
}

export const config = {
  matcher: "/api/wishlist/:path*",
};
