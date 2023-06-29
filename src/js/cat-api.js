const API_KEY =
  'live_157mttNeMJWlXoM1sAOTlD4HufG9q8GIS1gjuzLvjwc6UJHZ2O6VB9tAFc2oAjT9';
const BASE_URL = 'https://api.thecatapi.com/v1/';
const BREEDS_END_POINT = 'breeds';
const INFO_END_POINT = 'images/search';

//Функція виконує запит на всі породи
function fetchBreeds() {
  return fetch(`${BASE_URL}${BREEDS_END_POINT}?api_key=${API_KEY}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }

      return resp.json();
    }
  );
}

// Функція виконує запит на повну інформацію про кота по id
function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}${INFO_END_POINT}?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }

    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
