const API_TOKEN = 'efb83137f649d6d64637d14468f110e0';

export const getFimlsFromApiWithSearchedText = (text, page) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`;
    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

// Récupération du détail d'un film
export function getFilmDetailFromApi(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w500' + name
}