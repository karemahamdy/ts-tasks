import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDO  {
  id: number,
  title: string,
  completed: boolean 
}
let id: number, title: string, completed: boolean;

axios.get<ToDO>(url)
  .then(response => {  
    console.log(response.data);
    id = response.data.id
    title = response.data.title
   completed = response.data.completed  
console.log(
  id, title, completed
)
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


