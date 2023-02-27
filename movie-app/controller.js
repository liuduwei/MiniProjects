import { TRENDING_URL, CONFIGURATION_URL } from "./config.js";
import { state } from "./model.js";
import { getJson } from "./helper.js";
import { MovieCard } from "./view/MovieCard.js";
import { Trend } from "./view/trending.js";

const cardController = async function() {
  const data = await getJson(TRENDING_URL);
  const cfg = await getJson(CONFIGURATION_URL);
  const { secure_base_url } = cfg.images;
  console.log(data.results);
  Trend.render(data.results, secure_base_url);
  customElements.define('card-movie', MovieCard);
}

cardController();