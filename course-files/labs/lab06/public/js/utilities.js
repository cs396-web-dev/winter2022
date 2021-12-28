const utils = {
    getCookie:  key => {
        return document.cookie
            .split('; ')
            .find(row => row.startsWith(`${key}=`))
            .split('=')[1];
    },
    redirectToLogin: err => {
        console.log(err);
        window.location.href = '/login.html';
    },
    askUserToLoginAgain: () => {
        document.querySelector('.error-panel').style.display = 'block';
    }
};
