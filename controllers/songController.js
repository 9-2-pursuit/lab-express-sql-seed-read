const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");
const {
  checkSongId,
  checkName,
  checkBool,
  checkArtistName,
  checkAlbum,
  checkSongTime,
} = require("../validate/checkSongs.js");

//INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server errorrr" });
  }
});

//SHOW
songs.get("/:id", checkSongId, async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "an arror occured" });
  }
  // try {
  //   const song = await getOneSong(id);
  //   res.status(200).json(song);
  // }catch (error) {
  //   res.status(404).json({error: "an error occured"})
  // }
});

//POST
songs.post(
  "/",
  checkName, checkArtistName,
  async (req, res) => {
    try {
      const newSong = await createSong(req.body);
      res.json(newSong);
    } catch (error) {
      console.log(error)
    }
    // if(newSong) {
    //   res.status(200).json(newSong);
    // }else {
    //   res.status(400).json({error: "error"})
    // }
  }
);

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = await updateSong(id, req.body);
  if(update.id) {
    res.status(200).json(update);
  }else {
    res.status(404).json({ error: "error updating song" });

  }
  
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

module.exports = songs;
