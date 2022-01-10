// function hello(name = 'Tom') {
//     console.log('hello ' + name);
// }

// const hello = function (name = 'Tom') {
//   console.log('hello ' + name);
// }

// アロー関数
const hello = (name, age) => console.log('hello ' + name + age);

const arry = [1, 2, 3, 4, 5];
arry.forEach(value => console.log(value))

hello('Matsufuji', 10);
hello('Matsufuji2', 20);
