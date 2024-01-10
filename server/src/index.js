import app from './app.js'
import connectDB from './db/db.js'

const PORT = process.env.PORT || 5000

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`\n ⚙️ Server is running at port : ${PORT}🎉`),
    )
  })
  .catch((err) => console.log('MONGO db connection failed ! ', err))

