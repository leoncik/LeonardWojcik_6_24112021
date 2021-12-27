import {
    // currentMedia,
    previousButton,
    nextButton,
    getParam,
} from '../utils/helpers.js';

let mediasSrc = [];
const urlId = parseInt(getParam('id'));

const getImagesSrc = (media) => {
    return media
        .filter((element) => element.photographerId === urlId)
        .map((img) => {
            mediasSrc = [...mediasSrc, `/assets/images/${urlId}/${img.image}`];
            // return value required by linter : « Array.prototype.map() expects a return value from arrow function »
            return mediasSrc;
        });
};

// Get the index of the clicked media
let currentIndex;
const getMediaIndex = () => {
    const galleryItems = document.querySelectorAll(
        '.photographer-medias article'
    );

    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener('click', () => {
            currentIndex = i;
            console.log(currentIndex);
        });
    }
};

export const lightboxControls = (media) => {
    getImagesSrc(media);
    getMediaIndex();

    const previousMedia = () => {
        console.log(currentIndex);
        const currentMedia = document.querySelector('.current-media > *');
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            currentIndex = mediasSrc.length - 1;
            currentMedia.src = mediasSrc[currentIndex];
        } else {
            currentIndex--;
            currentMedia.src = mediasSrc[currentIndex];
        }
    };

    const nextMedia = () => {
        const currentMedia = document.querySelector('.current-media > *');
        console.log(currentIndex);
        // If at the end of the array, go to the beginning of the array
        if (currentIndex === mediasSrc.length - 1) {
            currentIndex = 0;
            currentMedia.src = mediasSrc[currentIndex];
        } else {
            currentIndex++;
            currentMedia.src = mediasSrc[currentIndex];
        }
    };

    previousButton.addEventListener('click', previousMedia);
    nextButton.addEventListener('click', nextMedia);
};
