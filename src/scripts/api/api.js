import { getParam } from '../utils/helpers';
const urlId = parseInt(getParam('id'));

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

// Erreur eslint : « Parsing error: Cannot use keyword 'await' outside an async function ».
// Ajout de ce fichier dans "eslintignore" temporairement.
// TODO : remplacer par une fonction? OUI !
export const photographersData = await genericFetch(
    '../..//src/data/photographers.json'
);
