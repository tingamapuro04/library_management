import express from express;
require('dotenv').config()
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(errorHandler)
app.listen(port, () => {
  console.log("Server running.")
})