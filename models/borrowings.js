import { boolean } from "joi";
import mongoose from "mongoose";

const borrowSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  returnDate: {
    type: Date,
    required: true
  },
  returned: {
    type: boolean,
    default: false
  }

})

const borrowing = mongoose.model("Borrowing", borrowSchema);
export default borrowing;