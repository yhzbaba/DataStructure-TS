class Stack<T> {
  private items;
  constructor() {
    this.items = new Array<T>();
  }
  push(data: T): void {
    if (this.items != null) {
      this.items.push(data);
    } else {
      console.log("Push Error!");
    }
  }
  pop(): T {
    if (this.items != null) {
      return this.items.pop();
    } else {
      console.log("Pop Error!");
    }
  }
  top(): T {
    if (this.items != null) {
      return this.items[this.items.length - 1];
    } else {
      console.log("Top Error!");
      return null;
    }
  }
  isEmpty(): boolean {
    if (this.items != null) {
      return this.items.length === 0;
    } else {
      console.log("IsEmpty Error!");
      return null;
    }
  }
  size(): number {
    if (this.items != null) {
      return this.items.length;
    } else {
      console.log("Size Function Error!");
      return 0;
    }
  }
  clear(): void {
    this.items = new Array<T>();
  }
  print(): void {
    if (this.items != null) {
      console.log(this.items);
    } else {
      console.log("Print Error!");
    }
  }
}

export { Stack };
