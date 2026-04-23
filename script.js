import { LinkedList } from "./LinkedList.js";
import Node from "./node.js";

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

let output = "";

output += "List: " + list.toString() + "\n";

document.getElementById("output").textContent = output;
