// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
// })
console.log('__dirname: ', __dirname);
console.log('__filename: ', __filename);
 class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

/*const person ={
  name: 'jjj',
  age:322
}*/

module.exports = Person;
