import {React, useState} from 'react'
import Style from '../Style.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const getusers = () => {
  let list = localStorage.getItem("Users");
  if (list) {
    return JSON.parse(localStorage.getItem("Users"));
  } else {
    return [];
  }
};
function Displayuser() {
  const [userlist, setUserlist] = useState(getusers());
  const Navigate = useNavigate();
  const goBack = () => {
    Navigate('/')
  } 
  const AddU = () => {
    Navigate('adduser')
  }
  return (
   <>
                                                {/* Top Buttons */}
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
        onClick={goBack}
       
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
       onClick={AddU}
      >
        Add User
      </button>
      </div>
   </div>

                                                   {/* Display users Heading */}
   <div style={{width:"100%",textAlign:"center", height:"60px", border:"solid 0px red"}}>
    <p style={{fontSize:"40px",fontFamily:"cursive",color:"yellow", margin:"0px", padding:"0px"}}>All Users</p>
   </div>
                                                {/* user card section */}
   <div style={{border: "solid 0px", height:"100%", width:"100%", display:"flex", flexWrap:"wrap", overflow:"hidden"}}>
      {
      userlist.map((e)=>{
        return(

        <div style={{border:"solid 3px yellow" , width:"300px", margin:"20px", height:"330px", borderRadius:"20px" }}>
        <div style={{border:"solid 0px red"}} className={Style.card}>
          
          <div style={{border:"solid 0px red" , width:"190px", height:"150px",marginLeft:"50px",objectFit:"contain"}}>
          <img src={e.Image} alt="Avatar" style={{width:"100%",objectFit:"contain", height:"150px", margin:"10px 0px 0px 0px", borderRadius:"20px"}}/>
          
          
          </div>

          
  <div  className={Style.container}>
    <p style={{width:"280px", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}><b style={{color:"yellow"}}>User Name: </b>{e.username}</p> 
    <p style={{width:"280px", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}><b style={{color:"yellow"}}>User City: </b>{e.usercity}</p>
    <p style={{width:"280px", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}><b style={{color:"yellow"}}>User Age: </b>{e.userage}</p>  
    <p style={{width:"280px", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}><b style={{color:"yellow"}}>Date: </b>{e.Date}</p> 
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