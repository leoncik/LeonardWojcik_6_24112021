import { currentMedia, previousButton, nextButton } from '../utils/helpers.js';

// ? Is It possible to retrieve all src ?
// const imagesSrc = document.querySelectorAll('img').src;

// ? Check why It is not getting all photographer images
const imagesList = document.querySelectorAll('img');
console.log(imagesList);
const imagesSrc = [];

// Make an array with the "src" of all images
export const imagesSrcList = () => {
    for (const iterator of imagesList) {
        imagesSrc.push(iterator.src);
    }
    console.log(imagesSrc);
};

export const lightboxControls = () => {
    const previousMedia = () => {
        const currentIndex = imagesSrc[0];
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            return imagesSrc[imagesSrc.length - 1];
        } else {
            return imagesSrc[currentIndex - 1];
        }
    };

    const nextMedia = () => {
        console.log(imagesSrc);
        // let currentIndex = imagesSrc[0];
        let currentIndex = 0;
        // If at the end of the array, go to the beginning of the array
        if ((currentIndex = imagesSrc.length - 1)) {
            currentIndex = 0;
            console.log(imagesSrc[0]);
            currentMedia.src = imagesSrc[currentIndex];
            // return imagesSrc[0];
        } else {
            currentIndex++;
            currentMedia.src = imagesSrc[currentIndex];
            // console.log(imagesSrc[currentIndex + 1]);
        }
    };

    previousButton.addEventListener('click', previousMedia);
    nextButton.addEventListener('click', nextMedia);
};
