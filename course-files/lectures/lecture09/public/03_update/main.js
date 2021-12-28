/**
 * Edit the processSave() function body
 * so that it issues a PATCH request to the
 * server with the data from the form.
 */

const processSave = ev => {
    
    // your code here:


    // don't forget to prevent the default
    // submit button behavior from firing:
    ev.preventDefault();
};

document.querySelector('button').onclick = processSave;