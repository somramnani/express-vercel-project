const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => res.json({ message: "hello" }));

app.get("/super-hero-api/:data", async (req, res) => {
  // res.send('This has CORS enabled 🎈')

  await axios({
    method: "get",
    url: `https://superheroapi.com/api/10161414156754853/search/${req.params.data}`,
  })
    .then(function (response) {
      return res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
