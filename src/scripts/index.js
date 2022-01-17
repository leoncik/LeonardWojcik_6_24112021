// IMPORT FUNCTIONS

// Home page
import { initHome } from './pages/home.js';

// Photographer page
import initPhotographer from './pages/photographer.js';

// CALL FUNCTIONS

const main = async () => {
    switch (window.location.pathname) {
        case '/':
        case '/index.html':
        case '/LeonardWojcik_6_24112021/':
            await initHome();
            break;
        case '/pages/photographer-pages/photographer.html':
        case '/LeonardWojcik_6_24112021/pages/photographer-pages/photographer.html':
            await initPhotographer();
            break;
    }
};

main();
