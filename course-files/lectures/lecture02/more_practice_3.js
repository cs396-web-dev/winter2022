/* Implement the functions below (to think about how they work under the hood) */

// Equivalent to `arr.forEach(c => f(c));`
function foreach(arr, f) {

}

// Equivalent to `arr.map(c => f(c))`
function map(arr, f) {
    return null;
}

// Equivalent to `arr.filter(c => f(c))`
function filter(arr, f) {
    return null;
}

// Equivalent to `arr.reduce((a, b) => f(a, b))`
// Assume numeric inputs
function reduce(arr, f) {
    return null;
}

/* below you will find the function calls and expected output: */
foreach(["h", "e", "l", "l", "o"], item => console.log(item));
/*
h
e
l
l
o
*/

console.log(map([1, 2, 3, 4, 5], item => item + 2));
/*
[ 3, 4, 5, 6, 7 ]
*/

console.log(filter([1, 2, 3, 4, 5], item => item < 3));
/*
[ 1, 2 ]
*/

console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
/*
15
*/
