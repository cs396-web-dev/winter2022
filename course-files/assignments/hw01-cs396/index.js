"use strict";

require("dotenv").config();
const env = "" + process.env.NODE_ENV;
console.log("ENV: " + env);

const express = require("express");
const app = express();

const bodyConfig = {
    limit: "10mb",
    extended: true
};
app.use(express.urlencoded(bodyConfig));
app.use(express.json(bodyConfig));

const middleware = require("./config/middleware");
app.use(middleware.cors);

const routes = require("./src/routes");
const testRoutes = require("./src/routes_test");

app.use("", routes);
app.use("/test", testRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT);
console.log("Application listening on PORT: " + PORT);
console.log("http://localhost:" + PORT);

module.exports = app;
