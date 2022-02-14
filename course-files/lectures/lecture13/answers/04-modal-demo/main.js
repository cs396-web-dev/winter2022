const openModal = ev => {
    ev.preventDefault();
    console.log('open!');
    document.querySelector('.modal-bg').classList.remove('hidden');
    document.querySelector('.close').focus();
}

const closeModal = ev => {
    ev.preventDefault();
    console.log('close!');
    document.querySelector('.modal-bg').classList.add('hidden');
    document.querySelector('.open').focus();
};
