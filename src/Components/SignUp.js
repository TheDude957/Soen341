import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SignUp = () =>  {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

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
    const handleChangeU = (event) => {
        setUser(event.target.value);
    };
    const userType = ["Customer", "Seller", "Admin"]

    return (
        <Grid>
            <Paper
                elevation={10}
                style={{ padding: 30, width: 600, margin: "200px auto" }}
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
                    value={email}
                    onChange={handleChangeE}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField 
                    id="password" 
                    type="password" 
                    variant="outlined" 
                    label="Password" 
                    placeholder="Password"
                    required
                    style={{ paddingBottom: 10, paddingRight: 10, width: '50%' }}
                    value={password}
                    onChange={handleChangeP}
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
                    style={{ paddingBottom: 20, width: '50%' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Box>
                    <FormControl required style={{paddingBottom: 10, width: '50%'}}>
                        <InputLabel id="user-type">User</InputLabel>
                            <Select
                            id="required-user-type"
                            value={user}
                            label="User"
                            required
                            onChange={handleChangeU}
                            >
                                {userType.map((type)=>(<MenuItem>{type}</MenuItem>))}
                            </Select>
                    </FormControl>
                </Box>

                <Grid align="center" style={{ paddingBottom: 10}}>
                    <Button 
                        type="submit"
                        color="primary" 
                        variant="contained"
                    >
                        Create Account
                    </Button>
                </Grid>
                <Grid align="center">
                    <Typography>
                        <Link to="LoginPage">Already have an account ?</Link>
                    </Typography>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default SignUp;