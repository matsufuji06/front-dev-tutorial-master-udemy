const person = {
  name: ["Matsufuji", "Kakara"],
  age: 27,
  interest: {
    sports: "soccer",
    music: "namedaruma"
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
};

console.log(person.name[0]);
person.interest.music = "舐達磨";
console.log(person.interest.music);
person.getFullName();