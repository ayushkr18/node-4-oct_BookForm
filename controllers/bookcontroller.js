const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const Book = require("../models/Book");
const saltRounds = 10;

async function signUp(req, res) {
  try {
    console.log(req.body);
    console.log("-----------------");
    console.log(req.file);

    cloudinary.confiq({
      cloud_name: "doynk4gcv",
      api_key: "634374995555715",
      api_secret: "VYXqDtu7Vivll56S_vXgwVBWqj8",
    });
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result, "result");

    let bookId = bcrypt.hashSync(req.body.bookId, saltRounds);

    let book = new Book(req.body);
    book.bookId = bookId;
    book.bookImage = result.secure_url;

    await book.save();
    // res.end("<h1>Searching is Successfully....</h1>");
    res.redirect("/");
  } catch (err) {
    console.log(err.message, "message");
  }
}

async function doSearch(req, res) {
  try {
    console.log(req.body, "req.body");
    let book = await Book.findOne({ isbnNo: req.body.isbnNo });
    console.log(book);
    res.end("<h1> Searching is in process </h1>");
  } catch (err) {
    console.log(err.message, "message");
  }
}

async function getBooks(req, res) {
  try {
    let books = await Book.find({});
    console.log(books);
    res.end("booklist", {
      books: books,
    });
  } catch (err) {
    st;
    console.log(err.message, "message");
  }
}

module.exports = {
  signUp,
  doSearch,
  getBooks,
};
