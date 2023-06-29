import axios, {isCancel, AxiosError} from 'axios'

import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js'


// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const URL_FOR_INFOCAT = "https://api.thecatapi.com/v1/images/search";

const catHub = document.querySelector(".cat-info");
const miuD = document.querySelector(".miuDescr");
// const miuT = document.querySelector(".miuTemper")
// let dataS = null;

fetchBreeds()


export function selecter (data) {
  // console.log("4545", data)
  data.map(({id, name}) =>{
// // додаємо до селекту опції
// console.log("lknn", data)
    selectVar.add(new Option(`${name}`, `${id}`))
        // let mass = {id: `${id}`, name: `${name}`, description: `${description}`, temperament: `${temperament}`}
        // console.log("tem", `${description}`)
        return data
      })
     console.log(data, "io")
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
    // console.log(id, selectVar.value, vib.text
    // "4654654pppppppppppppp")

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
        console.log( response.data, description,"ОПИС", temperament, "ТУМП", name)
        catHub.innerHTML = 
        `<div class = "wrapp">
        <h1 class="catName"> ${name}</h1>
       <h2 class="catDescr"> ${description}</h2>
       <h3 class="catTemp">${temperament}</h3>
       </div>
       <div class="photoCatWrap"> <img class="catPortret" src="${url}" alt="${name}"</div>`

        //  = `<img src="${url}"  alt="${name}">`
        //  miuD.textContent = description;
// console.log(data.description)
        
                    })
                  })
                  .catch(error => {
                    alert(error)
               
                  })
        }
    //     response.data.map(({id, name}) =>{
    // // додаємо до селекту опції
    //       return  selectVar.add(new Option(`${name}`,`${id}`))
    //             })
    //           })
    //           .catch(error => {
    //             alert(error)
           
    //           })
                        

