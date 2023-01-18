const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getOneSong(id);
  if (oneSong) {
    res.json(oneSong);
  } else {
    res.status(404).json({ error: "Not Found!" });
  }
});

module.exports = songs;
