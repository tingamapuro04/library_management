import {Router} from "express";
import { getBookById, getBooks, createBook } from "../controllers/books.js";
import validate from "../middlewares/validate.js";
import bookSchema from "../validators/books.js";

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', validate(bookSchema), createBook)

export { router }