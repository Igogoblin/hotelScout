import AirDatepicker from "air-datepicker";

const linksToMain = document.querySelectorAll(".link-to-main, .linkToMain");

linksToMain.forEach((link) => {
  link.addEventListener("click", () => {
    initializeCalendar();
  });
});

export function initializeCalendar() {
  const mainCalendar = document.getElementById("mainCalendar");
  // const mainCalendar = document.getElementById(calendarElement);
  const dropdownShow = document.querySelector(".show-dropdown");
  const dropdownContent = document.querySelector(".dropdown__content");
  const valueGuests = document.querySelectorAll(".btn-value");
  const valueGuestsClear = document.querySelector(".guest__button--clear");
  const valueGuestsApply = document.querySelector(".guest__button--apply");

  if (!mainCalendar || !dropdownShow || !dropdownContent) {
    console.error("Required DOM elements are missing.");
    return;
  }

  dropdownShow.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });

  valueGuestsApply?.addEventListener("click", () => {
    dropdownContent.classList.remove("show");
  });

  valueGuestsClear?.addEventListener("click", () => {
    valueGuests.forEach((value) => {
      value.textContent = 0;
    });
    showValueDropdown();
  });

  setupValueControls(valueGuests);
  showValueDropdown();
  setupCalendar(mainCalendar);
}

function setupCalendar(calendarElement) {
  const mainArrivalDate = document.getElementById(
    `arrival-` + calendarElement.id
  );
  const mainDepartureDate = document.getElementById(
    `departure-` + calendarElement.id
  );
  const mainArrival = new Date(mainArrivalDate.value);
  const mainDeparture = new Date(mainDepartureDate.value);
  new AirDatepicker(calendarElement, {
    range: true,
    inline: false,
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
    onSelect: (datepicker) => {
      if (datepicker.formattedDate[0]) {
        const firstTime = datepicker.formattedDate[0].split(".");
        mainArrivalDate.value = `${firstTime[2]}-${firstTime[1]}-${firstTime[0]}`;
      }
      if (datepicker.formattedDate[1]) {
        const secondTime = datepicker.formattedDate[1].split(".");
        mainDepartureDate.value = `${secondTime[2]}-${secondTime[1]}-${secondTime[0]}`;
      }
    },
    buttons: [
      {
        content: "Очистить",
        onClick: (datepicker) => {
          datepicker.clear();
          hideCalendar();
        },
      },
      {
        content: "Применить",
        onClick: (datepicker) => {
          datepicker.hide();
          hideCalendar();
        },
      },
    ],
  });

  calendarElement.addEventListener("click", () => {
    const calendar = document.querySelector(".air-datepicker");
    if (calendar) {
      calendar.classList.remove("showNone");
    }
  });
}

function hideCalendar() {
  const calendar = document.querySelector(".air-datepicker");
  setTimeout(() => {
    calendar.classList.add("showNone");
  }, 100);
}
// for dropdown guest --------------------------------------------------
export function setupValueControls(valueGuests) {
  const btnMinus = document.querySelectorAll(".btn--minus");
  const btnPlus = document.querySelectorAll(".btn--plus");

  btnMinus.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      updateGuestCount(valueGuests, index, -1);
      checkClassButton(btnMinus, valueGuests);
    });
  });

  btnPlus.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      updateGuestCount(valueGuests, index, 1);
      checkClassButton(btnMinus, valueGuests);
    });
  });
}

function checkClassButton(btnMinus, valueGuests) {
  valueGuests.forEach((guest, index) => {
    if (parseInt(guest.textContent) === 0) {
      console.log("we ");
      btnMinus[index].classList.add("correctClass");
    }
    if (parseInt(guest.textContent) > 0) {
      btnMinus[index].classList.remove("correctClass");
    }
  });
}

export function updateGuestCount(valueGuests, index, change) {
  const currentValue = parseInt(valueGuests[index].textContent) || 0;
  valueGuests[index].textContent = Math.max(0, currentValue + change);
  showValueDropdown();
}

export function showValueDropdown() {
  const buttonElement = document.querySelector(".show-dropdown");
  const guestShow = checkGuests();
  const babiesCount = checkGuests(true);
  if (!buttonElement) return;

  let displayText = "";

  if (guestShow === 0) {
    displayText = "Сколько гостей";
  } else if (guestShow === 1) {
    displayText = "1 гость";
  } else if (guestShow > 1 && guestShow < 5) {
    displayText = `${guestShow} гостя`;
  } else {
    displayText = `${guestShow} гостей`;
  }

  if (babiesCount > 0) {
    displayText += `, ${babiesCount} ${
      babiesCount === 1
        ? "младенец"
        : babiesCount < 5
        ? "младенца"
        : "младенцев"
    }`;
  }

  buttonElement.textContent = displayText;
}

export function checkGuests(isBabies = false) {
  let count = 0;
  const valueGuests = document.querySelectorAll(".btn-value");
  valueGuests.forEach((value) => {
    if (isBabies && value.classList.contains("babies")) {
      count += parseInt(value.textContent) || 0;
    } else if (!isBabies && !value.classList.contains("babies")) {
      count += parseInt(value.textContent) || 0;
    }
  });
  return count;
}
