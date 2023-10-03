import React from 'react'
import { Link } from 'react-router-dom'

function Add(props) {
  return (
    <>
    <div style={{width:"100%", height:"200px", border:"solid 0px red", display:"flex", justifyContent:"center", }}>
    <div style={{width:"50%", height:"80px", border:"solid 0px red", display:"flex", justifyContent:"center",alignItems:"center"}}>
    <div style={{width:"50%", height:"50px", border:"solid 0px", display:"flex", justifyContent:"center"}}>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link to="addtask" >Add Tasks</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link to="viewtask" >view Tasks</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link to="adduser" >Add Users</Link></button>  
      </div>
        
        </div>
    </div>
    <div style={{width:"100%", height:"400px", border:"solid 1px red", display:"flex", justifyContent:"center", }}>
    <div style={{width:"50%", height:"400px", border:"solid 2px red", display:"flex", justifyContent:"center",alignItems:"center"}}>
    {
      props.userlist.map((e)=>{
        return(
        <div>
          <h1>{e.ID}</h1>
          </div>
      )})
    }
        
        </div>
    </div>
    </>
  )
}

export default Add