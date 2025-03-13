require("dotenv").config()
const mongoose = require("mongoose")

const MONGO_URL = process.env.MONGO_URL

const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB is connected successfully");

    } catch (error) {
        console.log("Database connection failed", error);

    }
}

module.exports = connectToDb