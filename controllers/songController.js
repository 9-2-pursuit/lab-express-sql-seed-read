const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs.js");
const {
  checkBoolean,
  checkName,
  checkArtist,
} = require("../validation/validate.js");

//INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//CREATE
songs.post("/", checkBoolean, checkName, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (err) {
    res.status(404).json({ error: "error" });
    console.log(err);
  }
});

//UPDATE
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong( req.body, id);
  res.status(200).json(updatedSong);
});

//DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song Not Found!");
  }
});

module.exports = songs;
