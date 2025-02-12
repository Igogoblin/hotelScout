import "./index.pug";
// import "./components/main/main.pug";
import "./styles/_const.scss";
import "./styles/styles.scss";
import "./components/mixins/mixins.scss";
import "./components/main/main.scss";
import "./components/footer/footer.scss";
import "./components/main/forMain.js";
import "./components/mixins/roomCard/roomCard.pug";
import "./components/mixins/roomCard/roomCard.scss";
import arrowBack from "@assets/arrow_back.svg";

// import flatpickr from "flatpickr";
// import { Russian } from "flatpickr/dist/l10n/ru.js";

import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
// import "air-datepicker/air-datepicker.css";

// import "./pages/about.pug";
// import pug from "pug";
// import registrationTemplate from "./forMixins.js";
// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll("a[data-link]");

//   links.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault(); // Предотвращаем переход по ссылке
//       const url = link.getAttribute("href");
//       loadContent(url);
//       history.pushState(null, "", url); // Меняем URL без перезагрузки страницы
//     });
//   });

//   // Обработка прямого захода на страницу
//   const path = window.location.pathname;
//   // const defaultRoute = "./index.html";
//   // loadContent(path === "/" ? defaultRoute : `.${path}`);
// });

// window.addEventListener("popstate", () => {
//   const path = window.location.pathname;
//   loadContent(`.${path}`);
// });

function loadContent(url, isFullPageLoad) {
  const contentDiv = document.getElementById("content");
  // const isFullPageLoad = url === "./ui-kit.html";

  console.log("url ", url);
  //Загрузка соответствующего файла
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then((html) => {
      if (isFullPageLoad) {
        document.body.innerHTML = html;
        return;
      } else {
        contentDiv.innerHTML = html; // Заменяем содержимое #content
      }
    })
    .catch((err) => {
      contentDiv.innerHTML = "<h1>Error loading content</h1>";
      console.error(err);
    });
}

// Проверяем текущий URL
const path = window.location.pathname;
console.log("Path", path);

// if (path.includes("about")) {
//   loadContent("./about.html");
// } else if (path.includes("registration")) {
//   loadContent("./registration.html");
// } else if (path.includes("enter")) {
//   loadContent("./enter.html");
// } else {
//   // loadContent("./main.html");
// }
const routes = {
  about: { url: "./about.html", isFullPageLoad: false },
  registration: { url: "./registration.html", isFullPageLoad: false },
  enter: { url: "./enter.html", isFullPageLoad: false },
  "ui-colors": { url: "./ui-colors.html", isFullPageLoad: true },
  forms: { url: "./forms.html", isFullPageLoad: true },
  cards: { url: "./cards.html", isFullPageLoad: true },
  headers: { url: "./headers.html", isFullPageLoad: true },
  room: { url: "./room.html", isFullPageLoad: true },
  search: { url: "./search.html", isFullPageLoad: true },
};

const matchingRoute = Object.keys(routes).find((route) => path.includes(route));
const routeConfig = routes[matchingRoute];

if (routeConfig) {
  loadContent(routeConfig.url, routeConfig.isFullPageLoad);
} else {
  console.log("Default route or 404 handler here.");
}

// loadContent(routes[matchingRoute]);

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

// flatpickr("#myId", {
//   mode: "range",
//   dateFormat: "d-m-Y",
//   locale: Russian,
//   onChange: function (selectedDates) {
//     console.log(selectedDates);
//   },

//   // prevArrow: arrowBack,
//   // nextArrow: "",
// });

// new AirDatepicker("myId", {});
document.addEventListener("DOMContentLoaded", () => {
  new AirDatepicker("#myId", {
    range: true,
    multipleDatesSeparator: " - ",
    inline: true,
    prevHtml: `<svg  class="arrow-icon" width="11" height="18"  fill="#BC9CFF" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
    <path  class="arrow-path" d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/>
    </svg>`,
    nextHtml: `<svg width="13" height="11" viewBox="0 0 11 18" fill="#BC9CFF" xmlns="http://www.w3.org/2000/svg">
<path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/>
</svg>
`,
    navTitles: {
      days: `<strong>MMMM</strong><strong>yyyy</strong>`,
    },
    // selectedDates: [new Date()],
    onSelect: (datepicker) => {
      console.log(datepicker.selectedDates);
      console.log(datepicker);
    },
    buttons: [
      // "clear",
      {
        content: "Очистить", // Russian translation for "Clear"
        onClick: (datepicker) => {
          datepicker.clear(); // Example action: Clear selected dates
        },
      },
      {
        content: "Применить", // Russian translation for "Apply"
        onClick: (datepicker) => {
          datepicker.hide(); // Example action: Close the picker on apply
        },
      },
    ],
  });
  // new AirDatepicker("#my-element", {
  //   buttons: ["очистить", "применить"],
  //   multipleDatesSeparator: " - ",
  //   range: true,
  // });
});
