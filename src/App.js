import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTodo from "./components/DisplayTodo";
import Add from "./components/pages/Add";
import Alltasks from "./components/pages/Alltasks";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
// import Adduser from "./components/pages/Adduser";
import Adduser from "./components/pages/Adduser";
import Displayuser from "./components/pages/Displayuser";
import SearchTask from "./components/pages/SearchTask";

const getitems = () => {
  let list = localStorage.getItem("todoitems");
  if (list) {
    return JSON.parse(localStorage.getItem("todoitems"));
  } else {
    return [];
  }
};

// const getusers = () => {
//   let list = localStorage.getItem("Users");
//   if (list) {
//     return JSON.parse(localStorage.getItem("Users"));
//   } else {
//     return [];
//   }
// };


function App() {
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getitems());
  // const [adduser, setAdduser] = useState({
  //   username: "",
  //   usercity: "",
  //   userage: "",
  // });
  // const [userlist, setUserlist] = useState(getusers());
  // const [image, setImage] = useState("");
  // const navigate = useNavigate();

  const AddTodo = (e) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      Status: "add",

    };
    if (todo) {
      setTodoList([...todoList, task]);
      alert("Task Saved")
      setTodo("");
    }
    e.preventDefault();
  };
  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify(todoList));
  }, [todoList]);

  // useEffect(() => {
  //   localStorage.setItem("Users", JSON.stringify(userlist));
  // }, [userlist]);

  
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   var today = new Date(),
  //     date =
  //       today.getFullYear() +
  //       "-" +
  //       (today.getMonth() + 1) +
  //       "-" +
  //       today.getDate();
  //   var newdata = {
  //     ...adduser,
  //     Date: date,
  //     ID: new Date().getTime().toString(),
  //     Image: image,
  //   };
  //   setUserlist([...userlist, newdata]);
  //   console.log(userlist);
  //   setAdduser({ username: "", usercity: "", userage: "" });
  //   setImage("");    
  // };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Add  />} />
          <Route path="alltasks/searchtask" element={<SearchTask />} />

          <Route
            path="alltasks/addtask"
            element={
              <AddTask
                todo={todo}
                setTodo={setTodo}
                search={search}
                setSearch={setSearch}
                AddTodo={AddTodo}
              />
            }
          />
          {/* <Route
            path="viewtask"
            element={
              <DisplayTodo
                todoList={todoList}
                setTodoList={setTodoList}
                search={search}
                setSearch={setSearch}
              />
            }
          /> */}
           <Route
            path="alltasks"
            element={
              <Alltasks
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
            element={<Displayuser  />}
          />
            <Route
              path="displayuser/adduser"
              element={
                <Adduser/>
              }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
