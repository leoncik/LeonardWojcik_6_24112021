export default function photographerFactory(data) {
    const { name, city, tagline, price, id, portrait } = data;

    const picture = `/assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        // Redirection link
        const photographerLink = document.createElement('a');
        photographerLink.setAttribute(
            'href',
            `./pages/photographer-pages/photographer.html?id=${id}`
        );
        article.appendChild(photographerLink);

        // Profile picture
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Photo de profil de ${name}`);
        photographerLink.appendChild(img);

        // Photographer name
        const h2 = document.createElement('h2');
        h2.textContent = name;
        photographerLink.appendChild(h2);

        // Location
        const location = document.createElement('p');
        location.textContent = city;
        location.setAttribute('class', 'photographer-location');
        article.appendChild(location);

        // Motto
        const motto = document.createElement('p');
        motto.textContent = tagline;
        motto.setAttribute('class', 'photographer-motto');
        article.appendChild(motto);

        // Pricing
        const pricing = document.createElement('p');
        pricing.textContent = `${price}€/jour`;
        pricing.setAttribute('class', 'photographer-pricing');
        article.appendChild(pricing);

        return article;
    }

    function getProfile() {
        const infos = document.createElement('div');

        // Photographer name
        const h1 = document.createElement('h1');
        h1.textContent = name;
        h1.setAttribute('class', 'photograph-header__name');
        infos.appendChild(h1);

        // Location
        const location = document.createElement('p');
        location.textContent = city;
        location.setAttribute('class', 'photograph-header__location');
        infos.appendChild(location);

        // Motto
        const motto = document.createElement('p');
        motto.textContent = tagline;
        motto.setAttribute('class', 'photograph-header__motto');
        infos.appendChild(motto);

        // Profile picture
        const profilePicture = document.createElement('img');
        profilePicture.setAttribute('src', picture);
        profilePicture.setAttribute(
            'class',
            'photograph-header__profile-picture'
        );
        document
            .getElementsByClassName('photographer-profile-picture')[0]
            .appendChild(profilePicture);

        // Pricing
        const pricing = document.createElement('span');
        pricing.textContent = `${price} €/jour`;
        document.querySelector('.total-likes-pricing').appendChild(pricing);

        return infos;
    }
    return {
        name,
        picture,
        city,
        tagline,
        id,
        price,
        getUserCardDOM,
        getProfile,
    };
}
