const axios = require("axios");
// const baseUrl = 'http://localhost:8081';
const baseUrl = 'https://cs396-hw1.herokuapp.com';

console.log('Fun fact: these function calls don\'t necessarily return in the order they\'re called!');


// 1. GET (Resource List)
const doctorsUrl = `${baseUrl}/doctors`;
console.log()
console.log('1. GET doctors (plural) url:', doctorsUrl);

axios.get(doctorsUrl)
    .then(response => {
        console.log('GET (plural) callback -------------------------------------------------------------------');
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });



// 2. GET (Singular Resource)
const doctor4Url = `${baseUrl}/doctors/d4`;
console.log()
console.log('2. GET doctor (singular) url:', doctor4Url);

axios.get(doctor4Url)
    .then(response => {
        console.log('GET (singular) Callback -------------------------------------------------------------------');
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });



// 3. POST (Create a new Doctor)
console.log()
console.log('3. POST (create) a new doctor', doctorsUrl);

const newDoctor = {
    "name": "Mindy Kaling",
    "seasons": [8, 9]
}
axios.post(doctorsUrl, newDoctor)
    .then(response => {
        console.log('POST Callback -------------------------------------------------------------------');
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });



// 4. PATCH (Update Doctor #5)
const doctor5Url = `${baseUrl}/doctors/d5`;
console.log()
console.log('4. PATCH (update part of) an existing doctor', doctor5Url);

axios.patch(doctor5Url, { seasons: [8, 6, 7, 5, 3]})
    .then(response => {
        console.log('PATCH Callback -------------------------------------------------------------------');
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });


    
// 5. DELETE (Delete Doctor #6)
const doctor6Url = `${baseUrl}/doctors/d6`;
console.log()
console.log('\n5. DELETE (update part of) an existing doctor', doctor6Url);

axios.delete(doctor6Url)
    .then(response => {
        console.log('DELETE Callback -------------------------------------------------------------------');
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });


// Reset the API when you're done (sneaky hack to revert changes)
const resetApi = () => {
    axios.get(`${baseUrl}/reset`)
        .then(response => {
            console.log()
            console.log('Reset Callback -------------------------------------------------------------------');
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });
}

// make sure this happens last by delaying 2 seconds!
setTimeout(resetApi, 1000);