import React from 'react'
import Style from '../Style.module.css'
import { Link, Outlet } from 'react-router-dom'
function Displayuser({userlist}) {
  return (
   <>
   <div style={{width:"100%", height:"80px", border:"0px solid",display:"flex",justifyContent:"center",alignItems:"center"}}>
   <div style={{width:"45%", height:"50px", border:"0px solid",display:"flex",justifyContent:"left",alignItems:"center"}}>
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
       
      >
        Back
      </button>
      </div>
      <div style={{width:"45%", height:"50px", border:"0px solid",display:"flex",justifyContent:"right",alignItems:"center"}}>
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
       
      >
        <Link to="adduser"> Add User</Link>
      </button>
      </div>
   </div>

   <div style={{border: "solid 0px", height:"100vh", width:"100%", display:"flex", flexWrap:"wrap"}}>
      {
      userlist.map((e)=>{
        const uname = `Username:   ${e.username}`
        return(

        <div style={{border:"solid 3px yellow" , width:"300px", margin:"20px", height:"330px", borderRadius:"20px" }}>
        <div  className={Style.card}>
          
          <div style={{border:"solid 0px red" , width:"190px", margin:"0px", height:"150px",marginLeft:"50px",display:"flex"}}>
          <img src={e.Image} alt="Avatar" style={{width:"100%", height:"150px", marginLeft:"0px"}}/>
          
          
          </div>

          
  <div  className={Style.container}>
    <h4><b>{uname}</b></h4> 
    <p>{e.usercity}</p>
    <p>{e.userage} </p> 
    <p>{e.Date}</p>
  </div>
</div>
</div>
      )})
    }
      </div>
      <Outlet/>
   </>
  )
}

export default Displayuser