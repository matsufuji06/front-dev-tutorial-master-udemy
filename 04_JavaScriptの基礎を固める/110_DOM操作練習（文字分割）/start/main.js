document.addEventListener('DOMContentLoaded', function(){
  const el = document.querySelector('.animate-title');
  // console.log(el.innerHTML.trim());
  const str = el.innerHTML.trim();
  let concatStr = '';

  for(let c of str) {
    // console.log(`<span class="char">${c}</span>`);
    c = c.replace(' ', '&nbsp;');
    concatStr += `<span class="char">${c}</span>`;
  }
  // console.log(concatStr);
  el.innerHTML = concatStr;
});