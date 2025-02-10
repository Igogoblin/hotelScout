import AirDatepicker from "air-datepicker";

// this is for main page. for initial data to search for room numbers
const btnMinus = document.querySelectorAll(".btn--minus");
const btnPlus = document.querySelectorAll(".btn--plus");
const valueGuests = document.querySelectorAll(".btn-value");
const valueGuestsClear = document.querySelector(".guest__button--clear");
const valueGuestsApply = document.querySelector(".guest__button--apply");
// const dropdownShow = document.querySelector(".show-dropdown");
const dropdownContent = document.querySelector(".dropdown__content");

// dropdownShow.addEventListener("click", function () {
//   dropdownContent.classList.toggle("show");
// });

window.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown__content").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }
});

valueGuestsClear.addEventListener("click", () => {
  valueGuests.forEach((value) => {
    value.textContent = 0;
  });
  showValueDropdown();
});

valueGuestsApply.addEventListener("click", () => {
  dropdownContent.classList.remove("show");
});

btnMinus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("babies")) {
      if (parseInt(valueGuests[index].textContent) > 0) {
        valueGuests[index].textContent =
          parseInt(valueGuests[index].textContent) - 1;
        showValueDropdown();
      }
    } else {
      if (parseInt(valueGuests[index].textContent) > 0) {
        valueGuests[index].textContent =
          parseInt(valueGuests[index].textContent) - 1;
        showValueDropdown();
      }
    }
  });
});

btnPlus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("babies")) {
      valueGuests[index].textContent =
        parseInt(valueGuests[index].textContent) + 1;
      showValueDropdown();
    } else {
      valueGuests[index].textContent =
        parseInt(valueGuests[index].textContent) + 1;
      showValueDropdown();
    }
  });
});

function showValueDropdown() {
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
// function showValueDropdownBabies() {
//   const buttonElement = document.querySelector(".show-dropdown");
// }
function checkGuests(isBabies = false) {
  let count = 0;
  if (isBabies) {
    valueGuests.forEach((value) => {
      if (value.classList.contains("babies")) {
        count += parseInt(value.textContent) || 0;
      }
    });
    return count;
  }
  valueGuests.forEach((value) => {
    count += parseInt(value.textContent) || 0;
  });

  return count;
}

// for calendar ============================================================================
// mainCalendar
document.addEventListener("DOMContentLoaded", function () {
  const mainCalendar = document.getElementById("mainCalendar");
  const mainArrival = document.querySelector(".main__arrival");
  const mainDeparture = document.querySelector(".main__departure");
  let calendarMain = document.querySelector(".air-datepicker");
  // const mainArrivalDate = new Date(mainArrival.value);
  // const mainDepartureDate = new Date(mainDeparture.value);
  // mainCalendar.addEventListener("click", function () {
  //   // mainCalendar.classList.has("none");
  //   // (calendarMain.classList.contains("none")){

  //   // }
  //   console.log(calendarMain.classList.contains("showNone"));
  // });
  if (mainCalendar) {
    mainCalendar.addEventListener("click", function () {
      calendarMain = document.querySelector(".air-datepicker");

      // Ensure AirDatepicker is visible before toggling
      if (calendarMain) {
        calendarMain.classList.remove("showNone");
      } else {
        console.warn("AirDatepicker element not found. Ensure it initializes.");
      }
    });
  } else {
    console.error("mainCalendar element not found in the DOM.");
  }

  new AirDatepicker(mainCalendar, {
    range: true,
    // multipleDatesSeparator: " - ",
    inline: false,
    classes: "showNone",
    autoClose: false,
    visible: false,
    prevHtml: `<svg  class="arrow-icon" width="11" height="18"  fill="#BC9CFF" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
    <path  class="arrow-path" d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/>
    </svg>`,
    nextHtml: `<svg width="13" height="11" viewBox="0 0 11 18" fill="#BC9CFF" xmlns="http://www.w3.org/2000/svg">
<path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/>
</svg>
`,
    navTitles: {
      days: `<strong>MMMM</strong>${" "}<strong> yyyy</strong>`,
    },
    // selectedDates: [new Date()],
    onSelect: (datepicker) => {
      console.log("in onSelect ", datepicker);
      console.log("datepicker all", datepicker.formattedDate);

      if (datepicker.formattedDate[0]) {
        let firstTime = datepicker.formattedDate[0].split(".");
        mainArrival.value = `${firstTime[2]}-${firstTime[1]}-${firstTime[0]}`;
      }
      if (datepicker.formattedDate[1]) {
        let secondTime = datepicker.formattedDate[1].split(".");
        mainDeparture.value = `${secondTime[2]}-${secondTime[1]}-${secondTime[0]}`;
      }
    },
    buttons: [
      // "clear",
      {
        content: "Очистить", // Russian translation for "Clear"
        onClick: (datepicker) => {
          datepicker.clear(); // Example action: Clear selected date
          clearCalendar();
        },
      },
      {
        content: "Применить", // Russian translation for "Apply"
        onClick: (datepicker) => {
          datepicker.hide(); // Example action: Close the picker on apply
          clearCalendar();
        },
      },
    ],
  });
  function clearCalendar() {
    // calendarMain = document.querySelector(".air-datepicker");
    setTimeout(() => {
      calendarMain.classList.add("showNone");
    }, 100);
  }
});
