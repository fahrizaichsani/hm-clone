import jwt, { JwtPayload } from "jsonwebtoken"

const KEY = process.env.SECRET as string

export const signToken = (payload: JwtPayload) => {
    return jwt.sign(payload, KEY)
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, KEY)
}
