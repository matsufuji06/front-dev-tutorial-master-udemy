const arry = [1, 2, 3, 4, 5];

arry.forEach(function(v, i, ary) {
  console.log(v, i, ary);
})

// アロー関数で
arry.forEach((v, i, ary) => console.log(v, i, ary));