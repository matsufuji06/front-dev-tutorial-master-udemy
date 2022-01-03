// 無名関数
// function hello(name, age) {
//   let name = "Matsufuji";
//   console.log("hello " + name + age);
//   return name + age;
// }

const hello = function(name, age) {
  // let name = "Matsufuji";
  console.log("hello " + name + age);
  return name + age;
}

hello("Matsufuji", 27);
const returnVal = hello("Matsufuji 2", 27);
console.log(returnVal);
