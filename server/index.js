const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/blogs");
require("dotenv").config();
// INIT
const app = express();
const PORT = process.env.PORT || 3030;

// MIDDLEWARRE
app.use(cors());
app.use(express.json());
app.use("/blogs", router);

// CONNECT TO DB
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");

    // LISTENING TO PORT
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
