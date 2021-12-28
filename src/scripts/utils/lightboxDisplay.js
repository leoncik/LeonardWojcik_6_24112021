import { lightbox, emptyMediaContainer } from '../utils/helpers.js';

export function lightboxDisplay() {
    // Display the lightbox
    function displayLightbox() {
        lightbox.style.display = 'block';
    }

    // Close the lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeLightbox);

    const galleryItems = document.querySelectorAll('.media-content');

    // Add tag and src of clicked media
    const displayMedia = (src, type) => {
        const currentTag = document.createElement(type);
        currentTag.src = src;
        document.querySelector('.current-media').appendChild(currentTag);
    };

    // Display lighbox and clicked media
    for (const iterator of galleryItems) {
        const mediaSrc = iterator.querySelector('.media').src;
        iterator.addEventListener('click', () => {
            displayLightbox();
            emptyMediaContainer();
            if (mediaSrc.split('.').pop() === 'jpg') {
                return displayMedia(mediaSrc, 'img');
            } else if (mediaSrc.split('.').pop() === 'mp4') {
                return displayMedia(mediaSrc, 'video');
            }
        });
    }
}
