import "./index.pug";
import "./styles/_const.scss";
import "./styles/styles.scss";
import "./components/mixins/mixins.scss";
import "./components/main/main.scss";
import "./components/footer/footer.scss";

// import pug from "pug";
// import registrationTemplate from "./forMixins.js";

// const pug = require("pug");

console.log("hotelScout is running!");
if (module.hot) {
  module.hot.accept();
}
// function toggleDropdown() {
//   document.getElementsByClassName("dropdown__content").classList.toggle("show");
// }

const dropdownShow = document.querySelector(".show-dropdown");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownShow.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown__content").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }
});
// ======================================================================================
// document.addEventListener("DOMContentLoaded", () => {
//   const dynamicContent = document.querySelector(".dynamic__content");

//   const renderRegistrationForm = (isEnter) => {
//     dynamicContent.innerHTML = registrationTemplate({ isEnter });
//   };

//   // Обработчик для кнопки "войти"
//   document.querySelector(".btn-login").addEventListener("click", () => {
//     renderRegistrationForm(true);
//   });

//   // Обработчик для кнопки "зарегистрироваться"
//   document.querySelector(".btn-register").addEventListener("click", () => {
//     renderRegistrationForm(false);
//   });
// });
// =====================================================================================
// <style>
//     body {
//         font-family: Arial, sans-serif;
//     }
//     .dropdown {
//         position: relative;
//         display: inline-block;
//     }
//     .dropdown-content {
//         display: none;
//         position: absolute;
//         background-color: #f9f9f9;
//         min-width: 160px;
//         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//         z-index: 1;
//     }
//     .dropdown-content a {
//         color: black;
//         padding: 12px 16px;
//         text-decoration: none;
//         display: block;
//     }
//     .dropdown-content a:hover {
//         background-color: #f1f1f1;
//     }
//     .show {
//         display: block;
//     }
// </style>

const main = document.querySelector("main");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const showEnterForm = document.querySelector(".enter-form");
const showRegisterForm = document.querySelector(".registration-form");
const calendarBlock = document.querySelector(".calendar__block");

btnLogin.addEventListener("click", () => {
  showRegisterForm.style.display = "block";
  showEnterForm.style.display = "none";
  calendarBlock.style.display = "none";
  main.background = "url(./assets/registrationPage.jpg)";
});

btnRegister.addEventListener("click", () => {
  showEnterForm.style.display = "block";
  showRegisterForm.style.display = "none";
  calendarBlock.style.display = "none";
  main.background = "url(./assets/registrationPage.jpg)";
});

// import express from "express";
// const app = express();
// const PORT = 8080;

// app.set("view engine", "pug");
// app.get("/", (req, res) => {
//   res.render("index.pug");
// });

// app.get("/", (req, res) => {
//   res.render("layout/main");
// });

// app.get("/", (req, res) => {
//   res.render("index.pug", {}, (err, html) => {
//     if (err) {
//       res.status(500).send("Ошибка сервера");
//     }
//     res.send(html);
//     console.log(html);
//   });
// });

// app.set("view engine", "pug");
// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "HELLO",
//     message: "Hello there!",
//   });
// });
