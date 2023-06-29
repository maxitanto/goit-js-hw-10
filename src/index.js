import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { renderBreedsSelect } from './js/render';
import { renderInfoByCat } from './js/render';

const selectBreed = document.querySelector('.breed-select');
const catInfoContainer = document.querySelector('.cat-info');
const loaderTextEl = document.querySelector('.loader');
const errorTextEl = document.querySelector('.error');

loaderTextEl.hidden = false;

//Генеруємо розмітку для select
fetchBreeds()
  .then(data => {
    selectBreed.insertAdjacentHTML('beforeend', renderBreedsSelect(data));
    selectBreed.hidden = false;
    loaderTextEl.hidden = true;
  })
  .catch(err => {
    errorTextEl.hidden = false;
    loaderTextEl.hidden = true;
  });

selectBreed.addEventListener('change', onChangeSelect);

function onChangeSelect(evt) {
  loaderTextEl.hidden = false;
  errorTextEl.hidden = true;

  const selectedBreedId = evt.target.value;

  catInfoContainer.innerHTML = '';

  fetchCatByBreed(selectedBreedId)
    .then(breed => {
      catInfoContainer.insertAdjacentHTML('beforeend', renderInfoByCat(breed));
      loaderTextEl.hidden = true;
    })
    .catch(err => {
      errorTextEl.hidden = false;
      if (!errorTextEl.hidden) {
        loaderTextEl.hidden = true;
      }
    });
}
