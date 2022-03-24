import "../CSS/ProfilePage.css";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SignOutUser , getCurrentID } from "../firebaseService"
import {  Link, Outlet, useNavigate} from "react-router-dom";



function ProfilePage(props) {
const navigate = useNavigate();
    
function logout() {
    SignOutUser()
    .then( () => {
        localStorage.removeItem("cart");
        props.cart();
        props.logUserOut();
        getCurrentID().then((v) => {alert(v)});
        alert("You have signed out successfully");
        navigate("/");
    }
        
    ); 
}


    return( <>
    

    <div >
    <div className = "grid-row">
        <Typography> <h1>Hello {props.user !== undefined ? props.user.firstName : "no name"}</h1>  </Typography>
    </div>
    <div className = "float-me">
        <Button  variant = "outlined" color = "primary" onClick = {logout}>
            <Typography>Log out</Typography>
        </Button>
    </div>
    </div>


    <Paper className = "grid-container" variant = "elavated4" > 

    
    {props.user !== undefined && props.user.userType == "Seller" ? 
    <Link to="addItem">
    <Button className = "grid-item" variant="outlined" color="primary"> <typography>Add product</typography> </Button>
    </Link>
    : <span></span>}
  
    <Link to="editprofile">
    <Button className = "grid-item" variant="outlined" color="primary"> <typography>Edit Profile</typography> </Button> 
    </Link>

    
    
    <Link to= "myproducts">
    <Button className = "grid-item" variant="outlined" color="primary"> <typography>Your Products</typography> </Button>
    </Link>
    
    
    
    

    </Paper>
    
    <Paper className = "outlet-paper">
    <Outlet variant = "rounded" className = "grid-row"/>
    </Paper>
    </>);
}

export default ProfilePage;