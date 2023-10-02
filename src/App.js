import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTodo from "./components/DisplayTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const getitems = () => {
  let list = localStorage.getItem("todoitems");
  if (list) {
    return JSON.parse(localStorage.getItem("todoitems"));
  } else {
    return [];
  }
};

function App() {
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getitems());

  const AddTodo = (e) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      Status: "add",
    };
    if (todo) {
      setTodoList([...todoList, task]);
      setTodo("");
    }
    e.preventDefault();
  };
  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <AddTask
        todo={todo}
        setTodo={setTodo}
        AddTodo={AddTodo}
        search={search}
        setSearch={setSearch}
      />
      <DisplayTodo
        todoList={todoList}
        setTodoList={setTodoList}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
