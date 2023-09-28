import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const AddTodo = () => {
    const task = {
      id: todoList.length===0? 1 : todoList[todoList.length-1].id+1,
      todo: todo,
      Status: "add",
    };
    if (todo) {
      setTodoList([...todoList, task]);
      setTodo("")
    }
  };
  console.log(todoList);
  return (
    
    <div className="App">
      <AddTask todo={todo} setTodo={setTodo} AddTodo={AddTodo} />
      <DisplayTodo todoList={todoList} setTodoList={setTodoList}/>
    </div>
    
  );
}

export default App;
