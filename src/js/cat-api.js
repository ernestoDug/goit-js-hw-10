import axios, { isCancel, AxiosError } from 'axios';

import { selecter, loaderVar, catHub, URL_FOR_INFOCAT } from './index.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const MY_KEY =
  'live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o';
const selectVar = document.querySelector('.breed-select');

// функція  наповнення селекта
function fetchBreeds() {
  // +- класу селекта
  selectVar.classList.remove('breed-select');
  selectVar.classList.add('breed-select--hidden');
  // запит
  axios
    .get(`${BASE_URL}?api-key=${MY_KEY}`, {
      // Headers: {
      //   'x-api-key': `${MY_KEY}`
      // }
    })
    .then(response => {
      // + - класи лоадера  та списку
      selectVar.classList.remove('breed-select--hidden');
      selectVar.classList.add('breed-select');
      loaderVar.classList.remove('loaderWrap');
      loaderVar.classList.add('loaderWrap--hidden');

      return response.data;
    })
    .then(selecter)
    .catch(error => {
      Notify.warning(`❌ Oops! Something went wrong! Try reloading the page!`);
    });
}

// функція примайння айді для запиту досьє котів
function fetchCatByBreed(idBreed) {
  // +- класів лоадера та карток
  catHub.classList.remove('cat-info');
  catHub.classList.add('cat-info--hidden');
  loaderVar.classList.remove('loaderWrap--hidden');
  loaderVar.classList.add('loaderWrap');
  axios
    .get(
      `${URL_FOR_INFOCAT}?breed_ids=${idBreed}&api_key=${MY_KEY}`,
      {
        params: {
          has_breeds: 1,
        },
      }
    )

    .then(response => {
      console.log('айді в ЗЕН після рендеру картки', idBreed);
      catHub.classList.remove('cat-info--hidden');
      catHub.classList.add('cat-info');
      loaderVar.classList.remove('loaderWrap');
      loaderVar.classList.add('loaderWrap--hidden');
      console.log('респонс для картки:', response.data);
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
    })
    .catch(error => {
      Notify.warning(`❌ Oops! Something went wrong! Try reloading the page!`);
    });
}

export { BASE_URL, MY_KEY, selectVar, fetchBreeds, fetchCatByBreed };
