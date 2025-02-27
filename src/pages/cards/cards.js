// import AirDatepicker from "air-datepicker";

// new AirDatepicker({
//   inline: true,
//   range: true,
//   prevHtml: `<svg class="arrow-icon" width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
//     <path class="arrow-path" d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/>
//     </svg>`,
//   nextHtml: `<svg width="13" height="11" viewBox="0 0 11 18" fill="#BC9CFF" xmlns="http://www.w3.org/2000/svg">
//     <path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/>
//     </svg>`,
//   navTitles: {
//     days: `<strong>MMMM</strong>${" "}<strong>yyyy</strong>`,
//   },
//   onSelect: (datepicker) => {
//     if (datepicker.formattedDate[0]) {
//       const firstTime = datepicker.formattedDate[0].split(".");
//       mainArrivalDate.value = `${firstTime[2]}-${firstTime[1]}-${firstTime[0]}`;
//     }
//     if (datepicker.formattedDate[1]) {
//       const secondTime = datepicker.formattedDate[1].split(".");
//       mainDepartureDate.value = `${secondTime[2]}-${secondTime[1]}-${secondTime[0]}`;
//     }
//   },
// });
