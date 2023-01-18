const db = require("../db/dbConfig");

async function getAllSongs() {
  try {
    const allSongs = await db.any("SELECT * FROM tuner");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
}

async function getOneSong(id) {
  try {
    const oneSong = await db.one("SELECT * FROM tuner WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllSongs, getOneSong };
