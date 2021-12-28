// note that the import paths are different because
// these answer files are in a nested "answers folder"
Artist = require("../schema/Artist");
utils = require("../config/utilities");

const { connectToDB, disconnectFromDB } = utils;

const getAllPopArtists = () => {
    return Artist.find({ genres: { $in: "pop" } });
};

connectToDB
    .then(getAllPopArtists) // pass in some function that returns a promise
    .then(results => {
        // do something with the results:
        console.log('results from your query:');
        console.log(results);
    })
    .catch(err => {
        console.log("This block runs if there's an error:")
        console.log(err);
    })
    .then(disconnectFromDB);