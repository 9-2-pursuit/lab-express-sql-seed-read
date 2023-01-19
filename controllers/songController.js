const express = require("express");
const songs = express.Router();
const {getAllSongs, getOneSong, createSong} = require("../queries/songs");
const {checkSongId, checkName, checkBool, checkArtistName} = require("../validate/checkSongs.js")
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
    const {id} = req.params;
    const song = await getOneSong(id);
    if(song) {
      res.status(200).json(song)
    }else {
      res.status(404).json({error: "an arror occured"})
    }
  })

  //POST
  songs.post("/", checkName, checkBool, checkArtistName, async (req, res) => {
    
    const newSong = await createSong(req.body);
    if(newSong) {
      res.status(200).json(newSong);
    }else {
      res.status(404).json({error: "an error occured"})
    }
    
  })


  

module.exports = songs;