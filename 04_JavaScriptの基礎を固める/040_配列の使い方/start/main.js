const arry = new Array(1, 2, 3, 4, 5, 'moji', false);
const arry2 = [1, 2, 3, 4, 5, 'mojimoji', true];
arry[3] = 8;
console.log(arry[3]);

// 配列の最後に追加
arry2.push('new item');

// 配列の最初に追加
arry2.unshift('new item2');

// 配列の最後を削除
arry2.pop();

// 配列の最初を削除
arry2.shift();

console.log(arry2[7]);
console.log(arry2.length);
console.log(arry2);
