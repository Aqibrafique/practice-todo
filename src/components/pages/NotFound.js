import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1)
    }


    return(
        <div style={{width:"100%", height:"100vh", border:"solid 0px red", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <div style={{width:"50%", height:"50vh", border:"solid 0px red", display:"flex", justifyContent:"center"}}>
        <div style={{width:"50%", height:"10vh", border:"solid 0px", display:"flex", justifyContent:"center"}}>
            <h1>Sorry Page Not Found</h1>
            <button style={{marginLeft:"10px", height:"35px", width:"125px",marginTop:"10px", backgroundColor:"yellow", color:"red",fontSize:"15px", borderRadius:"25px", border:"none",  }} onClick={goBack}>Back </button>
          </div>
            
            </div>
        </div>
    )
}
 
 export default NotFound