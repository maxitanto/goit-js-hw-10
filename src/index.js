import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { renderBreedsSelect } from './js/render';
import { renderInfoByCat } from './js/render';

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const selectBreed = document.querySelector('.breed-select');
const catInfoContainer = document.querySelector('.cat-info');
const loaderTextEl = document.querySelector('.loader');
const errorTextEl = document.querySelector('.error');

loaderTextEl.hidden = false;

//Генеруємо розмітку для select
fetchBreeds()
  .then(data => {
    selectBreed.insertAdjacentHTML('beforeend', renderBreedsSelect(data));
    new SlimSelect({
      select: '#single',
    });
    selectBreed.hidden = false;
    loaderTextEl.hidden = true;
  })
  .catch(err => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
    loaderTextEl.hidden = true;
  });

selectBreed.addEventListener('change', onChangeSelect);

function onChangeSelect(evt) {
  loaderTextEl.hidden = false;

  const selectedBreedId = evt.target.value;

  catInfoContainer.innerHTML = '';

  fetchCatByBreed(selectedBreedId)
    .then(breed => {
      catInfoContainer.insertAdjacentHTML('beforeend', renderInfoByCat(breed));
      loaderTextEl.hidden = true;
    })
    .catch(err => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      loaderTextEl.hidden = true;
    });
}
