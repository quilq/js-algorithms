//STACK BY LINKED LIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackByLinkedList {
  constructor() {
    this.top = null;
    // this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      // this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    const holdingPointer = this.top;
    if (this.length <= 1) {
      this.top = null;
      // this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return holdingPointer;
  }
  //isEmpty
}

const myLinkedListStack = new StackByLinkedList();


//STACK BY ARRAY
class StackByArray {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myArrayStack = new StackByArray();