const sendToServer = (ev) => {
    const data = {
        name: document.querySelector('#name').value,
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    }
    fetch('/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // write cookie:
            console.log("You're registered and logged in!");
            console.log(data);
        });
};

document.querySelector('button').onclick = sendToServer;