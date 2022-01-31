//////////////////////////
// Arithmetic Operators //
//////////////////////////

// Numbers
// initialize variables for demo:
a = 20;
b = 10;
c = 25;
console.log(a + b);             // addition
console.log(a - b);             // subtraction
console.log(a * b);             // multiplication
console.log(b / a);             // division (notice the result is a float)
console.log(c % a);             // modulus  25 / 20 = 1 with 5 left over (remained = 5)
console.log(a ** b);            // exponent
console.log(c ** (1/2));        // square root (notice the result is a float)



// Strings
console.log('34' + '34');       // in the context of a string, the + sign concatenates two strings
console.log('34' - '34');       // does some implicit data type conversion
console.log('34' * 100);        // does some implicit data type conversion
console.log('34' * '34');       // does some implicit data type conversion


//////////////////////////
// Comparison Operators //
//////////////////////////
console.log(3 == '3');
console.log(3 === '3');
console.log(3 === 3);           // strict equality

///////////////////////
// Logical Operators //
///////////////////////
console.log(false && false);    // and
console.log(false && true);     // and
console.log(true && false);     // and
console.log(true && true);      // and

console.log(false || false);    // or
console.log(false || true);     // or
console.log(true || false);     // or
console.log(true || true);      // or

console.log(!false);            // not
console.log(!true);             // not