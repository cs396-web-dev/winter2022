"use strict";

const express = require("express");
const router = express.Router();
const utils = require("../config/utilities");
const User = require("./schema/User");
const Task = require("./schema/Task");
const middleware = require("../src/middleware");

let refreshTokens = [];

// new:
require("dotenv").config()
const jwt = require("jsonwebtoken");

const { 
    deleteUsers, deleteTasks, insertUsers, insertTasks 
} = utils;


router.route("/")
    .get((req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

///////////////////////////////
// Your code below this line //
///////////////////////////////

const generateAccessToken = user => {
    console.log('About to serialize...', user);
    
    return jwt.sign(
        user, 
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '15s'
        });
    // return jwt.sign(
    //     JSON.stringify(user), 
    //     process.env.ACCESS_TOKEN_SECRET
    // );
};

const generateRefreshToken = user => {
    const token = jwt.sign(
        user, 
        process.env.REFRESH_TOKEN_SECRET
    );
    refreshTokens.push(token);
    return token;
}

router.route("/login")
    .post(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const userObject = await User.findOne({"username": username });
        // console.log(userObject);
        const user = {
            _id: userObject._id,
            username: userObject.username
        }
        
        if (!user || password != userObject.password) {
            res.status(400).send({
                "message": "Bad Request."
            });
            return;
        }

        res.status(200).send({
            accessToken: generateAccessToken(user),
            refreshToken: generateRefreshToken(user)
        });
    });

router.route("/logout")
    .delete((req, res) => {
        // in JWTs, you don't really log out. You have to wait for the access
        // token to expire and you can remove the ability for the user use a
        // refresh token (by removing it from the authorized list of tokens):
        const refreshToken = req.body.token;

        // manually delete the refresh token from memory.
        refreshTokens = refreshTokens.filter(token => token !== refreshToken)

        res.status(200).send({
            message: "successfully logged out"
        });
    });

router.route("/token")
    .post((req, res) => {
        const refreshToken = req.body.token;
        if (!refreshToken) {
            res.status(401).send({
                "message": "No token found."
            });
            return;
        }
        if (!refreshTokens.includes(refreshToken)) {
            // note that if server starts over, the refresh tokens also go away!
            res.status(403).send({
                "message": "No access."
            });
            return;
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                // invalid token. you don't have access:
                res.status(403).send({
                    "message": "No access."
                });
                return;
            }
            const accessToken = generateAccessToken({
                username: user.username,
                _id: user._id
            })
            res.status(200).send({
                accessToken: accessToken,
                refreshToken: refreshToken // using same refresh token as before:
            });
        });
        res.status(200).send({
            accessToken: generateAccessToken(user),
            refreshToken: generateRefreshToken(user)
        });
    });

router.route("/tasks")
    .get(middleware.authenticateToken, (req, res) => {
        // implemented for you:
        console.log("GET /tasks");
        Task.find({"user_id": req.user._id })
            .then(tasks => {
                res.status(200).send(tasks);
            })
    })


router.route("/users")
    .get(middleware.authenticateToken, (req, res) => {
        console.log("GET /users");
        // implemented for you:
        User.find({})
            .then(users => {
                res.status(200).send(users);
            })
    })

router.route("/profile")
    .get(middleware.authenticateToken, (req, res) => {
        console.log(`GET /profile`);
        User.findById(req.user._id)
            .then(user => {
                // send an HTML page
                res.status(200).send(user);
            })
    })
    .patch((req, res) => {
        console.log(`PATCH /profile`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /profile`);
        res.status(501).send();
    });



///////////////////////////////
// Your code above this line //
///////////////////////////////
router.route("/reset")
    .get((req, res) => {
        deleteTasks()
            .then(results => {
                console.log('All tasks have been deleted from the database.');
            })
            .then(deleteUsers)
            .then(results => {
                console.log('All users have been deleted from the database.');
            })
            .then(insertUsers)
            .then(results => {
                console.log(results.length + ' users have been inserted into the database.');
            })
            .then(insertTasks)
            .then(results => {
                console.log(results.length + ' tasks have been inserted into the database.');
                res.status(200).send({
                    message: "Data has been reset."
                });
            });
    });
module.exports = router;