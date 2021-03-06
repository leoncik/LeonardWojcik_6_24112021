import {
    mailformat,
    firstName,
    lastName,
    email,
    message,
    contactForm,
    validationMessage,
    focusTrap,
    modal,
} from '../utils/helpers.js';

// *** Form fields validation *** //

// Check if the name, surname and message fields are valid.

const checkInputText = (elt, key, className) => {
    if (elt.value === '') {
        document.querySelector(
            `.${className} .error-message`
        ).innerHTML = `⚠ Veuillez saisir un ${key}`;
        document
            .querySelector(`.${className} .inputform-assist`)
            .classList.add('visible');
        elt.classList.add('input-error');
        elt.focus();
        return false;
    } else if (elt.value.length < 2) {
        document.querySelector(
            `.${className} .error-message`
        ).innerHTML = `⚠ Votre ${key} doit contenir au moins deux caractères.`;
        document
            .querySelector(`.${className} .inputform-assist`)
            .classList.add('visible');
        elt.classList.add('input-error');
        elt.focus();
        return false;
    } else {
        document.querySelector(`.${className} .error-message`).innerHTML = ` `;
        document
            .querySelector(`.${className} .inputform-assist`)
            .classList.remove('visible');
        elt.classList.remove('input-error');
    }
    return true;
};

// Check if the e-mail address is valid

const checkEmail = () => {
    if (email.value === '') {
        document.querySelector('.email .error-message').innerHTML =
            '⚠ Veuillez saisir votre courriel.';
        document
            .querySelector(`.email .inputform-assist`)
            .classList.add('visible');
        email.classList.add('input-error');
        email.focus();
        return false;
    } else if (!email.value.match(mailformat)) {
        document.querySelector('.email .error-message').innerHTML =
            '⚠ Veuillez saisir un courriel valide.';
        document
            .querySelector(`.email .inputform-assist`)
            .classList.add('visible');
        email.classList.add('input-error');
        email.focus();
        return false;
    } else {
        document.querySelector('.email .error-message').innerHTML = ' ';
        document
            .querySelector(`.email .inputform-assist`)
            .classList.remove('visible');
        email.classList.remove('input-error');
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
                console.log(`Nouveau message de : ${firstName.value} ${lastName.value}.

Contenu du message : ${message.value}`);
                submitedForm();
                resetForm();
                focusTrap(modal);
                document.querySelector('.submission-message').focus();
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
        "<span class='submission-message' tabindex='0'>Votre message a bien été envoyé, merci ! Vous pouvez à présent fermer le formulaire de contact.</span>"
    );
}

// Reset form after closing the modal

function resetForm() {
    contactForm.reset();
}
