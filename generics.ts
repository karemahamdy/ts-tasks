
function identity<T>(value: T): T {
  return value;
}

const numResult = identity<number>(5);        // number
const strResult = identity<string>("Hello");  // string

function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirstItem<number>([10, 20, 30]);    // 10
const firstStr = getFirstItem<string>(["a", "b", "c"]); // "a"

function identityAny(value: any): any {
  return value;
}

const anyResult = identityAny(5); 

function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello World");      // OK
logLength([1, 2, 3, 4]);       // OK
// logLength(123);             // ❌ Error: number doesn't have length


interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Sara", age: 24 },
  status: 200,
};

class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getContent());

const stringBox = new Box<string>("OpenAI");
console.log(stringBox.getContent()); 

function mergeValues<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

const mergedResult = mergeValues<number, string>(1, "one"); // [1, "one"]

function wrapValue<T = string>(value: T): T {
  return value;
}

const defaultStr = wrapValue("Hello"); // string
const defaultNum = wrapValue(50);      // number

function findItem<T>(items: T[], itemToFind: T): boolean {
  return items.includes(itemToFind);
}

const foundNumber = findItem([1, 2, 3], 2); // true
const foundString = findItem(["a", "b"], "c"); // false

