var events = require('events');
const { eventEmitter } = new events.EventEmitter();

// method 1
// var myEventHandler = () => { console.log('order received: pasta!'); }

// eventEmitter.on('order-pasta',myEventHandler);
// eventEmitter.emit('order-pasta');

// method 2
// eventEmitter.on('order-pasta',() => { console.log('order received: pasta!'); });
// eventEmitter.emit('order-pasta');

eventEmitter.on('order-pasta',(size, toppings) => { console.log(`order received: ${size} pasta! with ${toppings}`); });
eventEmitter.emit('order-pasta', 'large', 'Black Olives');

eventEmitter.on('order-pasta',(size) => { if(size === 'large') console.log(`order received: ${size} pasta! with ${toppings}`); });