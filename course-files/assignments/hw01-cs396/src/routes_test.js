"use strict";

const express = require("express");
const router = express.Router();
const data = require("../config/data.json");
const dataClone = JSON.parse(JSON.stringify(data));


router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "Test route works."
        });
    });

router.route("/reset")
    .get((_req, res) => {
        console.log("GET /test/reset");
        data.doctors = JSON.parse(JSON.stringify(dataClone.doctors));
        data.companions = JSON.parse(JSON.stringify(dataClone.companions));
        res.status(200).send({
            message: "Data has been reset."
        });
    });

router.route("/doctors")
    .get((_req, res) => {
        console.log("GET /test/doctors");
        res.status(200).send(data.doctors);
    });

router.route("/companions")
    .get((_req, res) => {
        console.log("GET /test/companions");
        res.status(200).send(data.companions);
    });


module.exports = router;