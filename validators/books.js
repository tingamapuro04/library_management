import Joi from 'joi';

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string()
})

export default bookSchema;