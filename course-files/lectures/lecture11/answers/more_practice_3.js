foreach(["h", "e", "l", "l", "o"], c => console.log(c));
console.log(map([1, 2, 3, 4, 5], n => n + 2));
console.log(filter([1, 2, 3, 4, 5], n => n < 3));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));

/* Edit the below functions: */

// Equivalent to `arr.forEach(c => f(c));`
function foreach(arr, f) {
    for (const item of arr) {
        f(item);
    }
}

// Equivalent to `arr.map(c => f(c))`
function map(arr, f) {
    const newArr = [];
    for (const item of arr) {
        newArr.push(f(item));
    }
    return newArr;
}

// Equivalent to `arr.filter(c => f(c))`
function filter(arr, f) {
    const newArr = [];
    for (const n of arr) {
        if (f(n)) {
            newArr.push(n);
        }
    }
    return newArr;
}

// Equivalent to `arr.reduce((a, b) => f(a, b))`
// Assume numeric inputs
function reduce(arr, f) {
    if (arr.length === 0) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    }
    let runningCalculation = arr[0];
    for (let i = 1; i < arr.length; i++) {
        runningCalculation = f(runningCalculation, arr[i]);
    }
    return runningCalculation;
}