const mongoose = require("mongoose");
// const schemas = require("../schema/schemas");
Artist = require("../src/schema/Artist");
Track = require("../src/schema/Track");
const data = require("./data.json")
// const { Artist, Track } = schemas;
const dotenv = require("dotenv").config();
const env = process.env;

const config = {
    database: `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/lab03?retryWrites=true&w=majority`,
    mongoConfig: {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

// console.log('Here are your environment variables...');
// console.log('DB_USERNAME:', env.DB_USERNAME);
// console.log('DB_PASSWORD:', env.DB_PASSWORD);
// console.log('DB_HOST:', env.DB_HOST);

const connectToDB = new Promise((resolve, reject) => {
    mongoose.connect(config.database, config.mongoConfig, err => {
        if (err) {
            console.log("Could not connect to database." + err);
            if(reject) {
                reject(err);
            }
        } else {
            resolve('Connection successful');
        }
    });
});

const disconnectFromDB = () => {
    return mongoose.disconnect();
};

const deleteArtists = () => {
    // returns a promise:
    return Artist.deleteMany({});
};

const deleteTracks = () => {
    // returns a promise:
    return Track.deleteMany({});
};

const insertArtists = () => {
    // returns a promise:
    return Artist.insertMany(data.artists);
};

const insertTracks = () => {
    // returns a promise:
    return Track.insertMany(data.tracks);
};

const populateDB = () => {
    connectToDB
        .then(deleteArtists)
        .then(deleteTracks)
        .then(insertArtists)
        .then(results => {
            console.log('Artists have been inserted into the database:');
            // console.log('The following records have been generated:');
            console.log(results);
        })
        .then(insertTracks)
        .then(results => {
            console.log('Tracks have been inserted into the database:');
            // console.log('The following records have been generated:');
            console.log(results);
        })
        .then(disconnectFromDB);
};

module.exports = {
    "populateDB": populateDB,
    "connectToDB": connectToDB,
    "deleteArtists": deleteArtists,
    "deleteTracks": deleteTracks,
    "insertArtists": insertArtists,
    "insertTracks": insertTracks,
    "disconnectFromDB": disconnectFromDB
};