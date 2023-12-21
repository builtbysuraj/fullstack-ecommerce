import cors from "cors"
import express from "express"
import pg from "pg"
import { POSGRESQL_DB_CONNECT_URL } from "./config.js"

const Pool = pg.Pool
const PORT = process.env.PORT || 5000

const pool = new Pool({
  connectionString: POSGRESQL_DB_CONNECT_URL,
})

const app = express()
app.use(cors())
app.use(express.json())

// Insert data manually in postgresql
// app.get("/insert-products", async (req, res) => {
//   try {
//     const client = await pool.connect()

//     for (let product of products) {
//       await client.query(
//         "INSERT INTO ecommerce(id, title, description, price, discountPercentage, rating, stock, brand, thumbnail, category) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
//         [
//           product.id,
//           product.title,
//           product.description,
//           product.price,
//           product.discountPercentage,
//           product.rating,
//           product.stock,
//           product.brand,
//           product.thumbnail,
//           product.category,
//         ]
//       )
//     }

//     res.send("Products inserted successfully!")
//     client.release()
//   } catch (err) {
//     console.error(err)
//     res.send("Error " + err)
//   }
// })

app.get("/api/v1/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ecommerce")
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .json({ error: "An error occurred while fetching data", err })
  }
})

app.get("/api/v1/data/:id", async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query("SELECT * FROM ecommerce WHERE id = $1", [
      id,
    ])
    if (result.rows.length > 0) {
      res.json(result.rows[0])
    } else {
      res.status(404).json({ error: "No data found for the given id" })
    }
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .json({ error: "An error occurred while fetching data", err })
  }
})

app.listen(PORT, () => console.log("Server is running on port", PORT))
