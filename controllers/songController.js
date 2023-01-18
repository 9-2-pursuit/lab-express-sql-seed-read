const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
  res.send("this is songs");
});

module.exports = songs;
