const person = {
  name: ['Matsufuji ', 'Kakara'],
  age: 27,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'hiphop'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
};

console.log(person.name[0]);
console.log(person.interests.music);

person[`age`] = 12;
console.log(person.age);

person.getFullName();
