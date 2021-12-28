This was a JavaScript lab that was cut from the curriculum.

### JavaScript

#### Objects

All non-primitive types in JavaScript are Objects, which are collections of key-value pairs (you might have called them _dictionaries_ or _hash maps_ in other courses). Values in objects can be primitive types, lists, or other Objects. Objects are created and accessed with the following syntax:

```javascript
const myObject = {
    key1: "value1",
    key2: 2,
    key3: ["hey", "there", "delilah"]
};
console.log(myObject.key1)      // prints "value1"
console.log(myObject.key2)      // prints 2
console.log(myObject.key3)      // prints ["hey", "there", "delilah"]
console.log(myObject.key3[2])   // prints "delilah"
```

#### Function Types

There are 4 different ways to create a function in JavaScript, 2 of which we'll be discussing in this class (we'll be ignoring [function expressions](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function) and [function constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), at least for the time being). If we wanted to create a function to add two numbers, we could do the following:

```javascript
function add(a, b) {
    return a + b;
}
```

This is called a _function declaration_, and is most similar to how functions are created in other languages like Python and Java. Note that there are no return or parameter types, as JavaScript is not a strongly typed languages (if you're looking for a _bit_ more type safety, check out [TypeScript](https://www.typescriptlang.org/));

Let's look at another way to create a function known as the _arrow function_:

```javascript
const add = (a, b) => a + b;
```

So, what's going on here? Functions in JavaScript are first-class objects, and thus can be assigned to variables and passed as function arguments. Arrow functions are a feature introduced in the latest version of JavaScript and are a way to do exactly that; they are compact, anonymous functions designed to be passed around and used as _callbacks_ by other functions.

An arrow function has 3 parts:
- __Parameters__: In arrow functions, the parameters are the first things that appear in the function, before the `=>`. They are listed in the same way as they would be in a normal function, as a comma-separated list inside parentheses. If the arrow function takes no parameters, the parentheses must still remain (e.g. `() => console.log("hey")`). If the function takes only a single parameter, the parentheses around it can be optionally removed (e.g. `a => console.log(a)`).
- __Arrow__: The arrow symbol, `=>`, is required in all arrow functions and separates the parameters from the function body.
- __Body__: The function body can take one of two forms. First is a normal function body, surrounded by brackets. The second is the one-liner body, which is not surrounded by brackets. This second type is special in that it _returns_ the result of the expression. For example, the function `a => a + 2` takes a number as an argument and _returns_ the name number plus 2. In contrast, `a => { a + 2; }` would evaluate the expression `a + 2` but not return the result. We will utilize this type of function body a fair bit in this class.

#### List Iteration and Comprehension

If you took `COMP_SCI 111`, you may recognize Racket's `map`, `filter`, and `foldl` functions in JavaScript (`foldl` is renamed `reduce` and is slightly different). These functions are invaluable and will help us write some really clean code when dealing with lists of data. Let's look at these functions to refresh our memories:

The `map` function applies a transformation function to each element of a list, returning a new list of values.

```javascript
const myList = [1, 2, 3, 4, 5];
const newList = myList.map(n => n + 2);   // Add 2 to every number
console.log(newList);                     // prints [3, 4, 5, 6, 7]
```

The `filter` function returns a new list containing all the elements of the original list that return `true` when passed as arguments to a function that returns a boolean.

```javascript
const myList = [1, 2, 3, 4, 5];
const newList = myList.map(n => n > 3);   // Return all elements greater than 3
console.log(newList);                     // prints [4, 5]
```

The `reduce` function applies a transformation function _pairwise_ on all elements of the list in order to reduce it down to a single value. The function will take the first two elements of the list as arguments, return a value, and then the function will run again, using that return value and the third element of the list, etc. For example, `reduce` can be used to find the sum of a list like so:

```javascript
const myList = [1, 2, 3, 4, 5];
const listSum = myList.reduce((a, b) => a + b); // Add the first two elements together, then add the result to the 3rd element, etc.
console.log(listSum);                           // prints 15
```