import axios, { isCancel, AxiosError } from 'axios';

import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js';

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

  data.map(({ id, name }) => {
    //    if(data)
    // {
      //   // видаляю хіден селекта
      // selectVar.classList.add("breed-select");
      //   // / ящко відповідь
      //   // прибираю бачимість індикатора
      //   loaderVar.classList.remove("loaderWrap");
      //   // додаю хіден індикатор
      //   loaderVar.classList.add("loaderWrap--hidden");
      // }
      
      // // додаємо до селекту опції
      selectVar.add(new Option(`${name}`, `${id}`));
      // ящко відповідь поичнаю бачити селект
      //   // додаю бачимость селекту
    // return data
    //  loaderVar.classList.remove("loaderWrap");
    //  loaderVar.classList.add("loaderWrap--hidden");
    //  selectVar.classList.add("breed-select")
    //  selectVar.classList.remove("breed-select--hidden")
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
  
  // selectVar.classList.add("breed-select");
  //  console.log(data, "io");
}

// вантажник
// const gg = document.querySelector('.loader');
// слухач сеLекта
selectVar.addEventListener('change', onChange);

// обробник селекта
function onChange(event) {
  const idBreed = event.target.value;

  // console.log(opt[vib], "555555555555555555");****************************************
  console.log(selectVar.value, idBreed, 'na change');

  fetchCatByBreed(idBreed);
}
function fetchCatByBreed(idBreed) {
  catHub.classList.remove("cat-info");
  catHub.classList.add("cat-info--hidden");
  loaderVar.classList.remove("loaderWrap--hidden");
  loaderVar.classList.add("loaderWrap");
  axios


    .get(
      `${URL_FOR_INFOCAT}?api_key=${MY_KEY}&has_breeds=1&breeds_ids=${idBreed}&sub_id`
    )

    .then(response => {
      catHub.classList.remove("cat-info--hidden");
      catHub.classList.add("cat-info");
      loaderVar.classList.remove("loaderWrap");
      loaderVar.classList.add("loaderWrap--hidden");
      response.data.map(
        ({ url, breeds: [{ name, description, temperament }] }) => {
          // додаємо до селекту опції
          console.log(
            response.data,
            description,
            'ОПИС',
            temperament,
            'ТemМП',
            name
          );
          catHub.innerHTML = `<div class = "wrapp">
        <h1 class="catName"> ${name}</h1>
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

export { loaderVar, selecter };
