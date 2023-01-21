// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // tells app to send and receive json

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

// Song ROUTES
const songController = require("./controllers/songController.js");
app.use("/songs", songController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app; //allow you to use files in other components
