const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./router/users.router");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});
// users router
app.use("/users", usersRouter);
// route not found
app.use((req, res, next) => {
  res.status(404).send(`<h1> 404 page not found </h1>`);
});
// server error
app.use((err, req, res, next) => {
  res.status(500).send(`<h1> 500 server is Broke </h1>`);
});
module.exports = app;
