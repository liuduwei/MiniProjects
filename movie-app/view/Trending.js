import { MovieCard } from "./MovieCard.js";

class Trending {
  constructor() {
    this.root = document.querySelector('.container');
  }

  render(items) {
    items.forEach((item, idx) => {
      MovieCard.getData(item);
      this.root.append('<card-movie></card-movie>');
    })
  }
}

export const Trend = new Trending();