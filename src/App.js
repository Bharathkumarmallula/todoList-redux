import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "./action";

import TodoLists from "./TodoLists";

function App() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle,
      };
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-primary text-center">Todo app using react redux </h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={() => handleTodo()}>
          Add
        </button>
       
      </div>
      <TodoLists/>
    </div>
  );
}

export default App;
