export class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.tmpl = document.querySelector(".tmpl--movie-card");
    this.shadow = this.attachShadow({ mode: "open" });

    this._data = {};
    this._render();
  }

  static getData(data) {
    this._data = data;
  }

  _render() {
    this.shadow.appendChild(this.tmpl.content.cloneNode(true));
    this.innerHTML = /*html*/ `
        <img
          slot = 'img'
          class="img"
          src="${this.data.img}"
          alt="cover"
        />
        <h2 slot="title" class="title">${this.data.title}</h2>
        <div slot = "score" class="score">${this.data.score}</div>
        <p slot="description" class="overview-description">
          ${this.data.description}
        </p>
    `;
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
