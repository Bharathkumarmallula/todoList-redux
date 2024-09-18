import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo,deleteTodo } from "./action";

function TodoView({ id, title }) {
   
  
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
    const dispatch= useDispatch()

  const handleTodo=()=>{
    if(newTitle.trim()){
    
        dispatch(editTodo({id:id,title:newTitle}))
        setEditing(false)
    }

  }
  const handleDelete=()=>{
    dispatch(deleteTodo(id))
  }
  
    return <div>{
      editing?(
          <div className="form-group">
              <input type="text" className="form-control" 
              value={newTitle}
              onChange={(e)=>{setNewTitle(e.target.value)}}
              />
              <button className="btn btn-primary"onClick={handleTodo}>Save</button>
          </div>
      ):(
          <li className="list-group-item">
          <p>{title}</p>
          <div className="actions">
              <button className="btn btn-warning"onClick={()=>setEditing(true)}>Edit</button>
              <button className="btn btn-danger" onClick={handleDelete}>Del</button>
  
          </div>
          </li>
      )
  }
  
    </div>
  
  
}
export default TodoView;
