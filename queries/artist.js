const artistController = require("../controllers/artistController.js")
const db = require("../db/dbConfig.js");


// const getOneArtist = async () => {
//     try {
//         const artist = a
//     }
// }

// const getArtist = async (songsId) => {
//     try {
//         const oneArtist = await db.one("SELECT  * FROM artist WHERE songs_id=$1",
//         [songsId]);
//         return oneArtist;
//     }catch (error) {
//         return error;
//     }
// };


const one = async (songsId) => {
    //when we get all reviews, we want to accept a bookmark_id ,camelCase <!
    try {
      const b = await db.any("SELECT  * FROM artist WHERE songs_id=$1",
        [songsId]
      );
      return b;
    } catch (error) {
      return error;
    }
  };
  





module.exports = { one};