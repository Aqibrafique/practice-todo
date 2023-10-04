import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import userimage from "../images/images.png";
import Style from "../Style.module.css";

function Adduser({
  adduser,
  setAdduser,
  HandleSubmit,
  userlist,
  image,
  setImage,
}) {
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdduser({ ...adduser, [name]: value });
  };
 
  const imageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(file);
    setImage(...image, url);
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
          border: "solid 0px green",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "500px",
            border: "solid 0px ",
            // backgroundColor:"red"
          }}
        >
          <form
            onSubmit={HandleSubmit}
            style={{
              border: "solid 0px red",
              display: "flex",
              //   justifyContent:"center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <label style={{ margin: "20px",color:"yellow"}}>
              Enter Your name:
              <input
                type="text"
                value={adduser.username}
                name="username"
                onChange={handleChange}
                style={{marginLeft:"50px", width:"200px", height:"30px", backgroundColor:"#126FAD", border:"solid 3px yellow", borderRadius:"15px"}}
              />
            </label>
            <label style={{ margin: "20px",color:"yellow" }}>
              Enter Your City:
              <input
                type="text"
                value={adduser.usercity}
                name="usercity"
                onChange={handleChange}
                style={{marginLeft:"50px", width:"200px", height:"30px", backgroundColor:"#126FAD", border:"solid 3px yellow", borderRadius:"15px"}}
              />
            </label>
            <label style={{ margin: "20px", color:"yellow" }}>
              Select Your Age:
              <input
                type="text"
                value={adduser.userage}
                name="userage"
                onChange={handleChange}
                style={{marginLeft:"50px", width:"200px", height:"30px", backgroundColor:"#126FAD", border:"solid 3px yellow", borderRadius:"15px"}}
              />
            </label>
            <label style={{ margin: "20px", display:"flex", alignItems:"center",color:"yellow" }}>
              Upload Image
              {image ? (
                <img
                  style={{ width: "120px", height: "120px", marginLeft: "50px", border:"solid 1px yellow", borderRadius:"60px" }}
                  src={image}
                  alt="some errors"
                />
              ) : (
                <img
                  style={{ width: "120px", height: "120px", marginLeft: "50px",color:"yellow" }}
                  src={userimage}
                  alt="some errors"
                />
              )}
              <input
                type="file"
                name="userimage"
                onChange={imageChange}
                style={{ display: "none" }}
              />
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
      {/* <div
        style={{
          border: "solid 1px",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {userlist.map((e) => {
          const uname = `Username:   ${e.username}`;
          return (
            <div
              style={{
                border: "solid 3px yellow",
                width: "300px",
                margin: "20px",
                height: "271px",
                borderRadius: "20px",
              }}
            >
              <div className={Style.card}>
                <div
                  style={{
                    border: "solid 1px red",
                    width: "90px",
                    margin: "20px",
                    height: "50px",
                    marginLeft: "100px",
                    display: "flex",
                  }}
                >
                  <img
                    src={e.Image}
                    alt="Avatar"
                    style={{ width: "100%", height: "50px", marginLeft: "0px" }}
                  />
                </div>
                <div className={Style.container}>
                  <h4>
                    <b>{uname}</b>
                  </h4>
                  <p>{e.usercity}</p>
                  <p>{e.userage} </p>
                  <p>{e.Date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Adduser;
