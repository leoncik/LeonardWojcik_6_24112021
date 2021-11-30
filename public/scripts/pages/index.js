let photographerData;

async function getPhotographers() {
    let photographers; 
    // Penser à remplacer par les données récupérées dans le json
    /*
    const photographers = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },
    ]*/
    // Fetch data
    const response = await fetch('./src/data/photographers.json');
    if(response.ok) {
        photographerData = await response.json();
        // Save photographer list (type array)
        photographers = photographerData.photographers;
        console.log(photographers);
        // Photographer list (type object)
        console.log({photographers});
        return  {photographers};
    } else {
        console.log("ERROR, can't fetch the data file");
    }
    // et bien retourner le tableau photographers seulement une fois
    //return ({
    //    photographers: [...photographers, ...photographers, ...photographers]})
}


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();