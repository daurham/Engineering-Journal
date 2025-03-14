

interface LinkedListNodeI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  next: LinkedListNodeI;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkedListNode = function(value: any | undefined, next: LinkedListNodeI | undefined) {
  this.value = value;
  this.next = next;
}

const node = new LinkedListNode(0, undefined);

console.log(node);