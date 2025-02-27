import { initializeCalendar } from "../components/main/forMain.js";
import { mburger } from "../components/mixins/mburger/mburger.js";
import { rangeSlider } from "../components/mixins/rangeSlider/rangeSlider.js";
function loadContent(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then((html) => {
      document.body.innerHTML = html;
      console.log("html ", url);
      setTimeout(() => initializeScripts(url), 100);
    })
    .catch((err) => {
      document.body.innerHTML = "<h1>Error loading content</h1>";
      console.error(err);
    });
}

function navigateTo(route) {
  if (routes[route]) {
    history.pushState({}, "", route);
    loadContent(routes[route]);
  } else {
    console.log("Default route or 404 handler here.");
  }
}

const routes = {
  "/": "./index.html",
  "/hotelScout/": "./index.html",
  "/hotelScout/about": "./about.html",
  "/hotelScout/registration": "./registration.html",
  "/hotelScout/enter": "./enter.html",
  "/hotelScout/ui-colors": "./ui-colors.html",
  "/hotelScout/ui-forms": "./forms.html",
  "/hotelScout/ui-cards": "./cards.html",
  "/hotelScout/ui-headers": "./headers.html",
  "/hotelScout/room": "./room.html",
  "/hotelScout/search": "./search.html",
};

// Инициализация контента при загрузке
const initialRoute = window.location.pathname;
if (routes[initialRoute]) {
  loadContent(routes[initialRoute]);
} else {
  console.log("Default route or 404 handler here.");
}

// Обработка навигации без перезагрузки страницы
document.addEventListener("click", (event) => {
  const target = event.target.closest("a");
  if (target && target.href.startsWith(window.location.origin)) {
    event.preventDefault();
    navigateTo(new URL(target.href).pathname);
  }
});

// Обработка кнопок "Назад" и "Вперед"
window.addEventListener("popstate", () => {
  loadContent(routes[window.location.pathname]);
});

function initializeScripts(url) {
  const forPage = url.split("/").pop().split(".")[0];
  console.log("forPage ", forPage);
  switch (forPage) {
    case "index":
      initializeCalendar();
      mburger();
      break;
    case "colors":
    case "cards":
    case "headers":
    case "about":
    case "search":
      mburger();
      break;
    case "forms":
      mburger();
      rangeSlider();
      break;
    // case "ui-forms":
    //   break;
    default:
      initializeCalendar();
      mburger();
  }
}
