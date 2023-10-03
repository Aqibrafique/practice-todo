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
  // const [image, setImage] = useState("")
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleChange = (event) => {
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;
    setAdduser({ ...adduser, [name]: value });
    //  console.log(name,value)
  };
  // const handleImage = () => {
  //   imageRef.current.click();
  // }
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
          height: "300px",
          border: "solid 1px green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "300px",
            border: "solid 2px ",
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
            <label style={{ margin: "5px" }}>
              Enter Your name:
              <input
                type="text"
                value={adduser.username}
                name="username"
                onChange={handleChange}
              />
            </label>
            <label style={{ margin: "5px" }}>
              Enter Your City:
              <input
                type="text"
                value={adduser.usercity}
                name="usercity"
                onChange={handleChange}
              />
            </label>
            <label style={{ margin: "5px" }}>
              Select Your Age
              <input
                type="text"
                value={adduser.userage}
                name="userage"
                onChange={handleChange}
              />
            </label>
            <label style={{ margin: "5px" }}>
              Upload Image
              {image ? (
                <img
                  style={{ width: "50px", height: "50px", marginLeft: "100px" }}
                  src={image}
                  alt="some errors"
                />
              ) : (
                <img
                  style={{ width: "50px", height: "50px", marginLeft: "100px" }}
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
