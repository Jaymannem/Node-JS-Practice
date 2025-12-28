const Book = require("../models/book");

async function getAllBooks(req, res) {
  try {
    const books = await Book.find({});
    res.status(200).json({
      success: true,
      message: "Fetched books successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch books",
    });
  }
}

async function getSingleBook(req, res) {
  try {
    const bookId = req.params.id;
    const singleBook = await Book.findById(bookId);
    res.status(200).json({
      success: true,
      message: "Book found",
      data: singleBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch book",
    });
  }
}

async function addBook(req, res) {
  try {
    const formData = req.body;
    const createBook = await Book.create(formData);

    if (createBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: createBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add book",
    });
  }
}

async function updateBook(req, res) {
  try {
    const bookId = req.params.id;
    const updatedFormData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedFormData, {
      new: true,
    });

    res.status(200).json({
      success: true, 
      message: "Book Updated", 
      data: updatedBook
    })
  } catch (error) {
    console.log("error", error)
    res.status(500).json({
      success: false,
      message: "Failed to update book",
    });
  }
}

async function deleteBook(req, res) {
  try {
    const bookId = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(bookId);
    if (deleteBook) {
      res.status(200).json({
        success: true,
        message: "Book deleted",
        data: deleteBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete book",
    });
  }
}

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
