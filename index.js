"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/todos/1';
let id, title, completed;
axios_1.default.get(url)
    .then(response => {
    console.log(response.data);
    id = response.data.id;
    title = response.data.title;
    completed = response.data.completed;
    console.log(id, title, completed);
})
    .catch(error => {
    console.error("Error fetching data:", error);
});
