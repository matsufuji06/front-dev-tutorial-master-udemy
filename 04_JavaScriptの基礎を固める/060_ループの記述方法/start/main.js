const arry = [1,2,3,4,5];

// iはインデックスが渡ってくる
for(let i in arry) {
  console.log(i, arry[i]);
}

// iは配列の値が渡ってくる
for(let v of arry) {
  console.log(v);
}