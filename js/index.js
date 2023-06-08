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
const newCountryBtnNode = document.getElementById("newCountryBtn");
const newCountryNode = document.getElementById("newCountry");
const movieCountryNode = document.getElementById("movieCountry");
const confirmBtnNode = document.getElementById("confirmBtn");
const clearFormBtnNode = document.getElementById("ClearFormBtn");
const movieListBlockNode = document.getElementById("movieListBlock");
// const movieWatcedBtnNode = document.getElementById("movieWatcedBtn");
// const movieItemTitle = document.getElementById("movieItemTitle");
// const movieItemYearNode = document.getElementById("movieItemYear");
// const movieItemDirectorNode = document.getElementById("movieItemDirector");
// const movieItemCategoryNode = document.getElementById("movieItemCategory");
// const movieItemDeleteNode = document.getElementById("movieItemDelete");

const DISPLAY_NONE_CLASS = "display-none";
const RED_CLASS = "red";
const MOVIE_WATCHED_CLASS = "movie-item__watched-btn--active";
const NEW_ITEM_HEIGHT_0 = "new-item--height0";

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
  let category =
    newCategoryNode.value !== ""
      ? newCategoryNode.value
      : movieCategoryNode.value;
  let country =
    newCountryNode.value !== "" ? newCountryNode.value : movieCountryNode.value;
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
    newCategoryNode.classList.add(RED_CLASS);
    foolproof += 1;
  } else {
    movieCategoryNode.classList.remove(RED_CLASS);
    newCategoryNode.classList.remove(RED_CLASS);
  }
  if (country === "") {
    movieCountryNode.classList.add(RED_CLASS);
    newCountryNode.classList.add(RED_CLASS);
    foolproof += 1;
  } else {
    movieCountryNode.classList.remove(RED_CLASS);
    newCountryNode.classList.remove(RED_CLASS);
  }
  if (foolproof > 0) {
    return;
  }

  movieList.push(new Movie(title, year, category, country));
  init();
};

const clearForm = () => {
  movieTitleNode.value =
    movieYearNode.value =
    movieCategoryNode.value =
    movieCountryNode.value =
    newCategoryNode.value =
    newCountryNode.value =
      "";
};

const parseCategoryList = () => {
  let optionCategory = document.createElement("option");
  optionCategory.setAttribute("disabled", "");
  optionCategory.setAttribute("selected", "");
  optionCategory.setAttribute("hidden", "");
  optionCategory.setAttribute("value", "");
  optionCategory.innerText = "Category";
  movieCategoryNode.appendChild(optionCategory);
  data.categoryList.forEach((item) => {
    optionCategory = document.createElement("option");
    optionCategory.value = item;
    optionCategory.innerText = item;
    movieCategoryNode.appendChild(optionCategory);
  });
};

const parseCountryList = () => {
  let optionCountry = document.createElement("option");
  optionCountry.setAttribute("disabled", "");
  optionCountry.setAttribute("selected", "");
  optionCountry.setAttribute("hidden", "");
  optionCountry.setAttribute("value", "");
  optionCountry.innerText = "Country";
  movieCountryNode.appendChild(optionCountry);
  data.coutryList.forEach((item) => {
    optionCountry = document.createElement("option");
    optionCountry.value = item;
    optionCountry.innerText = item;
    movieCountryNode.appendChild(optionCountry);
  });
};

const init = () => {
  clearForm();
  parseCategoryList();
  parseCountryList();
  parseMovieList();
};

const newCategoryHandler = () => {
  newCategoryNode.classList.toggle(NEW_ITEM_HEIGHT_0);
  movieCategoryNode.classList.toggle(NEW_ITEM_HEIGHT_0);
};

const newCountryHandler = () => {
  newCountryNode.classList.toggle(NEW_ITEM_HEIGHT_0);
  movieCountryNode.classList.toggle(NEW_ITEM_HEIGHT_0);
};

const parseMovieList = () => {
  movieListBlockNode.innerHTML = "";

  movieList.forEach((item, index) => {
    let movieItemYear = document.createElement("span");
    movieItemYear.innerText = item.year;

    let movieItemCountry = document.createElement("span");
    movieItemCountry.innerText = item.country;

    let movieItemCategory = document.createElement("span");
    movieItemCategory.innerText = item.category;

    let movieItemAdditFeat = document.createElement("div");
    movieItemAdditFeat.classList.add("movie-item__additional-features");
    movieItemAdditFeat.appendChild(movieItemYear);
    movieItemAdditFeat.appendChild(movieItemCountry);
    movieItemAdditFeat.appendChild(movieItemCategory);

    let movieItemTitle = document.createElement("div");
    movieItemTitle.classList.add("movie-item__title");
    movieItemTitle.innerText = item.title;

    let movieItemDesc = document.createElement("div");
    movieItemDesc.classList.add("movie-item__desc");
    movieItemDesc.appendChild(movieItemTitle);
    movieItemDesc.appendChild(movieItemAdditFeat);

    let movieWatcedBtn = document.createElement("button");
    movieWatcedBtn.classList.add("movie-item__watched-btn");
    movieWatcedBtn.setAttribute("id", "movieWatcedBtn");

    let movieItemDelete = document.createElement("button");
    movieItemDelete.classList.add("movie-item__delete-btn");
    movieItemDelete.setAttribute("id", "movieItemDelete");

    let movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    movieItem.appendChild(movieWatcedBtn);
    movieItem.appendChild(movieItemDesc);
    movieItem.appendChild(movieItemDelete);

    movieListBlockNode.appendChild(movieItem);
  });
};

//main programm code
init();
addMovieBtnNode.addEventListener("click", openMovieForm);
cancelAddMovieBtnNode.addEventListener("click", closeMovieForm);
confirmBtnNode.addEventListener("click", addMovieToList);
clearFormBtnNode.addEventListener("click", init);
newCategoryBtnNode.addEventListener("click", newCategoryHandler);
newCountryBtnNode.addEventListener("click", newCountryHandler);
