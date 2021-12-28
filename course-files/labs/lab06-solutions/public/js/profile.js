const showProfile = user => {
    console.log(user)
    const el = document.querySelector('#profile');
    el.innerHTML = `
        <h2>
            ${user.first_name} ${user.last_name}
        </h2>
        <p>Username: <strong>${user.username}</strong></p>
        <p>Email: <strong>${user.email}</strong></p>
    `;
};



const getTasks = () => {
    fetch('/profile',  {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + utils.getCookie('access_token')
        }
    })
    .then(request => {
        if (request.ok) {
            return request.json();
        } else {
            // note that this could produce an infinite loop...
            utils.getNewAccessTokenAndTryAgain('/profile');
        }
    })
    .then(showProfile);
};

getTasks();
