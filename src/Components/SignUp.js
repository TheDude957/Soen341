import React from "react";
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
import FormHelperText from '@mui/material/FormHelperText';

const SignUp = () =>  {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState('');

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
                value={firstname}
                onChange={handleChangeFN}
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
                value={lastname}
                onChange={handleChangeLN}
            />
            
            <TextField 
                id="email" 
                label="Email" 
                type="email"
                placeholder="Email"
                variant="outlined"
                fullWidth
                required
                style={{ paddingBottom: 10 }}
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
                fullWidth
                required
                style={{ paddingBottom: 10 }}
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
            
            <Box sx={{ minWidth: 120 }}>
                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="user-type">User</InputLabel>
                    <Select
                    id="required-user-type"
                    value={user}
                    label="User"
                    required
                    onChange={handleChangeU}
                    >
                    <MenuItem value={10}>Buyer</MenuItem>
                    <MenuItem value={20}>Seller</MenuItem>
                    <MenuItem value={30}>Admin</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </Box>

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