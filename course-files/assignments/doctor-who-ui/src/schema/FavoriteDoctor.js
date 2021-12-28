"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Doctor = require("./Doctor");

const FavoriteDoctorSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId, 
        ref: "Doctor"
    }
});

FavoriteDoctorSchema.statics.getFavorite = function (doctor_id) {
    const FavoriteDoctor = mongoose.model("FavoriteDoctor", FavoriteDoctorSchema);
    return FavoriteDoctor.findOne({"doctor": doctor_id })
};

FavoriteDoctorSchema.statics.getDoctor = function (favorite) {
    return Doctor.findOne({"_id": favorite.doctor})
};

FavoriteDoctorSchema.statics.getDoctors = function (favorites) {
    // get Doctor objects from favorites:
    const docIds = favorites.map(fav => fav.doctor);
    return Doctor.find({"_id": {"$in": docIds}})
};

FavoriteDoctorSchema.statics.create = function(docId) {
    // console.log(obj.doctors);
    const FavoriteDoctor = mongoose.model("FavoriteDoctor", FavoriteDoctorSchema);
    const favoriteDoc = new FavoriteDoctor();
    favoriteDoc.doctor = docId;
    return favoriteDoc;
}

module.exports = mongoose.model("FavoriteDoctor", FavoriteDoctorSchema);
