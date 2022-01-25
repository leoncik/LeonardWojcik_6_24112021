// Fetch photographers data
export async function genericFetch(
    url,
    err = '<p>ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.</p>',
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

export async function fetchPhotographers(path) {
    const photographersData = await genericFetch(path);
    return photographersData;
}
