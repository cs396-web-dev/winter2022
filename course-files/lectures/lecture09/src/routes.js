"use strict";

const express = require("express");
const router = express.Router();
const utils = require("../config/utilities");
const Artist = require("./schema/Artist");
const Track = require("./schema/Track");
const { 
    deleteArtists, deleteTracks, insertArtists, insertTracks 
} = utils;


router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

///////////////////////////////
// Your code below this line //
///////////////////////////////

router.route("/artists")
    .get((_req, res) => {
        console.log("GET /artists");
        Artist.find({})
            .then(artists => {
                res.status(200).send(artists);
            })
    })
    .post((req, res) => {
        console.log("POST /artists");
        if(!req.body.name || !req.body.genres) {
            res.status(400).send({ message: 'name and genres required'});
            return;
        }
        Artist.create(req.body)
            .save()
            .then(artist => {
                res.status(201).send(artist);
            });
        
    });

router.route("/artists/:id")
    .get((req, res) => {
        console.log(`GET /artists/${req.params.id}`);
        Artist.findById(req.params.id)
            .then(data => {
                if (data) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send({
                        message: `Artist with id "${req.params.id}" does not exist.`
                    });
                }
            })
            .catch(err => {
                res.status(404).send({
                    message: `Artist with id "${req.params.id}" does not exist.`,
                    err: err
                });
            });
    })
    .patch((req, res) => {
        console.log(`PATCH /artists/${req.params.id}`);
        Artist.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            { new: true }
        )
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: `Artist with id "${req.params.id}" does not exist.`
            });
        });
    })
    .delete((req, res) => {
        console.log(`DELETE /artists/${req.params.id}`);
        Artist.findOneAndDelete(
            { _id: req.params.id }
        )
        .then(data => {
            if (data) {
                res.status(200).send(null);
            } else {
                res.status(404).send({
                    message: `Artist with id "${req.params.id}" does not exist.`
                });
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
    });

router.route("/artists/:id/tracks")
    .get((req, res) => {
        console.log(`GET /artists/${req.params.id}/tracks`);
        res.status(501).send();
    })

router.route("/tracks")
    .get((_req, res) => {
        console.log("GET /tracks");
        Track.find({})
            .then(tracks => {
                res.status(200).send(tracks);
            })
    })
    .post((req, res) => {
        console.log("POST /tracks");
        if(!req.body.name || !req.body.artist_id) {
            res.status(400).send({ message: 'name and artist_id required'});
            return;
        }
        Track.create(req.body)
            .save()
            .then(track => {
                res.status(201).send(track);
            });
    });

router.route("/tracks/:id")
    .get((req, res) => {
        console.log(`GET /tracks/${req.params.id}`);
        Track.findById(req.params.id)
            .then(data => {
                if (data) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send({
                        message: `Track with id "${req.params.id}" does not exist.`
                    });
                }
            })
            .catch(err => {
                res.status(404).send({
                    message: `Track with id "${req.params.id}" does not exist.`,
                    err: err
                });
            });
    })
    .patch((req, res) => {
        console.log(`PATCH /tracks/${req.params.id}`);
        Track.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            { new: true }
        )
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: `Track with id "${req.params.id}" does not exist.`
            });
        });
    })
    .delete((req, res) => {
        console.log(`DELETE /tracks/${req.params.id}`);
        Track.findOneAndDelete(
            { _id: req.params.id }
        )
        .then(data => {
            if (data) {
                res.status(200).send(null);
            } else {
                res.status(404).send({
                    message: `Track with id "${req.params.id}" does not exist.`
                });
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
    });

router.route("/search")
    .get((req, res) => {
        console.log(`GET /search`);
        console.log(req.query);

        const term = req.query.term;
        const type = req.query.type;

        // validation code:
        if (!term) {
            res.status(400).send({
                message: `"term" query parameter is required. Valid search string: /search?term=beyonce&type=track`
            });
            return; // don't forget the return to exit early!
        }
        if (!type || !['artist', 'track'].includes(type.toLowerCase())) {
            res.status(400).send({
                message: `"type" query parameter is required and must either be "artist" or "track". Valid search string: /search?term=beyonce&type=track`
            });
            return; // don't forget the return to exit early!
        }

        if (type.toLowerCase() === 'artist') {
            Artist.find({ 'name': { '$regex': term, "$options": "i" }})
                .then(artists => {
                    res.status(200).send(artists);
                })
        } else {
            Track.find({ 'name': { "$regex": term, "$options": "i" }})
                .then(tracks => {
                    res.status(200).send(tracks);
                })
        }
    })











///////////////////////////////
// Your code above this line //
///////////////////////////////
router.route("/reset")
    .get((_req, res) => {
        deleteArtists()
            .then(results => {
                console.log('All artists have been deleted from the database.');
            })
            .then(deleteTracks)
            .then(results => {
                console.log('All tracks have been deleted from the database.');
            })
            .then(insertArtists)
            .then(results => {
                console.log(results.length + ' artists have been inserted into the database.');
            })
            .then(insertTracks)
            .then(results => {
                console.log(results.length + ' tracks have been inserted into the database.');
                res.status(200).send({
                    message: "Data has been reset."
                });
            });
    });
module.exports = router;