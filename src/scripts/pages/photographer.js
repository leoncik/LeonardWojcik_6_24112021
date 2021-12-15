import photographerFactory from '../factories/photographerFactory.js';
import mediaFactory from '../factories/mediaFactory.js';

import { getProfile , getMedia } from '../api/api.js';

/*
? Ces constantes doivent être déclarées dans "api.js" et non dans ce fichier, sinon les médias ne s'affichent pas.
? Essayer de comprendre pourquoi.
const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id')); */

// Display photographer profile data on page
async function displayData(photographerProfile) {
    const photographHeader = document.querySelector('.photographer-info');
    const photographerModel = photographerFactory(photographerProfile);
    const userCardDOM = photographerModel.getProfile();
    photographHeader.appendChild(userCardDOM);
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
    const profiles = await getProfile();
    const medias = await getMedia();
    displayData(profiles);
    displayMedia(medias);
}
