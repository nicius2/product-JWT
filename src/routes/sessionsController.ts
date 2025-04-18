import { Router } from "express";
import { SessionsController } from "../controllers/sessionsController";

const sessionRouter = Router()
const sessionsController = new SessionsController()

sessionRouter.post("/", sessionsController.create)

export {sessionRouter}