import { displayLog } from './pages/TEST.js';

// IMPORT FUNCTIONS

// Home page functions
// import photographerFactory from './factories/photographer.js';
/* eslint-disable */
import { getPhotographers } from './pages/home.js';
/* eslint-enable */
// import displayData from './pages/home.js';
// import init from './pages/home.js';

// Photographer page functions
// import getProfile from './pages/photographer.js';
// import getMedia from './pages/photographer.js';
// import displayDataProfile from './pages/photographer.js';
// import displayMedia from './pages/photographer.js';
// import initPhotographer from './pages/photographer.js';

// CALL FUNCTIONS

const main = async () => {
    console.log('test');
    await displayLog();

    /*
    switch (window.location.pathname) {
      case '/index.html':
        await photographerFactory();
        await getPhotographers();
        await displayData();
        await init();
        break;
      case '/pages/photographer.html':
        await getProfile();
        await getMedia();
        await displayDataProfile();
        await displayMedia();
        await initPhotographer();
        break;
      default:
          console.log("ERREUR");
    } */
};

main();
