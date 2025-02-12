// document.addEventListener("DOMContentLoaded", () => {
export function mburger() {
  console.log("for burger ready ! ");
  let menuBtn = document.querySelector(".menu-btn");
  let menu = document.querySelector(".nav");
  let menuItem = document.querySelectorAll(".nav__link");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      menu.classList.remove("active");
    });
  });
}
// });
