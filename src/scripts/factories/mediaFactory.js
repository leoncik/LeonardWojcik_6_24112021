import {
    lightbox,
    previousButton,
    nextButton,
    popularityButton,
    dateButton,
    titleButton,
    emptyHtmlElement,
    focusTrap,
} from '../utils/helpers.js';

import { displayMedia } from '../pages/photographer';

const params = new URL(document.location).searchParams;
const urlId = params.get('id');
let totalOfLikes = 0;
let mediasSrc = [];
let mediasTitle = [];
let currentIndex;

export default function mediaFactory(data) {
    const { id, price, title, date, image, video, likes, altText } = data;

    const imageSource = `../../assets/medias/${urlId}/medium/${image}`;
    const videoSource = `../../assets/medias/${urlId}/original/${video}`;

    // -----------------------------
    // OBJECTS CREATION TEMPLATE
    // ------------------------------

    function getPhotographerData() {
        const article = document.createElement('article');
        // Accessibility settings
        article.setAttribute('tabindex', '0');
        article.setAttribute('role', 'button');

        // MEDIA CONTENT
        const mediaContent = document.createElement('div');
        mediaContent.classList.add('media-content');
        article.appendChild(mediaContent);

        // Image / video
        const createMediaDom = (type) => {
            const media = document.createElement(type);
            media.setAttribute(
                'src',
                type === 'img' ? imageSource : videoSource
            );
            media.setAttribute('alt', altText);
            if (type === 'img') media.setAttribute('tabindex', '0');
            media.classList.add('media');
            mediaContent.appendChild(media);
            if (type === 'video')
                media.parentElement.classList.add('video-icon');
        };
        createMediaDom(data.image ? 'img' : 'video');

        // MEDIA DESCRIPTION
        const mediaInfos = document.createElement('div');
        mediaInfos.classList.add('media-description');
        article.appendChild(mediaInfos);

        // Title
        const mediaTitle = document.createElement('h3');
        mediaTitle.textContent = title;
        mediaInfos.appendChild(mediaTitle);

        // Likes container
        const mediaLikesContainer = document.createElement('div');
        mediaLikesContainer.classList.add('likes-container');
        mediaInfos.appendChild(mediaLikesContainer);

        // Likes icon
        const likesIcon = document.createElement('span');
        likesIcon.classList.add('like-icon');
        likesIcon.innerHTML = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
        </svg>`;
        likesIcon.setAttribute('tabindex', '0');
        likesIcon.setAttribute('role', 'button');
        likesIcon.setAttribute('title', "J'aime");
        mediaLikesContainer.appendChild(likesIcon);

        // Number of likes
        const numberOfLikes = document.createElement('span');
        numberOfLikes.textContent = likes;
        mediaLikesContainer.appendChild(numberOfLikes);

        return article;
    }

    // -----------------------------
    // FEATURES
    // ------------------------------

    // LIKES FEATURES

    // Find total of likes
    const findTotalLikes = (media) => {
        for (const iterator of media) {
            totalOfLikes += iterator.likes;
        }
        return totalOfLikes;
    };

    // Toggle like number if user clicks on like icon
    const likeToggler = () => {
        const likeIcon = document.querySelectorAll('.like-icon');
        for (const iterator of likeIcon) {
            // Mouse controls
            iterator.addEventListener('click', () => {
                iterator.nextElementSibling.classList.toggle('liked');
                if (String(iterator.nextElementSibling.classList) === 'liked') {
                    iterator.nextElementSibling.textContent =
                        parseInt(iterator.nextElementSibling.textContent) + 1;
                    totalOfLikes += 1;
                    document.querySelector('.total-likes').textContent =
                        totalOfLikes;
                } else {
                    iterator.nextElementSibling.textContent =
                        parseInt(iterator.nextElementSibling.textContent) - 1;
                    totalOfLikes -= 1;
                    document.querySelector('.total-likes').textContent =
                        totalOfLikes;
                }
            });
            // Keyboard controls
            iterator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    iterator.nextElementSibling.classList.toggle('liked');
                    if (
                        String(iterator.nextElementSibling.classList) ===
                        'liked'
                    ) {
                        iterator.nextElementSibling.textContent =
                            parseInt(iterator.nextElementSibling.textContent) +
                            1;
                        totalOfLikes += 1;
                        document.querySelector('.total-likes').textContent =
                            totalOfLikes;
                    } else {
                        iterator.nextElementSibling.textContent =
                            parseInt(iterator.nextElementSibling.textContent) -
                            1;
                        totalOfLikes -= 1;
                        document.querySelector('.total-likes').textContent =
                            totalOfLikes;
                    }
                }
            });
        }
    };

    // LIGHTBOX FEATURES

    function lightboxDisplay() {
        // Display the lightbox
        function displayLightbox() {
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.getElementById('main').setAttribute('aria-hidden', 'true');
            document
                .getElementById('lightbox-modal')
                .setAttribute('aria-hidden', 'false');
            closeButton.focus();
            focusTrap(lightbox);
        }

        // Close the lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
            document
                .getElementById('main')
                .setAttribute('aria-hidden', 'false');
            document
                .getElementById('lightbox-modal')
                .setAttribute('aria-hidden', 'true');
            popularityButton.focus();
        }

        // Mouse controls
        const closeButton = document.querySelector('.close');
        closeButton.addEventListener('click', closeLightbox);

        // Keyboard controls
        closeButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                closeLightbox();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                closeLightbox();
            }
        });

        // Add tag and src of clicked media
        const displayMedia = (src, title, type) => {
            const currentTag = document.createElement(type);
            currentTag.src = src;
            document.querySelector('.current-media').appendChild(currentTag);
            document.querySelector('.current-image-title span').innerHTML =
                title;
            if (type === 'video') {
                currentTag.setAttribute('controls', '');
            }
        };

        const galleryItems = document.querySelectorAll(
            '.photographer-medias article'
        );

        // Display lightbox and media on click
        for (const iterator of galleryItems) {
            const mediaSrc = iterator.querySelector('.media').src;
            const title = iterator.querySelector(
                '.media-description h3'
            ).innerText;
            iterator.firstChild.addEventListener('click', () => {
                displayLightbox();
                emptyHtmlElement('.current-media');
                if (mediaSrc.split('.').pop() === 'jpg') {
                    return displayMedia(mediaSrc, title, 'img');
                } else if (mediaSrc.split('.').pop() === 'mp4') {
                    return displayMedia(mediaSrc, title, 'video');
                }
            });
        }

        // Display lightbox and media (keyboard control)
        for (const iterator of galleryItems) {
            const mediaSrc = iterator.querySelector('.media').src;
            const title = iterator.querySelector(
                '.media-description h3'
            ).innerText;
            iterator.firstChild.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    displayLightbox();
                    emptyHtmlElement('.current-media');
                    if (mediaSrc.split('.').pop() === 'jpg') {
                        return displayMedia(mediaSrc, title, 'img');
                    } else if (mediaSrc.split('.').pop() === 'mp4') {
                        return displayMedia(mediaSrc, title, 'video');
                    }
                }
            });
        }
    }

    // LIGHTBOX CONTROLS

    // Get the index of the selected media
    const getMediaIndex = () => {
        const galleryItems = document.querySelectorAll('.media-content');

        for (let i = 0; i < galleryItems.length; i++) {
            // Mouse controls
            galleryItems[i].addEventListener('click', () => {
                currentIndex = data.findIndex((d) => d.image === data[i].image);
            });
            // Keyboard controls
            galleryItems[i].addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    currentIndex = data.findIndex(
                        (d) => d.image === data[i].image
                    );
                }
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
            videoTag.setAttribute('controls', '');
        }
    };

    // Set src to current media
    const setMediaSrc = () => {
        const currentMedia = document.querySelector('.current-media > *');
        currentMedia.src = mediasSrc[currentIndex];
    };

    // Get src of all medias
    const getMediasSrc = (media) => {
        return media.map((media) => {
            mediasSrc = [
                ...mediasSrc,
                `../../assets/medias/${urlId}/large/${
                    media.image || media.video
                }`,
            ];
            return mediasSrc;
        });
    };

    // Get title of all medias
    const getMediasTitle = (media) => {
        return media.map((media) => {
            mediasTitle = [...mediasTitle, `${media.title}`];
            return mediasTitle;
        });
    };

    // Set title to current media
    const setTitle = () => {
        const currentTitle = document.querySelector('.current-image-title > *');
        currentTitle.innerText = mediasTitle[currentIndex];
    };

    // LIGHTBOX CONTROL

    // Events when user clicks on "next" and "previous" buttons of the lightbox.
    const lightboxControls = (media) => {
        getMediasSrc(media);
        getMediaIndex();
        getMediasTitle(media);

        const previousMedia = () => {
            emptyHtmlElement('.current-media');
            // If at the beginning of the array, go to the end of the array
            if (currentIndex === 0) {
                currentIndex = data.length - 1;
                setMediaTag();
                setMediaSrc();
                setTitle();
            } else {
                currentIndex--;
                setMediaTag();
                setMediaSrc();
                setTitle();
            }
        };

        const nextMedia = () => {
            emptyHtmlElement('.current-media');
            // If at the end of the array, go to the beginning of the array
            if (currentIndex === data.length - 1) {
                currentIndex = 0;
                setMediaTag();
                setMediaSrc();
                setTitle();
            } else {
                currentIndex++;
                setMediaTag();
                setMediaSrc();
                setTitle();
            }
        };

        // Mouse controls
        previousButton.addEventListener('click', previousMedia);
        nextButton.addEventListener('click', nextMedia);

        // Keyboard controls
        // Previous and next buttons interactions with keyboard
        previousButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                previousMedia();
            }
        });

        nextButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                nextMedia();
            }
        });

        // Previous and next media (prevent controls if lightbox is not displayed)
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && lightbox.style.display === 'block') {
                previousMedia();
            } else if (
                e.key === 'ArrowRight' &&
                lightbox.style.display === 'block'
            ) {
                nextMedia();
            }
        });
    };

    const setLightboxMedias = () => {
        mediasSrc = [];
        mediasTitle = [];
        currentIndex = 0;

        getMediasSrc(data);
        getMediaIndex();
        getMediasTitle(data);
    };

    // SORT MEDIAS

    // Reset gallery after sorting (empty gallery and display medias)
    const resetGallery = (media) => {
        emptyHtmlElement('.photographer-medias');
        displayMedia(media);
    };

    // Re enable like toggler and lightbox after sorting
    const reEnableLikesAndLightbox = () => {
        likeToggler();
        lightboxDisplay();
        setLightboxMedias();
    };

    const sortMedias = (media) => {
        // Sort by popularity
        const sortByPopularity = () => {
            media.sort((a, b) => {
                return b.likes - a.likes;
            });
            resetGallery(media);
            reEnableLikesAndLightbox();
            console.log('Sorted by popularity');
        };

        // Sort by Date
        const sortByDate = () => {
            media.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA - dateB;
            });
            resetGallery(media);
            reEnableLikesAndLightbox();
            console.log('Sorted by date');
        };

        // Sort by title
        const sortByTitle = () => {
            media.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();

                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            });
            resetGallery(media);
            reEnableLikesAndLightbox();
            console.log('Sorted by title');
        };

        popularityButton.addEventListener('click', sortByPopularity);
        dateButton.addEventListener('click', sortByDate);
        titleButton.addEventListener('click', sortByTitle);
    };

    return {
        id,
        price,
        title,
        date,
        image,
        video,
        likes,
        altText,
        getPhotographerData,
        likeToggler,
        findTotalLikes,
        lightboxDisplay,
        lightboxControls,
        getMediaIndex,
        setLightboxMedias,
        sortMedias,
    };
}
