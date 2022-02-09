const photos = [
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const card2Html = photo => {
    return `<div class="card" 
        style="background-image:url('${photo}')"></div>
    `;
};
const elem = document.querySelector('.cards');
elem.innerHTML = photos.map(card2Html).join('\n');



