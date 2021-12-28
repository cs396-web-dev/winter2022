

const showTasks = data => {
    console.log(data)
    const el = document.querySelector('#tasks');
    el.innerHTML = '';
    data.forEach(item => {
        const doneText = item.done ? 'Complete' : 'Incomplete';
        const checked = item.done ? 'checked' : '';
        el.innerHTML += `
            <div>
                <input type="checkbox" ${checked} id="cb_${item._id}" />
                <p> ${item.task} (${doneText})</p>
            </div>
        `;
    });
};

const getTasks = async () => {
    const response = await fetch('/tasks',  {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + utils.getCookie('access_token')
        }
    });
    if (response.ok) {
        const data = await response.json();
        showTasks(data);
    } else {
        console.log('Token expired. Showing message to user...');
        utils.askUserToLoginAgain()
    };
};

getTasks();
