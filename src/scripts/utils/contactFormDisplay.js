import { modal, contactForm, validationMessage } from '../utils/helpers.js';

export function modalDisplay() {
    function displayModal() {
        modal.style.display = 'block';
        contactForm.style.display = 'block';

        // Remove validation message.
        validationMessage.textContent = ' ';
        // TODO : use a condition to remove validation message ?
        // if (validationMessage.textContent !== ' ') {
        //    validationMessage.textContent = ' ';
        // }
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    const closeButton = document.getElementsByClassName('close-button');
    closeButton[0].addEventListener('click', closeModal);

    const contactButton = document.getElementsByClassName('contact_button');
    contactButton[0].addEventListener('click', displayModal);
}
