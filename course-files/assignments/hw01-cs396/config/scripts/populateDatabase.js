"use strict";

const Companion = require("../../src/schema/Companion");
const Doctor = require("../../src/schema/Doctor");

const data = require("../data.json");

require("dotenv").config();
const env = "" + process.env.NODE_ENV;

const config = require("../config")[env || "development"];
const mongoose = require("mongoose");
console.log("Trying to connect to database...");
mongoose.connect(config.database, config.mongoConfig, err => {
    if (err) {
        console.log("Could not connect to database.");
    } else {
        console.log(`Connected to ${process.env.DB_NAME}.`);
    }
    console.log("Clearing database...");
    Promise.all([
        Companion,
        Doctor
    ].map(schema => schema.deleteMany()))
        .then(() => {
            console.log("Database cleared.");
            console.log("Populating database...");
            return Promise.all(
                data.doctors.map(obj => Doctor.create(obj).save())
            );
        })
        .then(() => Promise.all(
            data.companions.map(obj => Companion.create(obj).save())
        ))
        .catch(err => {
            console.log(err);
            process.exit(1);
        })
        .finally(() => {
            console.log("Database populated successfully.");
            process.exit(0);
        });
});
