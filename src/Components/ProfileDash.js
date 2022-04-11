import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "../CSS/ProfilePage.css";
import { GetCurrentUserInformation } from "../firebaseService"
import { useState , useEffect } from 'react';
 
function ProfileDash(props) {
    const [userInfo, setUserInfo] = useState({});


    // On each page load, component fetches user information
    useEffect(() => {
        GetCurrentUserInformation().then((user) =>{
          setUserInfo(user);
          
          }
        );
      },[]);

      // styling for table
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


      function createData(attribute, data) {
        return { attribute, data };
      }
      
      // setting user data for each row of table
      const rows = [
        createData('First Name', userInfo.firstName),
        createData('Last Name', userInfo.lastName),
        createData('Email', userInfo.email),
        createData('userType', userInfo.userType),
      ];
    

  return (
  <>
  <Paper className = "space-me"/>
  <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Attribute</StyledTableCell>
            <StyledTableCell align="center">Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.attribute}>
              <StyledTableCell component="th" scope="row">
                {row.attribute}
              </StyledTableCell>
              <StyledTableCell align="center">{row.data}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}

export default ProfileDash;
