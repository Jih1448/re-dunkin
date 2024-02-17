// 메인페이지 스와이퍼
var swiper = new Swiper(".mySwiper1", {
  loop: true,
  effect: "fade",
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// 3페이지 스와이퍼
new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 40,
  slideToClickedSlide: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

new Swiper(".mySwiper5", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
