import Movie from "../js/movie.js";
import * as data from "../js/data.js";

const addMovieBtnNode = document.getElementById("addMovieBtn");
const cancelAddMovieBtnNode = document.getElementById("cancelAddMovieBtn");
const addMovieFormNode = document.getElementById("addMovieForm");
const movieTitleNode = document.getElementById("movieTitle");
const movieYearNode = document.getElementById("movieYear");
const movieCategoryNode = document.getElementById("movieCategory");
const movieCountryNode = document.getElementById("movieCountry");
const confirmBtnNode = document.getElementById("confirmBtn");
const ClearFormBtnNode = document.getElementById("ClearFormBtn");
const movieWatcedBtnNode = document.getElementById("movieWatcedBtn");
const movieItemTitle = document.getElementById("movieItemTitle");
const movieItemYearNode = document.getElementById("movieItemYear");
const movieItemDirectorNode = document.getElementById("movieItemDirector");
const movieItemCategoryNode = document.getElementById("movieItemCategory");
const movieItemDeleteNode = document.getElementById("movieItemDelete");

const DISPLAY_NONE_CLASS = "display-none";
const RED_CLASS = "red";
const MOVIE_WATCHED_CLASS = "movie-item__watched-btn--active";

const movieList = [];

// functions
const openMovieForm = () => {
  addMovieFormNode.classList.toggle(DISPLAY_NONE_CLASS);
};

const closeMovieForm = () => {
  addMovieFormNode.classList.add(DISPLAY_NONE_CLASS);
};

const addMovieToList = () => {
  let foolproof = 0;
  let title = movieTitleNode.value;
  let year = movieYearNode.value;
  let category = movieCategoryNode.value;
  let country = movieCountryNode.value;
  if (title === "") {
    movieTitleNode.classList.add(RED_CLASS);
    foolproof += 1;
  } else {
    movieTitleNode.classList.remove(RED_CLASS);
  }
  if (year === "" || year < movieYearNode.min || year > movieYearNode.max) {
    movieYearNode.classList.add(RED_CLASS);
    foolproof += 1;
  } else {
    movieYearNode.classList.remove(RED_CLASS);
  }
  if (category === "") {
    movieCategoryNode.classList.add(RED_CLASS);
    foolproof += 1;
  } else {
    movieCategoryNode.classList.remove(RED_CLASS);
  }
  if (country === "") {
    movieCountryNode.classList.add(RED_CLASS);
    foolproof += 1;
  } else {
    movieCountryNode.classList.remove(RED_CLASS);
  }
  if (foolproof > 0) {
    return;
  }

  movieList.push(new Movie(title, year, category, country));
  movieTitleNode.value =
    movieYearNode.value =
    movieCategoryNode.value =
    movieCountryNode.value =
      "";
};

const clearForm = () => {
  movieTitleNode.value =
    movieYearNode.value =
    movieCategoryNode.value =
    movieCountryNode.value =
      "";
};

//main programm code
addMovieBtnNode.addEventListener("click", openMovieForm);
cancelAddMovieBtnNode.addEventListener("click", closeMovieForm);
confirmBtnNode.addEventListener("click", addMovieToList);
ClearFormBtnNode.addEventListener("click", clearForm);

console.log();
