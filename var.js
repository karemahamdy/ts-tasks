var apples = 5;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function
var logNumber = function (i) {
    console.log(i);
};
var sum = function (a, b) {
    return a + b;
};
// or 
var sum1 = function (a, b) {
    return a + b;
};
// or without type of return 
var sum2 = function (a, b) {
    return a + b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
// Array 
var arr = [10, 20, 30];
var arr1 = ["red", "yellow", "black"];
// Tuple
var arr2 = ["red", 10, true];
var arr3 = ["red", 10, true];
