const db = require("../db/dbConfig");

async function getAllSongs() {
  try {
    const allSongs = await db.any("SELECT * FROM tuner");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllSongs };
