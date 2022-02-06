document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
});

class HeroSlider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
};