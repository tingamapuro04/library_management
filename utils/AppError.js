class AppError extends Error {
  constructor(message, statusCode){
    super(message);
    this.statusCode
  }
}

export default AppError;