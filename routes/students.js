import { Router } from "express";
import { login, signup } from "../controllers/students.js";
import validate from "../middlewares/validate.js";
import { studentSchema } from "../validators/students.js";

const router = Router();

router.post('/signup', validate(studentSchema), signup);
router.post('/login', login);

export{ router };