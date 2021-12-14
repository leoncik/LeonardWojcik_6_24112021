const params = new URL(document.location).searchParams;
const urlId = params.get('id');

export default function mediaFactory(data, profile) {
    const { id, price, title, date, image, video } = data;

    const imageSource = `/assets/images/${urlId}/${image}`;
    const videoSource = `/assets/images/${urlId}/${video}`;

    function getPhotographerData() {
        const article = document.createElement('article');

        // Image / video
        if (data.image) {
            console.log("c'est une image");
            // Profile picture
            const mediaPicture = document.createElement('img');
            mediaPicture.setAttribute('src', imageSource);
            article.appendChild(mediaPicture);
        } else if (data.video) {
            console.log("C'est une vidéo");
            const mediaVideo = document.createElement('video');
            mediaVideo.setAttribute('src', videoSource);
            mediaVideo.setAttribute('controls', '');
            article.appendChild(mediaVideo);
        } else {
            console.log('format non reconnu');
        }

        // Title (only if the media type is a picture)
        if (data.title) {
            const mediaTitle = document.createElement('h3');
            mediaTitle.textContent = title;
            article.appendChild(mediaTitle);
        } else {
            console.log(
                "RÈGLES VIDEO temporairement j'affiche un id si c'est une video"
            );
            const mediaTitle1 = document.createElement('h3');
            mediaTitle1.textContent = id;
            article.appendChild(mediaTitle1);
        }

        // Pricing
        const pricing = document.createElement('p');
        pricing.textContent = price;
        article.appendChild(pricing);

        // Date
        const mediaDate = document.createElement('p');
        mediaDate.textContent = date;
        article.appendChild(mediaDate);

        return article;
    }
    return { id, price, title, date, image, video, getPhotographerData };
}
