const db = require("../db/dbConfig.js");

const getAllBookmarks = async () => {
  try {
    const allSongs = await db.any("Select * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllBookmarks };
