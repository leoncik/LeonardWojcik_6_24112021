import photographerFactory from '../factories/photographerFactory.js';
import { fetchPhotographers } from '../api/api.js';

// Display photographers data on page
export async function displayData(photographers) {
    const photographersSection = document.querySelector(
        '.photographer_section'
    );

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer, ``);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

// Initialize page (fetch data, then display It on the page)
export async function initHome() {
    const photographersData = await fetchPhotographers(
        'src/data/photographers.json'
    );
    const photographers = await photographersData.photographers;
    displayData(photographers);
}
