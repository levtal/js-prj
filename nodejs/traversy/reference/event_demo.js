// https://nodejs.org/en/docs/
// https://nodejs.org/dist/latest-v11.x/docs/api/events.html
// https://github.com/bradtraversy/node_crash_course
// https://www.youtube.com/watch?v=fBNz5xF-Kx4
// 47:11

const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
