Artist = require("../schema/Artist");
utils = require("../config/utilities");

const { connectToDB, disconnectFromDB } = utils;

const deleteArtist = () => {
    const id = "6073a9adc21f9ed50ba3044c" // some valid id
    return Artist.findOneAndDelete({ _id: id });
};

connectToDB
    .then(deleteArtist) // pass in some function that returns a promise
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