"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanionSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    character: {
        type: Schema.Types.String,
        required: true
    },
    doctors: [{
        type: Schema.Types.ObjectId, 
        ref: "Doctor"
    }],
    seasons: [Schema.Types.Number],
    alive: {
        type: Schema.Types.Boolean,
        required: true
    },
    image_url: {
        type: Schema.Types.String
    },
    ordering: {
        type: Schema.Types.Number
    }
});

CompanionSchema.statics.create = function(obj) {
    const Companion = mongoose.model("Companion", CompanionSchema);
    const companion = new Companion();
    companion.alive = obj.alive;
    companion.character = obj.character;
    companion.doctors = obj.doctors; //.map(doctor => doctor._id);
    companion.old_doctor_ids = obj.old_doctor_ids;
    companion.name = obj.name;
    companion.seasons = obj.seasons;
    companion.image_url = obj.image_url;
    companion.ordering = obj.ordering;
    return companion;
}

module.exports = mongoose.model("Companion", CompanionSchema);
