// Import events module
var events = require("events");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
eventEmitter.on("hello", () => {
  console.log("World");
});

eventEmitter.emit("hello");
