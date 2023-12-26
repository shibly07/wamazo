const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors')
const connectDb = require("./config/dbConnection");

const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json());
app.use("/api/user", userRoutes);
app.use(errorHandler);

connectDb();
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
