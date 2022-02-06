document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
  hero.start();
  setTimeout(() => {
    hero.stop();
  }, 5000);
});

class HeroSlider {
  constructor() {
    this.swiper = this._initSwiper();

  }

  _initSwiper() {
    return new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2
        }
      },

      // autoplay: {
        
      // }



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

  start() {
    this.swiper.params.autoplay = {
      delay: 4000,
      disableOnInteraction: false
    }
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();

  }
};