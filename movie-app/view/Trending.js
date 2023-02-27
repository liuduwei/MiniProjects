import { MovieCard } from "./MovieCard.js";

class Trending {
  constructor() {
    this.root = document.querySelector(".container");
  }

  render(items, url) {
    items.forEach((item, idx) => {
      const { poster_path, original_title, vote_average, overview } = item;
      const img_url = `${url}original${poster_path}`;
      const score = +vote_average.toFixed(1);
      const data = {
        img: img_url,
        title: original_title,
        score: score,
        description: overview,
      };
      this.root.innerHTML +=
        /*html*/
        `<card-movie>
        <img
          slot = 'img'
          class="img"
          src="${data.img}"
          alt="cover"
        />
        <h2 slot="title" class="title">${data.title}</h2>
        <div slot = "score" class="score">${data.score}</div>
        <p slot="description" class="overview-description">
          ${data.description}
        </p>
      </card-movie>`;
    });
  }
}

export const Trend = new Trending();
