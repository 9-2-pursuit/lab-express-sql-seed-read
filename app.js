//app.js!
const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songController.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/songs", songController)


app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

// app.get("*", function (req, res){
//   res.send('what???', 404);
// });



app.get("*", (req, res) => {
  res.redirect("/")
})


module.exports = app;