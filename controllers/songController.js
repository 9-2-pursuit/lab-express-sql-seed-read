const express = require("express");
const songs = express.Router();


const { getAllSongs } = require("../queries/songs");


// const checkSong = require("../utils/songCheck");

songs.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    res.json(allSongs);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong!" });
  }
});

module.exports = songs;