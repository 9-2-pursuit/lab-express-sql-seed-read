const express = require("express");
const songs = express.Router();

const artistController = require("./artistController")
songs.use("/:id/artist", artistController);
//songs/song_id/artist


const {
  getAllSongs,
  getOneSong,
  createSong,
  updateSong,
  deleteSong,
  sortByName,
} = require("../queries/songs");

const {
  checkSongId,
  checkName,
  checkBool,
  checkArtistName,
  checkNameArtistBool,
  checkAlbum,
  checkSongTime,
} = require("../validate/checkSongs.js");


songs.get

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
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: `a song of ${id} does not exist right now` });
    //.send(`a song of ${id} does not exist`);
  }
//   try {
//     const song = await getOneSong(id);
//     res.status(200).json(song);
//   }catch (error) {
// return error do these type of errors come back from thr database or validation ? validation sends null
//does there need to be a validation for checkSongId if we ar checking in the controller ? 
//   }
});

//POST
songs.post(
  "/", checkArtistName, checkBool, checkName,  async (req, res) => {
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

songs.get("/songs?order=asc", async (req, res) => {

  const sorted = await sortByName();
  if(sorted[0]) {
    res.status(200).json(sorted);
  }else {
    res.status(404).json({error: "Sorting isn't available yet"})
  }

})



module.exports = songs;
