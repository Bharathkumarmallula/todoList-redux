import { useSelector } from "react-redux";

import TodoView from "./TodoView";


function TodoLists(){
   const todos= useSelector((state)=>state.todos)
   console.log('todos',todos)
   return (
   <ul className='list-group mt-4'>
    {todos.map((todo)=>{
         return <TodoView key={todo.id} id={todo.id} title={todo.title} />     
    })}
   </ul>
   
);
}
export default TodoLists

