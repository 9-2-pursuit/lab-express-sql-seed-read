const express = require("express");
const app = express();
const songsController = require("./controllers/songController");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.use("/songs", songsController);

app.use("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
