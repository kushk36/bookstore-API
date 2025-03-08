require("dotenv").config()
const express = require("express")
const connectToDb = require("./database/db")

const app = express()
const PORT = process.env.PORT

// connect to database
connectToDb()

app.use(express.json())

// connect to server or start server
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})