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
const movieWatcedBtnNode = document.getElementById("movieWatcedBtn");
const movieItemTitle = document.getElementById("movieItemTitle");
const movieItemYearNode = document.getElementById("movieItemYear");
const movieItemDirectorNode = document.getElementById("movieItemDirector");
const movieItemCategoryNode = document.getElementById("movieItemCategory");
const movieItemDeleteNode = document.getElementById("movieItemDelete");

const DISPLAY_NONE_CLASS = "display-none";
const RED_CLASS = "red";
const MOVIE_WATCHED_CLASS = "movie-item__watched-btn--active";
