export function correctHoverForm() {
  const rooms = document.querySelectorAll(".rooms");
  const beds = document.querySelectorAll(".beds");
  rooms.forEach((room) => {
    if (room.classList.contains("btn--minus")) {
      room.classList.remove("btn-active");
    }
    if (room.classList.contains("btn-value")) {
      room.textContent = 2;
    }
  });
  beds.forEach((bed) => {
    if (bed.classList.contains("btn--minus")) {
      bed.classList.remove("btn-active");
    }
    if (bed.classList.contains("btn-value")) {
      bed.textContent = 2;
    }
  });
}
