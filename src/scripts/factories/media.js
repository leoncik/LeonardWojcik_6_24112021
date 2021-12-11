export default function mediaFactory(data, type) {
    const { id, price } = data;

    function getPhotographerData() {
        /*

        if (image) {

            // générer un objet image

        } else if (video) {

            // retourner un objet video

        } else {

            // Message d'erreur : format non reconnu
            
        } */
        /*
        const article = document.createElement('article');

        // Pricing
        const pricing = document.createElement('p');
        pricing.textContent = price;
        article.appendChild(pricing);

        return article; */
    }
    return { id, price, getPhotographerData };
}
