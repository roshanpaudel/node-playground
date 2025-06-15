import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});

myEmitter.on("intro", (name) => {
  console.log("My name is " + name);
});
myEmitter.emit("event");
myEmitter.emit("intro", "Roshan");
