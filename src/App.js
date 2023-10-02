import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTodo from "./components/DisplayTodo";

const getitems = () =>{
  let list = localStorage.getItem("todoitems");
  if(list)
  {
    return JSON.parse(localStorage.getItem("todoitems"))
  }
  else {
  return[]
  }
}

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getitems());
  // const [edit, setEdit] = useState(false);

  const AddTodo = (e) => {
    const task = {
      id: todoList.length===0? 1 : todoList[todoList.length-1].id+1,
      todo: todo,
      Status: "add",
    };
    if (todo) {
      setTodoList([...todoList, task]);
      setTodo("")
      localStorage.setItem(todoList);
      localStorage.getItem(setTodoList(todoList))
    }
    e.preventDefault();
  };
  // console.log(todoList);
  useEffect(()=>{
    localStorage.setItem('todoitems', JSON.stringify(todoList))
  },[todoList]);
  
  return (
    
    <div className="App">
      <AddTask todo={todo} setTodo={setTodo} AddTodo={AddTodo} />
      <DisplayTodo todoList={todoList} setTodoList={setTodoList} />
      
    </div>
    
  );
}

export default App;
