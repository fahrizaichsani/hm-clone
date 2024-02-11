import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const KEY = process.env.SECRET as string;

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, KEY);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, KEY);
};

export const readPayload = async <T>(token: string) => {
  const secret = new TextEncoder().encode(KEY);
  const result = await jose.jwtVerify<T>(token, secret)
  return result.payload
};
