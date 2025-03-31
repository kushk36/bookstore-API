const Book = require("../models/book")

const getAllBooks = async (req, res) => { }
const getSingleBookById = async (req, res) => { }
const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body
        const newlyCreatedBook = await Book.create(newBookFormData)
        if (newBookFormData) {
            res.status(201).json({
                success: true,
                message: "Book Added Successfully",
                data: newlyCreatedBook
            })
        }
    } catch (error) {
        console.log("Error", error);

    }
}
const updateBook = async (req, res) => { }
const deleteBook = async (req, res) => { }

module.exports = { getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook }