export function rangeSlider(callback) {
  const slider = document.querySelector("toolcool-range-slider");
  if (!slider) return;

  slider.addEventListener("change", (event) => {
    const value = [event.detail.value1, event.detail.value2];
    // console.log("Текущий диапазон:", value);

    // Вызываем callback с полученными значениями
    if (callback) callback(value);
  });
}
