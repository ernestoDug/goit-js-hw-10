import axios, {isCancel, AxiosError} from 'axios'

import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js'


import SlimSelect from 'slim-select'


// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const URL_FOR_INFOCAT = "https://api.thecatapi.com/v1/images/search";

const catHub = document.querySelector(".cat-info");
const miuD = document.querySelector(".miuDescr");



fetchBreeds()


export function selecter (data) {
  data.map(({id, name}) =>{
    // // додаємо до селекту опції
    selectVar.add(new Option (`${name}`, `${id}`))
    // console.log("tem", `${description}`)
    // return data
  })
  new SlimSelect({
    select: selectVar,
    settings: {
      placeholderText: 'розпочати котопошук',
      allowDeselect: true,
      showSearch: true,
      searchText:  'котяра не знайден',
      searchPlaceholder: 'розпочати котопошук',
      searchHighlight: true    }
        })
    //  console.log(data, "io")
}         

// вантажник
const gg = document.querySelector(".loader");
// слухач сеLекта
selectVar.addEventListener('change', onChange);


function onChange (event)
{
    const idBreed = event.target.value;
    // let des = event.target
    const vib = selectVar.selectedIndex;
    const opt = selectVar.options


    // console.log(opt[vib], "555555555555555555");****************************************
    console.log(selectVar.value, idBreed,  "na change");

    fetchCatByBreed(idBreed);
  }
        function fetchCatByBreed(idBreed){
        axios
        .get(`${URL_FOR_INFOCAT}?api_key=${MY_KEY}&has_breeds=1&breeds_ids=${idBreed}&sub_id`)
                    
        .then(response => {
            response.data.map(({url, breeds: [{name, description, temperament}]}) =>{
        // додаємо до селекту опції
        console.log( response.data, description,"ОПИС", temperament, "ТemМП", name)
        catHub.innerHTML = 
        `<div class = "wrapp">
        <h1 class="catName"> ${name}</h1>
       <h2 class="catDescr"> ${description}</h2>
       <h3 class="catTemp">${temperament}</h3>
       </div>
       <div class="photoCatWrap"> <img class="catPortret" src="${url}" alt="${name}"</div>`
                    })
                  })
                  .catch(error => {
                    alert(error)
               
                  })
        }


