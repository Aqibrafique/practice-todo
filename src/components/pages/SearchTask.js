import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom"; 
import DisplayTodo from '../DisplayTodo'
import AddTask from '../AddTask'
import Style from '../Style.module.css'

const getitems = () => {
    let list = localStorage.getItem("todoitems");
    if (list) {
      return JSON.parse(localStorage.getItem("todoitems"));
    } else {
      return [];
    }
  };
  
function SearchTask() {
    const [search, setSearch] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getitems());
  
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

 
  const AddTodo = (e) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      Status: "add",

    };
    if (todo) {
      setTodoList([...todoList, task]);
      setTodo("");
// navigate("alltasks")
    }
    e.preventDefault();
  };
  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
<button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none",  }} onClick={goBack}>Back </button>
    <div style={{color:"yellow",fontSize: "60px",fontFamily:"cursive", textAlign:"center" }}>Todo App</div>
    <div style={{width:"100%", height:"90px", border: "solid 0px red", display:"flex", justifyContent:"center", alignItems:"center" }}>
      
      
       <form style={{width:"70%", display:"flex", justifyContent:"center"}} onSubmit={AddTodo}>
            <input style={{width:"50%", height:"40px",placeholder:"Enter Text to Search", background:"white", borderRadius:"15px",outline:"none", border:"4px solid yellow" }}  type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            
            {/* <button className={Style.addbutton} style={{marginLeft:"10px", height:"45px",width:"95px", backgroundColor:"yellow", color:"red",fontSize:"25px", borderRadius:"25px", border:"none" }} onClick={props.AddTodo}>Search</button> */}
            </form> 
    </div>
              <DisplayTodo
                todoList={todoList}
                setTodoList={setTodoList}
                search={search}
                setSearch={setSearch}
              />
    <h1>hello</h1>
    </>
  )
}

export default SearchTask