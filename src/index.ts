import app from "./server"

const port: number = 8000

app.listen(port, () => {
  console.log(`App is running on port $port`)
})
