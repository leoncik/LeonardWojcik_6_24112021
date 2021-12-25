import {
    currentMedia,
    previousButton,
    nextButton,
    getParam,
} from '../utils/helpers.js';

// TODO : remove currentIndex = 0; and set It's value to the index of the clicked media (lightboxDisplay.js)

let mediasSrc = [];
const urlId = parseInt(getParam('id'));

const getImagesSrc = (media) => {
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time?rq=1
    // const images = media.reduce((mediasSrc, image) => {
    //     if (image.photographerId === urlId) {
    //         mediasSrc.push(`assets/images/${urlId}/${image.image}`);
    //     }
    //     return mediasSrc;
    // }, []);

    return media
        .filter((element) => element.photographerId === urlId)
        .map((img) => {
            mediasSrc = [...mediasSrc, `/assets/images/${urlId}/${img.image}`];
            // return value required by linter : « Array.prototype.map() expects a return value from arrow function »
            return mediasSrc;
        });
};

let currentIndex = 0;
export const lightboxControls = (media) => {
    getImagesSrc(media);

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
