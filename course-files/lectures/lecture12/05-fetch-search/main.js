/**
 * Modify the findRestaurants function as follows:
 * 1. Allow the search URL's location to be populated
 *    based on what the user entered into the form.
 * 2. Output all of the matching restaurants to the screen
 *    (instead of just dumping the JSON to the console).
 * 3. Create another form field that allows the user to specify
 *    a search term (e.g., "pizza")
 * 4. Ensure that the fetch honors the search term and the location.
 */


const rootURL = 'https://www.apitutor.org/yelp/simple/v3/businesses/search'
const findRestaurants = ev => {
    // your code here:
    const location = 'Chicago, IL';
    let url = `${rootURL}?location=${location}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });


    

    // don't forget to prevent the default
    // submit button behavior from firing:
    ev.preventDefault();
};

document.querySelector('button').addEventListener('click', findRestaurants);