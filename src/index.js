import axios, {isCancel, AxiosError} from 'axios'

import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js'


// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи

const URL_FOR_INFOCAT = "https://api.thecatapi.com/v1/images/search";

const catHub = document.querySelector(".cat-info");
const miu = document.querySelector(".miu")

fetchBreeds()


export function io (data) {
  console.log("4545", data)
  data.map(({id, name, description, temperament}) =>{
// // додаємо до селекту опції
// console.log("lknn", description)
    selectVar.add(new Option(`${name}`, `${id}`))
    console.log("tem", description)
    console.log("tem2", temperament)

  return description, temperament
        })
      }
                     

// вантажник
const gg = document.querySelector(".loader");
// слухач седекта
selectVar.addEventListener('change', onChange);


function onChange (event)
{
    let id = event.target.value;
    let des = event.target.title
    let sm = event.target.temperament

    console.log(id, "787987");
    console.log(event.target, "event");
    // console.log(des, "87978;;;")
    console.log(sm)


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
            response.data.map(({url, id}) =>{
        // додаємо до селекту опції
        console.log(response.data)
        catHub.innerHTML = `<img src="${url}" width: 50% alt="">`
        // miu.textContent = event.target.description;

        
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
                        

