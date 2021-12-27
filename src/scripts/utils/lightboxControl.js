import {
    previousButton,
    nextButton,
    getParam,
    emptyMediaContainer,
} from '../utils/helpers.js';

let mediasSrc = [];
const urlId = parseInt(getParam('id'));

const getImagesSrc = (media) => {
    return media
        .filter((element) => element.photographerId === urlId)
        .map((media) => {
            mediasSrc = [
                ...mediasSrc,
                `/assets/images/${urlId}/${media.image || media.video}`,
            ];
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

// Create proper tag according to media extension
const setMediaTag = () => {
    if (mediasSrc[currentIndex].split('.').pop() === 'jpg') {
        const imageTag = document.createElement('img');
        document.querySelector('.current-media').appendChild(imageTag);
    } else if (mediasSrc[currentIndex].split('.').pop() === 'mp4') {
        const videoTag = document.createElement('video');
        document.querySelector('.current-media').appendChild(videoTag);
    }
};

const setMediaSrc = () => {
    const currentMedia = document.querySelector('.current-media > *');
    currentMedia.src = mediasSrc[currentIndex];
}

export const lightboxControls = (media) => {
    getImagesSrc(media);
    getMediaIndex();

    const previousMedia = () => {
        console.log(currentIndex);
        emptyMediaContainer();
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            currentIndex = mediasSrc.length - 1;
            setMediaTag();
            setMediaSrc();
        } else {
            currentIndex--;
            setMediaTag();
            setMediaSrc();
        }
    };

    const nextMedia = () => {
        console.log(currentIndex);
        emptyMediaContainer();
        // If at the end of the array, go to the beginning of the array
        if (currentIndex === mediasSrc.length - 1) {
            currentIndex = 0;
            setMediaTag();
            setMediaSrc();
        } else {
            currentIndex++;
            setMediaTag();
            setMediaSrc();
        }
    };

    previousButton.addEventListener('click', previousMedia);
    nextButton.addEventListener('click', nextMedia);
};
