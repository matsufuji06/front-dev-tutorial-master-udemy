const btn = document.querySelector('#btn');

const changeColor = function() {
  this.style.color = 'red';
  this.style.color = 'red';
  console.log(this);
  // alert('hello');
};

const changeBgColor = function() {
  this.style.backgroundColor = 'green';

};
btn.addEventListener('click', changeColor);
btn.addEventListener('mouseenter', changeBgColor);
// btn.removeEventListener('mouseenter', hello);

// イベントハンドラ（非推奨）
btn.onclick = changeColor;
