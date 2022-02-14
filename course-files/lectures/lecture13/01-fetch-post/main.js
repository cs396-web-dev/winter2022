const createPost = ev => {
    const data = {
        caption: document.getElementById('caption').value,
        image_url: document.getElementById('image_url').value,
        alt_text: document.getElementById('alt_text').value
    }
    fetch('https://photo-app-demo.herokuapp.com/api/posts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            document.querySelector('pre').innerHTML = JSON.stringify(data, null, 3);
        })
        .catch(err => {
            console.error(err);
            alert('Error!');
        });
    ev.preventDefault();
};

