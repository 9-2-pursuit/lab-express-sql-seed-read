// connection to database
const db = require("../db/dbConfig.js");

//wait for the database's response before we try to return a value.
//set up a try/catch block so that if we have a problem, we can (likely) get a more informative error.
const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (error) {
      return error;
    }
  };

//ONE song part of the SHOW
const getSong = async (id) => {
    try {
      const oneSong = await db.oneOrNone(
        "SELECT * FROM songs WHERE id=$1",
        id
      );
      return oneSong;
    } catch (error) {
      return error;
    }
  };

//Part of Create
const createSong = async (song) => {
    const {name, artist, album, time, is_favorite} = song;
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

//with module.exports, we are returning an object because we will return more than one function. Therefore, we will store it in an object.
module.exports = {getAllSongs, createSong, getSong,};