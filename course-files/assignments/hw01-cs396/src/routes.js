"use strict";

const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------

const data = require("../config/data.json");

router.route("/doctors")
    .get((req, res) => {
        console.log("GET /doctors");
        res.status(200).send(data.doctors);
    })
    .post((req, res) => {
        console.log("POST /doctors");
        res.status(501).send();
    });

router.route("/doctors/:id")
    .get((req, res) => {
        console.log(`GET /doctors/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /doctors/${req.params.id}`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /doctors/${req.params.id}`);
        res.status(501).send();
    });

router.route("/doctors/:id/companions")
    .get((req, res) => {
        console.log(`GET /doctors/${req.params.id}/companions`);
        res.status(501).send();
    });

router.route("/doctors/:id/goodparent")
    .get((req, res) => {
        console.log("GET /doctors/:id/goodparent");
        res.status(501).send();
    });

router.route("/companions")
    .get((req, res) => {
        console.log("GET /companions");
        res.status(200).send(data.companions);
    })
    .post((req, res) => {
        console.log("POST /companions");
        res.status(501).send();
    });

router.route("/companions/crossover")
    .get((req, res) => {
        console.log(`GET /companions/crossover`);
        res.status(501).send();
    });

router.route("/companions/:id")
    .get((req, res) => {
        console.log(`GET /companions/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /companions/${req.params.id}`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /companions/${req.params.id}`);
        res.status(501).send();
    });

router.route("/companions/:id/doctors")
    .get((req, res) => {
        console.log(`GET /companions/${req.params.id}/doctors`);
        res.status(501).send();
    });

router.route("/companions/:id/friends")
    .get((req, res) => {
        console.log(`GET /companions/${req.params.id}/friends`);
        res.status(501).send();
    });

//////////////////
// EXTRA CREDIT //
//////////////////
router.route("/doctors/favorites")
    .get((req, res) => {
        console.log(`GET /doctors/favorites`);
        res.status(501).send();
    })
    .post((req, res) => {
        console.log(`POST /doctors/favorites`);
        res.status(501).send();
    });

router.route("/doctors/favorites/:id")
    .delete((req, res) => {
        console.log(`DELETE /doctors/favorites/:id`);
        res.status(501).send();
    });

router.route("/companions/favorites")
    .get((req, res) => {
        console.log(`GET /companions/favorites`);
        res.status(501).send();
    })
    .post((req, res) => {
        console.log(`POST /companions/favorites`);
        res.status(501).send();
    })

router.route("/companions/favorites/:id")
    .delete((req, res) => {
        console.log(`DELETE /companions/favorites/:id`);
        res.status(501).send();
    });

module.exports = router;
