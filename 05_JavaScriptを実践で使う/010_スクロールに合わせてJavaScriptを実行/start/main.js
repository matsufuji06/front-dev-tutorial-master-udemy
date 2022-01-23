const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // ※画面上に要素が入っているとき
      console.log('inview');
      // ※↓以降、監視をしないようにする
      // observer.unobserve(entry.target);
      entry.target.classList.add('inview');
    } else {
      // ※要素が画面上から出たとき
      console.log('out view');
      entry.target.classList.remove('inview');
    }
  });
  // alert('intersecting');
}

const options = {
  root: null,
  rootMargin: "-100px 0px",
  threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(cb, options);
io.observe(child);