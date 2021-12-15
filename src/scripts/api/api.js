// Fetch photographers data
export async function getPhotographers() {
    try {
        const response = await fetch('./src/data/photographers.json');
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
        console.log(photographerProfile.name.split(' ').slice(0, -1).join(' '));
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

/* REFACTOR TEST FOR FETCHING PHOTOGRAPHER */
export async function fetchPhotographer() {
    try {
        // Fetch data
        const response = await fetch('./src/data/photographers.json');
        const photographerData = await response.json();
        const photographers = photographerData.photographers;

        // Return all photographers if user is on index page
        if (window.location.pathname === '/index.html') {
            return { photographers };
        }
        // Return current photographers if user is on photographer page
        else if (
            window.location.pathname ===
            '/pages/photographer-pages/photographer.html'
        ) {
            const photographerProfile = photographers.find(
                (photographer) => parseInt(photographer.id) === urlId
            );
            return photographerProfile;
        }
    } catch {
        if (window.location.pathname === '/index.html') {
            document
                .getElementsByClassName('api-error')[0]
                .insertAdjacentHTML(
                    'beforeend',
                    'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.'
                );
        } else if (
            window.location.pathname ===
            '/pages/photographer-pages/photographer.html'
        ) {
            console.log("Message d'erreur sur la page photographe...");
        }
    }
}
