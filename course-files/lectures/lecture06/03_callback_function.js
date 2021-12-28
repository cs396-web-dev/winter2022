/**
 * ------------------------------------------------------------
 * Solution 1: Callback Function
 * ------------------------------------------------------------
 * Pass the callback function as an argument to the async
 * function. Then, invoke the callback function after the
 * async function finishes.
 */

const getRestaurantAsync = (callback) => {
    // pretend this is querying for data over the
    // internet (and we don't know how long it will take)
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
        // after the data comes back,  invoke 
        // the callback function with the data
        console.log('3. Now invoke the callback function');
        callback(data)
    }, 3000);

};

const myCallbackFunction = data => {
    // this function processes the data
    // after it comes back from the network:
    console.log('4. Callback function does something with the data.');
    console.log(data);
};

console.log('This all happens asynchronously, where the getRestaurants() function is moved to a separate process.')
console.log('1. First get the data.')
getRestaurantAsync(myCallbackFunction);
