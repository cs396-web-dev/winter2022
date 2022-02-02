const showCat = (ev) => {
    document.querySelector('#image-demo').src = 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg';
    document.querySelector('p').innerHTML = 'This is a cat.';
};

const showDog = (ev) => {
    document.querySelector('#image-demo').src = 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg';
    document.querySelector('p').innerHTML = 'This is a dog.';
};

const showBird = (ev) => {
    document.querySelector('#image-demo').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg';
    document.querySelector('p').innerHTML = 'This is a bird.';
};

const showFish = (ev) => {
    document.querySelector('#image-demo').src = 'https://thumbs-prod.si-cdn.com/n7Z82GD9Eav_CtpnzizNo66-dKc=/420x240/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg';
    document.querySelector('p').innerHTML = 'This is a fish.';
};

