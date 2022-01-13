import {
    lightbox,
    emptyMediaContainer,
    previousButton,
    nextButton,
    popularityButton,
    dateButton,
    titleButton,
    emptyGallery,
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

    const imageSource = `/assets/images/${urlId}/${image}`;
    const videoSource = `/assets/images/${urlId}/${video}`;

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

        /* 
        TODO : refactor media creation. This should replace all the section starting with "// Image / video"
        const createMediaDom = (type) => {
            const media = document.createElement(type);
            media.setAttribute("src", imageSource);
            media.classList.add("media");
            mediaContent.appendChild(media);
        }

        createMediaDom(data.image ? 'img' : 'video');
        */

        // Image / video
        if (data.image) {
            // Profile picture
            const mediaPicture = document.createElement('img');
            mediaPicture.setAttribute('src', imageSource);
            mediaPicture.setAttribute('alt', altText);
            mediaPicture.setAttribute('tabindex', '0');
            mediaPicture.classList.add('media');
            mediaContent.appendChild(mediaPicture);
        } else if (data.video) {
            const mediaVideo = document.createElement('video');
            mediaVideo.setAttribute('src', videoSource);
            mediaVideo.setAttribute('alt', altText);
            // mediaVideo.setAttribute('controls', '');
            mediaVideo.classList.add('media');
            mediaContent.appendChild(mediaVideo);
        }

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
                emptyMediaContainer();
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
                    emptyMediaContainer();
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

    // Get the index of the clicked media
    const getMediaIndex = () => {
        const galleryItems = document.querySelectorAll('.media-content');

        for (let i = 0; i < galleryItems.length; i++) {
            galleryItems[i].addEventListener('click', () => {
                currentIndex = data.findIndex((d) => d.image === data[i].image);
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
                `/assets/images/${urlId}/${media.image || media.video}`,
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
            emptyMediaContainer();
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
            emptyMediaContainer();
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
        // ! Bug: needs to be run twice or sort medias before working
        previousButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                previousMedia();
            }
        });

        // ! Bug: needs to be run twice or sort medias before working
        nextButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                nextMedia();
            }
        });

        // ! Prevent controls if lightbox is not displayed
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                previousMedia();
            } else if (e.key === 'ArrowRight') {
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

    // TODO : prevent sorting if dropdown select menu if closed or if the same sorting method is used twice
    // TODO : try to refactor using arguments. E.g : genericSort(type){...}
    const sortMedias = (media) => {
        // Sort by popularity
        const sortByPopularity = () => {
            media.sort((a, b) => {
                return b.likes - a.likes;
            });
            emptyGallery();
            displayMedia(media);
            // TODO : needs refactoring. After displaying media, lightbox control and likes toggler needs to be reset
            likeToggler();
            lightboxDisplay();
            setLightboxMedias();
            console.log('Sorted by popularity');
        };

        // Sort by Date
        const sortByDate = () => {
            media.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA - dateB;
            });
            emptyGallery();
            displayMedia(media);
            likeToggler();
            lightboxDisplay();
            setLightboxMedias();
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
            emptyGallery();
            displayMedia(media);
            likeToggler();
            lightboxDisplay();
            setLightboxMedias();
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
