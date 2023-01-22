const checkSongId = (req, res, next) => {
  const { id } = req.params;
  if (id) {
    console.log("ID is ok");
    next();
  } else {
    res.status(404).json({ error: "Invalid id" });
  }
  console.log("checking ID...");
};

const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log("NAME is ok");
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
  console.log("checking NAME...");
};

const checkBool = (req, res, next) => {
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
  console.log("checking BOOLEAN");
};

const checkArtistName = (req, res, next) => {
  //if there is a artist in the user's req body after the post request is made. we will continue (next())
  if (req.body.artist) {
    console.log("ARTIST is ok");
    //next will validate the request and continue proceedings of the request.
    next();
  } else {
    //res.json must be in json format, enclosed with {object}
    res.status(400).json({ error: "artist name missing" });
  }
  console.log("checking ARTIST NAME...");
};

const checkAlbum = (req, res, next) => {
  if (req.body.album) {
    console.log("ALBUM is ok");
    next();
  } else {
    res.status(400).json({ error: "album name is missing" });
  }
  console.log("checking ALBUM...");
};

const checkSongTime = (req, res, next) => {
  if (req.body.time) {
    console.log("SONG TIME is ok");
  } else {
    res.status(400).json({ error: "song time is missing" });
  }
  console.log("CHECKING SONG TIME...");
};


//exprt {objects} containing middleware functions
module.exports = {
  checkSongId,
  checkName,
  checkBool,
  checkArtistName,
  checkAlbum,
  checkSongTime,
  
};
