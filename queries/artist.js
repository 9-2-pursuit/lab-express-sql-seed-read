const artistController = require("../controllers/artistController.js");
const db = require("../db/dbConfig.js");

const getAllArtists = async (songId) => {
  try {
    const allAnswers = await db.any("SELECT *  FROM artist WHERE songs_id=$1", [
      songId]);
    return allAnswers;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllArtists };
