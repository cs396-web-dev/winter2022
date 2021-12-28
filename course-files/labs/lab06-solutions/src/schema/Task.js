"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: { type: Schema.Types.String, required: true },
    order: { type: Schema.Types.Number, required: true },
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    // username: { type: Schema.Types.String, required: true },
    done: { type: Schema.Types.Boolean, required: true }
    // "order": 3,
    // "username": "lewis_schaden",
    // "task": "Sit commodi voluptas quidem culpa. Ipsa nesciunt voluptas est voluptatem id deleniti. Facere ea alias aliquam est cupiditate qui sapiente.",
    // "done": false
});


TaskSchema.statics.getTasksByUser = function(user_id) {
    // returns a promise:
    return mongoose.model('Task').find({"user_id": user_id});
};

TaskSchema.statics.create = (data) => {
    return new Task(data);
};

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;