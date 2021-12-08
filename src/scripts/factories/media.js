export default function mediaFactory(data, type) {
    const { id, price } = data;

    function getPhotographerData() {
        const article = document.createElement('article');

        // Pricing
        const pricing = document.createElement('p');
        pricing.textContent = price;
        article.appendChild(pricing);

        return article;
    }
    return { id, price, getPhotographerData };
}
