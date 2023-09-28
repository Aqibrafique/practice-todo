import React from 'react'

function DisplayAdd(props) {
    // const list =  props.todoList.map((e)=>{return(<div>{e.todo}</div>)});
    const handleComplete =(id ) => {
        props.setTodoList(
            props.todoList.map((e)=> e.id===id ? {...e, Status: "completed"}: e )
        )
        
    }
    const handleDelete =(id,Status ) => {

        // Status==="deleted"? 
        // props.setTodoList(props.todoList.filter((e)=>e.id !== id))
        // props.setTodoList(
           
        //     props.todoList.map((e)=> e.id===id ? {...e, Status: "deleted"}: e )
            
        // )
        // props.setTodoList(props.todoList.filter((e)=> {if(e.Status==="deleted"){e.Status="add"}return e;})):
        if(Status==="deleted")
        {
            // props.setTodoList(props.todoList.filter((e)=> {if(e.Status==="deleted"){e.Status="add"}return e;}))
            props.setTodoList(props.todoList.filter((e)=>e.id !== id))
            // setTodos(todos.filter((todo) => todo.id !== id));
            console.log("if"+Status)
        }
        else{
        props.setTodoList(
           
            props.todoList.map((e)=> e.id===id ? {...e, Status: "deleted"}: e )
            
        )
        console.log("else"+Status)
        
        }
    }
    const handleReverse =(id ) => {
        props.setTodoList(
            props.todoList.map((e)=> e.id===id ? {...e, Status: "add"}: e )
        )
    }
    
// console.log(props.todo)
// console.log(props.todoid)
  return (
    <div>
        <div style={{border:"solid 1px blue", height:"40px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{border:"solid 1px red", height:"40px", width:"80%", overflow:"auto"}}>
                {props.todo}{props.id}
            </div>
            <div style={{border:"solid 1px red", height:"40px", width:"20%"}}>
                <button onClick={()=>handleComplete(props.todoid)}>c</button>
                <button onClick={()=>handleDelete(props.todoid,props.Status)}>d</button>
                <button onClick={()=>handleReverse(props.todoid)}>r</button>
            </div>
           </div>
    </div>
  )
}

export default DisplayAdd