const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, createSong } = require("../queries/songs");
const { checkName, checkBoolean } = require("../validations/checkSongs");

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

songs.post("/", checkName, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    console.log(error);
  }
});
module.exports = songs;
