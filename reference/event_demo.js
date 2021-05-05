const EventEmitter = require("events");

//Create class
class MyEmitter extends EventEmitter {}

//Init Object
const myEmmiter = new MyEmitter();

//Event Listener
myEmmiter.on("event", () => console.log("Event Fired!!"));

//Init Event
myEmmiter.emit("event");

//Everytime I call event will emit the event listener
myEmmiter.emit("event");
myEmmiter.emit("event");
myEmmiter.emit("event");
