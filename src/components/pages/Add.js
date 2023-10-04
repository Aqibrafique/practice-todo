import React from 'react'
import { Link } from 'react-router-dom'

function Add(props) {
  return (
    <>
    <div style={{width:"100%", height:"200px", border:"solid 0px red", display:"flex", justifyContent:"center", }}>
    <div style={{width:"50%", height:"80px", border:"solid 0px red", display:"flex", justifyContent:"center",alignItems:"center"}}>
    <div style={{width:"50%", height:"50px", border:"solid 0px", display:"flex", justifyContent:"center"}}>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link style={{textDecoration:"none"}} to="addtask" >Add Tasks</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link style={{textDecoration:"none"}} to="alltasks" >All Tasks</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link style={{textDecoration:"none"}} to="displayuser" >Users</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link style={{textDecoration:"none"}} to="viewtask" >Tasks</Link></button>  
      </div>
        
        </div>
    </div>
    <div style={{width:"100%", height:"400px", border:"solid 0px red", display:"flex", justifyContent:"center", }}>
    <div style={{width:"50%", height:"400px", border:"solid 0px red", display:"flex", justifyContent:"center",alignItems:"center"}}>
    {
      props.userlist.map((e)=>{
        return(
        <div>
          
          </div>
      )})
    }
        
        </div>
    </div>
    </>
  )
}

export default Add