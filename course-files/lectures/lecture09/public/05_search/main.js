/**
 * Modify the findRestaurants function as follows:
 * 1. Allow the search URL's location to be populated
 *    based on what the user entered into the form.
 * 2. Output all of the matching restaurants to the screen
 *    (instead of just dumping the JSON to the console).
 */

const findRestaurants = ev => {
    // your code here:
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Chicago, IL`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });


    

    // don't forget to prevent the default
    // submit button behavior from firing:
    ev.preventDefault();
};

document.querySelector('button').onclick = findRestaurants;