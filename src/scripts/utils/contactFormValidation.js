import {
    mailformat,
    firstName,
    lastName,
    email,
    message,
    contactForm,
    validationMessage,
} from '../utils/helpers.js';

// *** Form fields validation *** //

// Check if the name, surname and message fields are valid.

const checkInputText = (elt, key) => {
    if (elt.value === '') {
        // Add a custom error message with red border around the input field
        elt.parentNode.setAttribute('data-error', `Veuillez saisir un ${key}.`);
        elt.parentNode.setAttribute('data-error-visible', 'true');
        return false;
    } else if (elt.value.length < 2) {
        elt.parentNode.setAttribute(
            'data-error',
            `Votre ${key} doit contenir au moins deux caractères.`
        );
        elt.parentNode.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        // Hide error message and set input border to green
        elt.parentNode.setAttribute('data-error-visible', 'false');
    }
    return true;
};

// Check if the e-mail address is valid

const checkEmail = () => {
    if (email.value === '') {
        email.parentNode.setAttribute(
            'data-error',
            'Veuillez saisir votre courriel.'
        );
        email.parentNode.setAttribute('data-error-visible', 'true');
        return false;
    } else if (!email.value.match(mailformat)) {
        email.parentNode.setAttribute(
            'data-error',
            'Veuillez saisir un courriel valide.'
        );
        email.parentNode.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        email.parentNode.setAttribute('data-error-visible', 'false');
    }
    return true;
};

// Check all fields

function fieldValidation() {
    checkInputText(firstName, 'prénom');
    checkInputText(lastName, 'nom');
    checkEmail();
    checkInputText(message, 'message');
}

// Check validity of all fields

function fieldValidationIsValid() {
    if (
        checkInputText(firstName, 'prénom') &&
        checkInputText(lastName, 'nom') &&
        checkEmail() &&
        checkInputText(message, 'message')
    ) {
        return true;
    }
    return false;
}

// *** Form submit validation *** //

// Submit if the form is valid, else displays error message.
export const formSubmitValidation = () => {
    contactForm.addEventListener(
        'submit',
        (e) => {
            e.preventDefault();
            fieldValidation();
            if (fieldValidationIsValid()) {
                console.log(message.value);
                submitedForm();
                resetForm();
            }
        },
        false
    );
};

function submitedForm() {
    // Hide all elements inside "form-data-container" and set a custom message.
    contactForm.style.display = 'none';
    validationMessage.insertAdjacentHTML(
        'afterbegin',
        "<span class='submission-message'>Votre message a bien été envoyé, merci ! Vous pouvez à présent fermer le formulaire de contact.</span>"
    );
}

// Reset form after closing the modal

function resetForm() {
    contactForm.reset();
}
