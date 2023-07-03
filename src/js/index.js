import axios, { isCancel, AxiosError } from 'axios';

import {
  BASE_URL,
  MY_KEY,
  selectVar,
  fetchBreeds,
  fetchCatByBreed,
} from './cat-api.js';

import SlimSelect from 'slim-select';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const URL_FOR_INFOCAT = 'https://api.thecatapi.com/v1/images/search';

// для фото кота
const catHub = document.querySelector('.cat-info');
// для опису кота
const miuD = document.querySelector('.miuDescr');
// для індикатору завантаження
const loaderVar = document.querySelector('.loaderWrap');

// +- класу селекта
selectVar.classList.remove('breed-select');
selectVar.classList.add('breed-select--hidden');

// виклик функції отримання пород
fetchBreeds();

// функція списку
function selecter(data) {
  // console.log('масив для списку кошаків:', data);
  // + - класи лоадера  та селекту
  selectVar.classList.remove('breed-select--hidden');
  selectVar.classList.add('breed-select');
  loaderVar.classList.remove('loaderWrap');
  loaderVar.classList.add('loaderWrap--hidden');
  data.map(({ id, name }) => {
    // // додаємо до селекту опції
    selectVar.add(new Option(`${name}`, `${id}`));
  });
  // створення екзепляру  бібліотеки селекту
  new SlimSelect({
    select: selectVar,
    settings: {
      allowDeselect: true,
      showSearch: true,
      searchText: 'котяра не знайден',
      searchPlaceholder: 'розпочати котопошук',
      searchHighlight: true,
    },
  });
}

// слухач сеLекта
selectVar.addEventListener('change', onChange);

// обробник селекта
function onChange(event) {
  const idBreed = event.target.value;

  // виклик функції запиту ай ді
  // +- класів лоадера та карток
  catHub.classList.remove('cat-info');
  catHub.classList.add('cat-info--hidden');
  loaderVar.classList.remove('loaderWrap--hidden');
  loaderVar.classList.add('loaderWrap');
  fetchCatByBreed(idBreed);
}

// функція для карток досьє

function catDos(response) {
  // +- КЛАСИ ЛОАДЕРА ТА КАРТОК
  catHub.classList.remove('cat-info--hidden');
  catHub.classList.add('cat-info');
  loaderVar.classList.remove('loaderWrap');
  loaderVar.classList.add('loaderWrap--hidden');
  // console.log('респонс для картки:', response.data);
  response.data.map(
    ({ url, breeds: [{ id, name, description, temperament }] }) => {
      // додаємо дщсьє кошаків
      catHub.innerHTML = `<div class = "wrapp">
      <h1 class="catName"> ${name} </h1>
     <h2 class="catDescr"> ${description}</h2>
     <h3 class="catTemp">${temperament}</h3>
     
     </div>
     <div class="photoCatWrap"> <img class="catPortret" src="${url}" alt="${name}"</div>`;
    }
  );
}

export { loaderVar, selecter, catHub, URL_FOR_INFOCAT, catDos };
