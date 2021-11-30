function hello(callback, lastname) {
  console.log("hello " + callback(lastname));
}

function getName() {
  return "Matsufuji";
}

hello(function(name) {
  return "Matsufuji" + name;
}, "Mafia");