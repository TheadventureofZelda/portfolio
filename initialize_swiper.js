new Swiper('.projects-wrapper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 3
      }
  }
});
