const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const {
  checkBoolean,
  checkName,
  checkArtist,
} = require("../validations/checkSongs.js");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  console.log(allSongs);

  //asc and desc
  const { order, is_favorite } = req.query;
  let songData = [...allSongs]; // this is the copy of the origin song api

  if (songData[0]) {

    if (order) {
      if (order === "asc") {
        songData.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (order === "desc") {
        songData.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
    }

    if (is_favorite) {
      if (is_favorite === "true") {
      songData = songData.filter(({ is_favorite }) => is_favorite === true);
      } else if (is_favorite === "false") {
     songData = songData.filter(({ is_favorite }) => is_favorite === false);
      }
    }

    res.status(200).json(songData);
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

//Create
songs.post("/", checkBoolean, checkName, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//Delete
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE
songs.put("/:id", checkBoolean, checkName, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
});
module.exports = songs;
