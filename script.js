let newtodo = document.getElementById("new-to-do-2");
let texttodo = document.querySelector(".text-to-do");
let divblock2 = document.querySelector(".div-block-2");

let i = 0;
divblock2.innerHTML = "";
document
  .querySelector(".to-do-sub-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    var x = newtodo.value;
    var newdiv = document.createElement("div");
    newdiv.classList.add("checkbox_wrapper");
    newdiv.innerHTML = `<label class="w-checkbox checkbox-field-2"
    ><input
      type="checkbox"
      id="checkbox-2"
      name="checkbox-2"
      data-name="Checkbox 2"
      class="w-checkbox-input"
    /><span class="to-do-task w-form-label" for="checkbox-2"
      >${x}</span
    ></label
  >
  <a href="#" class="remove-btn w-button">remove</a>`;

    divblock2.prepend(newdiv);
    texttodo.textContent = `You have ${++i} todos left`;
    newtodo.value = "";
    var removebtn = document.querySelector(".remove-btn");
    var checkbox2 = document.getElementById("checkbox-2");
    var todotask = document.querySelector(".to-do-task");
    var textfield = document.querySelector(".text-field");
    var subbtn = document.querySelector(".sub-btn");
    var todotaskcl = document.querySelectorAll(".to-do-task");
    var resetbutton = document.querySelector(".reset-button");

    removebtn.addEventListener("click", function () {
      if (todotask.classList.contains("strike")) {
        newdiv.remove();
      } else {
        newdiv.remove();

        texttodo.textContent = `You have ${--i} todos left`;
      }
    });

    checkbox2.addEventListener("click", function () {
      todotask.classList.toggle("strike");
      if (todotask.classList.contains("strike")) {
        texttodo.textContent = `You have ${--i} todos left`;
      } else {
        texttodo.textContent = `You have ${++i} todos left`;
      }
    });

    subbtn.addEventListener("click", function (e) {
      e.preventDefault("#email-form");
      todotaskcl.forEach(function (el, index) {
        el.parentElement.parentElement.classList.remove("display");
      });

      todotaskcl.forEach(function (el, index) {
        if (
          !el.textContent
            .toLowerCase()
            .includes(textfield.value.trim().toLowerCase())
        ) {
          el.parentElement.parentElement.classList.add("display");
        }
      });
    });

    resetbutton.addEventListener("click", function (e) {
      e.preventDefault();
      textfield.value = " ";
      todotaskcl.forEach(function (el, index) {
        el.parentElement.parentElement.classList.remove("display");
      });
    });
  });

document.querySelector(".sub-btn").addEventListener("click", function (e) {
  e.preventDefault("#email-form");
});
