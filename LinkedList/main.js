//were we import our liked 
// list and creat a new LinkedList
//import LinkedList from "./LinkedList.js";
const LinkedList = require("./LinkedList.js");
const list = new LinkedList();
console.log("Program started");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());