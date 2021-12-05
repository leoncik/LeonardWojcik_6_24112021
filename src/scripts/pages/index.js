import photographerFactory from '../factories/photographer.js';

async function getPhotographers() {
    // Fetch data
    const response = await fetch('./srrc/data/photographers.json');
    try {
        const photographerData = await response.json();
        // Save photographer list (type array)
        const photographers = photographerData.photographers;
        console.log(photographers);
        // Photographer list (type object)
        console.log({ photographers });
        return { photographers };
    } catch {
        document
            .getElementsByClassName('api-error')[0]
            .insertAdjacentHTML(
                'beforeend',
                'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.'
            );
    }
}
async function displayData(photographers) {
    const photographersSection = document.querySelector(
        '.photographer_section'
    );

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
