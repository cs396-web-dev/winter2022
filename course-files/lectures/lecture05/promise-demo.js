const success = result => { 
    console.log('success:', result);
    return result;
};

const doSomethingWithADelay = new Promise(callback => {
    setTimeout(() => callback("done"), 1000);
});

doSomethingWithADelay
    .then(success);