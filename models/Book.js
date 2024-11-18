const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookId: { type: String },
  bookName: { type: String },
  authorName: { type: String },
  publicationHouse: { type: String },
  isbnNo: { type: String },
  price: { type: String },
  language: { type: String },
  bookImage: { type: String },
});

BookSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("BookSchema", BookSchema);
