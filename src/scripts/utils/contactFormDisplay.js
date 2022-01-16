/*
 TODO : both lightbox and form fall in the "modal" category. Refactor to make a single "modalDisplay" to control
 TODO : the lightbox and the modal.
 */

import {
    modal,
    contactForm,
    validationMessage,
    focusTrap,
} from '../utils/helpers.js';

export function modalDisplay() {
    function displayModal() {
        modal.style.display = 'block';
        contactForm.style.display = 'block';
        // Accessibility settings
        document.getElementById('main').setAttribute('aria-hidden', 'true');
        document
            .getElementById('contact_modal')
            .setAttribute('aria-hidden', 'false');
        closeButton.focus();
        focusTrap(modal);

        // Remove validation message.
        validationMessage.textContent = ' ';
        // TODO : use a condition to remove validation message ?
        // if (validationMessage.textContent !== ' ') {
        //    validationMessage.textContent = ' ';
        // }
    }

    function closeModal() {
        modal.style.display = 'none';
        // Accessibility settings
        document.getElementById('main').setAttribute('aria-hidden', 'false');
        document
            .getElementById('contact_modal')
            .setAttribute('aria-hidden', 'true');
        document.querySelector('a').focus();
    }

    // Mouse controls
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', displayModal);

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}
