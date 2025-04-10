import express, {Request, Response, NextFunction} from "express";
import "express-async-errors"
import { Routes } from "./routes";

const PORT = 3333
const app = express()
app.use(express.json())
app.use(Routes)

app.use((error: any, request: Request, response: Response, _:NextFunction) => {
    response.status(500).json({message: error.message})
})

app.listen(PORT, () => console.log(`Running Server in the PORT: ${PORT}`))