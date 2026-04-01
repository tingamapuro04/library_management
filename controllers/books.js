import Book from "../models/books.js";
import AppError from "../utils/AppError.js";

const createBook = async (req, res, next) => {
  try{
    const {title, author, genre } = req.body;
    const book = await Book.create({ title, genre, author })
    res.status(201).json({
      message: "Created Successfully",
      book
    })
  }catch(err){
    next(err)
  }
}

const getBooks = async (req, res, next) => {
  try{
    const {limit = 5, page = 1, genre, author, title } = req.query;
    const filter = {}
    if(genre){
      filter.genre = genre
    }

    if(author){
      filter.author = author
    }

    if(title){
      filter.title = title
    }

    const skip = (page-1)*limit
    const books = await Book.find(filter)
      .select("title author")
      .limit(limit)
      .skip(skip);
      
    const totalBooks = await Book.countDocuments(filter);
    res.status(200).json({
      books,
      allpages: Math.ceil(totalBooks / limit),
      page,
      hasNextPage: page < Math.ceil(totalBooks / limit),
      hasPreviousPage: page > 1
    });

  }catch(err){
    next(err)
  }
}

const getBookById = async (req, res, next) => {
  try{
    const id = req.params.id
    const book = await Book.findById(id);
    if(!book){
      throw new AppError("No book with that id", 400)
    }
    res.status(200).json({
      book
    })
  }catch(err){}
}

export { createBook, getBooks, getBookById }