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
const submitButton = document.querySelector('.contact_button');

// Validation message
const validationMessage = document.querySelector('.validation-message');

// Error field (inputform-assist)
const errorFields = document.getElementsByClassName('inputform-assist');

// *** DOM elements of the lightbox *** //
const lightbox = document.getElementById('lightbox-modal');
const currentMedia = document.getElementById('current-media');

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
    currentMedia,
};
