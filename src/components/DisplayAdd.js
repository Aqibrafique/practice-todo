import React from "react";

function DisplayAdd(props) {
  const handleComplete = (id) => {
    props.setTodoList(
      props.todoList.map((e) =>
        e.id === id ? { ...e, Status: "completed" } : e
      )
    );
  };
  const handleDelete = (id, Status) => {
    if (Status === "deleted") {
      props.setTodoList(props.todoList.filter((e) => e.id !== id));

      console.log("if" + Status);
    } else {
      props.setTodoList(
        props.todoList.map((e) =>
          e.id === id ? { ...e, Status: "deleted" } : e
        )
      );
      console.log("else" + Status);
    }
  };
  const handleReverse = (id) => {
    props.setTodoList(
      props.todoList.map((e) => (e.id === id ? { ...e, Status: "add" } : e))
    );
  };

  return (
    <div>
      <div
        style={{
          border: "solid 1px blue",
          height: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"20px",
          backgroundColor: "yellow",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            border: "solid 1px red",
            height: "40px",
            width: "80%",
            overflow: "auto",
          }}
        >
          {props.todo}
        </div>
        <div style={{ border: "solid 1px red", height: "40px", width: "20%" }}>
          {props.Status === "completed" ? (
            <button onClick={() => handleReverse(props.todoid)}>r</button>
          ) : (
            <button onClick={() => handleComplete(props.todoid)}>c</button>
          )}

          <button onClick={() => handleDelete(props.todoid, props.Status)}>
            d
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayAdd;
