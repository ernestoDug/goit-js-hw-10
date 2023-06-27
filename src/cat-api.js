// функція  наповнення селекта

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

             export {fetchBreeds}