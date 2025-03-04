import AirDatepicker from "air-datepicker";

export function showCalendar() {
  const mainCalendar = document.getElementById("card__calendar");

  new AirDatepicker(mainCalendar, {
    inline: true,
    range: true,
    prevHtml: `<svg class="arrow-icon" width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
    <path class="arrow-path" d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/>
    </svg>`,
    nextHtml: `<svg width="13" height="11" viewBox="0 0 11 18" fill="#BC9CFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/>
    </svg>`,
    navTitles: {
      days: `<strong>MMMM</strong>${" "}<strong>yyyy</strong>`,
    },
    selectedDates: [new Date("2019-08-08")],

    buttons: [
      {
        content: "Очистить",
      },
      {
        content: "Применить",
      },
    ],
  });
  addRange();
}

function addRange() {
  let first = document.querySelectorAll(".air-datepicker-cell.-day-");
  first.forEach((item) => {
    if (item.innerText === "19" || item.innerText === "23") {
      item.classList.add("checkingDate");
    }
    if (item.innerText > 19 && item.innerText < 23) {
      item.classList.add("checkingPeriod");
    }
  });
}
