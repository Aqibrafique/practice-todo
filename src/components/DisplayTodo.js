import React from 'react'
import DisplayAdd from './DisplayAdd';
const DisplayTodo = (props) => {
    console.log("display"+ props.todoList.length);
  return(
    <div style={{border:"solid 0px red", height:"400px", width:"100%", display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
        <div style={{marginTop:"30px",border:"solid 3px #3D3D3D", borderRadius:"25px"  ,height:"300px", width:"350px", overflow:"auto",display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div  style={{border:"solid 0px red", height:"300px", width:"330px", overflow:"auto",  }}>
       <div style={{ marginTop:"10px", border: "solid 0px red", height: "45px", width: "99%", display:"flex", justifyContent:"center", alignItems:"center",color:"yellow",fontSize: "30px", fontFamily:"cursive", backgroundColor:"#3D3D3D", borderRadius:"25px"}}>All Tasks</div>
       { props.todoList.filter((e)=>{if(e.Status==="add"){return e}}).map((e)=>
       <DisplayAdd
       todoList={props.todoList}
       setTodoList={props.setTodoList}
       todoid={e.id}
       todo={e.todo}
       Status={e.Status}
       />
       )
       }
       </div>
        </div>
        <div style={{marginTop:"30px",border:"solid 3px #4BB897",borderRadius:"25px", height:"300px", width:"350px", overflow:"auto",display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div  style={{border:"solid 0px red", height:"300px", width:"330px", overflow:"auto",  }}>
          <div style={{  marginTop:"10px", border: "solid 0px red", height: "45px", width: "99%", display:"flex", justifyContent:"center", alignItems:"center",color:"yellow",fontSize: "30px", fontFamily:"cursive", backgroundColor:"#4BB897", borderRadius:"25px"}}>Completed Tasks</div>
        { props.todoList.filter((e)=>{if(e.Status==="completed"){return e}}).map((e)=>
       <DisplayAdd
       todoList={props.todoList}
       setTodoList={props.setTodoList}
       todoid={e.id}
       todo={e.todo}
       Status={e.Status}
       />
       )
       
       }
            
        </div>
        </div>
        <div style={{border:"solid 3px #FE7F2D", borderRadius:"25px",marginTop:"30px",  height:"300px", width:"350px", overflow:"auto",display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div  style={{border:"solid 0px red", height:"300px", width:"330px", overflow:"auto",  }}>
          <div style={{  marginTop:"10px", border: "solid 1px red", height: "45px", width: "99%", display:"flex", justifyContent:"center", alignItems:"center",color:"yellow",fontSize: "30px", fontFamily:"cursive",backgroundColor:"#FE7F2D", borderRadius:"25px"}}>Deleted Tasks</div>
        { props.todoList.filter((e)=>{if(e.Status==="deleted"){return e}}).map((e)=>
       <DisplayAdd
       todoList={props.todoList}
       setTodoList={props.setTodoList}
       todoid={e.id}
       todo={e.todo}
       Status={e.Status}
       />
       )
       
       }
            
        </div>  
        </div>
        </div>
  )
}

export default DisplayTodo