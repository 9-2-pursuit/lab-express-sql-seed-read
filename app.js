const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songController");
const artistController = require("./controllers/artistController");
const albumController = require("./controllers/albumController");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.use("/songs", songsController);
app.use("/artists", artistController);
app.use("/albums", albumController);

app.use("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
