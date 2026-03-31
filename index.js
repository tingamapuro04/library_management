import express from "express";
import dotenv from "dotenv";
dotenv.config();
import errorHandler from './middlewares/errorHandler.js';
import dbConnect from './utils/db.js'
import { router as bookRoutes } from "./routes/books.js";

dbConnect();
const port = process.env.PORT || 4000
const app = express();

app.use(bookRoutes)


app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})