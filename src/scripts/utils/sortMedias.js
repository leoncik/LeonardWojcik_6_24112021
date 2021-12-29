// Note : dans mon git add ne pas ajouter "likeCounter", je n'ai mis qu'un commentaire.
// TODO : try to refactor using orgiments. E.g : genericSort(type){...}
import {
    popularityButton,
    dateButton,
    titleButton,
    emptyGallery,
} from '../utils/helpers.js';
import { displayMedia } from '../pages/photographer.js';
import { likeToggler } from './likeCounters.js';
import { lightboxDisplay } from './lightboxDisplay.js';
import { lightboxControls } from './lightboxControl.js';

export function sortMedias(media) {
    // Sort by popularity
    const sortByPopularity = () => {
        media.sort((a, b) => {
            return a.likes - b.likes;
        });
        emptyGallery();
        displayMedia(media);
        // TODO : needs refactoring. After displaying media, lightbox control and likes toggler needs to be reset
        likeToggler();
        lightboxDisplay();
        lightboxControls(media);
        console.log('Sorted by popularity');
    };

    // Sort by date
    const sortByDate = () => {
        console.log('Sorted by date');
    };

    // Sort by title
    const sortByTitle = () => {
        console.log('Sorted by title');
    };

    popularityButton.addEventListener('click', sortByPopularity);
    dateButton.addEventListener('click', sortByDate);
    titleButton.addEventListener('click', sortByTitle);
}
