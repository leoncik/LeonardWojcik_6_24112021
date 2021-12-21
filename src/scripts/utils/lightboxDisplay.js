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

    // Display lighbox and clicked media
    for (const iterator of galleryItems) {
        iterator.addEventListener('click', displayLightbox);
    }
}
