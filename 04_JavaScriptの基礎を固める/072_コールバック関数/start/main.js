// 引数に「関数」を渡す関数⇨コールバック関数

// function hello(callback, lastname) {
  //   console.log('hello ' + callback(lastname));
  // }
  
// function getName() {
//   return 'Matsufuji Naoya';
// }
    
// const getFirstName = function() {
//   return "Naoya";
// }

// hello(getName);
// hello(function(name) {
//   return 'Naoya ' + name;
// }, 'Matsufuji');

// ↓アロー関数で記述
// hello(() => 'Naoya');

// hello(getFirstName);

// ------------------------------------------
// 引数に「関数」を渡す関数⇨コールバック関数
function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}
        
doSomething(2, 4, multiply);
doSomething(3, 8, plus);