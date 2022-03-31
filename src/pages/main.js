import "./style.scss";
import { html, render } from 'lit-html';
import { Footer } from "../components/footer/footer";
import { AddForm, addMenu } from "../components/addForm/addForm";

import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("app");

const template = () => html`

    <h1>Hello Vite!</h1>

    <div class="app__box" >
      <h2>BOX</h2>
      <div class="app__box__container" >
        <h3>BOX 2</h3>

      </di>
    </di>
    ${AddForm()}
    ${Footer()}
  `;


// * render(contenido, contenedor)
render(template(), container);

// Change color input
addMenu();
