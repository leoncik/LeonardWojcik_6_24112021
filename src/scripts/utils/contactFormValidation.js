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

const checkInputText = (elt, key, className) => {
    if (elt.value === '') {
        document.querySelector(
            `.${className} .error-message`
        ).innerHTML = `⚠ Veuillez saisir un ${key}`;
        document
            .querySelector(`.${className} .error-message`)
            .classList.add('visible');
        elt.classList.add('input-error');
        return false;
    } else if (elt.value.length < 2) {
        document.querySelector(
            `.${className} .error-message`
        ).innerHTML = `⚠ Votre ${key} doit contenir au moins deux caractères.`;
        document
            .querySelector(`.${className} .error-message`)
            .classList.add('visible');
        elt.classList.add('input-error');
        return false;
    } else {
        document.querySelector(`.${className} .error-message`).innerHTML = ` `;
        document
            .querySelector(`.${className} .error-message`)
            .classList.remove('visible');
        elt.classList.remove('input-error');
    }
    return true;
};

// Check if the e-mail address is valid

const checkEmail = () => {
    if (email.value === '') {
        console.log(email);
        document.querySelector('.email .error-message').innerHTML =
            '⚠ Veuillez saisir votre courriel.';
        document
            .querySelector(`.email .error-message`)
            .classList.add('visible');
        email.classList.add('input-error');
        return false;
    } else if (!email.value.match(mailformat)) {
        document.querySelector('.email .error-message').innerHTML =
            '⚠ Veuillez saisir un courriel valide.';
        document
            .querySelector(`.email .error-message`)
            .classList.add('visible');
        email.classList.add('input-error');
        return false;
    } else {
        document.querySelector('.email .error-message').innerHTML = ' ';
        document
            .querySelector(`.email .error-message`)
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
                document.querySelector('.close-button').focus();
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
    console.log(validationMessage.childNodes.length);
}

// Reset form after closing the modal

function resetForm() {
    contactForm.reset();
}
