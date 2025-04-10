import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { authConfig } from "../config/auth";
import { sign } from "jsonwebtoken";

class SessionsController {
    async create(request: Request, response: Response) {
        const { username, password } = request.body

        const fakeUser = {
            id: 1,
            username: "vinicius",
            password: "123456",
            role: "customer",
        }

        // checking if user is already registered
        if (username != fakeUser.username || password != fakeUser.password) {
            throw new AppError("Username or password incorrect", 401)
        }

        // generating a different token every time the user logs in
        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ role: fakeUser.role }, secret, {
            expiresIn,
            subject: String(fakeUser.id),
        })

        return response.json({ token })
    }
}

export { SessionsController }