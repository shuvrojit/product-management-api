import express, { Request, Application, Response } from "express"

const app: Application= express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
  res.send("hello")
})

export default app
