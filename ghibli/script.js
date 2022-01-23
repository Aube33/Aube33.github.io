var films="";
let apiUrl = "https://ghibliapi.herokuapp.com/films"

var globalCaroussel = document.getElementById("carrousel-content");

var imageDoc = document.getElementById("ghibli-img");
var titleDoc = document.getElementById("ghibli-title");
var descDoc = document.getElementById("ghibli-desc");

var directorDoc = document.getElementById("ghibli-director");
var producerDoc = document.getElementById("ghibli-producer");
var releaseDateDoc = document.getElementById("ghibli-releaseDate");
var durationDoc = document.getElementById("ghibli-duration");
var rateDoc = document.getElementById("ghibli-rate");

var backButton = document.getElementById("back-button");
var nextButton = document.getElementById("next-button");

var currentFilm=0;


function RateToStar(value){
  if(0<=value && value<20){
    return "⭐"
  }
  if(20<=value && value<40){
    return "⭐⭐"
  }
  if(40<=value && value<60){
    return "⭐⭐⭐"
  }
  if(60<=value && value<80){
    return "⭐⭐⭐⭐"
  }
  if(80<=value && value<100){
    return "⭐⭐⭐⭐⭐"
  }
  if(value>=100){
    return "⭐⭐⭐⭐⭐⭐"
  }
}

async function getJson(url) {
    let response = await fetch(url).catch(function(error) {console.log(error)});
    let data = await response.json()
    return data;
}

async function main() {
  films = await getJson(apiUrl)
  if(currentFilm<0){
    currentFilm=films.length-1;
  }
  else if(currentFilm>films.length-1) {
    currentFilm=0;
  }
  imageDoc.src=films[currentFilm].image;
  titleDoc.innerHTML=films[currentFilm].title+" ("+films[currentFilm].original_title_romanised+")";
  descDoc.innerHTML=films[currentFilm].description;
  directorDoc.innerHTML="Director: <b>"+films[currentFilm].director+"</b>"
  producerDoc.innerHTML="Producer: <b>"+films[currentFilm].producer+"</b>"
  releaseDateDoc.innerHTML="Release date: <b>"+films[currentFilm].release_date+"</b>"
  durationDoc.innerHTML="Duration: <b>"+films[currentFilm].running_time+" minutes"+"</b>"
  rateDoc.innerHTML="Rate: <b>"+RateToStar(films[currentFilm].rt_score)+"</b>"

}

nextButton.addEventListener('click', event => {
  currentFilm+=1;
  main();
});

backButton.addEventListener('click', event => {
  currentFilm-=1;
  main();
});

main()

var findButton = document.getElementById("find-ghibli-button");
findButton.addEventListener('click', event =>{
  window.location.href = "find-my-ghibli.html"
});

var backHomeButton = document.getElementById("backHome-button");
backHomeButton.addEventListener('click', event =>{
  window.location.href = "../index.html"
});
