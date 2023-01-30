const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");
const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checkSongs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "Page not found" });
  }
});

// CREATE
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = songs;
