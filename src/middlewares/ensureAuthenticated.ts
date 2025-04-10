import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import { verify } from "jsonwebtoken";
import { authConfig } from "../config/auth";

interface TokenPayLoad {
    role: string
    sub: string
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // getting the token from the request
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError("JWT not informed", 401)
    }

    const [, token] = authHeader.split(" ")

    const {sub: user_id, role} = verify(token, authConfig.jwt.secret) as TokenPayLoad

    request.user = {
        id: String(user_id),
        role,
    }

    return next()
}

export { ensureAuthenticated }