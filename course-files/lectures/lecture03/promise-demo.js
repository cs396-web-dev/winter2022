const axios = require("axios");

const callback = response => {
    console.log();
    console.log("Response from the server  (should print second)");
    console.log(response.data)
};

const handleError = err => {
    console.log(err);
};

// query a server via a promise:
axios.get(`https://cs396-hw1.herokuapp.com/doctors`)
    .then(callback)
    .catch(handleError);

// regular execution:
console.log();
console.log('Hello world! (should print first)');