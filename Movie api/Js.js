

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const module = document.getElementById("module");


///fetch from json
fetchJson();

function handleErrors(response) {
  // console.log(response);
  if (!response.ok) {
    console.log("notworking")
      throw Error(response.statusText);    
  }
  return response;
}


function fetchJson(){
    ///fetch json
    fetch("./Json/url.json").then(res => res.json())
    .then(function(data){
        ///check for result
    // console.log(data);
    //Wrapper function
  fetchdata (data);
  
});
}

function fetchdata(data){
    console.log(data)
    let i = 0
    ///how do use the data x amount objects in json
data.forEach(url => {
 /// fetch api
 console.log(url.vid);
 fetch(url.Url)
 // catch error
   .then(handleErrors).catch(function(error) {
    console.log(error)
})
/// do render
   .then((res) => res.json())
   .then(function (element) {
     console.log(element);
     const el = document.createElement('div');
     el.setAttribute("class", "movie-gallery")
     const image = document.createElement('img');
     const text = document.createElement('h2');
     text.innerHTML = `${element.Title}`;
     image.src = element.Poster;
     ///content in divs
     el.appendChild(image);
     el.appendChild(text);
     //main div  
     main.appendChild(el);
////click and pass values from fetch to be rendered
///html collection 
     document.getElementsByClassName("movie-gallery")[i].addEventListener('click', function (e) {
        //  console.log(element); 
         contentWrap(element, url.vid);
       });
     i++
 })
}); 
}

contentWrap = (element,vid) => {

  var date = new Date();
  var now = date.getFullYear();

  let year =  now - element.Year;
    ///clear the elm
    module.innerHTML = "";
//srcs
    let imagesrc = element.Poster;
 

//if video --------- CORB google block.
 // console.log(image.src);
/* <video controls">
  <source src="{vid} type="video/mp4">
  Your browser does not support the video tag.
</video> */

   //-------

///escape string insert values passed from fetch
    module.innerHTML += `
    <div class="Module-inner" id="module-inner">
    <img src="${imagesrc}"  id="module-img" alt=""></img>
    
    <div id="hero"> 
    <h1>${element.Title} </h1>
    <h1>  ${year} years old</h1>
    <p id="info">${element.Plot}</p>
    </div>
    </div>
        `
        const inner = document.getElementById("hero");
        if (element.Metascore != "N/A") {
          inner.innerHTML += ` <h1>  ${element.Metascore}  MetaScore</h1>`
        } else {
          
          inner.innerHTML += ` <h1>  No MetaScore</h1>`
        }
};
///get stuff to render in with search


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        let url = [{Url:"http://www.omdbapi.com/?t="+searchTerm+"&apikey=62ae43fb"}]
       fetchdata(url);
        search.value = "";
    }
});






// // const searchUrl = "http://www.omdbapi.com/?t="Batman"+"&apikey="+apiKey ;Here is your key: 62ae43fb

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?t="batman"&apikey=62ae43fb

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=bae0c994-e709-4218-a640-bd63be97cd28
// If you did not make this request, please disregard this email.




// const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";








////////Oldie Movie DB

// const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";


// ///Search by query
// const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");
// const module = document.getElementById("module");

// //varible  what is this...null  last time --> new  empty 1st we run ..> changing 
//  this.data; 


// /Search by query
// const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// ///inner html



// //fetch call on startup
// showMovies(apiUrl);

// //create a function json as param and loop over the object place the url in


// function showMovies(url){
//     let i = 0
//     fetch(url).then(res => res.json())
//     .then(function(data){
//         ///check for result
//     console.log(data);
//     console.log(data.results);

//     ///how do use the data x amount objects in json
//     data.results.forEach(element => {
//         ///const el for short 
//         const el = document.createElement('div');
//         el.setAttribute("class", "movie-gallery")

       
//         const image = document.createElement('img');
//         const text = document.createElement('h2');
//         data = this.data;

//         ///pass json on each loop
//         text.innerHTML = `${element.title}`;
//         image.src = IMGPATH + element.poster_path;

//         ///content in divs
//         el.appendChild(image);
//         el.appendChild(text);
//         //main div  
//         main.appendChild(el);
    
// ////click and pass values from fetch to be rendered
// ///html collection 
//         document.getElementsByClassName("movie-gallery")[i].addEventListener('click', function (e) {
//           //  console.log(element); 
//             contentWrap(element);

//           });
//         i++
//     }); 
// });
// }


// contentWrap = (element) => {

//     ///clear the elm
//     module.innerHTML = "";
// //srcs
//     let imagesrc = IMGPATH + element.poster_path;
//    // console.log(image.src);

//     ///escape string insert values passed from fetch
//     module.innerHTML += `
//     <div class="Module-inner">
//     <img src="${imagesrc}"  id="module-img" alt="">
//     <div id="hero"> 
//     <h1>${element.title}</h1>
//     <p id="info">${element.overview}</p>
//     </div>
//     </div>
//         `
// };
// ///get stuff to render in




  

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     main.innerHTML = '';
     
//     const searchTerm = search.value;

//     if (searchTerm) {
//         showMovies(SEARCHAPI + searchTerm);
//         search.value = "";
//     }
// });




// // // const searchUrl = "http://www.omdbapi.com/?t="+searchTerm+"&apikey="+apiKey;Here is your key: 62ae43fb

// // Please append it to all of your API requests,

// // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=62ae43fb

// // Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=bae0c994-e709-4218-a640-bd63be97cd28
// // If you did not make this request, please disregard this email.
