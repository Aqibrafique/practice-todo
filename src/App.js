import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTodo from "./components/DisplayTodo";
import Add from "./components/pages/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from "./components/pages/Adduser";

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
  const [adduser, setAdduser] = useState({username:"", usercity:"", userage:"" });
  const [userlist, setUserlist ] = useState([]);
 

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
const HandleSubmit = ( e) => {
  e.preventDefault()
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var newdata = {...adduser, Date:date, ID: new Date().getTime().toString() }
  setUserlist([...userlist,newdata])
  console.log(userlist)
  setAdduser({username:"",usercity:"",userage:""})

}
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Add userlist={userlist} />} />

          <Route
            path="addtask"
            element={
              <AddTask
                todo={todo}
                setTodo={setTodo}
                AddTodo={AddTodo}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/viewtask"
            element={
              <DisplayTodo
                todoList={todoList}
                setTodoList={setTodoList}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="*" element={<Add />} />
          <Route
            path="/adduser"
            element={<Adduser adduser={adduser} userlist={userlist} setAdduser={setAdduser}  HandleSubmit={HandleSubmit}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <AddTask
    //     todo={todo}
    //     setTodo={setTodo}
    //     AddTodo={AddTodo}
    //     search={search}
    //     setSearch={setSearch}
    //   />
    //   <DisplayTodo
    //     todoList={todoList}
    //     setTodoList={setTodoList}
    //     search={search}
    //     setSearch={setSearch}
    //   />
    // </div>
  );
}

export default App;
