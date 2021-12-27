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

export const lightboxControls = (media) => {
    getImagesSrc(media);
    getMediaIndex();

    const previousMedia = () => {
        console.log(currentIndex);
        document.querySelector('.current-media').innerHTML = ' ';
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            currentIndex = mediasSrc.length - 1;
            // Create proper tag according to media extension
            if (mediasSrc[currentIndex].split('.').pop() === 'jpg') {
                const imageTag = document.createElement('img');
                document.querySelector('.current-media').appendChild(imageTag);
            } else if (mediasSrc[currentIndex].split('.').pop() === 'mp4') {
                const videoTag = document.createElement('video');
                document.querySelector('.current-media').appendChild(videoTag);
            }
            let currentMedia = document.querySelector('.current-media > *');
            currentMedia.src = mediasSrc[currentIndex];
        } else {
            currentIndex--;
            // Create proper tag according to media extension
            if (mediasSrc[currentIndex].split('.').pop() === 'jpg') {
                const imageTag = document.createElement('img');
                document.querySelector('.current-media').appendChild(imageTag);
            } else if (mediasSrc[currentIndex].split('.').pop() === 'mp4') {
                const videoTag = document.createElement('video');
                document.querySelector('.current-media').appendChild(videoTag);
            }
            let currentMedia = document.querySelector('.current-media > *');
            currentMedia.src = mediasSrc[currentIndex];
        }
    };

    const nextMedia = () => {
        console.log(currentIndex);
        document.querySelector('.current-media').innerHTML = ' ';
        // If at the end of the array, go to the beginning of the array
        if (currentIndex === mediasSrc.length - 1) {
            currentIndex = 0;
            // Create proper tag according to media extension
            if (mediasSrc[currentIndex].split('.').pop() === 'jpg') {
                const imageTag = document.createElement('img');
                document.querySelector('.current-media').appendChild(imageTag);
            } else if (mediasSrc[currentIndex].split('.').pop() === 'mp4') {
                const videoTag = document.createElement('video');
                document.querySelector('.current-media').appendChild(videoTag);
            }
            let currentMedia = document.querySelector('.current-media > *');
            currentMedia.src = mediasSrc[currentIndex];
        } else {
            currentIndex++;
            // Create proper tag according to media extension
            if (mediasSrc[currentIndex].split('.').pop() === 'jpg') {
                const imageTag = document.createElement('img');
                document.querySelector('.current-media').appendChild(imageTag);
            } else if (mediasSrc[currentIndex].split('.').pop() === 'mp4') {
                const videoTag = document.createElement('video');
                document.querySelector('.current-media').appendChild(videoTag);
            }
            let currentMedia = document.querySelector('.current-media > *');
            currentMedia.src = mediasSrc[currentIndex];
        }
    };

    previousButton.addEventListener('click', previousMedia);
    nextButton.addEventListener('click', nextMedia);
};
