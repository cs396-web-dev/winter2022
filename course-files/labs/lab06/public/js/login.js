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
            // redirect them to index.html (the TODO List):
            if (data.accessToken) {
                window.location.href = '/';
                document.cookie = `access_token=${data.accessToken}`;
            }
        })
        .catch(err => {
            console.log(err);
        });

};

document.querySelector('button').addEventListener('click', login);