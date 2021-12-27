import { lightbox } from '../utils/helpers.js';

export function lightboxDisplay() {
    function displayLightbox() {
        lightbox.style.display = 'block';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeLightbox);

    const galleryItems = document.querySelectorAll(
        '.photographer-medias article'
    );

    const displayMedia = (src, type) => {
        const currentTag = document.createElement(type);
        currentTag.src = src;
        document.querySelector('.current-media').appendChild(currentTag);
    };

    const emptyMediaContainer = () => {
        document.querySelector('.current-media').innerHTML = ' ';
    };

    // Display lighbox and clicked media
    for (const iterator of galleryItems) {
        const mediaSrc = iterator.querySelector('.media').src;
        iterator.addEventListener('click', () => {
            displayLightbox();
            emptyMediaContainer();
            if (mediaSrc.split('.').pop() === 'jpg') {
                // ? Why return ?
                return displayMedia(mediaSrc, 'img');
            } else if (mediaSrc.split('.').pop() === 'mp4') {
                // ? It seems to work fine without return...
                displayMedia(mediaSrc, 'video');
            }
        });
    }
}
