import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import { SignInUser , AddItemToCart } from "../firebaseService";
import { useNavigate } from "react-router-dom";

/**
 * Sign In page
 * Includes links to Sign up or forgot password
 * @returns a form with email and password textfields. If the user in sign in successfully, he will be redirected to the main page
 */
const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const btnstyle = { margin: "15px 0" };
  const signIn = () => {
    SignInUser(email, password)
      .then((data) => {
        console.log("You are logged in!");
        props.SetSignIn();
        transferLS2Cart();
        navigate("/");
        setEmail("");
        setPassword("");
        
      })
      .catch((error) => {
        console.log("ERROR");
        setError(true);
      });
  };

    /**
   * A function to transfer items from the local storage to the user cart if there is any
   */
  function transferLS2Cart() {
    let prev = JSON.parse(localStorage.getItem('cart'));
    if (prev !== null){
      prev.forEach( (product) => {
        AddItemToCart(product.id)
      })
    
    }
  }

  return (
    <Grid>
      <Paper
        elevation={10}
        style={{ padding: 30, width: 500, margin: "200px auto" }}
      >
        <Grid align="center" style={{ paddingBottom: 30 }}>
          <h2>Login</h2>
        </Grid>

        <TextField
          label="Email"
          type="email"
          placeholder="Email"
          fullWidth
          required
          style={{ paddingBottom: 10 }}
          error={error}
          onChange={(email) => setEmail(email.target.value)}
          onClick={() => {
            setError(false);
          }}
          value={email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <TextField
          label="Password"
          placeholder="Password"
          type="password"
          fullWidth
          required
          style={{ paddingBottom: 10 }}
          variant="outlined"
          onChange={(password) => setPassword(password.target.value)}
          onClick={() => {
            setError(false);
          }}
          value={password}
          error={error}
          helperText={
            error ? "Email or Password is incorrect. Please try again!" : ""
          }
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
          style={btnstyle}
          fullWidth
          onClick={signIn}
        >
          Sign in
        </Button>
        <Grid align="center">
          <Typography>
            <Link to="#">Forgot password</Link>
          </Typography>
          <Link to="/signup">
            <Typography>New account</Typography>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
