import axios from 'axios'
import { BASE_URL, MY_KEY, selectVar, fetchBreeds } from './cat-api.js'




fetchBreeds();
// селект
// вантажник
const gg = document.querySelector(".loader");
// слухач седекта
selectVar.addEventListener('click', onChange);



function onChange (event)
{
    console.log(event.target)
}


