import { currentMedia, previousButton, nextButton } from '../utils/helpers.js';

// TODO : remove currentIndex = 0; and set It's value to the index of the clicked media (lightboxDisplay.js)
// ? Is It possible to retrieve all src ?
// const mediasSrc = document.querySelectorAll('img').src;

let mediaList = [];
const mediasSrc = [];

// Make an array with the "src" of all images
window.setTimeout(function getmediasSrc() {
    mediaList = document.querySelectorAll('.media');
    console.log(mediaList);
    for (const iterator of mediaList) {
        mediasSrc.push(iterator.src);
    }
    console.log(mediasSrc);
}, 3000);

let currentIndex = 0;
export const lightboxControls = () => {
    const previousMedia = () => {
        console.log(currentIndex);
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
