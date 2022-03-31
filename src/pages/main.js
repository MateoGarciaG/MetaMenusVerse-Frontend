import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "../components/main/main";

import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { AddForm } from "../components/addForm/addForm";

import { GroupCard } from "../components/groupCard/groupCard";



document.querySelector("#app").innerHTML += `
  ${Header()}
  ${Main()}
  <h1>Hello Vite!</h1>
  ${AddForm()}
  <div class="app__box" >
    <h2>BOX</h2>
    <div class="app__box__container" >
      <h3>BOX 2</h3>
      ${GroupCard()}
    </di>
  </di>
  ${Footer()}
`;
