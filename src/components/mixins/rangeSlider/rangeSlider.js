export function rangeSlider() {
  const slider = document.querySelector("toolcool-range-slider");

  slider.addEventListener("change", (event) => {
    console.log("Значение 1:", event.detail.value1);
    console.log("Значение 2:", event.detail.value2);
  });
}
