import express from "express"
import dotenv from ".env"

import authRoutes from "./routes/auth.routes.js"

dotenv.config()
const app = express()

const PORT = process.env.PORT

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT)
})