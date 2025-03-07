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
      minusButtons[index].classList.add("correctClass");
    } else {
      minusButtons[index].classList.remove("correctClass");
    }
  });
}

export function adjustGuestCount(guestValues, index, change) {
  const currentValue = parseInt(guestValues[index].textContent) || 0;
  guestValues[index].textContent = Math.max(0, currentValue + change);
  updateGuestDisplay();
}

export function updateGuestDisplay() {
  const displayButton = document.querySelector(".show-dropdownRoom");
  if (!displayButton) return;
  const totalRooms = parseInt(
    document.querySelector(".rooms.btn_value").textContent
  );
  const totalBeds = parseInt(
    document.querySelector(".beds.btn_value").textContent
  );

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
