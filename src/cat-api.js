// функція  наповнення селекта
import axios from 'axios'
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const MY_KEY = "axios.defaults.headers.common['x-api-key']=live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o";
const selectVar = document.querySelector(".breed-select");

 function fetchBreeds() {
  
    axios
    .get(`${BASE_URL}`, {
    
      Headers: {
        'x-api-key': `${MY_KEY}`
      }
    })
    .then(response => {
        response.data.map(({id, name}) =>{
    // додаємо до селекту опції
          return  selectVar.add(new Option(`${name}`,`${id}`))
                })
              })
             } 

             export { BASE_URL, MY_KEY, selectVar, fetchBreeds}
              
