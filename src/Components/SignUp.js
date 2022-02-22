import React from "react";
import {TextField, Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";

const SignUp = () =>  {
    return (
        <Grid>
        <Paper
            elevation={10}
            style={{ padding: 30, width: 500, margin: "200px auto" }}
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
                fullWidth
                required
                style={{ paddingBottom: 10 }}
            />
                
            <TextField 
                id="lastname" 
                type="text" 
                variant="outlined" 
                label="Last Name" 
                placeholder="Last Name"
                fullWidth
                required
                style={{ paddingBottom: 10 }}
            />
            
            <TextField 
                id="email" 
                label="Email" 
                type="text"
                placeholder="Email"
                variant="outlined"
                fullWidth
                required
                style={{ paddingBottom: 10 }}
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
                type="text" 
                variant="outlined" 
                label="Password" 
                placeholder="Password"
                fullWidth
                required
                style={{ paddingBottom: 10 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <TextField 
                type="text" 
                variant="outlined" 
                label="Confirm Password" 
                placeholder="Confirm Passowrd"
                fullWidth 
                required
                style={{ paddingBottom: 10 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Button 
                type="submit"
                color="primary" 
                variant="contained" 
                fullWidth
            >
                Create Account
            </Button>
        <Grid align="center">
            <Typography>
                <Link to="/LoginPage">Already have an account ?</Link>
            </Typography>
        </Grid>
      </Paper>
    </Grid>
    )
}

export default SignUp;