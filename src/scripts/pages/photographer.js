import photographerFactory from '../factories/photographerFactory.js';

// Retrieve the id of the photographer from the URL and convert in number to find It with ".find()" with strict equality
const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id'));

// Fetch photographers profile data
export async function getProfile() {
    try {
        const response = await fetch('../..//src/data/photographers.json');
        const photographerData = await response.json();
        const photographers = photographerData.photographers;
        // Search photographer with It's "ID"
        // TODO display error if photographerProfile is undefined (can't find photographer "ID")
        const photographerProfile = photographers.find(
            (photographer) => parseInt(photographer.id) === urlId
        );
        console.log(photographerProfile);
        return photographerProfile;
    } catch {
        console.log('erreur');
    }
}

// Fetch photographers media data
export async function getMedia() {
    try {
        const response = await fetch('../..//src/data/photographers.json');
        const photographerData = await response.json();
        const photographersMedias = photographerData.media;
        // Filter current photographer medias from data
        const photographerMedias = photographersMedias.filter(
            (element) => element.photographerId === urlId
        );
        console.log(photographerMedias);
        return photographerMedias;
    } catch {
        console.log('erreur');
    }
}

// Display photographer profile data on page
async function displayData(photographerProfile) {
    const photographHeader = document.querySelector('.photographer-info');
    const photographerModel = photographerFactory(photographerProfile);
    const userCardDOM = photographerModel.getProfile();
    photographHeader.appendChild(userCardDOM);
}

// Display photographer medias on page
// ! Currently displays only number of likes of first media
export async function displayMedia(media) {
    const profileHeaderHtml = `<h1>${media[0].likes}</h1>`;

    const photographHeader = document.querySelector('.photographer-medias');
    photographHeader.innerHTML = profileHeaderHtml;
}

// Initialize page (fetch data, then display It on the page)
export default async function initPhotographer() {
    const profiles = await getProfile();
    const medias = await getMedia();
    displayData(profiles);
    displayMedia(medias);
}
