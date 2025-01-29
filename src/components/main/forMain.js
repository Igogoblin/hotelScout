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
    if (parseInt(valueGuests[index].textContent) > 0) {
      valueGuests[index].textContent =
        parseInt(valueGuests[index].textContent) - 1;
      showValueDropdown();
    }
  });
});

btnPlus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    valueGuests[index].textContent =
      parseInt(valueGuests[index].textContent) + 1;
    showValueDropdown();
  });
});

function showValueDropdown() {
  const buttonElement = document.querySelector(".show-dropdown");
  const guestShow = checkGuests();
  if (!buttonElement) return;

  if (guestShow === 0) {
    buttonElement.textContent = "Сколько гостей";
  } else if (guestShow === 1) {
    buttonElement.textContent = "1 гость";
  } else if (guestShow > 1 && guestShow < 5) {
    buttonElement.textContent = `${guestShow} гостя`;
  } else {
    buttonElement.textContent = `${guestShow} гостей`;
  }
}

function checkGuests() {
  let count = 0;

  valueGuests.forEach((value) => {
    count += parseInt(value.textContent) || 0;
  });

  return count;
}
