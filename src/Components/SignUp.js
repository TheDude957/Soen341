import React, { useState } from "react";
import {Grid, TextField, Button} from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SignUpUser } from "../firebaseService";

const SignUp = () =>  {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConPassword] = useState('');
    const [userType, setUserType] = useState('');
    
    const userTypes = ["", "Customer", "Seller", "Admin"];
    const [error, setError] = useState(false);

    const handleChangeFN = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLN = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeE = (event) => {
        setEmail(event.target.value);
    };
    const handleChangeP = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeCP = (event) => {
        setConPassword(event.target.value);
    };
    const handleChangeU = (event) => {
        setUserType(event.target.value);
    };

    const userObj = {
        firstName: firstname,
        lastName : lastname,
        email: email,
        password: password,
        userType : userType
    }
    
    let navigate = useNavigate();
    const signUp = () => {
        SignUpUser(password, userObj)
          .then((data) => {
            console.log("You have created an account!");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setUserType("");
            setConPassword("");
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
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        style={{ paddingBottom: 10, paddingRight: 10, width: '50%'}}
                        value={firstname}
                        onChange={handleChangeFN}
                />
                
                <TextField 
                        id="lastname" 
                        type="text" 
                        variant="outlined" 
                        label="Last Name" 
                        placeholder="Last Name"
                        required
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        style={{ paddingBottom: 10, width: '50%'}}
                        value={lastname}
                        onChange={handleChangeLN}
                />
                
                <TextField 
                        id="email" 
                        label="Email" 
                        type="email"
                        placeholder="Email"
                        variant="outlined"
                        style={{ paddingBottom: 10, paddingRight: 10, width: '50%' }}
                        required
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        onChange={handleChangeE}
                        value={email}
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
                        onChange={handleChangeU}
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
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        style={{ paddingBottom: 10, paddingRight: 10, width: '50%' }}
                        value={password}
                        onChange={handleChangeP}
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

                <TextField 
                        type="password" 
                        variant="outlined" 
                        label="Confirm Password" 
                        placeholder="Confirm Passowrd"
                        required
                        error={error}
                        onClick={() => {
                            setError(false);
                          }}
                        style={{ paddingBottom: 10, width: '50%' }}
                        value={confirmPassword}
                        onChange={handleChangeCP}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                />

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
    )
}

export default SignUp;