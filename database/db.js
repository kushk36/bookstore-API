const mongoose = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://kushpatel2836:kushpatel2836bookstore-api@books-api-cluster.t92iu.mongodb.net/");
        console.log("MongoDB is connected successfully");

    } catch (error) {
        console.log("Database connection failed", error);

    }
}

module.exports = connectToDb