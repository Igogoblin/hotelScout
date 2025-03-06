import AirDatepicker from "air-datepicker";
import {
  setupValueControls,
  showValueDropdown,
} from "../../components/main/forMain.js";
import {
  initGuestControls,
  updateGuestDisplay,
} from "../../components/mixins/dropdown/dropdown.js";
import { rangeSlider } from "../../components/mixins/rangeSlider/rangeSlider.js";

export function workSearch() {
  showSearchCalendar();
  showGuests();
  showRooms();
  showValueCoast();
}

function showSearchCalendar() {
  const calendarElement = document.querySelector(".searchCalendar");
  let calendarInstance = null; // Сохраняем экземпляр календаря

  calendarElement.addEventListener("click", () => {
    if (!calendarInstance) {
      calendarInstance = setupCalendar(calendarElement);
    } else {
      toggleCalendar(calendarInstance);
    }
  });
}

function setupCalendar(calendarElement) {
  const instance = new AirDatepicker(calendarElement, {
    range: true,
    inline: true,
    classes: "showNone",
    autoClose: false,
    prevHtml: `<svg class="arrow-icon" width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
        <path class="arrow-path" d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/>
        </svg>`,
    nextHtml: `<svg width="13" height="11" viewBox="0 0 11 18" fill="#BC9CFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/>
    </svg>`,
    navTitles: {
      days: `<strong>MMMM</strong>${" "}<strong>yyyy</strong>`,
    },
    onSelect: ({ formattedDate }) => {
      if (formattedDate.length === 2) {
        const [start, end] = formattedDate.map((date) =>
          date.split(".").slice(0, 2).join(".")
        );
        calendarElement.value = `${start} - ${end}`;
      }
    },
    buttons: [
      {
        content: "Очистить",
        onClick: (datepicker) => {
          datepicker.clear();
        },
      },
      {
        content: "Применить",
        onClick: (datepicker) => {
          datepicker.hide();
          toggleCalendar();
        },
      },
    ],
  });

  return instance; // Возвращаем созданный календарь
}

function toggleCalendar(calendarInstance) {
  const calendar = document.querySelector(".air-datepicker");
  if (!calendar) return;

  calendar.classList.toggle("showNone");

  // Убираем предыдущий обработчик, если он уже существует
  document.removeEventListener("click", closeCalendarOnClickOutside);

  if (!calendar.classList.contains("showNone")) {
    // Добавляем обработчик, но только если календарь активен
    document.addEventListener("click", closeCalendarOnClickOutside);
  }
}

function closeCalendarOnClickOutside(event) {
  const calendar = document.querySelector(".air-datepicker");
  const calendarButton = document.querySelector(".searchCalendar");

  if (!calendar || !calendarButton) return;

  // Закрываем календарь только если клик был вне календаря и кнопки
  if (
    !calendar.contains(event.target) &&
    !calendarButton.contains(event.target)
  ) {
    calendar.classList.add("showNone");
    document.removeEventListener("click", closeCalendarOnClickOutside);
  }
}

// ============================================================

function showGuests() {
  const dropdownShow = document.querySelector(".show-dropdown");
  const dropdownContent = document.querySelector(".dropdown__content");
  const valueGuests = document.querySelectorAll(".btn-value");
  const valueGuestsClear = document.querySelector(".guest__button--clear");
  const valueGuestsApply = document.querySelector(".guest__button--apply");

  dropdownShow.addEventListener("click", () => {
    dropdownContent.classList.toggle("guest-design--active");
  });

  valueGuestsApply?.addEventListener("click", () => {
    dropdownContent.classList.remove("guest-design--active");
  });

  valueGuestsClear?.addEventListener("click", () => {
    valueGuests.forEach((value) => {
      value.textContent = 0;
    });
    showValueDropdown();
  });

  setupValueControls(valueGuests);
  showValueDropdown();
}
// ============================================================
function showRooms() {
  const input = document.querySelector(".show-dropdownRoom");
  const block = document.querySelector(".dropdown__content.check__room");
  const valueRooms = document.querySelectorAll(".btn_value");

  input.addEventListener("click", (event) => {
    // event.stopPropagation();
    block.classList.toggle("dropdown__content__active");
  });
  document.addEventListener("click", (event) => {
    if (!block.contains(event.target) && !input.contains(event.target)) {
      block.classList.remove("dropdown__content__active");
    }
  });
  initGuestControls(valueRooms);
  updateGuestDisplay();
}
// range slider value ====================================================
function showValueCoast() {
  let rangeMin = document.querySelector(".range-min");
  let rangeMax = document.querySelector(".range-max");
  rangeSlider(([min, max]) => {
    console.log("Минимум:", min, "Максимум:", max);
    rangeMin.textContent = min + "₽ - ";
    rangeMax.textContent = max + "₽";
  });
}
