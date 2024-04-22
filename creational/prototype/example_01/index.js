// Prototype

/*
specify the kinds of objetcs to create using prototypical instance, and create new objects by copying this prototype
*/

// not sure how valid this implementation is; does not work with private fields;

const scout_prototype = require('./scout_prototype');

const alex = scout_prototype.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slingshot');

const eve = scout_prototype.clone();
eve.name = 'Eve Porcello';
alex.addItemToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
