// Unit tests to verify that the AddItem component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import AddItem from '../Components/AddItem';


it("should render AddItem component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddItem />, div);
  });