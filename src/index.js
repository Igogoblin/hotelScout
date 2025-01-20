import "./index.pug";
import "./styles/_const.scss";
import "./styles/styles.scss";
import "./components/mixins/mixins.scss";
import "./components/main/main.scss";
import "./components/footer/footer.scss";

console.log("hotelScout is running!");
if (module.hot) {
  module.hot.accept();
}
function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Закрытие выпадающего списка при клике вне его
window.onclick = function (event) {
  if (!event.target.matches(".dropdown button")) {
    const dropdowns = document.getElementsByClassName("dropdown__content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// <style>
//     body {
//         font-family: Arial, sans-serif;
//     }
//     .dropdown {
//         position: relative;
//         display: inline-block;
//     }
//     .dropdown-content {
//         display: none;
//         position: absolute;
//         background-color: #f9f9f9;
//         min-width: 160px;
//         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//         z-index: 1;
//     }
//     .dropdown-content a {
//         color: black;
//         padding: 12px 16px;
//         text-decoration: none;
//         display: block;
//     }
//     .dropdown-content a:hover {
//         background-color: #f1f1f1;
//     }
//     .show {
//         display: block;
//     }
// </style>
