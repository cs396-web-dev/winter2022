"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Companion = require("./Companion");

const FavoriteCompanionSchema = new Schema({
    companion: {
        type: Schema.Types.ObjectId, 
        ref: "Companion"
    }
});

FavoriteCompanionSchema.statics.getFavorite = function (companion_id) {
    const FavoriteCompanion = mongoose.model("FavoriteCompanion", FavoriteCompanionSchema);
    return FavoriteCompanion.findOne({"companion": companion_id })
};

FavoriteCompanionSchema.statics.getCompanion = function (favorite) {
    return Companion.findOne({"_id": favorite.companion })
};

FavoriteCompanionSchema.statics.getCompanions = function (favorites) {
    // get Companion objects from favorites:
    const companionIds = favorites.map(fav => fav.companion);
    return Companion.find({"_id": {"$in": companionIds}})
};

FavoriteCompanionSchema.statics.create = function(companion_id) {
    const favoriteCompanion = new mongoose.model("FavoriteCompanion", FavoriteCompanionSchema)();

    favoriteCompanion.companion = companion_id;
    return favoriteCompanion;
}

module.exports = mongoose.model("FavoriteCompanion", FavoriteCompanionSchema);
