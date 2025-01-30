// this is for main page. for initial data to search for room numbers
const btnMinus = document.querySelectorAll(".btn--minus");
const btnPlus = document.querySelectorAll(".btn--plus");
const valueGuests = document.querySelectorAll(".btn-value");
const valueGuestsClear = document.querySelector(".guest__button--clear");
const valueGuestsApply = document.querySelector(".guest__button--apply");
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
function showValueDropdownBabies() {
  const buttonElement = document.querySelector(".show-dropdown");
}
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
