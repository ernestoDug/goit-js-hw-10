import axios, { isCancel, AxiosError } from 'axios';

import {
  selecter,
  loaderVar,
  catHub,
  URL_FOR_INFOCAT,
  catDos,
} from './index.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const MY_KEY =
  'live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o';
const selectVar = document.querySelector('.breed-select');

// функція  наповнення селекта
function fetchBreeds() {
  // запит
  axios
    .get(`${BASE_URL}?api-key=${MY_KEY}`, {
      // Headers: {
      //   'x-api-key': `${MY_KEY}`
      // }
    })
    .then(response => {
      return response.data;
    })
    .then(selecter)
    .catch(error => {
      Notify.warning(`❌ ОТАКОЇ, КОШАКИ  РОЗБІГЛИСЯ`);
      // **********************************************************************
      // ЯЩО ПОТРІБНО ЩОБ ВАНТАЖНИК БУВ при момилці ************************************************
      // loaderVar.classList.remove('loaderWrap');
      // loaderVar.classList.add('loaderWrap--hidden');
      // ************************************************************************************************
    });
}

// функція примайння айді для запиту досьє котів
function fetchCatByBreed(idBreed) {
  axios
    .get(`${URL_FOR_INFOCAT}?breed_ids=${idBreed}&api_key=${MY_KEY}`, {
      params: {
        has_breeds: 1,
      },
    })

    .then(catDos)
    .catch(error => {
      Notify.warning(`❌ ОТАКОЇ, КОШАКИ РОЗБІГЛИСЯ`);
      // / **********************************************************************
      // ЯЩО ПОТРІБНО ЩОБ ВАНТАЖНИК БУВ при момилці 2 ************************************************
      // loaderVar.classList.remove('loaderWrap');
      // loaderVar.classList.add('loaderWrap--hidden');
      // ************************************************************************************************
    });
}

export { BASE_URL, MY_KEY, selectVar, fetchBreeds, fetchCatByBreed };
