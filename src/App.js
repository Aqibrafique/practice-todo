import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTodo from "./components/DisplayTodo";
import Add from "./components/pages/Add";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Adduser from "./components/pages/Adduser";
import Adduser from "./components/pages/Adduser";
import Displayuser from "./components/pages/Displayuser";

const getitems = () => {
  let list = localStorage.getItem("todoitems");
  if (list) {
    return JSON.parse(localStorage.getItem("todoitems"));
  } else {
    return [];
  }
};

const getusers = () => {
  let list = localStorage.getItem("Users");
  if (list) {
    return JSON.parse(localStorage.getItem("Users"));
  } else {
    return [];
  }
};

function App() {
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getitems());
  const [adduser, setAdduser] = useState({
    username: "",
    usercity: "",
    userage: "",
  });
  const [userlist, setUserlist] = useState(getusers());
  const [image, setImage] = useState("");
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

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(userlist));
  }, [userlist]);



  const HandleSubmit = (e) => {
    e.preventDefault();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    var newdata = {
      ...adduser,
      Date: date,
      ID: new Date().getTime().toString(),
      Image: image,
    };
    setUserlist([...userlist, newdata]);
    console.log(userlist);
    setAdduser({ username: "", usercity: "", userage: "" });
    setImage("");    
  };

  console.log(image);
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
            path="displayuser"
            element={<Displayuser userlist={userlist} />}
          />
            <Route
              path="displayuser/adduser"
              element={
                <Adduser
                  adduser={adduser}
                  userlist={userlist}
                  setAdduser={setAdduser}
                  HandleSubmit={HandleSubmit}
                  image={image}
                  setImage={setImage}
                />
              }
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
