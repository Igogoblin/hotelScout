import { initializeCalendar } from "../components/main/forMain.js";
import { mburger } from "../components/mixins/mburger/mburger.js";
import { rangeSlider } from "../components/mixins/rangeSlider/rangeSlider.js";
import { correctHoverForm } from "../pages/forms/forms.js";
import { showCalendar } from "../pages/cards/cards.js";
import { checkbox } from "../components/mixins/checkbox/checkbox.js";
import { workSearch } from "../pages/search/search.js";
import { diagram } from "../components/mixins/diagram/diagram.js";

function loadContent(url, roomId = null) {
  console.log("Загружаем:", url);
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then((html) => {
      document.body.innerHTML = html;
      setTimeout(() => initializeScripts(url), 100);
      if (roomId) {
        console.log("ID комнаты:", roomId);
        loadRoomData(roomId);
      }
    })
    .catch((err) => {
      document.body.innerHTML = "<h1>Error loading content</h1>";
      console.error(err);
    });
}
function loadRoomData(roomId) {
  console.log(`Загружаем данные для комнаты ID: ${roomId}`);
  // Здесь можно подгружать данные с сервера через fetch()
}
function navigateTo(route) {
  const page = getRoute(route);
  if (page) {
    history.pushState({}, "", route);

    const roomId = route.startsWith("/hotelScout/room/")
      ? route.split("/").pop()
      : null;
    loadContent(page, roomId);
  } else {
    console.log("Страница не найдена:", route);
  }
}

const routes = {
  "/": "./index.html",
  "/hotelScout": "./index.html",
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

function getRoute(route) {
  if (route.startsWith("/hotelScout/room/")) {
    return "/hotelScout/room.html"; // Для всех комнат загружаем `room.html`
  }
  return routes[route] || null;
}
// Инициализация контента при загрузке
const initialRoute = window.location.pathname;
const page = getRoute(initialRoute);
if (page) {
  loadContent(page);
} else {
  console.log("Страница не найдена.");
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
  const route = getRoute(window.location.pathname);
  if (route) {
    loadContent(route);
  } else {
    console.log("Страница не найдена.");
  }
});

function initializeScripts(url) {
  const forPage = url.split("/").pop().split(".")[0];
  switch (forPage) {
    case "index":
      initializeCalendar();
      mburger();
      break;
    case "room":
      mburger();
      diagram();
      break;

    case "colors":

    case "headers":
    case "about":
      mburger();
      break;
    case "search":
      mburger();
      checkbox();
      workSearch();
      rangeSlider();
      break;
    case "cards":
      mburger();
      showCalendar();
      break;
    case "forms":
      mburger();
      rangeSlider();
      correctHoverForm();
      break;

    default:
      initializeCalendar();
      mburger();
  }
}
