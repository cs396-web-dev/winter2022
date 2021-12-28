"use strict";

const Companion = require("../../src/schema/Companion");
const Doctor = require("../../src/schema/Doctor");
const FavoriteDoctor = require("../../src/schema/FavoriteDoctor");
const FavoriteCompanion = require("../../src/schema/FavoriteCompanion");
const data = require("../data.json");
require("dotenv").config();

const env = "" + process.env.NODE_ENV;

const configObj = require("../config");
const config = configObj[env || "development"];
const mongoose = require("mongoose");


const populate = (callback) => {
    // console.log("Trying to connect to database...");
    mongoose.connect(config.database, config.mongoConfig, err => {
        if (err) {
            console.log("Could not connect to database.");
        }
        // console.log("Clearing database...");
        const schemas = [ Companion, Doctor, FavoriteCompanion, FavoriteDoctor ];
        Promise
            .all(
                // first delete any data that currently exists:
                schemas.map(schema => schema.deleteMany())
            )
            .then(() => {
                return Doctor.insertMany(data.doctors);
            })
            .then(() => {
                return Companion.insertMany(data.companions);
            })
            .then(() => {
                return FavoriteDoctor.insertMany(data.favoriteDoctors);
            })
            .then(() => {
                return FavoriteCompanion.insertMany(data.favoriteCompanions);
            })
            .catch(err => {
                console.log(err);
                process.exit(1);
            })
            .finally(() => {
                // console.log("Database populated successfully.");
                if (callback) {
                    callback();
                } else {
                    console.log('Exiting');
                    process.exit(0);
                }
            });
    });
};

module.exports = populate;
