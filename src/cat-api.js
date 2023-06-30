import axios, {isCancel, AxiosError} from 'axios'
import { selecter } from './index.js'

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const MY_KEY = "live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o";
const selectVar = document.querySelector(".breed-select");

// функція  наповнення селекта
 function fetchBreeds() {
  
    axios
    .get(`${BASE_URL}?api-key=${MY_KEY}`, {
    
      // Headers: {
      //   'x-api-key': `${MY_KEY}`
      // }
    })
    .then(response => {
        // response.data.map(({id, name, description, temperament}) =>{
    // додаємо до селекту опції
    console.log("из кет в ио", response.data)
          // return  selectVar.add(new Option(`${name}`, `${id}`, `${description}`, `${temperament}`))
          //       })
          return response.data;
              })
            // })
            .then(selecter)
              .catch(error => {
                alert(error)
           
              })
                           } 

             export { BASE_URL, MY_KEY, selectVar, fetchBreeds}
              
