import React from 'react'

function AddTask(props) {
 
  return (
    <>
    <div style={{width:"99%", height:"200px", border: "solid 1px red", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <div style={{width: "50%", height:"100px", border: "solid 1px blue" }}>
            <input style={{width:"60%", height:"50px", background:"#DFAA82"}} stype type='text' value={props.todo} onChange={(e)=>{props.setTodo(e.target.value)}} />

            <button onClick={props.AddTodo}>Add</button>
            

        </div>
    </div>
    </>
  )
}

export default AddTask