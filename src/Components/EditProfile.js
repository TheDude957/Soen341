import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { setCurrentUserInformation } from "../firebaseService.js";
/*
This Component is used to add an item to firebae
Returns a form 
*/
const EditProfile = (props) => {
  /*
 State for item information
 */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  

  /*
 State to track errors
 */
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  

  /*
  Check if the form is completed before sanding the information of item to the database
  */
  const formHandler = (e) => {
    e.preventDefault();
    firstName === "" ? setFirstNameError(true) : setFirstNameError(false);
    lastName === "" ? setLastNameError(true) : setLastNameError(false);
    email === ""  ? setEmailError(true) : setEmailError(false);
    

    if (
        firstNameError === false &&
        lastNameError === false 
      
    ) {
    updateDatabase();
      setFirstName("");
      setLastName("");
      setEmail("");
      
    } else {
      setTimeout(() => {
        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
        
      }, 3000);
    }
  };

 async function updateDatabase(){
    const user = {
        email : email,
        firstName : firstName,
        lastName : lastName,
    };
    console.log(user);
    await setCurrentUserInformation(user);
 }

  return (
    <div className="container">
      <div style={{ paddingTop: 20 }}>
        <h1>Edit your Profile</h1>
      </div>
      <hr></hr>

      <div style={{ paddingTop: 15 }}>
        <label>First Name*</label>

        <TextField
          type="text"
          className="form-control"
          required
          variant="outlined"
          placeholder={ props.user !== undefined  ? props.user.firstName : "not logged in"}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          error={firstNameError}
          helperText={firstNameError ? "Required" : ""}
        ></TextField>
      </div>

      <div style={{ paddingTop: 15 }}>
        <label>Last Name*</label>

        <TextField
          type="text"
          className="form-control"
          required
          variant="outlined"
          placeholder={ props.user !== undefined  ? props.user.lastName: "not logged in"}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          error={lastNameError}
          helperText={lastNameError ? "Required" : ""}
        ></TextField>
      </div>
      <div style={{ paddingTop: 15 }}>
        <label>email*</label>

        <TextField
          type="text"
          className="form-control"
          required
          variant="outlined"
          placeholder={ props.user !== undefined  ? props.user.email : "not logged in"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={emailError}
          helperText={emailError ? "Required" : ""}
        ></TextField>
      </div>
      
            

      <div style={{ paddingTop: 15 }}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={formHandler}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
