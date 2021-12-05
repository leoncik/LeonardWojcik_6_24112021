function displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
}

const closeButton = document.getElementsByClassName('close-button');
closeButton[0].addEventListener('click', closeModal);

const contactButton = document.getElementsByClassName('contact_button');
contactButton[0].addEventListener('click', displayModal);
