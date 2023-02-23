import { TRENDING_URL, CONFIGURATION_URL } from "./config.js";
import { state } from "./model.js";
import { getJson } from "./helper.js";
import { MovieCard } from "./view/MovieCard.js";
import { Trend } from "./view/trending.js";

const cardController = async function() {
  const data = await getJson(TRENDING_URL);
  const cfg = await getJson(CONFIGURATION_URL);
  const { secure_base_url } = cfg.images;
  const {img : backdrop_path, title : original_title, score : vote_average, description : overview } = data.results;
  // const img_url = `${state.configuration.url}/original/${img}`;
  // const score = +score.toFixed(2);
  state.configuration.url = secure_base_url;
  state.results = {img ,title, score, description};
  console.log(state);

  customElements.define('card-movie', MovieCard);
}

cardController();