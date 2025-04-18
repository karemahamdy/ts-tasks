let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const sum: (a: number, b: number) => number = (a, b) => {
  return a + b
}
// or 
const sum1 = (a: number, b: number) : number  => {
  return a + b
}

// or without type of return 
const sum2 = (a: number, b: number)   => {
  return a + b
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// Array 
let arr: number[] = [10, 20, 30]
let arr1: string[] = ["red", "yellow", "black"]

// Tuple
let arr2: [string, number, boolean] = ["red", 10, true]

type arr3 = [string, number, boolean] 
let arr3 = ["red", 10, true]




