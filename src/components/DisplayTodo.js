import React from 'react'
import DisplayAdd from './DisplayAdd';

const DisplayTodo = (props) => {
    console.log("display"+ props.todoList.length);
    // console.log("id is"+)
//   const list =  props.todoList.filter((e)=>{if(e.Status=="add"){return e}}).map((e)=>{return(<div>{e.todo}</div>)});

  return(
    <div style={{border:"solid 1px blue", height:"400px", width:"100%", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <div style={{border:"solid 1px red", height:"300px", width:"30%", display:"", justifyContent:"center"}}>
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
        <div style={{border:"solid 1px red", height:"300px", width:"30%"}}>
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
        <div style={{border:"solid 1px red", height:"300px", width:"30%"}}>
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
  )
}

export default DisplayTodo