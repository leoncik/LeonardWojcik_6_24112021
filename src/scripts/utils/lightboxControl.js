import { currentMedia, previousButton, nextButton } from '../utils/helpers.js';

// ? Is It possible to retrieve all src ?
// const imagesSrc = document.querySelectorAll('img').src;

let imagesList = [];
const imagesSrc = [];

// Make an array with the "src" of all images
window.setTimeout(function getImagesSrc() {
    imagesList = document.querySelectorAll('.photographer-medias img');
    console.log(imagesList);
    for (const iterator of imagesList) {
        imagesSrc.push(iterator.src);
    }
    console.log(imagesSrc);
}, 3000);

let currentIndex = 0;
export const lightboxControls = () => {
    const previousMedia = () => {
        console.log(currentIndex);
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            currentIndex = imagesSrc.length - 1;
            currentMedia.src = imagesSrc[currentIndex];
        } else {
            currentIndex--;
            currentMedia.src = imagesSrc[currentIndex];
        }
    };

    const nextMedia = () => {
        console.log(currentIndex);
        // If at the end of the array, go to the beginning of the array
        if (currentIndex === imagesSrc.length - 1) {
            currentIndex = 0;
            currentMedia.src = imagesSrc[currentIndex];
        } else {
            currentIndex++;
            currentMedia.src = imagesSrc[currentIndex];
        }
    };

    previousButton.addEventListener('click', previousMedia);
    nextButton.addEventListener('click', nextMedia);
};
