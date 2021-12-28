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
    }
    
});

DoctorSchema.statics.create = function(obj) {
    const Doctor = mongoose.model("Doctor", DoctorSchema);
    const doctor = new Doctor();
    doctor.name = obj.name;
    doctor.seasons = obj.seasons;
    doctor.doc_id = obj.doc_id;
    return doctor;
}

module.exports = mongoose.model("Doctor", DoctorSchema);
