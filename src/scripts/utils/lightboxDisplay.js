import { lightbox, currentMedia } from '../utils/helpers.js';

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

    // Display lighbox and clicked media
    for (const iterator of galleryItems) {
        iterator.addEventListener('click', () => {
            displayLightbox();
            const mediaSrc = iterator.querySelector('.media').src;
            // TEST if mediatype = image, create img tag (if not already here)
            if (mediaSrc.split('.').pop() === 'jpg') {
                document.querySelector(
                    '.current-media-factory-method'
                ).innerHTML = ' ';
                const imageTag = document.createElement('img');
                document
                    .querySelector('.current-media-factory-method')
                    .appendChild(imageTag);
                imageTag.src = mediaSrc;
            } else if (mediaSrc.split('.').pop() === 'mp4') {
                document.querySelector(
                    '.current-media-factory-method'
                ).innerHTML = ' ';
                const videoTag = document.createElement('video');
                document
                    .querySelector('.current-media-factory-method')
                    .appendChild(videoTag);
                videoTag.src = mediaSrc;
            }
            currentMedia.src = mediaSrc;
        });
    }
}
