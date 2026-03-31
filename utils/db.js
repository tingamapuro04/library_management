import mongoose from "mongoose";

const dbConnect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connection successfull")
  }catch(err){
    console.error(err.message)
    process.exit(1)
  }
}

export default dbConnect;