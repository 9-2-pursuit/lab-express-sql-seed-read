const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songController.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/songs", songController)


app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
  });

module.exports = app;