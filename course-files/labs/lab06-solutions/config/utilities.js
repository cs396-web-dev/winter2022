const mongoose = require("mongoose");
require("dotenv").config();

User = require("../src/schema/User");
Task = require("../src/schema/Task");
const data = require("./data.json")
const env = process.env;

const config = {
    database: `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/lab06?retryWrites=true&w=majority`,
    mongoConfig: {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

// console.log('Here are your environment variables...');
// console.log('DB_USERNAME:', env.DB_USERNAME);
// console.log('DB_PASSWORD:', env.DB_PASSWORD);
// console.log('DB_HOST:', env.DB_HOST);

const connectToDB = new Promise((resolve, reject) => {
    mongoose.connect(config.database, config.mongoConfig, err => {
        if (err) {
            console.log("Could not connect to database." + err);
            if(reject) {
                reject(err);
            }
        } else {
            resolve('Connection successful');
        }
    });
});

const disconnectFromDB = () => {
    return mongoose.disconnect();
};

const deleteTasks = () => {
    // returns a promise:
    return Task.deleteMany({});
};

const deleteUsers = () => {
    // returns a promise:
    return User.deleteMany({});
};

const insertTasks = () => {
    // returns a promise:
    return Task.insertMany(data.tasks);
};

const insertUsers = () => {
    // returns a promise:
    return User.insertMany(data.users);
};

const populateDB = () => {
    connectToDB
        .then(deleteTasks)
        .then(deleteUsers)
        .then(insertUsers)
        .then(results => {
            console.log('Users have been inserted into the database:');
            console.log(results);
        })
        .then(insertTasks)
        .then(results => {
            console.log('Tasks have been inserted into the database:');
            console.log(results);
        })
        .then(disconnectFromDB);
};

module.exports = {
    "populateDB": populateDB,
    "connectToDB": connectToDB,
    "deleteUsers": deleteUsers, 
    "deleteTasks": deleteTasks, 
    "insertUsers": insertUsers, 
    "insertTasks": insertTasks
};