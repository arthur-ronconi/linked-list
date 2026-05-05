class Node {
  data: any;
  next: Node | null = null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  size: number = 0;
  head: Node | null = null;
  constructor() {
    this.head = null;
  }

  // append node
  append(data: any) {
    let new_node = new Node(data);

    // Check if list is empty, then makes this node the start of the list
    if (this.size == 0) {
      this.head = new_node;
    } else {
      let current_node = this.head;

      while (current_node?.next) {
        current_node = current_node.next;
      }
      current_node!.next = new_node;
    }
    this.size++;
  }

  // prepend node
  prepend(data: any) {
    let new_node = new Node(data);

    if (this.size == 0) {
      this.head = new_node;
      return;
    } else {
      let tail = this.head;
      while (tail?.next !== null) {
        tail = tail!.next;
      }
      tail.next = new_node;
    }
    this.size++;
  }

  // add from index
  addByIndex(data: any, index: number) {
    const new_node = new Node(data);

    // checks if list is empty
    if (this.size === 0) {
      this.head = new_node;

      return;
    }

    const previous_node = this.getByIndex(index - 1);

    new_node.next = previous_node!.next;
    previous_node!.next = new_node;
    this.size++;
  }

  // get from index
  getByIndex(index: number) {
    let position = 0;
    let current_node = this.head;

    while (position < index) {
      current_node = current_node!.next;
      position++;
    }

    return current_node;
  }

  // delete from index
  removeByIndex(index: number) {
    let current_node = this.head;
    if (this.size === 0) {
      this.head = current_node!.next;
    } else {
      const previous_node = this.getByIndex(index - 1);
      previous_node!.next = previous_node!.next!.next;
      this.size--;
    }
  }
}

const list = new LinkedList();

list.append(0);
list.prepend(4);
list.append(1);
list.append(2);
list.removeByIndex(1);

console.log(list);
