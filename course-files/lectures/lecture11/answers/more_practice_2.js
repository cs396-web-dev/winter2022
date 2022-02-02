

/* Edit the below functions: */

function listPrint(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

function fibonacci(n) {
    if (n === 1) {
        return [1];
    }
    const nums = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        nums.push(nums[i] + nums[i + 1]);
    }
    return nums
}


/* below you will find the function calls and expected output: */

listPrint(["line1", "line2", "line3"]);
/*
Expected output:
line1
line2
line3
*/

console.log(fibonacci(9));

/*
Expected output:
[ 0,  1,  1,  2,  3,  5,  8, 13, 21 ]
*/