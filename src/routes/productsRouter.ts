import { Router } from "express";
import { ProductsController } from "../controllers/productsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { verifyAuthorization } from "../middlewares/verifyAuthorization";

const productsRouter = Router()
const productsController = new ProductsController()

productsRouter.get("/", productsController.index)
productsRouter.post("/",
    ensureAuthenticated,
    verifyAuthorization(["sale"]),
    productsController.create)

export { productsRouter }