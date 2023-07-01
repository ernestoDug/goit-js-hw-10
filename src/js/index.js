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

// виклик функції отримання пород
fetchBreeds();

function selecter(data) {
  console.log('масив для списку кошаків:', data);
  data.map(({ id, name }) => {
    // // додаємо до селекту опції
    selectVar.add(new Option(`${name}`, `${id}`));
  });
  // створення екзепляру селекту бібліотеки
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

  // console.log(opt[vib], "555555555555555555");****************************************
  console.log('ай ді як ев таргет:', idBreed);
  console.log('ай ді у велью опшин  по кліку:', selectVar.value);

  // виклик функцію створення досьє кота післі запиту
  fetchCatByBreed(idBreed);
}

export { loaderVar, selecter, catHub, URL_FOR_INFOCAT };
