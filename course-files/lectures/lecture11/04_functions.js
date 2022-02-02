/****************************/
/* 1. Function Declarations */
/****************************/

// Note: No return or parameter types are explicitly defined:
function add_v1(a, b) {
    return a + b;
}
console.log(add_v1(3, 5));
console.log(add_v1(30, 5));
console.log(add_v1(123, 456));

/***************************/
/* 2. Arrow Function (ES6) */
/***************************/

// ES6 Syntax:
console.log('1. ES6 Syntax');
const add_two_nums = (num1, num2) => {
    return num1 + num2;
};


console.log(add_two_nums(3, 5));
console.log(add_two_nums(30, 5));
console.log(add_two_nums(123, 456));

// ES6 Syntax compressed:
// Note, if the function body on the same line as the 
// signature, the return is assumed!
console.log('2. ES6 Syntax condensed');
const add_two_nums_compact = (num1, num2) => num1 + num2;

console.log(add_two_nums(3, 5));
console.log(add_two_nums(30, 5));
console.log(add_two_nums(123, 456));

// ES6 Syntax compressed 1 parameter:
console.log('3. ES6 Syntax compressed 1 parameter');
const take_square = num1 => num1 ** 2;


console.log(take_square(3));
console.log(take_square(4));
console.log(take_square(5));

// ES6 Syntax compressed 0 parameters:
// If no parameters, then use an empty parenthesis before the arrow.
console.log('3. ES6 Syntax compressed 1 parameter');
const today = () => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][new Date().getDay()];
console.log(today());
