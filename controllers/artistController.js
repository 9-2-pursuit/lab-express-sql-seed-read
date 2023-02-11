const express = require("express");

const artists = express.Router({ mergeParams: true }); //access other params from other controllers in the app , combining routes

const { getAllArtists } = require("../queries/artist");

artists.get("/", async (req, res) => {
  const { id } = req.params;
  const all_artists = await getAllArtists(id);
  if (all_artists[0]) {
    res.status(200).json(all_artists);
  } else {
    res.status(500).json({ error: "whoops sserver error" });
  }
});

module.exports = artists;
