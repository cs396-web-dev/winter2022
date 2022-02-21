// https://www.w3schools.com/js/js_cookies.asp

const getCookie = key => {
    key = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    const tokens = decodedCookie.split(';');
    let cookieVal = '';
    tokens.forEach(token => {
        token = token.trim();
        if (token.indexOf(key) === 0) {
            cookieVal = token.substring(key.length, token.length);
        }
    })
    return cookieVal;
};

const deleteCookie = (key) => {
    // you can delete a cookie by expiring it:
    document.cookie = key + "=;Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}

const setCookie = (key, value, expDays) => {
    const d = new Date();
    d.setTime(d.getTime() + (expDays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
};

// before any cookies added:
console.log('before any cookies added:');
console.log(document.cookie);

// set a "first_name" cookie to see what happens:
console.log('set a "first_name" cookie to see what happens:');
setCookie('first_name', 'Sarah', 1);
console.log(document.cookie);
console.log(getCookie('first_name'));

// set a "last_name" cookie to see what happens:
console.log('set a "last_name" cookie to see what happens:');
setCookie('last_name', 'Van Wart', 1);
console.log(document.cookie);
console.log(getCookie('last_name'));

// delete the "first_name" cookie (by expiring it) to see what happens:
console.log('delete the "first_name" cookie (by expiring it) to see what happens');
deleteCookie('first_name');
console.log(document.cookie);
console.log(getCookie('first_name'));

// delete the "last_name" cookie (by expiring it) to see what happens:
console.log('delete the "last_name" cookie (by expiring it) to see what happens');
deleteCookie('last_name');
console.log(document.cookie);
console.log(getCookie('last_name'));