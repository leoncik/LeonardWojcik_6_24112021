import {
    modal,
    contactForm,
    validationMessage,
    focusTrap,
} from '../utils/helpers.js';

export function contactFormDisplay() {
    function displayModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        contactForm.style.display = 'block';
        // Accessibility settings
        document.getElementById('main').setAttribute('aria-hidden', 'true');
        document
            .getElementById('contact_modal')
            .setAttribute('aria-hidden', 'false');
        closeButton.focus();
        focusTrap(modal);

        // Remove validation message if there is one.
        if (validationMessage.childNodes.length === 2) {
            validationMessage.textContent = ' ';
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Accessibility settings
        document.getElementById('main').setAttribute('aria-hidden', 'false');
        document
            .getElementById('contact_modal')
            .setAttribute('aria-hidden', 'true');
        document.querySelector('.contact-button').focus();
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
