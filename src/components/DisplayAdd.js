import React, { useState } from "react";
import {CiEdit} from 'react-icons/ci'
import {MdDownloadDone} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import {BiRevision} from 'react-icons/bi'



function DisplayAdd({todoList, setTodoList, todoid, todo, Status}) {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(todo);
  const handleComplete = (id) => {
    setTodoList(
      todoList.map((e) =>
        e.id === id ? { ...e, Status: "completed" } : e
      )
    );
  };
  const handleDelete = (id, Status) => {
    if (Status === "deleted") {
      setTodoList(todoList.filter((e) => e.id !== id));

      console.log("if" + Status);
    } else {
      setTodoList(
        todoList.map((e) =>
          e.id === id ? { ...e, Status: "deleted" } : e
        )
      );
      console.log("else" + Status);
    }
  };
  const handleReverse = (id) => {
    setTodoList(
      todoList.map((e) => (e.id === id ? { ...e, Status: "add" } : e))
    );
  };
//  const handleEdit = (id) => {

//   edit===true? setEdit(false) : setEdit(true)
// console.log(edit)
//  }
 const editFalse = (e, todoid) => {
  
  setTodoList(
    todoList.map((e)=> e.id===todoid? {...e, todo: update}: e)
  )
  setEdit(false);
  e.preventDefault();
 }
  return (
    <div>
      <form onSubmit={(e) => editFalse(e, todoid)}>
      <div
        style={{
          border: "solid 2px #233D4D",
          height: "40px",
          width: "98%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"20px",
          backgroundColor: "yellow",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            border: "solid 0px red",
            height: "40px",
            width: "75%",
            overflow: "auto",
            display: "flex",
          
          alignItems: "center",
          }}
        >
        {edit? (
        
        <input
              style={{
                height: "25px",
                width: "90%",
                border: "none",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              autoFocus
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              
            />
            ):
            (todo)
            
            }
        </div>
        <div style={{ border: "solid 0px red", height: "40px", width: "25%", display:"flex", justifyContent:"space-around", alignItems:"center" }}>
        {Status === "add" && 
        <>
            <span  onClick={() => {
              if (!edit) {
                setEdit(!edit);
              }
            }}><CiEdit/></span>
            <span onClick={() => handleComplete(todoid)}><MdDownloadDone/></span>
            </>
          }
          {Status === "completed" && (
            <span onClick={() => handleReverse(todoid)}><BiRevision/></span>
            
          ) 
          }
          <span onClick={() => handleDelete(todoid, Status)}>
            <AiFillDelete/>
          </span>
        </div>
      </div>
      </form>
    </div>
  );
}

export default DisplayAdd;
