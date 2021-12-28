/**
 * Using the await / async keywords
 */
 const getReviews = (id) => {
    // pretend this is querying for data over the
    // internet (and we don't know how long it will take)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reviews retrieved for:', id);
            const data = [{
                    "text": "We were extatic to finally try this place. It is well worth a pit stop on Noyes street for their amazing food. They have a wide variety of dishes including...",
                    "rating": 5
                }, {
                  "text": "We ordered tomate for a small corporate gathering tonight and everything was PERFECT! The food was great, the delivery was on time, everything was labeled...",
                  "rating": 5
                }];
            
            // don't forget to resolve your promise!
            resolve(data);
            //reject('Rejected promise');
        }, 2000);
    });
};

const getRestaurant = () => {
    // pretend this is querying for data over the
    // internet (and we don't know how long it will take)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Restaurant retrieved (from the internet).');
            const data = {
                "id": "9EdUf-qb3PGcPA_rTzG-Hw",
                "name": "Union Squared - Evanston",
                "rating": 4.5,
                "display_address": "1307 Chicago Ave, Evanston, IL 60201",
                "price": "$$",
                "review_count": 105
            };

            // don't forget to resolve your promise!
            resolve(data);
            //reject('Rejected promise');
        }, 1000);
    });
};

const doSomethingWithData = (restaurant, reviews) => {
    console.log('Restaurant', restaurant);
    console.log('Reviews', reviews);
};

const asyncAwaitTechnique = async () => {
    console.log('getting restaurant...')
    const restaurant = await getRestaurant();
    console.log('getting restaurant reviews...')
    const reviews = await getReviews(restaurant.id);
    console.log('processing data...')
    doSomethingWithData(restaurant, reviews);
};


asyncAwaitTechnique();
