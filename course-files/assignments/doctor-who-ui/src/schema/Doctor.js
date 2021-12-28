"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    seasons: {
        type: [Schema.Types.Number],
        required: true
    },
    doc_id: {
        type: Schema.Types.String
    },
    image_url: {
        type: Schema.Types.String
    },
    ordering: {
        type: Schema.Types.Number
    }
    
});

DoctorSchema.statics.create = function(obj) {
    const Doctor = mongoose.model("Doctor", DoctorSchema);
    const doctor = new Doctor();
    doctor.name = obj.name;
    doctor.seasons = obj.seasons;
    doctor.doc_id = obj.doc_id;
    doctor.image_url = obj.image_url;
    doctor.ordering = obj.ordering;
    return doctor;
}

module.exports = mongoose.model("Doctor", DoctorSchema);
