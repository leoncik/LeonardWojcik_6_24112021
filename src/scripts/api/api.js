import { getParam } from '../utils/helpers';
const urlId = parseInt(getParam('id'));

// Fetch photographers data
export async function fetchPhotographersData() {
    try {
        const response = await fetch('../..//src/data/photographers.json');
        return await response.json();
    } catch (error) {
        document
            .getElementsByClassName('api-error')[0]
            .insertAdjacentHTML(
                'beforeend',
                'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.'
            );
    }
}

// Erreur eslint : « Parsing error: Cannot use keyword 'await' outside an async function ».
// Ajout de ce fichier dans "eslintignore" temporairement.
// TODO : remplacer par une fonction ?
export const photographersData = await fetchPhotographersData(
    '../..//src/data/photographers.json'
);
