document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
  hero.start();
  setTimeout(() => {
    hero.stop();
  }, 5000);

  const cb = function(el, isIntersecting) {
    if(inview) {
        const ta = new TweenTextAnimation(el);
        ta.animate();
    }
  }

  const so = new ScrollObserver('.tween-animate-title', cb);

  const __inviewAnimation = function(el, inview) {
    if(inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }

  const so2 = new ScrollObserver('.cover-slide', __inviewAnimation);
});

