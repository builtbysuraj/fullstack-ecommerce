import cors from "cors"
import express from "express"

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log("Server is running on port", PORT))
