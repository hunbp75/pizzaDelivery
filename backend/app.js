const path = require("path");
const fs = require("fs/promises");

const express = require("express");
const { application } = require("express");

const app = express();

app.use(express.json());

app.get("/api/booking", (req, res) => {
  const booking = path.join(__dirname, "./data/pizza.json");
  fs.readFile(booking, { encoding: "utf-8" }).then((data) => {
    res.set("Content-Type", "application.json").end(data);
  });
});

app.post("/api/booking", (req, res) => {
  const booking = path.join(__dirname, "./data/pizza.json");
  fs.readFile(booking, { encoding: "utf-8" })
    .then((data) => {
      const parsed = JSON.parse(data);
      parsed.push(req.body);
      return fs.writeFile(booking, JSON.stringify(parsed));
    })
    .then(() => {
      res.status(201).end();
    });
});

module.exports = app;
