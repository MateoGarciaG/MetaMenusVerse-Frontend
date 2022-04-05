import loginHtml from "./login.html?raw";
import "./login.module.scss";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import { formLoginEvents } from "/components/login/scripts/events";

export const Login = () => {
  const login = document.createDocumentFragment();
  login.innerHTML = loginHtml;

  const loginContainer = document.querySelector("#loginContainer");
  if (localStorage.getItem("token")) {
    const logoutButton = html`
      <div class="container-xxl py-5">
        <div class="container px-lg-12">
          <div
            class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <button
              @click=${formLoginEvents.onLogout}
              class="btn
  btn-outline-success btn-lg logout"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    `;

    render(logoutButton, loginContainer);
  } else {
    render(html`${unsafeHTML(loginHtml)}`, loginContainer);

    const formCreation = document.querySelector("#loginForm");

    formLoginEvents.onSubmit(formCreation);
  }
};
