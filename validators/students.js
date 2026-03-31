import Joi from "joi";

const studentSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
});

const updateStudentSchema = Joi.object({
  name: Joi.string(),
  email: Joi.email(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});

export {studentSchema, updateStudentSchema}