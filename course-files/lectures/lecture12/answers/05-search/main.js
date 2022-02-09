/**
 * Modify the findRestaurants function as follows:
 * 1. Allow the search URL's location to be populated
 *    based on what the user entered into the form.
 * 2. Output all of the matching restaurants to the screen
 *    (instead of just dumping the JSON to the console).
 */

const findRestaurants = ev => {
    // your code here:
    const location = document.getElementById('location').value; 
    const term = document.getElementById('term').value; 
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${term}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('#results');
            container.innerHTML = "";
            data.forEach(restaurant => {
                document.querySelector('#results').innerHTML += `
                    <div class="card">
                        <div class="box">
                            <h2>${restaurant.name}</h2>
                            <img src="${restaurant.image_url}" />
                            <p><strong>Rating: </strong>${restaurant.rating}</p>   
                        </div>
                    </div>
                `;
            });
        });


    

    // don't forget to prevent the default
    // submit button behavior from firing:
    ev.preventDefault();
};

document.querySelector('button').onclick = findRestaurants;