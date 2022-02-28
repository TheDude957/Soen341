import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import "../CSS/ProductSearch.css";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function ProductSearch(props) {

  const onsubmitted = (event) => {
    event.preventDefault();
    props.getValue(event.target.value);

  }

  return (
    <div className="main">
        <form >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
      >
        <InputBase
        onChange = {onsubmitted}
          sx={{ ml: 1, flex: 1 }}
          name = "search-item"
          placeholder="Search Products"
          inputProps={{ "aria-label": "search " }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      </form>
    </div>
  );

  // <Paper
  //     elevation={5}
  //     style={{  width: 500, margin: "30px auto" }}
  //   >
  //       <div className ="main">
  //   <div className="search">
  //     <TextField
  //       id="outlined-basic"
  //       variant="outlined"
  //       fullWidth
  //       label="Search"
  //     />
  //   </div>
  //   </div>

  //   </Paper>
}

export default ProductSearch;
