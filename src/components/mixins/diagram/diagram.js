export function diagram() {
  const diagram = document.querySelector(".gradient");

  if (!diagram) {
    console.error("Элемент .diagram не найден!");
    return;
  }

  diagram.style.background =
    "conic-gradient(rgb(188, 156, 255) 12.5%, rgb(139, 164, 249) 24%,rgb(256,256,256) 25%,rgb(111, 207, 151)26%, rgb(111, 207, 151) 37.5%, rgb(102, 210, 234) 49%,rgb(256,256,256) 50%, rgb(255, 227, 156) 51%, rgb(255, 227, 156) 62.5%, rgb(255, 186, 156) 98.9%,rgb(256,256,256) 99%,rgb(256,256,256) 100%";
}
//   document.addEventListener("DOMContentLoaded", function () {
//     const ctx = document.getElementById("myChart").getContext("2d");

//     new Chart(ctx, {
//       type: "doughnut", // Или 'pie' для классической круговой диаграммы
//       data: {
//         labels: ["Красный", "Синий", "Зеленый"],
//         datasets: [
//           {
//             data: [30, 40, 30], // Проценты
//             backgroundColor: ["red", "blue", "green"], // Цвета сегментов
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     });
//   });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   const ctx = document.getElementById("myChart").getContext("2d");

//   new Chart(ctx, {
//     type: "doughnut", // Или 'pie' для классической круговой диаграммы
//     data: {
//       labels: ["Красный", "Синий", "Зеленый"],
//       datasets: [
//         {
//           data: [30, 40, 30], // Проценты
//           backgroundColor: ["red", "blue", "green"], // Цвета сегментов
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   });
// });
