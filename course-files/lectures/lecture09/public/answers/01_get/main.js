fetch('/artists')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const listItems = data.map(item => `<li>${item.name}</li>`);
        document.getElementById('artists').innerHTML = `
            <ul>
                ${listItems.join('')}
            </ul>`
    });