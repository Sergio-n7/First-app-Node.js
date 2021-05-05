//__filename give you the name of the current file (entire direcction)
//__dirname givex you the direction of this current file

//console.log(__filename, __dirname);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

module.exports = Person;
