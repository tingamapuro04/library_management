import Joi from "joi";

const studentSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
});

const updateStudentSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});

export {studentSchema, updateStudentSchema}