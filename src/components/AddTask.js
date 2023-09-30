import React from 'react'
import Style from './Style.module.css'

function AddTask(props) {
 
  return (
    <>
    <div style={{color:"yellow",fontSize: "60px",fontFamily:"cursive", textAlign:"center" }}>Todo App</div>
    <div style={{width:"100%", height:"150px", border: "solid 1px red", display:"flex", justifyContent:"center", alignItems:"center" }}>
      
        {/* <div style={{width: "50%", height:"100px", border: "solid 1px blue" }}> */}
            <input style={{width:"50%", height:"50px", background:"white", borderRadius:"15px", border:"4px dotted yellow" }} stype type='text' value={props.todo} onChange={(e)=>{props.setTodo(e.target.value)}} />

            <button className={Style.addbutton} style={{marginLeft:"10px", height:"60px", backgroundColor:"yellow", color:"red",fontSize:"25px", borderRadius:"25px", border:"none" }} onClick={props.AddTodo}>Add</button>
            

        {/* </div> */}
    </div>
    </>
  )
}

export default AddTask