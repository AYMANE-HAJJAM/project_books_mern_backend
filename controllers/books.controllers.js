import Book from '../models/books.js';

export const createBook = async (req, res) => {
    try {
        const bookData = await Book.create({...req.body});
        res.status(201).json({ message: "Book created successfully", book: bookData });
    } catch (error) {
        res.status(500).json({ message: {"Failed to create book": error.message} });
    }
};

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ message: "Books retrieved successfully", books });
    } catch (error) {
        res.status(500).json({ message: {"Failed to retrieve books": error.message} });
    }
};
export const getBookById = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookData = await Book.findById(bookId);
        if (!bookData) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book retrieved successfully", book: bookData });
    } catch (error) {
        res.status(500).json({ message: {"Failed to retrieve book": error.message} });
    }
};

export const updateBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book updated successfully", book: updatedBook });
    } catch (error) {
        res.status(500).json({ message: {"Failed to update book": error.message} });
    }
};
export const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const deletedBook = await Book.findByIdAndDelete(bookId);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
    } catch (error) {
        res.status(500).json({ message: {"Failed to delete book": error.message} });
    }
};