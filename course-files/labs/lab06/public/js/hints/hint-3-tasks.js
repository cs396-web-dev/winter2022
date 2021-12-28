const YOUR_ACCESS_TOKEN = '?????????';

const getTasks = async () => {
    const response = await fetch('/tasks',  {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + YOUR_ACCESS_TOKEN
        }
    });
    if (response.ok) {
        const data = await response.json();
        console.log('Display these tasks to the screen.')
        console.log(data);
    } else {
        console.log('Token expired. Showing message to user telling them they need to log in again.');
    };
};

getTasks();
