import photographerFactory from '../factories/photographerFactory.js';
import mediaFactory from '../factories/mediaFactory.js';

// Retrieve profile
import { photographersData } from '../api/api.js';

const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id'));

function getProfile() {
    const photographers = photographersData.photographers;
    // Search photographer with It's "ID"
    // TODO display error if photographerProfile is undefined (can't find photographer "ID")
    const photographerProfile = photographers.find(
        (photographer) => parseInt(photographer.id) === urlId
    );
    console.log(photographerProfile);
    console.log(photographerProfile.name.split(' ').slice(0, -1).join(' '));
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
function getMedia() {
    const photographersMedias = photographersData.media;
    // Filter current photographer medias from data
    const photographerMedias = photographersMedias.filter(
        (element) => element.photographerId === urlId
    );
    console.log(photographerMedias);
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

// Initialize page (fetch data, then display It on the page)
export default async function initPhotographer() {
    const profiles = getProfile();
    const medias = await getMedia();
    displayData(profiles);
    displayMedia(medias);
}
