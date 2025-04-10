import { Router } from "express";
import { productsRouter } from "./productsRouter";
import { sessionRouter } from "./sessionsController";

const Routes = Router()

Routes.use("/products", productsRouter)
Routes.use("/sessions", sessionRouter)

export { Routes }