const getRestaurantSync = () => {
    // pretend this is querying for data over the
    // internet (and we don't know how long it will take)
    console.log('2. Data retrieved.')
    return {
        "id": "9EdUf-qb3PGcPA_rTzG-Hw",
        "name": "Union Squared - Evanston",
        "rating": 4.5,
        "display_address": "1307 Chicago Ave, Evanston, IL 60201",
        "price": "$$",
        "review_count": 105
    };
};

console.log('This all happens synchronously (one line right after the other.')
console.log('1. First get the data.')
const data = getRestaurantSync();
console.log(data);
console.log('3. Now do something with the data');