// Builder: separate the construction of a complex object from its representation so that the same construction process can create different representation

// constructor with too many arguments can be confusing if we want to use this classk

const PersonBuilder = require('./PersonBuilder');

const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
const phil = new PersonBuilder('Phil').makeEmployee().build();

const charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

const tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(charles.toString());
console.log(sue.toString());
