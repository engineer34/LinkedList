//code wasnt working kept taking me back to node file when i ran main.js
// so combined all classes in one file my 
// original notes for this code is in other files
class Node {
    constructor(value = null, nextNode = null) {
        //creates our values in our contructor for our nodes
        this.value = value;
        //if this is the last node in the list it will be null
        this.nextNode = nextNode;
    }
} //our LinkedList class with the call to our constructor fron Node class
class LinkedList {
    constructor() {
        //we make our head the first node in the list
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        //starts with head
        let current = this.head;
        //move through the list until we reach last node
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        //the next node should point to the new nde
        current.nextNode = newNode;
    }
toString() {
    let current = this.head;
    //we stor our finaloutcome
        let result= "";
        //again we are looping through our list
        while (current !== null) {
            result += `(${current.value}) -> `;
            //go to next node
        current=current.nextNode;
        }
        //append null to terminate the program
        return result + "null";
    }
}

// Execution logic
const list = new LinkedList();
console.log("Program started...");
list.append("dog");
list.append("cat");
list.append("parrot");

list.append("hamster");
list.append("snake");
list.append("turtle");
//print our list should show arrows with our pets
console.log(list.toString());