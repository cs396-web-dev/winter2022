const deletePost = ev => {
    const postId = document.getElementById('post_id').value;

    fetch(`https://photo-app-demo.herokuapp.com/api/posts/${postId}`, {
            method: 'DELETE'
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

