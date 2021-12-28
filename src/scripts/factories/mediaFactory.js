const params = new URL(document.location).searchParams;
const urlId = params.get('id');

export default function mediaFactory(data, profile) {
    const { id, price, title, date, image, video, likes } = data;

    const imageSource = `/assets/images/${urlId}/${image}`;
    const videoSource = `/assets/images/${urlId}/${video}`;

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
    return { id, price, title, date, image, video, likes, getPhotographerData };
}
