// LinkedIn Learning - Design Patterns by Alex Banks

// SINGLETON
/*
- ensure that a class has only one instance; provide a global point of access to it
*/

// The problem with multiple instances
/*
initially we have 3 instance of the logger class. each file creates its own logger instance; so the history of logs is not accurate; 
*/
const logger = require('./Logger');
// const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

// const logger = new Logger();
// const logger = new Logger().getInstance();

logger.log('starting app');

const alex = new Shopper('alex', 500);
const ski_shop = new Store('Steep and Deep Supplies', [
    { item: 'Downhill Skis', qty: 5, price: 750 },
    { item: 'Knit hat', qty: 20, price: 5 },
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map((log) => console.log(`    ${log.message}  `));
