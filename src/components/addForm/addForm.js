import addFormHtml from "./addForm.html?raw";
import styles from "./addForm.module.scss";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { repeat } from "lit-html/directives/repeat.js";
import { until } from "lit/directives/until.js";
import { allIngredients as ingredients } from "/services/gateways/ingredients.service";

export const AddForm = () => {
  const addForm = document.createDocumentFragment();
  addForm.innerHTML = addFormHtml;

  const addFormContainer = document.querySelector("#addFormContainer");
  render(html`${unsafeHTML(addFormHtml)}`, addFormContainer);

  const multiselectContainer = document.querySelector(".multi-select");

  // render(
  //   html` <select
  //     class="multi ${styles["multiselect-custom"]}"
  //     id="ingredients"
  //     name="ingredients"
  //   >
  //     <option value="" disabled selected>Select your option</option>
  //     <option value="Bananas">Bananas</option>
  //     <option value="Apples">Apples</option>
  //   </select>`,
  //   multiselectContainer
  // );

  // ${repeat(
  //   data.map((i) => i.name),
  //   (ingredient) => ingredient.id,
  //   (ingredient) =>
  //     html`<option value="${ingredient}">${ingredient}</option>`
  // )}

  // const selectM = html`${until(
  //   ingredients().then((data) => {
  //     return data.map((element) => {
  //       return html`<div class="wrapper">
  //         <div class="tile">
  //           <h2>${element.name}</h2>
  //           <p>${element.name}</p>
  //         </div>
  //       </div>`;
  //     });
  //   }),
  //   html` <h4>Waiting to resolve Ingredients data</h4> `
  // )}`;

  // render(selectM, multiselectContainer);

  const multiSelect = document.querySelector("#ingredients2");
  // var option = document.createElement("option");
  // option.text = "Kiwi";
  // sM2.add(option);

  async function addMultiselectValues() {
    const data = await ingredients();

    render(
      html`
        ${repeat(
          data.map((i) => i.name),
          (ingredient) => ingredient.id,
          (ingredient) =>
            html`<option value="${ingredient}">${ingredient}</option>`
        )}
      `,
      multiSelect
    );
  }

  addMultiselectValues();

  // ingredients().then((data) => {
  //   let option2 = document.createElement("div");
  //   option2.innerHTML = `
  //   <select
  //       class="multi ${styles["multiselect-custom"]}"
  //       id="ingredients"
  //       name="ingredients"
  //     >
  //       <option value="" disabled selected>Select your option</option>
  //       ${data.map(i => i.name).map(i => `<option value="${i}">${i}</option>`)}
  //   </select>
  //   `;

  //   console.log("OPTION2", option2)

  //   multiselectContainer.appendChild(option2);
  // });

  // const selectMultiple = html`${until(
  //   ingredients().then((data) => {
  //     return html`
  //       <select
  //         class="multi ${styles["multiselect-custom"]}"
  //         id="ingredients"
  //         name="ingredients"
  //       >
  //         <option value="" disabled selected>Select your option</option>
  //         ${repeat(
  //           data.map((i) => i.name),
  //           (ingredient) => ingredient.id,
  //           (ingredient) =>
  //             html`<option value="${ingredient}">${ingredient}</option>`
  //         )}
  //       </select>
  //     `;
  //   }),
  //   html`<h4>Waiting to resolve Ingredients data</h4> `
  // )}`;

  // render(selectMultiple, multiselectContainer);

  // ${repeat(
  //   data.map((i) => i.name),
  //   (ingredient) => ingredient.id,
  //   (ingredient) =>
  //     html`<option value="${ingredient}">${ingredient}</option>`
  // )}

  // render(
  //   html`
  //     <select
  //       class="multi ${styles["multiselect-custom"]}"
  //       id="ingredients"
  //       name="ingredients"
  //     >
  //       <option value="" disabled selected>Select your option</option>

  //     </select>
  //   `,
  //   multiselectContainer
  // );

  window.multiSelect.refresh();

  // document
  //   .querySelector("#ingredients")
  //   .addEventListener("mouseout", function (e) {
  //     e.preventDefault();
  //     console.log(e.target);
  //     const vals = document.querySelector("#ingredients").value.split(",");
  //     console.log(vals); // "Banana,Apples,..."
  //     // parse as an array
  //     vals.split(","); // [Bananas, Apples, ...]
  //   });

  const formCreation = document.querySelector("#agregarFormulario");

  formCreation.onsubmit = async (e) => {
    e.preventDefault();

    let dataForm = new FormData(formCreation);

    // Display the values
    for (var value of dataForm.values()) {
      console.log(value);
    }

    console.log(document.querySelector("#ingredients").value.split(","));
  };
};

const addMenu = () => {
  document.getElementById("name").value = "Mateo";
};
