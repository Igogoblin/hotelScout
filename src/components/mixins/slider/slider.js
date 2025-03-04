document.addEventListener("DOMContentLoaded", async () => {
  // Дождитесь загрузки контента
  const swiperContainer = await waitForElement(".swiper");

  if (swiperContainer) {
    new Swiper(".swiper", {
      // direction: "",
      riwind: true,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      //   scrollbar: {
      //     el: ".swiper-scrollbar",
      //     draggable: true,
      //   },
      on: {
        init: function () {
          console.log("swiper initialized");
        },
      },
    });
  }
});

function waitForElement(selector) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
  });
}
