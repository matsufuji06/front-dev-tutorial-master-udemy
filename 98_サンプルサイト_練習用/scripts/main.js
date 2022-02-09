document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
  hero.start();
  setTimeout(() => {
    hero.stop();
  }, 5000);

  const cb = function(el, isIntersecting) {
    if(isIntersecting) {
        const ta = new TextAnimation(el);
        ta.animate();
    }
  }

  const so = new ScrollObserver('.animate-title', cb);
});

