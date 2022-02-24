import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SignUpButton from "./SignUpButton";
import { Link } from "react-router-dom";
import "../CSS/mainPage.css";
import logo from "../Images/biggerLogo.png";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  title:{
    fontSize: "400px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img className="logo" src={logo} alt="Logo" />
          
        </Typography>
        <Typography variant="h6" className={classes.logo}>
        <h className="title">Group A Store</h>
        </Typography>

        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/test2" className={classes.link}>
            About
          </Link>
          <Link to="/login" className={classes.link}>
            <AccountCircleIcon />
          </Link>
          <Link to="/cart" className={classes.link}>
            <ShoppingCartOutlinedIcon />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
