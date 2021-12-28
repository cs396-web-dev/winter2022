const processDelete = ev => {
    const id = document.getElementById('_id').value;
    const url = `/artists/${id}`;
    fetch(url, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                // send to catch block:
                throw Error(response.statusText);
            } else {
                // because the endpoint returns a 
                // null value, use the text() method
                // instead of the .json() method:
                return response.text();
            }
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(err => {
            console.error(err);
            alert('Error!');
        });
    ev.preventDefault();
};

document.querySelector('button').onclick = processDelete;