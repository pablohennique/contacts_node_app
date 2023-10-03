const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.json()); //Parsing JSON responses
app.use("/api/contacts", require("./routes/contactRoutes")); //using the root path for api calls
app.use("/api/users", require("./routes/userRoutes")); //using the root path for all api calls
app.use(errorHandler); //Custom build error handling middleware

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
