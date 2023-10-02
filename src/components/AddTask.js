import React, { useState, } from 'react'
import Style from './Style.module.css'
import { Link, useNavigate } from 'react-router-dom'


function AddTask(props) {
 const [search, setSearch] = useState(false)

 const navigate = useNavigate();
 const goBack = () => {
   navigate(-1);
 }
  return (
    <>
     <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none",  }} onClick={goBack}>Back </button>
    <div style={{color:"yellow",fontSize: "60px",fontFamily:"cursive", textAlign:"center" }}>Todo App</div>
    <div style={{width:"100%", height:"90px", border: "solid 0px red", display:"flex", justifyContent:"center", alignItems:"center" }}>
      
      {search ? 
      ( <form style={{width:"70%", display:"flex", justifyContent:"center"}} onSubmit={props.AddTodo}>
            <input style={{width:"50%", height:"40px",placeholder:"Enter Text to Search", background:"white", borderRadius:"15px",outline:"none", border:"4px solid yellow" }}  type='text' value={props.search} onChange={(e)=>{props.setSearch(e.target.value)}} />
            
            {/* <button className={Style.addbutton} style={{marginLeft:"10px", height:"45px",width:"95px", backgroundColor:"yellow", color:"red",fontSize:"25px", borderRadius:"25px", border:"none" }} onClick={props.AddTodo}>Search</button> */}
            </form> ) : ( 
              <form style={{width:"70%", display:"flex", justifyContent:"center"}} onSubmit={props.AddTodo}>
              <input style={{width:"50%", height:"40px", background:"white", borderRadius:"15px",outline:"none", border:"4px solid yellow" }}  type='text' value={props.todo} onChange={(e)=>{props.setTodo(e.target.value)}} />
              
              <button className={Style.addbutton} style={{marginLeft:"10px", height:"50px", width:"70px", backgroundColor:"yellow", color:"red",fontSize:"25px", borderRadius:"25px", border:"none" }} onClick={props.AddTodo}>ADD</button>
              </form>
            )
}
    </div>
    <div style={{width:"100%", height:"50px", border: "solid 0px red", display:"flex", justifyContent:"center" }}>
      <div style={{width:"50%", height:"40px", border:"solid 0px green", display:"flex", justifyContent:"center"}}>
      <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}  onClick={()=>setSearch(true) }>Search Tasks</button>
            <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }} onClick={()=>setSearch(false) }>Add Tasks</button>
           
      </div>
    
    </div>

    </>
  )
}

export default AddTask