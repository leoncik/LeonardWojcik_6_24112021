import {
    lightbox,
    emptyMediaContainer,
    previousButton,
    nextButton,
} from '../utils/helpers.js';

const params = new URL(document.location).searchParams;
const urlId = params.get('id');
let totalOfLikes = 0;
let mediasSrc = [];

export default function mediaFactory(data) {
    const { id, price, title, date, image, video, likes } = data;

    const imageSource = `/assets/images/${urlId}/${image}`;
    const videoSource = `/assets/images/${urlId}/${video}`;

    // -----------------------------
    // OBJECTS CREATION TEMPLATE
    // ------------------------------

    function getPhotographerData() {
        const article = document.createElement('article');

        // MEDIA CONTENT
        const mediaContent = document.createElement('div');
        mediaContent.classList.add('media-content');
        article.appendChild(mediaContent);

        // Image / video
        if (data.image) {
            // Profile picture
            const mediaPicture = document.createElement('img');
            mediaPicture.setAttribute('src', imageSource);
            mediaPicture.classList.add('media');
            mediaContent.appendChild(mediaPicture);
        } else if (data.video) {
            const mediaVideo = document.createElement('video');
            mediaVideo.setAttribute('src', videoSource);
            // mediaVideo.setAttribute('controls', '');
            mediaVideo.classList.add('media');
            mediaContent.appendChild(mediaVideo);
        } else {
            console.log('format non reconnu');
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

    // TODO : check why strict equality for "if (iterator.nextElementSibling.classList == 'liked')" does not work.
    /* eslint-disable */
    // Toggle like number if user clicks on like icon
    const likeToggler = () => {
        const likeIcon = document.querySelectorAll('.like-icon');
        for (const iterator of likeIcon) {
            iterator.addEventListener('click', () => {
                iterator.nextElementSibling.classList.toggle('liked');
                if (iterator.nextElementSibling.classList == 'liked') {
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
        }
    };
    /* eslint-enable */

    // LIGHTBOX FEATURES

    function lightboxDisplay() {
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

    // LIGHTBOX CONTROLS

    // Get the index of the clicked media
    let currentIndex;
    const getMediaIndex = () => {
        const galleryItems = document.querySelectorAll('.media-content');

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

    // Events when user clicks on "next" and "previous" buttons of the lightbox.
    const lightboxControls = (media) => {
        getMediasSrc(media);
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

    return {
        id,
        price,
        title,
        date,
        image,
        video,
        likes,
        getPhotographerData,
        likeToggler,
        findTotalLikes,
        lightboxDisplay,
        lightboxControls,
    };
}
