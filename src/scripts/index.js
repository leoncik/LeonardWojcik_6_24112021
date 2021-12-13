// IMPORT FUNCTIONS

// Home page functions
// import photographerFactory from './factories/photographer.js';
// import { getPhotographers } from './pages/home.js';
// import {displayData} from './pages/home.js';
import { init } from './pages/home.js';

// Photographer page functions
// import getProfile from './pages/photographer.js';
// import getMedia from './pages/photographer.js';
// import displayDataProfile from './pages/photographer.js';
// import displayMedia from './pages/photographer.js';
import initPhotographer from './pages/photographer.js';

// CALL FUNCTIONS

const main = async () => {
    console.log(window.location.pathname);

    switch (window.location.pathname) {
        case '/':
        case '/index.html':
            console.log("Page d'accueil");
            await init();
            break;
        case '/pages/photographer-pages/photographer.html':
            console.log('Page de photographe');
            await initPhotographer();
            break;
        default:
            console.log(window.location.pathname);
            console.log('ERREUR');
    }
};

main();
