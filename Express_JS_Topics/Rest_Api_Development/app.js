const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const books = [
  { id: 1, name: "Book 1" },
  { id: 2, name: "Book 2" },
];

// home page
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Book Store");
});

// get all books
app.get("/get", (req, res) => {
  res.status(200).json(books);
});

// get a single book
app.get("/get/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const singleBook = books.find((book) => book.id === bookId);

  if (singleBook) {
    res.status(200).json({
      success: true,
      message: "Fetched book successfully",
      data: singleBook,
    });
  } else {
    res.status(404).json({
      error: true,
      message: "Book is not found! Please try with different id",
    });
  }
});

// Add a book
app.post("/add-book", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: `Book ${books.length + 1}`,
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book added successfully!",
    data: newBook,
  });
});

// update book
app.put("/update/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const currentBook = books.find((book) => book.id === bookId);

  if (currentBook) {
    currentBook.name = req.body.name || currentBook.name;

    res.status(200).json({
      success: true,
      message: `Book Updated Successfully!`,
      data: currentBook,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Book not found!",
    });
  }
});

// delete book
app.delete("/delete/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const currentBook = books.find((book) => book.id === bookId);
  console.log("currentBook", currentBook);

  if (currentBook !== -1) {
    const deletedBook = books.splice(currentBook, 1);

    res.status(200).json({
      success: true,
      message: "Book deleted",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
