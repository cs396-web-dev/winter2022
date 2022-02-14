const getPostById = () => {
    const postId = document.getElementById('post_id').value;
    fetch(`https://photo-app-demo.herokuapp.com/api/posts/${postId}`)
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                document.getElementById('caption').value = data.caption;
                document.getElementById('image_url').value = data.image_url;
                document.getElementById('alt_text').value = data.alt_text;
            }
            console.log('Success:', data);
            document.querySelector('pre').innerHTML = JSON.stringify(data, null, 3);
        })
        .catch(err => {
            console.error(err);
            alert('Error!');
        });
};

getPostById();

const updatePost = ev => {
    const postId = document.getElementById('post_id').value;
    const data = {
        caption: document.getElementById('caption').value,
        image_url: document.getElementById('image_url').value,
        alt_text: document.getElementById('alt_text').value
    }
    fetch(`https://photo-app-demo.herokuapp.com/api/posts/${postId}`, {
            method: 'PATCH', 
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

