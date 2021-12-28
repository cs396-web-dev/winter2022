"use strict";

const express = require("express");
const router = express.Router();
const User = require("./schema/User");
const Task = require("./schema/Task");

let refreshTokens = [];

// new:
require("dotenv").config()
const jwt = require("jsonwebtoken");


///////////////////////////////
// Your code below this line //
///////////////////////////////


// Part 1
router.route("/login")
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        // Query for user and if authenticated, return jwt
        res.status(501).send({
            message: "Not implemented"
        });
    });


// Part 2
router.route("/tasks")
    .get((req, res) => {
        // implemented for you:
        console.log("GET /tasks");
        Task.find({})
            .then(tasks => {
                res.status(200).send(tasks);
            })
    })

router.route("/token")
    .post((req, res) => {
        const refreshToken = req.body.token;
        res.status(501).send({
            message: "Not implemented"
        });
    });


router.route("/logout")
    .delete((req, res) => {
        // in JWTs, you don't really log out. You have to wait for the access
        // token to expire and you can remove the ability for the user use a
        // refresh token (by removing it from the authorized list of tokens):
        const refreshToken = req.body.token;
        res.status(501).send({
            message: "Not implemented"
        });
    });



module.exports = router;