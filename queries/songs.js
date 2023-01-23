const db = require("../db/dbConfig");

async function getAllSongs() {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
}

async function getOneSong(id) {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    console.log(error);
  }
}

async function createSong(song) {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite)  VALUES($1,$2,$3,$4,$5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    console.log(error);
  }
}

async function deleteSong(id) {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    console.log(deletedSong);
    return deletedSong;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateSong(id, song) {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
};
