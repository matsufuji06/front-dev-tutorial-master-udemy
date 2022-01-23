const obj = {
  first_name: 'naoya',
  last_name: 'matsufuji',
  printFullName: function() {
    alert('hello');
  }
}

console.log(obj.first_name);
obj.printFullName();


class MyObj {
  constructor() {
    this.first_name = 'naoya';
    this.last_name = 'matsufuji';
  }

  printFullName() {
    alert('hello2');
  }
}

const obj2 = new MyObj();

obj2.printFullName();
