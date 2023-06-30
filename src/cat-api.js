import axios, { isCancel, AxiosError } from 'axios';

import { selecter, loaderVar } from './index.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const MY_KEY =
  'live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o';
const selectVar = document.querySelector('.breed-select');

// функція  наповнення селекта
function fetchBreeds() {
  axios
    .get(`${BASE_URL}?api-key=${MY_KEY}`, {
      // Headers: {
      //   'x-api-key': `${MY_KEY}`
      // }
    })
    .then(response => {
      // console.log("из кет в selecter", response.data)

      return response.data;
    })
    .then(selecter)
    .catch(error => {
      Notify.warning(`❌ Oops! Something went wrong! Try reloading the page!`);
    });
}

export { BASE_URL, MY_KEY, selectVar, fetchBreeds };
