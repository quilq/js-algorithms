class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = new ListNode(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    // add list item @ the end: O(1)
    append(value) {
      const newNode = new ListNode(value);
  
      this.tail.next = newNode; // point the tail next value to new node
      this.tail = newNode; // update the tail to be the last item
      this.length++;
  
      return this;
    }
  
    // add list item @ the beginning: O(1)
    prepend(value) {
      const newNode = new ListNode(value);
  
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
  
      return this;
    }
  
    printList() {
      const array = [];
      let currentNode = this.head;
  
      while (currentNode !== null) { // get the LinkedList node value
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      return array;
    }
  
    insert(index, value) {
      //check input
      if (index < 0) {
        throw new Error('Index cannot be less then 0');
      } else if (index === 0) {
        this.prepend(value);
        return;
      } else if (index >= this.length){
        this.append(value);
        return;
      }
  
      //find node with the index
      let currentNode = this.head;
      let lastNode = null;
      let i = 1;
      while (i < index) {
        lastNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
  
      //insert new node
      const newNode = new ListNode(value);
      const temp = lastNode.next;
      lastNode.next = newNode;
      newNode.next = temp;
      this.length++;
  
      return this.printList();
    }
  
    remove(index) {
      //check input
      if ((index > this.length) || (index < 0)) {
        throw new Error();
      }
  
      //find node with the index
      let currentNode = this.head;
      let lastNode = null;
      let i = 1;
      while (i < index) {
        lastNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
  
      //remove the node
      lastNode.next = lastNode.next.next;
      this.length--;
  
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(1);
  myLinkedList.append(2);
  myLinkedList.prepend(7);
  myLinkedList.remove(1)
  myLinkedList.printList();