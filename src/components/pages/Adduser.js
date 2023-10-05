import React, { useState, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import userimage from "../images/images.png";
import Style from "../Style.module.css";
import ValidateForm from "../ValidateForm";

const getusers = () => {
  let list = localStorage.getItem("Users");
  if (list) {
    return JSON.parse(localStorage.getItem("Users"));
  } else {
    return [];
  }
};
function Adduser() {
  const [adduser, setAdduser] = useState({
    username: "",
    usercity: "",
    userage: "",
  });
  const [image, setImage] = useState("");
  const [userlist, setUserlist] = useState(getusers());
  const [errors, setErrors] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("Users", JSON.stringify(userlist))
  // }, [userlist]);


  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    var newdata = {
      ...adduser,
      Date: date,
      ID: new Date().getTime().toString(),
      Image: image,
    };

    const err = ValidateForm(newdata);
    if (err && Object.keys(err)?.length !== 0) {
      setErrors(err);
      console.log("hello");
      return;
    }
    setUserlist([...userlist, newdata]);
    const a = [...userlist, newdata]
    localStorage.setItem("Users", JSON.stringify(a))

    console.log(newdata);
    setAdduser({ username: "", usercity: "", userage: "" });
console.log("running")
    setImage("");
    navigate("../displayuser");
    
  };
  const goBack = () => {
    navigate(-1);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setErrors({ ...errors, [name]: "" });
    setAdduser({ ...adduser, [name]: value });
  };
  const imageChange = (e) => {
    
    var file = e.target.files[0];
    // const url = URL.createObjectURL(file);
    // console.log(file);
    const data = new FileReader();
    data.addEventListener('load',()=>{
      setImage(...image,data.result)
    })
    data.readAsDataURL(file)
    setErrors({ ...errors, Image: "" });
    // // setImage(...image, file);

  };
  console.log(Image)
  return (
    <>
      <div style={{width:"100%", height:"80px", border:"0px solid",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div style={{width:"95%", height:"50px", border:"0px solid",display:"flex",justifyContent:"left",alignItems:"center"}}>
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
    </div>
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
            <label style={{ margin: "20px", color: "yellow" }}>
              Enter Your name:
              <input
                type="text"
                value={adduser.username}
                name="username"
                id="username"
                onChange={handleChange}
                style={{
                  marginLeft: "50px",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#126FAD",
                  border: "solid 3px yellow",
                  borderRadius: "15px",
                }}
                // onKeyDown={(event) => {
                //   if (event.key === "Enter" && errors.username ==="" ) {
                //     (
                //       document.querySelector(
                //         'input[id="usercity"]'
                //       )
                //     ).focus();
                //   }
                // }}
              />
              {errors.username && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "200px",
                    marginTop: "0px",
                  }}
                >
                  {errors.username}
                </p>
              )}
            </label>
            <label style={{ margin: "20px", color: "yellow" }}>
              Enter Your City:
              <input
                type="text"
                value={adduser.usercity}
                name="usercity"
                id= "usercity"
                onChange={handleChange}
                style={{
                  marginLeft: "50px",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#126FAD",
                  border: "solid 3px yellow",
                  borderRadius: "15px",
                }}
              />
              {errors.usercity && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "200px",
                    marginTop: "0px",
                  }}
                >
                  {errors.usercity}
                </p>
              )}
            </label>
            <label style={{ margin: "20px", color: "yellow" }}>
              Select Your Age:
              <input
                type="text"
                value={adduser.userage}
                name="userage"
                onChange={handleChange}
                style={{
                  marginLeft: "50px",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#126FAD",
                  border: "solid 3px yellow",
                  borderRadius: "15px",
                }}
              />
              {errors.userage && (
                <p
                  style={{
                    color: "red",
                    font: "5px",
                    marginLeft: "200px",
                    marginTop: "0px",
                  }}
                >
                  {errors.userage}
                </p>
              )}
            </label>
            <label
              style={{
                margin: "20px",
                display: "flex",
                alignItems: "center",
                color: "yellow",
              }}
            >
              Upload Image
              {image ? (
                <img
                  style={{
                    width: "120px",
                    height: "120px",
                    marginLeft: "50px",
                    objectFit: "contain",
                    border: "solid 1px yellow",
                    borderRadius: "60px",
                  }}
                  src={image}
                  alt="some errors"
                />
              ) : (
                <img
                  style={{
                    width: "120px",
                    height: "120px",
                    marginLeft: "50px",
                    color: "yellow",
                    objectFit: "contain",
                  }}
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
            <div style={{ margin: "0px" }}>
              {errors.Image && (
                <p
                  style={{ color: "red", marginLeft: "0px", marginTop: "0px" }}
                >
                  {errors.Image}
                </p>
              )}
            </div>
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
                cursor: "pointer",
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
