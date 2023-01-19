const checkSongId = (req, res, next) => {
  console.log("checking ID...");
  const { id } = req.params;
  if (id) {
    console.log("ID is ok");
    next();
  } else {
    res.status(404).json({ error: "Invalid id" });
  }
};

const checkName = (req, res, next) => {
  console.log("checking NAME...");
  if (req.body.name) {
    console.log("NAME is ok");
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBool = (req, res, next) => {
  console.log("checking BOOLEAN");
  const { is_favorite } = req.body;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == undefined
  ) {
    console.log("BOOLEAN is ok");
    next();
  } else {
    res.status(400).json({ error: "is_favortie must be a boolean value" });
  }
};

const checkArtistName = (req, res, next) => {
  console.log("checking ARTIST NAME...");
  //if there is a artist in the user's req body after the post request is made. we will continue (next())
  if (req.body.artist) {
    console.log("ARTIST is ok");
    //next will validate the request and continue proceedings of the request.
    next();
  } else {
    //res.json must be in json format, enclosed with {object}
    res.status(400).json({ error: "artist name missing" });
  }
};
//exprt {objects} containing middleware functions
module.exports = { checkSongId, checkName, checkBool, checkArtistName };
