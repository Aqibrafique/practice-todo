import React from "react";
import DisplayAdd from "./DisplayAdd";
import Style from "./Style.module.css";
import { Link, useNavigate } from 'react-router-dom'
const DisplayTodo = (props) => {
  console.log("display" + props.todoList.length);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <>
    <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none",  }} onClick={goBack}>Back </button>
    <div
      style={{
        border: "solid 0px red",
        height: "400px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          marginTop: "30px",
          border: "solid 3px yellow",
          backgroundColor: "#3D3D3D",
          borderRadius: "25px",
          height: "300px",
          width: "350px",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={Style.managescroll}
          style={{
            border: "solid 0px red",
            height: "300px",
            width: "330px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              marginTop: "10px",
              border: "solid 0px red",
              height: "45px",
              width: "99%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "yellow",
              fontSize: "30px",
              fontFamily: "cursive",
              backgroundColor: "#3D3D3D",
              borderRadius: "25px",
            }}
          >
            All Tasks
          </div>
          {props.todoList
            .filter((e) => {
              if (props.search && e.Status === "add") {
                return e.todo
                  .toLowerCase()
                  .includes(props.search.toLowerCase());
              } else if (e.Status === "add") {
                return e;
              }
            })
            .map((e) => (
              <DisplayAdd
                todoList={props.todoList}
                setTodoList={props.setTodoList}
                todoid={e.id}
                todo={e.todo}
                Status={e.Status}
              />
            ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          border: "solid 3px yellow",
          backgroundColor: "#4BB897",
          borderRadius: "15px",
          height: "300px",
          width: "350px",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={Style.managescroll}
          style={{
            border: "solid 0px red",
            height: "300px",
            width: "330px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              marginTop: "10px",
              border: "solid 0px red",
              height: "45px",
              width: "99%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "yellow",
              fontSize: "30px",
              fontFamily: "cursive",
              backgroundColor: "#4BB897",
              borderRadius: "25px",
            }}
          >
            Completed Tasks
          </div>
          {props.todoList
            .filter((e) => {
              if (props.search && e.Status === "completed") {
                return e.todo
                  .toLowerCase()
                  .includes(props.search.toLowerCase());
              } else if (e.Status === "completed") {
                return e;
              }
            })
            .map((e) => (
              <DisplayAdd
                todoList={props.todoList}
                setTodoList={props.setTodoList}
                todoid={e.id}
                todo={e.todo}
                Status={e.Status}
              />
            ))}
        </div>
      </div>
      <div
        style={{
          border: "solid 3px yellow",
          backgroundColor: "#FE7F2D",
          borderRadius: "15px",
          marginTop: "30px",
          height: "300px",
          width: "350px",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={Style.managescroll}
          style={{
            border: "solid 0px red",
            backgroundColor: "",
            height: "300px",
            width: "330px",
            overflow: "auto",
            borderRadius: "0px",
          }}
        >
          <div
            style={{
              marginTop: "10px",
              border: "solid 0px red",
              height: "45px",
              width: "99%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "yellow",
              fontSize: "30px",
              fontFamily: "cursive",
              backgroundColor: "#FE7F2D",
              borderRadius: "25px",
            }}
          >
            <p style={{ position: "sticky" }}>Deleted Tasks</p>
          </div>
          {props.todoList
            .filter((e) => {
              if (props.search && e.Status === "deleted") {
                return e.todo
                  .toLowerCase()
                  .includes(props.search.toLowerCase());
              } else if (e.Status === "deleted") {
                return e;
              }
            })
            .map((e) => (
              <DisplayAdd
                todoList={props.todoList}
                setTodoList={props.setTodoList}
                todoid={e.id}
                todo={e.todo}
                Status={e.Status}
              />
            ))}
        </div>
      </div>
    </div>
    </>
  );
  
};

export default DisplayTodo;
