export class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.tmpl = document.querySelector(".tmpl--movie-card");
    this.shadow = this.attachShadow({ mode: "open" });
    this._render();
  }

  _render() {
    this.shadow.appendChild(this.tmpl.content.cloneNode(true));
  }

  // static get observedAttributes() {
  //   return [
  //     dataset
  //   ];
  // }
  // attributeChangedCallback(name, oldValue, newValue) {
  //   /* ... */
  // }
}

export const Trend = new Trending();
