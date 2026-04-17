const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

 countOccurrences(value) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
        if (current.value === value) {
            count++;
        }
        current = current.next;
    }

    return count;
}

  clean() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
        let next = current.next;
        current.next = null;
        current = next;
        count++;
    }

    this.head = null;
    this.tail = null;
    this.size = 0;

    return count;
}

  reverseInPlace() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    this.head = prev;
}

 removeDuplicates() {
    let current = this.head;
    let removed = 0;

    while (current !== null) {
        let runner = current;

        while (runner.next !== null) {
            if (runner.next.value === current.value) {
                runner.next = runner.next.next;
                this.size--;
                removed++;
            } else {
                runner = runner.next;
            }
        }

        current = current.next;
    }

    return removed;
}

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
