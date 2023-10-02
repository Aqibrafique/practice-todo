import React from 'react'
import { Link } from 'react-router-dom'

function Add() {
  return (
    <>
    <div style={{width:"100%", height:"100vh", border:"solid 0px red", display:"flex", justifyContent:"center", alignItems:"center" }}>
    <div style={{width:"50%", height:"50vh", border:"solid 0px red", display:"flex", justifyContent:"center"}}>
    <div style={{width:"50%", height:"40vh", border:"solid 0px", display:"flex", justifyContent:"center"}}>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link to="addtask" >Add Tasks</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link to="viewtask" >view Tasks</Link></button>
          <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none" }}><Link to="adduser" >Add Users</Link></button>  
      </div>
        
        </div>
    </div>
    </>
  )
}

export default Add