"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: { type: Schema.Types.String },
    last_name: { type: Schema.Types.String },
    username: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true }

    // {
    //     "first_name": "Daija",
    //     "last_name": "Walter",
    //     "username": "daija_walter",
    //     "email": "daija_walter@gmail.com",
    //     "password": "home"
    // }
});

UserSchema.statics.create = (data) => {
    return new User(data);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;