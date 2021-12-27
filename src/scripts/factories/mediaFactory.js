const params = new URL(document.location).searchParams;
const urlId = params.get('id');

export default function mediaFactory(data, profile) {
    const { id, price, title, date, image, video, likes } = data;

    const imageSource = `/assets/images/${urlId}/${image}`;
    const videoSource = `/assets/images/${urlId}/${video}`;

    function getPhotographerData() {
        const article = document.createElement('article');

        // Image / video
        if (data.image) {
            // Profile picture
            const mediaPicture = document.createElement('img');
            mediaPicture.setAttribute('src', imageSource);
            mediaPicture.classList.add('media');
            article.appendChild(mediaPicture);
        } else if (data.video) {
            const mediaVideo = document.createElement('video');
            mediaVideo.setAttribute('src', videoSource);
            // mediaVideo.setAttribute('controls', '');
            mediaVideo.classList.add('media');
            article.appendChild(mediaVideo);
        } else {
            console.log('format non reconnu');
        }

        // Title
        const mediaTitle = document.createElement('h3');
        mediaTitle.textContent = title;
        article.appendChild(mediaTitle);

        // Likes
        const mediaLikes = document.createElement('p');
        mediaLikes.textContent = likes;
        article.appendChild(mediaLikes);

        return article;
    }
    return { id, price, title, date, image, video, likes, getPhotographerData };
}
