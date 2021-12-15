// IMPORT FUNCTIONS

// Home page
import { init } from './pages/home.js';

// Photographer page
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
