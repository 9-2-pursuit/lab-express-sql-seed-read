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

//with module.exports, we are returning an object because we will return more than one function. Therefore, we will store it in an object.
module.exports = {getAllSongs};