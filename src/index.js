import axios, {isCancel, AxiosError} from 'axios'

import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js'


// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const URL_FOR_INFOCAT = "https://api.thecatapi.com/v1/images/search";

const catHub = document.querySelector(".cat-info");
// const miuD = document.querySelector(".miuDescr");
// const miuT = document.querySelector(".miuTemper")
// let dataS = null;

fetchBreeds()


export function selecter (data) {
  // console.log("4545", data)
  data.map(({id, name, temperament, descriptionz}) =>{
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
    const id = event.target.value;
    // let des = event.target
// console.log(responseText, "4654654pppppppppppppp")
const vib = selectVar.selectedIndex;
const opt = selectVar.options

    // console.log(opt[vib], "555555555555555555");****************************************
    console.log(selectVar.value, "na change");

    fetchCatByBreed(id);
  }
        function fetchCatByBreed(id){
        axios
        .get(`https://api.thecatapi.com/v1/images/search?api_key=${MY_KEY}&breeds_ids=${id}&has_breeds=1`)
                    
        .then(response => {
            response.data.map(({url}) =>{
        // додаємо до селекту опції
        console.log(response.data, " по айди")
        catHub.innerHTML = `<img src="${url}"  alt="">`
// miuD.textContent = "data.description";
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
                        

