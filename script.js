var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //   },
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.next-prev',
    prevEl: '.slide-prev',
  },

  breakpoints: {
    200: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
})
