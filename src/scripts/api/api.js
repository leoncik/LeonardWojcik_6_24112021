// Fetch photographers data
export async function genericFetch(
    url,
    err = 'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.',
    method = 'GET',
    headers = {}
) {
    try {
        const response = await fetch(url, { method, headers });
        return await response.json();
    } catch (error) {
        document
            .getElementsByClassName('api-error')[0]
            .insertAdjacentHTML('beforeend', err);
    }
}

export async function fetchPhotographers() {
    const photographersData = await genericFetch(
        '../..//src/data/photographers.json'
    );
    return photographersData;
}
