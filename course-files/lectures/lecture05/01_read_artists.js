Artist = require("./schema/Artist");
utils = require("./config/utilities");

const { connectToDB, disconnectFromDB } = utils;

const getAllArtists = () => {
    // your code here:
    return null;
};

connectToDB
    .then(getAllArtists) // pass in some function that returns a promise
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