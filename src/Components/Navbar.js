import React, { useEffect , useState} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "../CSS/mainPage.css";
import logo from "../Images/biggerLogo.png";

/**
 * Style of the NavBar
 */
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  title: {
    fontSize: "400px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#0099e6",
    },
  },
}));

/**
 * Nav Bar of the app
 * Contains the logo and name of the app
 * Contain links to other page like the sign in, Home, Cart
 */
function Navbar(props) {
  const classes = useStyles();
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    let prev = JSON.parse(localStorage.getItem('cart'));
    if (prev == null) prev = [];
    setCartSize(prev.length);
  },[props.cartBigness]);

  function userType(){}
 
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
          {props.user === "visitor" ? 
          <Link to="/login" className={classes.link}>
            <AccountCircleIcon />
          </Link>
          :
          <Link to="/profilePage" className={classes.link}>
            <ManageAccountsIcon/>
          </Link>
          }
          
          <div className="cart-menu-btn">
            <Link to="/cart" className={classes.link}>
              <ShoppingCartOutlinedIcon />
            </Link>
           {cartSize > 0 ? <span className="cart-indicator">{cartSize}</span> :<span/> }
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
