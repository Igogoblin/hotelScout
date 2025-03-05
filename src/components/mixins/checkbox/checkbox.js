console.log("checkbox is loaded");

export function checkbox() {
  const roomOptional = document.getElementById("roomOptional");
  const roomOptionalImage = document.querySelector(
    "#roomOptional .checkBox__title-active"
  );
  const roomOptionalList = document.querySelectorAll(
    "#roomOptional .checkBox__wrapper"
  );
  // roomOptionalImage.classList.toggle("rotate-180");
  // roomOptionalList.forEach((item) => {
  //   item.classList.toggle("show");
  // });
  roomOptional.addEventListener("click", () => {
    roomOptionalImage.classList.toggle("rotate-180");
    roomOptionalList.forEach((item) => {
      item.classList.toggle("showNone");
    });
  });
}
