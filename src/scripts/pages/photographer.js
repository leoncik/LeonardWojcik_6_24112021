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
const sortButtons = document.querySelectorAll('.sort-button');

// Reset order of buttons
const resetOrder = () => {
    for (const iterator of sortButtons) {
        iterator.style.order = 0;
        iterator.classList.remove('active');
    }
};

// Change order of buttons on click
for (const iterator of sortButtons) {
    iterator.addEventListener('click', () => {
        resetOrder();
        iterator.style.order = -1;
        iterator.classList.add('active');
        expendDropDownMenu();
    });
}

const expand = () => {
    for (const iterator of sortButtons) {
        // iterator.classList.toggle('wrapped'); serait mieux
        iterator.classList.remove('wrapped');
    }
};

/*
const unexpand = () => {
    for (const iterator of sortButtons) {
        // iterator.classList.toggle('wrapped'); serait mieux
        iterator.classList.add('wrapped'); 
    }
} */

// Expand or unexpand
const expendDropDownMenu = () => {
    for (const iterator of sortButtons) {
        if (iterator.matches('.active')) {
            expand();
        }
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
}
