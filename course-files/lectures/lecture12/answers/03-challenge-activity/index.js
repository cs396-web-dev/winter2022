// One possible Solution
let images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

let currentIndex = 0;
const updateIndex = i => {
    if (i >= images.length) {
        currentIndex = 0;
    } else if (i < 1) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = i;
    }
}

const next = () => {
    updateIndex(currentIndex + 1);
    modifyFeaturedImage();
    addHighlight();
};

const prev = () => {
    updateIndex(currentIndex - 1);
    modifyFeaturedImage();
    addHighlight();
};

const modifyFeaturedImage = () => {
    const bg = document.querySelectorAll('.image')[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = bg.style.backgroundImage;
};

const addHighlight = () => {
    const buttons = document.querySelectorAll('.image');
    buttons.forEach((button, idx) => {
        if (idx === currentIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

const showImage = idx => {
    updateIndex(idx);
    modifyFeaturedImage();
    addHighlight();
};

const initScreen = () => {
    const html = images.map((image, idx) => {
        return `
            <li class="card">
                <button tab-index="${idx}" class="image" 
                    style="background-image:url('${image}')"
                    onclick="showImage(${idx});"></button>
            </li>`;
        }).join('\n');
    document.querySelector('.cards').innerHTML = html;
    document.querySelector('.card .image').classList.add('active');
};

const initScreenAlt = () => {
    url = 'https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track';
    fetch(url)
        .then(response => response.json())
        .then(tracks => {
            // get first 8 album covers:
            images = tracks.map(
                track => track.album.image_url
            )
            .filter((item, idx) => idx < 8);
        })
        .then(() => {
            const html = images.map((image, idx) => {
                return `
                    <li class="card">
                        <button tab-index="${idx}" class="image" 
                            style="background-image:url('${image}')"
                            onclick="showImage(${idx});"></button>
                    </li>`;
                }).join('\n');
            document.querySelector('.cards').innerHTML = html;
            document.querySelector('.card .image').classList.add('active');
            modifyFeaturedImage();
        });
};

initScreenAlt();