class Movie {
  constructor(title, year, category, country) {
    this.title = title;
    this.year = year;
    this.category = category;
    this.country = country;
    this.watched = false;
  }

  watchTogle() {
    this.watched = this.watched === true ? false : true;
  }
}

export default Movie;
