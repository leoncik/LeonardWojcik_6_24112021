export default function photographerFactory(data) {
    const { name, city, tagline, price, id, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

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
        photographerLink.appendChild(img);

        // Photographer name
        const h2 = document.createElement('h2');
        h2.textContent = name;
        photographerLink.appendChild(h2);

        // Location
        const location = document.createElement('p');
        location.textContent = city;
        article.appendChild(location);

        // Motto
        const motto = document.createElement('p');
        motto.textContent = tagline;
        article.appendChild(motto);

        // Pricing
        const pricing = document.createElement('p');
        pricing.textContent = price;
        article.appendChild(pricing);

        return article;
    }
    // Why return getUserCardDOM ?
    return { name, picture, city, tagline, id, price, getUserCardDOM };
}
