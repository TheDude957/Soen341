import React, { useState } from "react";
import {TextField, Button} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SignUpUser } from "../firebaseService";

const SignUp = () =>  {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConPassword] = useState();
    const [userType, setUserType] = useState();
    
    const userTypes = ["", "Customer", "Seller", "Admin"];
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        setConPassword(event.target.value);
    };
    const handleChangeUserType = (event) => {
        setUserType(event.target.value);
    };

    const userObj = {
        firstName: firstName,
        lastName : lastName,
        email: email,
        password: password,
        userType : userType
    }
    
    let navigate = useNavigate();
    const signUp = () => {
        SignUpUser(userObj, password)
          .then((data) => {
            console.log("You have created an account!");
            setFirstName();
            setLastName();
            setEmail();
            setPassword();
            setUserType();
            setConPassword();
            let path = `/login`;
            navigate(path);
          })
          .catch((error) => {
            console.log("ERROR");
            setError(true);
          });
      };

    return (
        <Grid container>
            <Paper
                elevation={10}
                style={{ padding: 30, width: 600, margin: "60px auto" }}
            >
                <Grid align="center" style={{ paddingBottom: 30 }}>
                    <h2>Sign Up</h2>
                </Grid>

                <TextField 
                        id="firstname" 
                        type="text" 
                        variant="outlined" 
                        label="First Name" 
                        placeholder="First Name"
                        required
                        style={{ paddingBottom: 10, paddingRight: 10, width: '50%'}}
                        value={firstName}
                        onChange={handleChangeFirstName}
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                />
                
                <TextField 
                        id="lastname" 
                        type="text" 
                        variant="outlined" 
                        label="Last Name" 
                        placeholder="Last Name"
                        required
                        style={{ paddingBottom: 10, width: '50%'}}
                        value={lastName}
                        onChange={handleChangeLastName}
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                />
                
                <TextField 
                        id="email" 
                        label="Email" 
                        type="email"
                        placeholder="Email"
                        variant="outlined"
                        style={{ paddingBottom: 10, paddingRight: 10, width: '50%' }}
                        required
                        onChange={handleChangeEmail}
                        value={email}
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            ),
                        }}
                />

                <FormControl required style={{paddingBottom: 10, width: '50%'}}>
                    <InputLabel id="user-type">User</InputLabel>
                        <Select native
                        id="required-user-type"
                        onChange={handleChangeUserType}
                        value={userType}
                        label="User"
                        required
                        error={error}
                        onClick={() => {
                            setError(false);
                          }} 
                        >
                            {userTypes.map((type)=>(<option>{type}</option>))}
                        </Select>
                </FormControl>

                <TextField 
                        id="password" 
                        type="password" 
                        variant="outlined" 
                        label="Password" 
                        placeholder="Password"
                        required
                        style={{ paddingBottom: 10, /*paddingRight: 10,*/ width: '100%' }}
                        value={password}
                        onChange={handleChangePassword}
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        helperText={
                            error ? "Information missing. Please try again!" : ""
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                />

                {/*<TextField 
                        id="confirmPassword" 
                        type="password" 
                        variant="outlined" 
                        label="Confirm Password" 
                        placeholder="Confirm Passowrd"
                        required
                        style={{ paddingBottom: 10, width: '50%' }}
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />*/}

                <Grid align="center" style={{ paddingBottom: 10}}>
                    <Button 
                        type="submit"
                        color="primary" 
                        variant="contained"
                        onClick={signUp}
                    >
                        Create Account
                    </Button>
                </Grid>
                <Grid align="center">
                    <Typography>
                        <Link to="/login">Already have an account ?</Link>
                    </Typography>
                </Grid>
          </Paper>
     </Grid>
  );
};

export default SignUp;
