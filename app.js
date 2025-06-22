import { EventEmitter } from "node:events";
import askUser from "./user.js";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});

myEmitter.on("intro", (name) => {
  console.log("My name is " + name);
});

myEmitter.on("Hi", (name) => {
  const str = askUser(name);
  console.log(str);
});
myEmitter.emit("event");
myEmitter.emit("intro", "Roshan");
myEmitter.emit("Hi", "Roshan");
