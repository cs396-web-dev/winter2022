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
    },
    // getNewAccessToken: async () => {
    //     const response = await fetch('/token',  {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             token: utils.getCookie('refresh_token')
    //         })
    //     });
    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log(data);
    //         document.cookie = `access_token=${data.accessToken}`;
    //         document.cookie = `refresh_token=${data.refreshToken}`;
    //         return true;
    //     } else {
    //         console.log('Something went wrong. Redirecting to login page...')
    //         window.location.href ='/login.html';
    //         return false;
    //     }
    // },
    // logout: ev => {
    //     ev.preventDefault();
    //     fetch('/logout',  {
    //         method: 'DELETE', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             token: utils.getCookie('refresh_token')
    //         })
    //     })
    //     .then(request => request.json())
    //     .then(data => {
    //         console.log(data)
    //         document.cookie = `access_token=null`;
    //         document.cookie = `refresh_token=null`;
    //         window.location.href = '/login.html';
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }
};
