const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // ※画面上に要素が入っているとき
      console.log('inview');
    } else {
      // ※要素が画面上から出たとき
      console.log('out view');
    }
  });
  // alert('intersecting');

}
const io = new IntersectionObserver(cb);
io.observe(child);