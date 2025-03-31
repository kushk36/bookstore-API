require("dotenv").config()
const express = require("express")
const connectToDb = require("./database/db")

const app = express()
const PORT = process.env.PORT

const bookRoutes = require("./routes/book-routes")

// connect to database
connectToDb()

//middleware -> express.json()
app.use(express.json())

//routes here
app.use("/api/books", bookRoutes)

// connect to server or start server
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})