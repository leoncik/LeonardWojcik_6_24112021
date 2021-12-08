/*
! Import not working, needs to be fixed
 import photographerFactory from './src/scripts/factories/photographer.js'; */

// ! Beginning of temporary code. Need to use "import" instead
/* 
! Code used for "Method 1 only "
function photographerFactory(data) {
    const { name, city, tagline, price, id, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        // Redirection link
        const photographerLink = document.createElement('a');
        photographerLink.setAttribute(
            'href',
            `./pages/photographer-pages/photographer.html?id=${id}`
        );
        article.appendChild(photographerLink);

        // Profile picture
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        photographerLink.appendChild(img);

        // Photographer name
        const h2 = document.createElement('h2');
        h2.textContent = name;
        photographerLink.appendChild(h2);

        // Location
        const location = document.createElement('p');
        location.textContent = city;
        article.appendChild(location);

        // Motto
        const motto = document.createElement('p');
        motto.textContent = tagline;
        article.appendChild(motto);

        // Pricing
        const pricing = document.createElement('p');
        pricing.textContent = price;
        article.appendChild(pricing);

        return article;
    }
    return { name, picture, city, tagline, id, price, getUserCardDOM };
} */

// ! End of temporary code.

// Retrieve the id of the photographer from the URL and convert in number to find It with ".find()" with strict equality
const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id'));

// Fetch photographers profile data
async function getProfile() {
    try {
        const response = await fetch('../..//src/data/photographers.json');
        const photographerData = await response.json();
        const photographers = photographerData.photographers;
        // Search photographer with It's "ID"
        // TODO display error if photographerProfile is undefined (can't find photographer "ID")
        const photographerProfile = photographers.find(
            (element) => parseInt(element.id) === urlId
        );
        console.log(photographerProfile);
        return photographerProfile;
    } catch {
        console.log('erreur');
    }
}

// Fetch photographers media data
async function getMedia() {
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

/*  
? Display Method 1
// Display photographer profile data on page
async function displayData(photographerProfile) {
    const photographHeader = document.querySelector('.photographer-info');
    const photographerModel = photographerFactory(photographerProfile);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographHeader.appendChild(userCardDOM);
} */

// ? Display Method 2
// Display photographer profile data on page
async function displayData(profile) {
    const profileHeaderHtml = `<img src="/assets/photographers/${profile.portrait}">
    <h1>${profile.name}</h1>
    <h2>${profile.city} ${profile.country}</h2>
    <p>${profile.tagline}</p>`;

    const photographHeader = document.querySelector('.photographer-info');
    photographHeader.innerHTML = profileHeaderHtml;
}

// Display photographer medias on page
// ! Currently displays only number of likes of first media
async function displayMedia(media) {
    const profileHeaderHtml = `<h1>${media[0].likes}</h1>`;

    const photographHeader = document.querySelector('.photographer-medias');
    photographHeader.innerHTML = profileHeaderHtml;
}

// Initialize page (fetch data, then display It on the page)
async function init() {
    const profiles = await getProfile();
    const medias = await getMedia();
    displayData(profiles);
    displayMedia(medias);
}

init();
