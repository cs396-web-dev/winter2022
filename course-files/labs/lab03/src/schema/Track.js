"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    artist_id: {
        type: Schema.Types.ObjectId, 
        ref: "Artist"
    },
    spotify_id: { type: Schema.Types.String },
    preview_url: { type: Schema.Types.String }
});


TrackSchema.methods.getArtist = function() {
    // returns a promise:
    return mongoose.model('Artist').findById(this.artist_id);
};

TrackSchema.statics.create = (data) => {
    const a = new Track(data);
    return a;
};

const Track = mongoose.model("Track", TrackSchema);

module.exports = Track;