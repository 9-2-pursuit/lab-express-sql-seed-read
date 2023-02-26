// Check if there is a name and then send back an appropriate status code and a more human-readable error.

const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};
//Check artist
const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Artist is required!" });
  }
};
//check if the value of req.body.is_favorite is a boolean value

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};


module.exports = { checkName, checkArtist, checkBoolean,};
