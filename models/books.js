import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  genre: {
    type: String,
    enum: ['comedy', 'romance', 'entertainment', 'sports'],
    lowercase: true
  },
  author: {
    type: String,
    required: [true, 'Please provide the author']
  }
}, { timestamps: true })

const Book = mongoose.model("Book", bookSchema);
export default Book;