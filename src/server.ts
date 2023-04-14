import express, { Request, Application, Response } from "express"
import morgan from "morgan"
import cors from "cors"
import router from "./routes";

const app: Application= express()
app.use(cors())
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
  res.send("hello")
})

app.use(router)

export default app
