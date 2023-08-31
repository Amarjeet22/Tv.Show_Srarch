const form = document.querySelector('#searchForm');

const makeImge = function(show){
    for(let result of show){
       if(result.show.image){
           const img  = document.createElement('IMG');
           img.src = result.show.image.medium;
           document.body.append(img);
        }
    }
}


form.addEventListener('submit', async function(e){
    e.preventDefault();
   const searchTerm  = form.elements.query.value;
   
   const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`);

makeImge(res.data);
form.elements.query.value = '';
})

