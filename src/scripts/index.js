// IMPORT FUNCTIONS

// Home page
import { initHome } from './pages/home.js';

// Photographer page
import initPhotographer from './pages/photographer.js';

// CALL FUNCTIONS

const main = async () => {
    switch (window.location.pathname.split('/').pop()) {
        case '':
        case 'index.html':
            await initHome();
            break;
        case 'photographer.html':
            await initPhotographer();
            break;
    }
};

main();
