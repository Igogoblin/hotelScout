export function initGuestControls(guestValues) {
  const minusButtons = document.querySelectorAll(".btn__minus");
  const plusButtons = document.querySelectorAll(".btn__plus");

  minusButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      adjustGuestCount(guestValues, index, -1);
      updateMinusButtonState(minusButtons, guestValues);
    });
  });

  plusButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      adjustGuestCount(guestValues, index, 1);
      updateMinusButtonState(minusButtons, guestValues);
    });
  });
}

function updateMinusButtonState(minusButtons, guestValues) {
  guestValues.forEach((guest, index) => {
    if (parseInt(guest.textContent) === 0) {
      minusButtons[index].classList.add("btn_disabled");
    } else {
      minusButtons[index].classList.remove("btn_disabled");
    }
  });
}

export function adjustGuestCount(guestValues, index, change) {
  const currentValue = parseInt(guestValues[index].textContent) || 0;
  guestValues[index].textContent = Math.max(0, currentValue + change);
  updateGuestDisplay();
}

export function updateGuestDisplay() {
  const displayButton = document.querySelector(".dropdown_display");
  const totalGuests = countGuests();
  const babyCount = countGuests(true);
  if (!displayButton) return;

  let text = "";

  if (totalRooms === 0) {
    text = "Выберите номер";
  } else if (totalRooms === 1) {
    text = "1 спальня";
  } else if (totalRooms > 1 && totalRooms < 5) {
    text = `${totalRooms} спальни`;
  } else {
    text = `${totalRooms} спален`;
  }

  if (totalBeds > 0) {
    text += `, ${totalBeds} ${
      totalBeds === 1 ? "кровать" : totalBeds < 5 ? "кровати" : "кроватей"
    }`;
  }

  displayButton.textContent = text;
}

export function countGuests(isBabies = false) {
  let count = 0;
  const guestValues = document.querySelectorAll(".btn_value");
  guestValues.forEach((value) => {
    if (isBabies && value.classList.contains("baby")) {
      count += parseInt(value.textContent) || 0;
    } else if (!isBabies && !value.classList.contains("baby")) {
      count += parseInt(value.textContent) || 0;
    }
  });
  return count;
}
