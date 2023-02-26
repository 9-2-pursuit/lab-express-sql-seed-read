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
    const oneSong = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

//Part of Create
const createSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const newSong = await db.oneOrNone(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

//Update
const updateSong = async (id, song) => {
    try {
        const { name, artist, album, time, is_favorite } = song;
      const updatedSong = await db.one(
        "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
        [name, artist, album, time, is_favorite, id]
      );
      return updatedSong;
    } catch (error) {
      return error;
    }
  };
//with module.exports, we are returning an object because we will return more than one function. Therefore, we will store it in an object.
module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong};
