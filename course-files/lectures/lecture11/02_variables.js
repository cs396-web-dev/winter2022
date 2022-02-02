// Variable Demo 1a: 
// let keyword means that the variable is mutable
let x = 1;
console.log(x);
x = 2;
console.log(x);

// Variable Demo 1b: 
// let keyword means that the variable is mutable
const z = 1;
console.log(z);
// z = 2;           // throws an error
// console.log(z);  


// Variable Demo 2: JavaScript is case-sensitive
// copy this code and run it in your browser console:
let a = 3;
let A = 33;
console.log(a);
console.log(A);

// Variable Demo 3a: Scope Demo
// variable c is declared inside of a block w/let keyword, which
// means that it does not exist outside of the block;
let b = 123;
let c = 456;
if (b !== c) {
    let d = 789;
    console.log('inside block:', d);
}
console.log(b);
console.log(c);
try {
    console.log('outside block:', d);
} catch {
    console.log('Error: d is not defined outside of the code block.');
}

// Variable Demo 3b: Scope Demo
// variable c is declared inside of a block w/var keyword, which
// means that it *does exist outside of the block;
let e = 123;
let f = 456;
if (e !== f) {
    var g = 789;
    console.log('inside block:', g);
}
console.log(e);
console.log(f);
console.log('outside block:', g);

console.log('Moral of the story:')
console.log('Don\'t use var. It\'s confusing and it leads to bad coding practices.');