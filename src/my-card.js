import { LitElement, html, css } from 'lit';
export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Simple card";
    this.img = "https://oer.hax.psu.edu/mjr7285/sites/hwblog/files/Screenshot%202026-01-22%201420111.png";
    this.desc = "IMG Description: Meme created in part one of homework. Further notes found on HW pt.1 blog post";
    this.alt = "Meme made in HW week one, part one";
    this.details = "Details";
    this.fancy = false;
  }

  static get styles() {
    return css`
       
       .container {
        display: inline-block;
        justify-content: center;
        align-items: center;
        padding: 5px;
       }
        
        .card {
  background-color: var(--my-card-bg-color, #FFCDB2);
  max-width: 400px;
  height: 600px;
  margin: 0 auto;
  display: inline-block;
  border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  padding: 0;
}

:host([fancy]){
display: inline-block;
max-width: 410px;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
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
  margin-bottom: 10px;
  color: #F19C79;
}

.btnn {
  // display: none; commented out so I can play with it
  background-color: #FFB4A2;
  color: #6D6875;
  font-size: 30px;
  margin: 10px 120px;
  padding: 20px;
  border-radius: 8px;
  border: 10px solid #B5838D;
}

.text{
  max-height: 100px;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  color: brown;
}

.item {
  width: 300px;
  height: 200px;
  margin: 50px;
  margin-bottom: 7px;
  object-fit: cover;
  justify-content: center;
  border-radius: 8px;
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

      
    `;
  }

  render() {
    return html`
    <div class="container">
    <div class="card">
  
  <h1 class="header">${this.title}</h1>
<div class="card__btn">   
  <a href="https://hax.psu.edu" class="details-btn">
    <button class="btnn"> ${this.details} </button>
  </a>
</div>
<div class="card__img">
  <img class="item" src="${this.img}" alt="${this.alt}"/>
  <p class="desc">
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div class="text">
    <slot>${this.desc}</slot>
  </div>
</details>
</p>
</div>  
  </div>
  </div>
`;
  }

  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  static get properties() {
    return {
      title: { type: String, reflect: true },
      img: { type: String },
      desc: { type: String },
      alt: { type: String },
      details: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
