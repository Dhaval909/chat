const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/chat/", (req, res) => {
  res.send("Chats");
});

app.listen(
  process.env.PORT,
  console.log(`Listen on http://localhost:${process.env.PORT}`)
);
