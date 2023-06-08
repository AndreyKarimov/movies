import Movie from "../js/movie.js";
import * as data from "../js/data.js";

const addMovieBtnNode = document.getElementById("addMovieBtn");
const cancelAddMovieBtnNode = document.getElementById("cancelAddMovieBtn");
const addMovieFormNode = document.getElementById("addMovieForm");
const movieTitleNode = document.getElementById("movieTitle");
const movieYearNode = document.getElementById("movieYear");
const movieCategoryNode = document.getElementById("movieCategory");
const newCategoryBtnNode = document.getElementById("newCategoryBtn");
const newCategoryNode = document.getElementById("newCategory");
const newCountryBtnNode = document.getElementById("newcountryBtn");
const newCountryNode = document.getElementById("newCountry");
const movieCountryNode = document.getElementById("movieCountry");
const confirmBtnNode = document.getElementById("confirmBtn");
const clearFormBtnNode = document.getElementById("ClearFormBtn");
const movieWatcedBtnNode = document.getElementById("movieWatcedBtn");
const movieItemTitle = document.getElementById("movieItemTitle");
const movieItemYearNode = document.getElementById("movieItemYear");
const movieItemDirectorNode = document.getElementById("movieItemDirector");
const movieItemCategoryNode = document.getElementById("movieItemCategory");
const movieItemDeleteNode = document.getElementById("movieItemDelete");

const DISPLAY_NONE_CLASS = "display-none";
const RED_CLASS = "red";
const MOVIE_WATCHED_CLASS = "movie-item__watched-btn--active";
const NEW_ITEM_WIDTH_0 = "new-item--width0";

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

const parseCategoryList = () => {
  let optionCategory = document.createElement("option");
  optionCategory.setAttribute("disabled", "");
  optionCategory.setAttribute("selected", "");
  optionCategory.setAttribute("hidden", "");
  optionCategory.innerText = "Category";
  movieCategoryNode.appendChild(optionCategory);
  data.categoryList.forEach((item, index) => {
    optionCategory = document.createElement("option");
    optionCategory.value = index;
    optionCategory.innerText = item;
    movieCategoryNode.appendChild(optionCategory);
  });
};

const parseCountryList = () => {
  let optionCountry = document.createElement("option");
  optionCountry.setAttribute("disabled", "");
  optionCountry.setAttribute("selected", "");
  optionCountry.setAttribute("hidden", "");
  optionCountry.innerText = "Country";
  movieCountryNode.appendChild(optionCountry);
  data.coutryList.forEach((item, index) => {
    optionCountry = document.createElement("option");
    optionCountry.value = index;
    optionCountry.innerText = item;
    movieCountryNode.appendChild(optionCountry);
  });
};

const init = () => {
  parseCategoryList();
  parseCountryList();
};

const newCategoryHandler = () => {
  newCategoryNode.classList.toggle(NEW_ITEM_WIDTH_0);
  movieCategoryNode.classList.toggle(NEW_ITEM_WIDTH_0);
};

const newCountryHandler = () => {
  newCountryNode.classList.toggle(NEW_ITEM_WIDTH_0);
  movieCountryNode.classList.toggle(NEW_ITEM_WIDTH_0);
};

//main programm code
init();
addMovieBtnNode.addEventListener("click", openMovieForm);
cancelAddMovieBtnNode.addEventListener("click", closeMovieForm);
confirmBtnNode.addEventListener("click", addMovieToList);
clearFormBtnNode.addEventListener("click", clearForm);

newCategoryBtnNode.addEventListener("click", newCategoryHandler);
newCountryBtnNode.addEventListener("click", newCountryHandler);

console.log();
