// Retrieve the id of the photographer from the URL and convert in number to find It with ".find()" with strict equality
const params = new URL(document.location).searchParams;
const urlId = parseInt(params.get('id'));
console.log(`The Id of this photographer is ${urlId}`);

// Fetch photographers profile data
async function getProfile() {
    try {
        const response = await fetch('/src/data/photographers.json');
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

// Display photographer profile data on page
async function displayData(profile) {
    const photographHeader = document.querySelector('.photograph-header');
    photographHeader.innerHTML = `${profile.name} ${profile.city} ${profile.country} ${profile.tagline}`;
}

// Initialize page (fetch data, then display It on the page)
async function init() {
    const profiles = await getProfile();
    displayData(profiles);
}

init();
