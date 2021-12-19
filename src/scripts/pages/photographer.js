// Photographer profile scripts
import photographerFactory from '../factories/photographerFactory.js';
import mediaFactory from '../factories/mediaFactory.js';
import { fetchPhotographers } from '../api/api.js';

// Contact form scripts
import { modalDisplay } from '../utils/contactFormDisplay';
import { formSubmitValidation } from '../utils/contactFormValidation';

const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id'));

async function getProfile() {
    const photographersData = await fetchPhotographers();
    const photographers = photographersData.photographers;
    // Search photographer with It's "ID"
    // TODO display error if photographerProfile is undefined (can't find photographer "ID")
    const photographerProfile = photographers.find(
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
async function getMedia() {
    const photographersData = await fetchPhotographers();
    const photographersMedias = photographersData.media;
    // Filter current photographer medias from data
    const photographerMedias = photographersMedias.filter(
        (element) => element.photographerId === urlId
    );
    return photographerMedias;
}

// Display photographer medias on page
export async function displayMedia(media) {
    const photographHeader = document.querySelector('.photographer-medias');
    media.forEach((element) => {
        const photographerMedias = mediaFactory(element);
        const userMedia = photographerMedias.getPhotographerData();
        photographHeader.appendChild(userMedia);
    });
}

// Initialize page (fetch data, then display It on the page and add behaviour to contact modal)
export default async function initPhotographer() {
    const profiles = await getProfile();
    const medias = await getMedia();
    displayData(profiles);
    displayMedia(medias);
    modalDisplay();
    formSubmitValidation();
}
