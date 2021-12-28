const login = ev => {
    ev.preventDefault();
    fetch('/login',  {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.querySelector('#username').value,
                password: document.querySelector('#password').value
            })
        })
        .then(request => request.json())
        .then(data => {
            console.log(data)
            document.cookie = `access_token=${data.accessToken}`;
            document.cookie = `refresh_token=${data.refreshToken}`;

            // redirect them to index.html:
            window.location.href = '/';
        })
        .catch(err => {
            console.log(err);
        });

};

document.querySelector('button').addEventListener('click', login);