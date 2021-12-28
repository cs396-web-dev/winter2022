Artist = require("./schema/Artist");
Track = require("./schema/Track");
utils = require("./config/utilities");

const { connectToDB, disconnectFromDB } = utils;

const createNewArtist = (data) => {
    // returns a promise-like object that resolves to a single document
    const testData = {
        "name": "Beyonce 1", "genres": [ "dance pop", "pop", "post-teen pop", "r&b"]
    };
    return Artist.create(testData).save();
};

const getArtistById = () => {
    // returns a promise-like object that resolves to a single document
    const id = "6073a9adc21f9ed50ba3044c" // some valid id (the Beatles)
    return Artist.findById(id);
}

const deleteArtistById = () => {
    // returns a promise-like object that resolves to a single document
    const id = "6073a9adc21f9ed50ba3044c" // some valid id
    return Artist.findOneAndDelete({ _id: id });
}

const deleteTracksByArtist = (artist) => {
    console.log('deleteTracksByArtist');
    if (artist) {
        return artist.deleteTracks();
    } else {
        return "Artist does not exist";
    }
}

const updateArtist = () => {
    const id = "6073a9adc21f9ed50ba3044c" // some valid id (the Beatles)
    return Artist.findOneAndUpdate(
        { _id: id }, 
        {
            "genres": [ "metal", "rock"]
        },
        { new: true } // means you want to return the updated artist
    )
}

const findArtistByName = () => {
    // returns a promise-like object resolves to a list of documents
    return Artist.findOne({ name: "Beyonce" });
};

const findAllArtists = () => {
    // returns a promise-like object that resolves to a list of documents
    return Artist.find({});
};

const findAllPopArtists = () => {
    // returns a promise-like object that resolves to a list of documents
    return Artist.find({ genres: { $in: "pop" } });
};



connectToDB
    .then(updateArtist) // swap out this function with whatever function you want to test:
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

    

