//Функція рендерить розмітку Select
function renderBreedsSelect(breeds) {
  return breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

// Функція рендерить розмітку інфо про кота
function renderInfoByCat(arr) {
  return arr.map(elem => {
    return elem.breeds
      .map(
        ({ temperament, description, name }) => `
      <img src="${elem.url}" alt="${name}" width="500">
      <div class="cat-info-thumb">
        <h2 class="cat-info-title">${name}</h2>
        <p>${description}</p>
        <div>
          <h3 class="cat-info-subtitle">Temperament:</h3>
          <p class="cat-info-text">${temperament}</p>
        </div>
      </div>`
      )
      .join('');
  });
}

export { renderBreedsSelect, renderInfoByCat };
