import Student from "../models/students.js";
import AppError from "../utils/AppError.js";

const signup = async (req, res, next) => {
  try{
    const { name, email, password } = req.body;
    const student = await Student.create({ name, email, password });
    res.status(201).json({
      student
    })
  }catch(err){
    next(err);
  }
}

const login = async(req, res, next) => {
  try{
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if(!student){
      throw new AppError("No student with that email", 400)
    }
    res.status(200).json({
      message: "Logged in"
    })
  }catch(err){
    next(err)
  }
}

export { login, signup }