import "./style.scss";
// import { html, render } from 'lit-html';
import { Footer } from "/components/footer/footer";
import { Header } from "/components/header/header";
import { AddForm } from "/components/addForm/addForm";
import { Main } from "/components/main/main";

import 'bootstrap/dist/css/bootstrap.min.css';
import { GroupCard } from "/components/groupCard/groupCard";


// const container = document.getElementById("app");

Header();
Main();
AddForm();
GroupCard();
Footer();

// const template = () => html`

//     <h1>Hello Vite!</h1>

//     <div class="app__box" >
//       <h2>BOX</h2>
//       <div class="app__box__container" >
//         <h3>BOX 2</h3>

//       </di>
//     </di>
//     ${AddForm()}
//   `;


// * render(contenido, contenedor)
// render(template(), container);

// Change color input
// addMenu();
