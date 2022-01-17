import {
    mailformat,
    firstName,
    lastName,
    email,
    message,
    contactForm,
    validationMessage,
    // focusTrap
} from '../utils/helpers.js';

// *** Form fields validation *** //

// TODO : add style to valid and invalid fields

// Check if the name, surname and message fields are valid.

const checkInputText = (elt, key, className) => {
    if (elt.value === '') {
        document.querySelector(
            `.${className} .error-message`
        ).innerHTML = `⚠ Veuillez saisir un ${key}`;
        return false;
    } else if (elt.value.length < 2) {
        document.querySelector(
            `.${className} .error-message`
        ).innerHTML = `⚠ Votre ${key} doit contenir au moins deux caractères.`;
        return false;
    } else {
        document.querySelector(`.${className} .error-message`).innerHTML = ` `;
    }
    return true;
};

// Check if the e-mail address is valid

const checkEmail = () => {
    if (email.value === '') {
        // ? Why is nextElementSiblings null ? And why is the console.log displayed twice ?
        console.log(email.nextElementSibling);
        document.querySelector('.email .error-message').innerHTML =
            '⚠ Veuillez saisir votre courriel.';
        return false;
    } else if (!email.value.match(mailformat)) {
        document.querySelector('.email .error-message').innerHTML =
            '⚠ Veuillez saisir un courriel valide.';
        return false;
    } else {
        document.querySelector('.email .error-message').innerHTML = ' ';
    }
    return true;
};

// Check all fields

function fieldValidation() {
    checkInputText(firstName, 'prénom', 'first-name');
    checkInputText(lastName, 'nom', 'last-name');
    checkEmail();
    checkInputText(message, 'message', 'message');
}

// Check validity of all fields

function fieldValidationIsValid() {
    if (
        checkInputText(firstName, 'prénom', 'first-name') &&
        checkInputText(lastName, 'nom', 'last-name') &&
        checkEmail() &&
        checkInputText(message, 'message', 'message')
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
                document.querySelector('.close-button').focus();
                // ! Makes focus stuck after opening modal again (Tab wont leave exit button but Shift + tab can)
                // focusTrap(document.querySelector('.contact-header'));
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
