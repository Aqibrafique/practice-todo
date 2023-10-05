import {React} from 'react'
import DisplayAdd from "../DisplayAdd"
import Style from "../Style.module.css";
import { useNavigate, Link } from 'react-router-dom'
import SearchTask from './SearchTask';

function Alltasks(props) {


    const navigate = useNavigate();
  const goBack = () => {
    navigate("/");}

    const SearchT = () => {
      navigate("searchtask");}

      const AddT = () => {
        navigate("addtask");}
  return (
    <>
     <div style={{width:"100%", height:"80px", border:"0px solid",display:"flex",justifyContent:"center",alignItems:"center"}}>
   <div style={{width:"33%", height:"50px", border:"0px solid",display:"flex",justifyContent:"left",alignItems:"center"}}>
   <button
        style={{
          marginLeft: "10px",
          height: "35px",
          width: "125px",
          marginTop: "10px",
          backgroundColor: "yellow",
          color: "red",
          fontSize: "15px",
          borderRadius: "25px",
          border: "none",
          justifyContent:"center",
          cursor:"pointer",
          alignItems:"center",
        }}
        onClick={goBack}
       
      >
        Back
      </button>
      </div>
      <div style={{width:"33%", height:"50px", border:"0px solid",display:"flex",justifyContent:"center",alignItems:"center"}}>
   <button
        style={{
          marginLeft: "10px",
          height: "35px",
          width: "125px",
          marginTop: "10px",
          backgroundColor: "yellow",
          color: "red",
          fontSize: "15px",
          borderRadius: "25px",
          border: "none",
          justifyContent:"center",
          cursor:"pointer",
          alignItems:"center",
        }}
        onClick={SearchT}
       
      >
        Search Tasks
      </button>
      </div>
      <div style={{width:"33%", height:"50px", border:"0px solid",display:"flex",justifyContent:"right",alignItems:"center"}}>
   <button
        style={{
          marginLeft: "10px",
          height: "35px",
          width: "125px",
          marginTop: "10px",
          backgroundColor: "yellow",
          color: "red",
          fontSize: "15px",
          borderRadius: "25px",
          border: "none",
          justifyContent:"center",
          cursor:"pointer",
          alignItems:"center",
         
        }}
        onClick={AddT}
       
      >
        Add Tasks
      </button>
      </div>
   </div>

                                                         {/* TODO HEADING */}
    <div style={{border:"solid 0px blue", width:"100%", height:"80px", fontSize:"50px", color:"yellow", textAlign:"center",fontFamily: "cursive",backgroundColor: "#3D3D3D" }}>
        Todo App
        </div>
                                                          {/* All Tasks Div */}
    <div
      style={{
        border: "solid 0px red",
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
        
      <div
        style={{
          marginTop: "30px",
          border: "solid 3px yellow",
          backgroundColor: "#3D3D3D",
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
              marginTop: "0px",
              border: "solid px red",
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
  )
}

export default Alltasks