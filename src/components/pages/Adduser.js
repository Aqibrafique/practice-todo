import React from "react";
import { useNavigate } from "react-router-dom";

function Adduser({adduser, setAdduser}) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdduser((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${adduser.username}, City: ${adduser.usercity}, Age: ${adduser.userage}`
    );
};
  return (
    <>
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
        }}
        onClick={goBack}
      >
        Back
      </button>
      <div
        style={{
          width: "100%",
          height: "100vh",
          border: "solid 1px red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "50vh",
            border: "solid 2px red",
          }}
        >
          <form onSubmit={handleSubmit}
            style={{
              border: "solid 2px red",
              display: "flex",
            //   justifyContent:"center",
            alignItems:"center",
              flexDirection: "column",
            }}
          >
            <label style={{ margin: "20px" }}>
              Enter Your name:
              <input type="text" name="username" onChange={handleChange}/>
            </label>
            <label style={{ margin: "20px" }}>
              Enter Your City:
              <input type="text" name="usercity" onChange={handleChange}/>
            </label>
            <label style={{ margin: "20px" }}>
              Select Your Age
              <input type="text"  name="userage" onChange={handleChange}/>
            </label>
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
        }}
        type="submit"
      >
        Submit
      </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Adduser;
