import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get styles() {
    return css`
      :host {
        .card {
  background-color: var(--my-card-bg-color, #A44A3F);
  max-width: 400px;
  margin: 0 auto;
  display: inline-block;
  padding: 0;
}

.header {
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  font-weight: bold;
  margin: 20px 100px;
  color: #F19C79;
}

.desc {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
  color: #F19C79;
  
}

.btnn {
  display: none;
  background-color: #F6F4D2;
  color: #CBDFBD;
  font-size: 30px;
  margin: 10px 120px;
  padding: 20px;
  border: 10px solid #F54927;
}

.item {
  max-width: 300px;
  margin: 50px;
  margin-bottom: 7px;
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  button{
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .card {
    transform: scale(0.8);
    transform-origin: top center;
  }
}

      }
    `;
  }

  constructor() {
    super();
    this.title = "My card";
    this.img = "https://oer.hax.psu.edu/mjr7285/sites/hwblog/files/Screenshot%202026-01-22%201420111.png";
    this.desc = "IMG Description: Meme created in part one of homework. Further notes found on HW pt.1 blog post"
    this.alt = "Meme made in HW week one, part one";

  }

  render() {
    return html`<div class="card">
  <div class="wrapper">
  <h1 class="header">Simple Card</h1>
<div class="card__btn">   
  <a href="https://hax.psu.edu" class="details-btn">
    <button class="btnn"> Details </button>
  </a>
</div>
<div class="card__img">
  <img class="item" src="${this.img}" alt="${this.alt}"/>
  <p class="desc">${this.desc}</p>
</div>  
  </div>
</div>
`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      desc: { type: String },
      alt: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
