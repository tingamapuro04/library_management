import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email field cannot be empty"],
    unique: [true, 'This email is already registered!']
  },
  password:{
    type: String,
    required: [true, "Please provide a password"]
  }
}, { timestamps: true })

const Student = mongoose.model("Student", studentSchema);
export default Student;