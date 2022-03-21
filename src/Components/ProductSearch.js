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
/**
 * Search bar to search items in the store
 */
function ProductSearch(props) {
  const onsubmitted = (event) => {
    event.preventDefault();
    props.getValue(event.target.value);
  };

  return (
    <div className="main">
      <form>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <InputBase
            onChange={onsubmitted}
            sx={{ ml: 1, flex: 1 }}
            name="search-item"
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
}

export default ProductSearch;
