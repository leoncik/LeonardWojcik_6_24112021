// Photographer profile scripts
import photographerFactory from '../factories/photographerFactory.js';
import mediaFactory from '../factories/mediaFactory.js';
import { fetchPhotographers } from '../api/api.js';

// Contact form scripts
import { modalDisplay } from '../utils/contactFormDisplay';
import { formSubmitValidation } from '../utils/contactFormValidation';

const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id'));

async function getProfile(elt) {
    // Search photographer with It's "ID"
    // TODO display error if photographerProfile is undefined (can't find photographer "ID")
    const photographerProfile = elt.find(
        (photographer) => parseInt(photographer.id) === urlId
    );
    return photographerProfile;
}

// Display photographer profile data on page
async function displayData(photographerProfile) {
    const photographHeader = document.querySelector('.photographer-info');
    const photographerModel = photographerFactory(photographerProfile);
    const userCardDOM = photographerModel.getProfile();
    photographHeader.appendChild(userCardDOM);
}

// Retrieve media
async function getMedia(elt) {
    // Filter current photographer medias from data
    const photographerMedias = elt.filter(
        (element) => element.photographerId === urlId
    );
    return photographerMedias;
}

// Display photographer medias on page
// TODO : remove display rules from factory and put them here.
export async function displayMedia(media) {
    const photographHeader = document.querySelector('.photographer-medias');
    media.forEach((element) => {
        const photographerMedias = mediaFactory(element);
        const userMedia = photographerMedias.getPhotographerData();
        photographHeader.appendChild(userMedia);
    });
}

// Enable like toggler
async function enableLikeToggler(media) {
    mediaFactory(media).likeToggler();
}

// Display total likes (is async necessary ?)
async function displayTotalLikes(media) {
    const totalLikesContainer = document.querySelector('.total-likes');
    const totalLikes = mediaFactory(media).findTotalLikes(media);
    totalLikesContainer.innerHTML = totalLikes;
}

// Enable lightbox
async function enableLightbox(media) {
    mediaFactory(media).lightboxDisplay();
    mediaFactory(media).lightboxControls(media);
}

// Enable media sorting
async function enableSortMedias(media) {
    mediaFactory(media).sortMedias(media);
}

// DROPDOWN MENU

// Display options of the dropdown menu (except the active one)
const dropdownInput = document.querySelector('#dropdown-input');
const dropdownArrow = document.querySelector('svg.dropdown-arrow:nth-child(2)');
const enableSortMenuDropdown = () => {
    dropdownInput.addEventListener('click', () => {
        const notActiveButtons = document.querySelectorAll(
            '.dropdown-options button:not(.active)'
        );
        for (const iterator of notActiveButtons) {
            iterator.classList.toggle('wrapped');
        }
        // Toggle arrow
        dropdownInput.classList.toggle('dropdown-expanded');
        dropdownArrow.classList.toggle('dropdown-arrow');
        dropdownArrow.classList.toggle('dropdown-arrow_rotate');
        // Give appropriate border-radius to the last element of the dropdown menu
        // ? Could It be done with one line ? document.querySelector('sort-button:last-child:not(.active').style.borderRadius = "20px";
        resetLastButton();
        const notActiveButtons2 = document.querySelectorAll(
            '.sort-button:not(.active'
        );
        const lastNotActiveButton =
            notActiveButtons2[notActiveButtons2.length - 1];
        lastNotActiveButton.classList.add('last-dropdown-option');
        // ARIA
        setAriaExpanded();
    });
};

// Reset active buttons
const resetActive = () => {
    for (const iterator of sortButtons) {
        iterator.classList.remove('active');
    }
};

// Reset last expanded button
const resetLastButton = () => {
    for (const iterator of sortButtons) {
        iterator.classList.remove('last-dropdown-option');
    }
};

// Close dropdown menu
const closeDropdown = () => {
    const notActiveButtons = document.querySelectorAll(
        '.dropdown-options button:not(.active)'
    );
    for (const iterator of notActiveButtons) {
        iterator.classList.add('wrapped');
    }
    dropdownInput.classList.remove('dropdown-expanded');
    dropdownArrow.classList.toggle('dropdown-arrow');
    dropdownArrow.classList.toggle('dropdown-arrow_rotate');
    // ARIA
    setAriaExpanded();
};

// Set sort option value to dropdown-input and close dropdown menu
const inputButton = document.querySelector('#dropdown-input');
const sortButtons = document.querySelectorAll('.sort-button');
for (const iterator of sortButtons) {
    iterator.addEventListener('click', () => {
        resetActive();
        iterator.classList.add('active');
        inputButton.value = iterator.value;
        closeDropdown();
        // ARIA
        const activeId = iterator.id;
        dropdownInput.setAttribute('aria-activedescendant', `${activeId}`);
    });
}

const setAriaExpanded = () => {
    if (dropdownInput.matches('.dropdown-expanded')) {
        dropdownInput.setAttribute('aria-expanded', 'true');
    } else {
        dropdownInput.setAttribute('aria-expanded', 'false');
    }
};

// Initialize page (fetch data, then display It on the page and add behaviour to contact modal)
export default async function initPhotographer() {
    const { photographers, media } = await fetchPhotographers();
    const profiles = await getProfile(photographers);
    const medias = await getMedia(media);
    displayData(profiles);
    displayMedia(medias);
    displayTotalLikes(medias);
    modalDisplay();
    formSubmitValidation();
    enableLightbox(medias);
    enableLikeToggler(medias);
    enableSortMedias(medias);
    enableSortMenuDropdown();
}
