const express = require("express");


const artist = express.Router({ mergeParams: true }); //access other params from other controllers in the app , combining routes

const {
    getArtist,
    one
     
} = require("../queries/artist")


artist.get("/", async (req, res) => {
    const { id } = req.params; //boomark/:bookmarkID/reviews
    //bookmarkId is the parameter name for the bookmarkId recieved from the database
    const x = await one(id);
    if (x[0]) {
      res.status(200).json(x);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });















module.exports = artist;