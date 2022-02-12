let artists;

const attachEventHandlers = () => {
    // once the unordered list has been attached to the DOM
    // (by assigning the #artists container's innerHTML),
    // you can attach event handlers to the DOM:
    document.querySelectorAll('#artists a').forEach(a => {
        a.onclick = showDetail;
    });
};

const showDetail = ev => {
    const id = ev.currentTarget.dataset.id;
    console.log(ev.currentTarget.dataset);

    // find the current artist from the artists array:
    const artist = artists.filter(artist => artist.id === id)[0];
    console.log(artist);
    
    // append the artist template to the DOM:
    document.querySelector('#artist').innerHTML = `
        <h2>${artist.name}</h2>
        ${ artist.image_url ? `<img src="${artist.image_url}" />` : ''}
        <br>
        <iframe 
            src="https://open.spotify.com/embed/artist/${artist.id}" 
            width="300" 
            height="380" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media"></iframe>
    `;
};

fetch('https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=artist')
    .then(response => response.json())
    .then(data => {
        // store the retrieved data in a global variable called "artists"
        artists = data;
        const listItems = data.map(item => `
            <li>
                <a href="#" data-id="${item.id}">${item.name}</a>
            </li>`
        );
        document.getElementById('artists').innerHTML = `
            <ul>
                ${listItems.join('')}
            </ul>`
    })
    .then(attachEventHandlers);