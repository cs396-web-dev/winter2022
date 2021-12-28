"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: { type: Schema.Types.String },
    last_name: { type: Schema.Types.String },
    username: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true }

});

UserSchema.statics.create = (data) => {
    return new User(data);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;