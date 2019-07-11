var express = require("express");
var app = express();
var router = express.Router();

var index = require("./routes/index");
var homeRoute = require("./routes/home");

app.use("/", index);
app.use("/home", homeRoute);

module.exports = app;