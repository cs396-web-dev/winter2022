// Example 1: Simple:
let url = 'https://photo-app-demo.herokuapp.com/api/posts'
fetch(url)
    .then(response => response.json()) // callback function
    .then(data => console.log(data))  // callback function
    .catch(err => {
        console.log(err);
    });


// Example 2: Let's expand this...
let url = 'https://photo-app-demo.herokuapp.com/api/posts'
fetch(url)
    .then(response => {
        console.log('Fetch promise complete. Executing callback function #1...')
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log('response.json() promise complete. Executing callback function #2...')
        console.log(data)
    })
    .catch(err => {
        console.error(err);
    });

// Example 3: Await / Async
const getPosts = async () => {
    try {
        let url = 'https://photo-app-demo.herokuapp.com/api/posts';
        const response = await fetch(url);
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch(err) {
        console.error(err);
    }
};
getPosts();

    