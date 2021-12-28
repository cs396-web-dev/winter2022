"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    genres: { type: [Schema.Types.String], required: true },
    spotify_id: { type: Schema.Types.String },
    image_url: { type: Schema.Types.String }
});

ArtistSchema.statics.create = (data) => {
    return new Artist(data);
};
  
ArtistSchema.methods.deleteTracks = function () {
    console.log('remove all tracks associated with the artist:', this);
    return Track.deleteMany({ artist_id: this._id });
};

const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;