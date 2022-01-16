// Retrieve photographer id from URL
const getParam = (param) => new URL(document.location).searchParams.get(param);

// Mail regex
// eslint-disable-next-line
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// *** DOM elements of the contact form *** //

// Contact form
const modal = document.getElementById('contact_modal');
const contactForm = document.getElementById('contact-form');

// Inputs
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Submit button
const submitButton = document.querySelector('.submit-button');

// Validation message
const validationMessage = document.querySelector('.validation-message');

// Error field (inputform-assist)
const errorFields = document.getElementsByClassName('inputform-assist');

// Media sorting buttons
const popularityButton = document.querySelector('#sort-popularity-button');
const dateButton = document.querySelector('#sort-date-button');
const titleButton = document.querySelector('#sort-title-button');

// *** DOM elements of the lightbox *** //
const lightbox = document.getElementById('lightbox-modal');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

// Empty lightbox media content
const emptyMediaContainer = () => {
    document.querySelector('.current-media').innerHTML = ' ';
};
// Empty gallery
const emptyGallery = () => {
    document.querySelector('.photographer-medias').innerHTML = ' ';
};

// TODO : Empty gallery and mediaContainer could be refactored with something more generic like this :
// const emptyHtmlElt = (elt) => document.querySelector(elt).innerHTML = ' ';

// Add focus trap to a section
const focusTrap = (section) => {
    const focusableElements = section.querySelectorAll(
        '[tabindex], a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), input[type="submit"]:not([disabled]), select:not([disabled])'
    );
    console.log(focusableElements);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

    section.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                /* shift + tab */ if (
                    document.activeElement === firstFocusableElement
                ) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } /* tab */ else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
};

export {
    getParam,
    mailformat,
    modal,
    firstName,
    lastName,
    email,
    message,
    submitButton,
    contactForm,
    validationMessage,
    errorFields,
    lightbox,
    previousButton,
    nextButton,
    emptyMediaContainer,
    popularityButton,
    dateButton,
    titleButton,
    emptyGallery,
    focusTrap,
};
