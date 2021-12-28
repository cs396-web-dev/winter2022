/**
 * ------------------------------------------------------------
 * Problem we're trying to solve: 
 * ------------------------------------------------------------
 * How can we get code that depends on an asynchronous function 
 * to only run after the async function finishes?
 */

const getRestaurantAsync = () => {
    // simulating a request for data over the internet
    // (and we don't know how long it will take)
    setTimeout(() => {
        console.log('2. Data retrieved (from the internet).')
        const data = {
            "id": "9EdUf-qb3PGcPA_rTzG-Hw",
            "name": "Union Squared - Evanston",
            "rating": 4.5,
            "display_address": "1307 Chicago Ave, Evanston, IL 60201",
            "price": "$$",
            "review_count": 105
        };
        console.log(data);
        return data;

    }, 2000);

};

console.log('This all happens asynchronously, where the getRestaurants() function is moved to a separate process.')
console.log('1. First get the data.')
getRestaurantAsync();
console.log('3. Do something with the data.')