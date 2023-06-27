import axios from 'axios';

const API_KEY = 'https://api.thecatapi.com/v1/breeds'

const selectVar = document.querySelector(".breed-select");
const gg = document.querySelector(".loader");
// selectVar.innerHTML = '';
selectVar.addEventListener('click', onChange);

  fetchBreeds();



function onChange (event)
{
    console.log(event.target)
}


// запит1
 function fetchBreeds() {
axios
.get("https://api.thecatapi.com/v1/breeds?axios.defaults.headers.common['x-api-key']=live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o")
.then(response => {
      console.log("bhjbjh", response.data);
    response.data.map(({id, name}) =>{
// додаю до селекту опції
      return  selectVar.add(new Option(`${name}`,`${id}`))
            })
          })
         }