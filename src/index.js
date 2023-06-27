import axios, {isCancel, AxiosError} from 'axios'

import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js'


// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const URL_FOR_INFOCAT = "https://api.thecatapi.com/v1/images/search";

const catHub = document.querySelector(".cat-info")

fetchBreeds();
// вантажник
const gg = document.querySelector(".loader");
// слухач седекта
selectVar.addEventListener('change', onChange);


function onChange (event)
{
    let id = event.target.value;
    console.log(id)
    console.log(event.target)

    fetchCatByBreed(id);
}


        function fetchCatByBreed(id){
        axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, {
        
        Headers: {
            'x-api-key': `${MY_KEY}`
          }
        })
        .then(response => {
            response.data.map(({url}) =>{
        // додаємо до селекту опції
        console.log(response.data)
              catHub.innerHTML = `<img src="${url}" width: 50% alt="">`
              
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
                        

