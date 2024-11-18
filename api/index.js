const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL in production
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
};

// app.options("*", cors(corsOptions)); // Preflight requests for all routes

app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => res.json({ message: "hello" }));

app.get("/super-hero-api/:data", async (req, res) => {
  // res.send('This has CORS enabled 🎈')

  await axios({
    method: "get",
    url: `https://superheroapi.com/api/88fa1b97046d4d9666b719510bbb8257/search/${req.params.data}`,
  })
    .then(function (response) {
      console.log(response.data);
      return res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
