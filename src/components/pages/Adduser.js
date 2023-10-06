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
  const [fullname, setFullname] = useState("")


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
      console.log(err);
      console.log("error check is true");
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
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   const name_validation = new RegExp(/^[a-zA-Z]+$/);
  //                                                           // username onchange
  //   if (!adduser.username) {
  //     setErrors({...errors, username: "Name is Required!"})
  //   } else if (!name_validation.test(adduser.username)) {
  //     setErrors({...errors, username: "Name is Not Valid"})
  //   }
  //   else{
  //     setErrors({...errors, username: ""})
  //   }
  //                                                               // username onchange
  //   setAdduser({ ...adduser, [name]: value });
   
  // };
  const nameChange = (event) => {
    const value = event.target.value;
    const name_validation = new RegExp(/^[a-zA-Z]+$/);
    if (!value) {
      setErrors({...errors, username: "Name is Required!"})
    } else if (!name_validation.test(value)) {
      setErrors({...errors, username: "Name is Not Valid"})
    }
    else{
      setErrors({...errors, username: ""})
    }
    setAdduser({ ...adduser, username: value });
   
  };
  const cityChange = (event) => {
    const value = event.target.value;
    const name_validation = new RegExp(/^[a-zA-Z]+$/);
    if (!value) {
      setErrors({...errors, usercity: "city is Required!"})
    } else if (!name_validation.test(value)) {
      setErrors({...errors, usercity: "city is Not Valid"})
    }
    else{
      setErrors({...errors, usercity: ""})
    }
    setAdduser({ ...adduser, usercity: value });
   
  };
  const ageChange = (event) => {
    const value = event.target.value;
    const age_validation = new RegExp(/^[0-9]+$/);
    if (!value) {
      setErrors({...errors, userage: "Age is Required!"})
    } else if (!age_validation.test(value)) {
      setErrors({...errors, userage: "Age is Not Valid"})
    }
    else{
      setErrors({...errors, userage: ""})
    }
    setAdduser({ ...adduser, userage: value });
   
  };
  const imageChange = (e) => {
    
    var file = e.target.files[0];
    // const url = URL.createObjectURL(file);
    // // setImage(...image, file);
    const data = new FileReader();
    data.addEventListener('load',()=>{
      setImage(...image,data.result)
    })
    data.readAsDataURL(file)
    setErrors({ ...errors, Image: "" });
  };
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
                onChange={nameChange}
                style={{
                  marginLeft: "50px",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#126FAD",
                  border: "solid 3px yellow",
                  borderRadius: "15px",
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !errors.username && adduser.username) { 
                    (
                      console.log(`if ${errors.username}`),
                      document.querySelector(
                        'input[id="usercity"]'
                      )
                    ).focus();
                  }
                  else{
                    (
                      console.log(`else ${errors.username}`),
                      document.querySelector(
                        'input[id="username"]'
                      )
                    ).focus();
                  }
                }}
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
                onChange={cityChange}
                style={{
                  marginLeft: "50px",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#126FAD",
                  border: "solid 3px yellow",
                  borderRadius: "15px",
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !errors.usercity && adduser.usercity) { 
                    (
                      console.log(`if ${errors.usercity}`),
                      document.querySelector(
                        'input[id="userage"]'
                      )
                    ).focus();
                  }
                  else{
                    (
                      console.log(`else ${errors.usercity}`),
                      document.querySelector(
                        'input[id="usercity"]'
                      )
                    ).focus();
                  }
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
                id="userage"
                onChange={ageChange}
                style={{
                  marginLeft: "50px",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#126FAD",
                  border: "solid 3px yellow",
                  borderRadius: "15px",
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !errors.userage && adduser.userage) { 
                    (
                      console.log(`if ${errors.userage}`),
                      document.querySelector(
                        'input[id="userimage"]'
                      )
                    ).focus();
                  }
                  else{
                    (
                      console.log(`else ${errors.userage}`),
                      document.querySelector(
                        'input[id="userage"]'
                      )
                    ).focus();
                  }
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
                id="userimage"
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
    </>
  );
}

export default Adduser;
