import { LitElement, html, css } from 'lit';
const dog = new URL('../assets/dog.jpg', import.meta.url).href;
export class SheetzCard extends LitElement {
    static get properties() {
      return {
        name:  { 
          type: String,
          reflect: true,
        },
        food: {
          type: String,
        },
      }
    }
    static get styles() {
      return css`
        .wrapper {
  width: 400px;
  border: 10px solid black;
  display: inline-flex;
  background-color: yellow; 
  transition: background-color 0.5s; 
}
.wrapper:hover {
  background-color: white; 
}
.image {
  width: 400px;
}

.header {
  text-align: center;
  font-size: 2rem;

}

.header h3:hover {

  font-size: 1.1em;
}

.header h3,
.header h4 {
  transition: .3s ease-in-out all;
  margin: 16px;
  font-style: normal;

}

.buttons button:focus,
.buttons button:hover {
  background-color: black(200,0,50,.5);
}

.buttons button:active {
  background-color: black(50,0,200,.5);
}

.buttons {
  display: block;
}

button {
  padding: 10px;
  font-size: 12px;
  background-color: red;
    color: white;
    border: 1px;
    padding: 5px 10px; 
    cursor: pointer;
}

details {
  margin-left: 24px;
  padding: 10px;
}
.details summary {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

@media only screen and (max-width: 1200px){
  .wrapper {
    background-color: red;
  }
}
@media only screen and (max-width: 600px){
  .wrapper {
    background-color: yellow;
  }
}
@media only screen and (max-width: 425px){
  .wrapper {
    font-weight: normal;
  }
  .wrapper .header h3 {
    font-size: 12px;
  }
  .wrapper .header h4 {
    font-size: 10px !important;
  }
  details {
    display: none;
  }
}
        `;
    }
    constructor() {
      super();
      this.name = 'Sheetz';
      this.food = 'Hot Dogs';
    }
    render() {
      return html`
  <div class="wrapper">
  <div class="container">
  <img class="image" src="${dog}"/>
  <div class="header">
    <h3>${this.name}</h3>
    <h4>${this.food}</h4>
  </div>
  <details class="details">
    <summary>Food Details</summary>
    <div>
      <ul>
        <li>2 Beef hotdogs on brioche buns with optional codiments such as ketchup, mustard, or chili cheese sauce.</li>
        <li>additional charges could be applied to MTO</li>
       </ul>
    </div>
    </details>   
    </div>
    </div>
  
      `;
    }
  }
customElements.define('sheetz-card-1', SheetzCard); 