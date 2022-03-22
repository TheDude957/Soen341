import "../CSS/ProfilePage.css";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddItem from "../Components/AddItem.js";
import { BrowserRouter as Router, Routes, Route , Link, Outlet} from "react-router-dom";


function ProfilePage(props) {




    return( <>
    

    <div className = "grid-row">
        
     <Typography> <h1>Hello {props.user !== undefined ? props.user.firstName : "no name"}</h1>  </Typography>
    </div>
    <Paper className = "grid-container" variant = "elavated4" > 

    <Link to="addItem">
    <Button className = "grid-item" variant="outlined" color="primary"> <typography>Add product</typography> </Button>
    </Link>
  
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