function photographerFactory(data) {
    const { name, city, tagline, price, portrait } = data;

    const picture = `public/assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'p' );
        location.textContent = city;
        const motto = document.createElement( 'p' );
        motto.textContent = tagline;
        const pricing = document.createElement( 'p' );
        pricing.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(motto);
        article.appendChild(pricing);
        return (article);
    }
    // Why return getUserCardDOM ?
    return { name, picture, city, tagline, price, getUserCardDOM }
}