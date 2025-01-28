import "./index.pug";
// import "./components/main/main.pug";
import "./styles/_const.scss";
import "./styles/styles.scss";
import "./components/mixins/mixins.scss";
import "./components/main/main.scss";
import "./components/footer/footer.scss";

// import "./pages/about.pug";
// import pug from "pug";
// import registrationTemplate from "./forMixins.js";

function loadContent(url) {
  const contentDiv = document.getElementById("content");
  console.log("url ", url);
  //Загрузка соответствующего файла
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then((html) => {
      console.log("html ", html);
      contentDiv.innerHTML = html; // Заменяем содержимое #content
    })
    .catch((err) => {
      contentDiv.innerHTML = "<h1>Error loading content</h1>";
      console.error(err);
    });
}

// Проверяем текущий URL
const path = window.location.pathname;
console.log("Path", path);
if (path.includes("about")) {
  loadContent("./about.html"); // Загрузка страницы About
}
if (path.includes("registration")) {
  loadContent("./registration.html"); // Загрузка страницы Registration
} else {
  // loadContent("./main.html"); // Загрузка главной страницы
}

// document.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const url = link.getAttribute("href");
//     history.pushState({}, "", url);
//     loadContent(url === "/about" ? "./about.html" : "./index.html");
//   });
// });

// window.addEventListener("popstate", () => {
//   const path = window.location.pathname;
//   loadContent(path.includes("about") ? "./about.html" : "./index.html");
// });

// document.addEventListener("click", (e) => {
//   const target = e.target.closest("a"); // Находим ссылку
//   if (target && target.getAttribute("href").startsWith("/")) {
//     e.preventDefault(); // Останавливаем переход
//     const path = target.getAttribute("href");
//     window.history.pushState({}, "", path); // Изменяем URL
//     loadPage(path); // Загружаем контент

//   }
// });

// // Загрузка страницы
// function loadPage(path) {
//   const page = path === "/" ? "/index" : path; // Если "/" — загружаем index.html
//   fetch(`${page}.html`) // Ожидаем файл: /about.html, /contact.html
//     .then((res) => {
//       if (!res.ok) throw new Error("Page not found");
//       return res.text();
//     })
//     .then((html) => {
//       document.body.innerHTML = html; // Вставляем содержимое страницы
//     })
//     .catch((err) => {
//       console.error(err);
//       document.body.innerHTML = `<h1>404 - Page Not Found</h1>`; // Ошибка
//     });
// }

// // Обработка истории (назад/вперед)
// window.addEventListener("popstate", () => {
//   loadPage(window.location.pathname);
// });
// const pug = require("pug");

console.log("hotelScout is running!");
if (module.hot) {
  module.hot.accept();
}
// function toggleDropdown() {
//   document.getElementsByClassName("dropdown__content").classList.toggle("show");
// }

// const dropdownShow = document.querySelector(".show-dropdown");
// const dropdownContent = document.querySelector(".dropdown__content");

// dropdownShow.addEventListener("click", function () {
//   dropdownContent.classList.toggle("show");
// });

// window.addEventListener("click", (event) => {
//   if (!event.target.closest(".dropdown")) {
//     document.querySelectorAll(".dropdown__content").forEach((dropdown) => {
//       dropdown.classList.remove("show");
//     });
//   }
// });

// const main = document.querySelector("main");
// const btnLogin = document.querySelector(".btn-login");
// const btnRegister = document.querySelector(".btn-register");
// const showEnterForm = document.querySelector(".enter-form");
// const showRegisterForm = document.querySelector(".registration-form");
// const calendarBlock = document.querySelector(".calendar__block");

// btnLogin.addEventListener("click", () => {
//   showRegisterForm.style.display = "block";
//   showEnterForm.style.display = "none";
//   calendarBlock.style.display = "none";
//   main.background = "url(./assets/registrationPage.jpg)";
// });

// btnRegister.addEventListener("click", () => {
//   showEnterForm.style.display = "block";
//   showRegisterForm.style.display = "none";
//   calendarBlock.style.display = "none";
//   main.background = "url(./assets/registrationPage.jpg)";
// });
