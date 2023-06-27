import axios from 'axios'
import {fetchBreeds} from './cat-api.js'

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const MY_KEY = "axios.defaults.headers.common['x-api-key']=live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o";
fetchBreeds();
// селект
const selectVar = document.querySelector(".breed-select");
// вантажник
const gg = document.querySelector(".loader");
// слухач седекта
selectVar.addEventListener('click', onChange);




function onChange (event)
{
    console.log(event.target)
}


