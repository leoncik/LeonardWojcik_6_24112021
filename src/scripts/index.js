// IMPORT FUNCTIONS

// Home page
import { init } from './pages/home.js';

// Photographer page
import initPhotographer from './pages/photographer.js';

// CALL FUNCTIONS

const main = async () => {
    switch (window.location.pathname) {
        case '/':
        case '/index.html':
            await init();
            break;
        case '/pages/photographer-pages/photographer.html':
            await initPhotographer();
            break;
        default:
            console.log(window.location.pathname);
            console.log('ERREUR');
    }
};

main();
