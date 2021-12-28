"use strict";

const express = require("express");
const app = express();
const utils = require("./config/utilities");
const { connectToDB } = utils;

const bodyConfig = {
    limit: "10mb",
    extended: true
};
app.use(express.urlencoded(bodyConfig));
app.use(express.json(bodyConfig));

// New: telling Express that we've created a
// directory called "public" that will be using
// static resources:
app.use(express.static('public'))

const middleware = require("./config/middleware");
app.use(middleware.cors);


connectToDB.then(message => {
    console.log(message);
});

const routes = require("./src/routes");
app.use("", routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT);
console.log("Application listening on PORT: " + PORT);
console.log("http://localhost:" + PORT);

module.exports = app;
