const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => res.json({ message: "hello" }));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
