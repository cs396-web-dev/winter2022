Artist = require("../schema/Artist");
utils = require("../config/utilities");

const { connectToDB, disconnectFromDB } = utils;

const createNewArtist = (data) => {
    // returns a promise that resolves to a single document
    const artistJSON = {
        "name": "Rihanna", "genres": [ "barbadian pop", "dance pop", "pop", "post-teen pop", "urban contemporary" ]
    };
    return Artist.create(artistJSON).save();
};

connectToDB
    .then(createNewArtist) // pass in some function that returns a promise
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