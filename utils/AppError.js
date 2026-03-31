class AppError extends Error {
  constructor(message, statusCode){
    super(message);
    this.statusCode
  }
}

module.exports = AppError;