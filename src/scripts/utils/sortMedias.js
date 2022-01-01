// TODO : try to refactor using arguments. E.g : genericSort(type){...}
import {
    popularityButton,
    dateButton,
    titleButton,
    emptyGallery,
} from '../utils/helpers.js';
import { displayMedia } from '../pages/photographer.js';
// import { likeToggler } from './likeCounters.js';
// import { lightboxDisplay } from './lightboxDisplay.js';
// import { lightboxControls } from './lightboxControl.js';

export function sortMedias(media) {
    // Sort by popularity
    const sortByPopularity = () => {
        media.sort((a, b) => {
            return a.likes - b.likes;
        });
        emptyGallery();
        displayMedia(media);
        // TODO : needs refactoring. After displaying media, lightbox control and likes toggler needs to be reset
        // likeToggler();
        // lightboxDisplay();
        // lightboxControls(media);
        console.log('Sorted by popularity');
    };

    // Sort by Date
    const sortByDate = () => {
        media.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        });
        emptyGallery();
        displayMedia(media);
        // likeToggler();
        // lightboxDisplay();
        // lightboxControls(media);
        console.log('Sorted by date');
    };

    // Sort by title
    const sortByTitle = () => {
        media.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            /*
        ? Is it better to write :
        let titleA = a.firstName.toLowerCase(),
        titleB = b.firstName.toLowerCase();
        */

            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });
        emptyGallery();
        displayMedia(media);
        // likeToggler();
        // lightboxDisplay();
        // lightboxControls(media);
        console.log('Sorted by title');
    };

    popularityButton.addEventListener('click', sortByPopularity);
    dateButton.addEventListener('click', sortByDate);
    titleButton.addEventListener('click', sortByTitle);
}
