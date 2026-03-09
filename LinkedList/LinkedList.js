//goal is to manage the list in here creating a class
import Node from "./node.js";
class LinkedList {
    constructor()//call to our constructor
    {
        this.head=null;
    }
    //append
    append(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.nextNode !== null){
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }
    toString() {

    let current = this.head;
    let result = "";

    while (current !== null) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
    }

    result += "null";

    return result;
}
}
module.exports = LinkedList;