export default function mediaFactory(data, profile) {
    const { id, price, title, date, image, video } = data;
    // faut que je me débrouille pour récupérer un data.name ici...

    // const currentProfile = getProfile();
    // photogapherFirstName = currentProfile.name.split(' ').slice(0, -1).join(' ');

    // const imageSource = `assets/images/${photogapherFirstName}/${image}`;
    // const videoSource = `assets/images/${photogapherFirstName}/${video}`;

    function getPhotographerData() {
        const article = document.createElement('article');

        // Image / video
        if (data.image) {
            console.log("c'est une image");
            // Profile picture
            // const mediaPicture = document.createElement('img');
            // mediaPicture.setAttribute('src', mediaSource);
            // article.appendChild(img);
        } else if (data.video) {
            console.log("C'est une vidéo");
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
