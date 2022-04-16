import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllUsers , deleteFirebaseUser } from "../firebaseService";
import { useState , useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

//Component to seee all users in the store
function SeeUsers() {
    const [rows, setRows] = useState([]);
    const [update, setUpdate] = useState(0);

    const navigate = useNavigate();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(userType, name, email, id, protein) {
        return { userType, name, email, id, protein };
      }
      
      function deleteUser(id){
        deleteFirebaseUser(id);
        let v = update + 1;
        setUpdate((v++)%2);
      }

      function viewUser(id){
        localStorage.setItem("searchID",id);
        navigate("/userInfo");
      }
     
      

        useEffect(() => {
            let temp = [];
            getAllUsers().then((values) => {
                
                values.forEach((value) => {
                  
                  let name = value.firstName + " " + value.lastName;
                  temp.push(createData(value.userType, name, value.email,value.id,1))
                })
                setRows(temp);
                console.log(rows)
              })
          },[update]);



    return ( <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Type</StyledTableCell>
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.userType}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right"><Button variant="contained" onClick = {() => viewUser(row.id)} > View User</Button></StyledTableCell>
                <StyledTableCell align="right"><Button variant="contained" onClick = {() => deleteUser(row.id)} color="error"> Delete User</Button></StyledTableCell>
              </StyledTableRow> 
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
}

export default SeeUsers;
