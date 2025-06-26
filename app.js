import { EventEmitter } from "node:events";
import askUser from "./user.js";
import express from "express";

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

const app = new express();
app.listen(8000, (error) => {
  error ? console.log(error) : console.log("http://localhost:8000");
});

app.use("/",(req, res)=>{
res.send("Hello here is response")
})