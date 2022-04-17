// Unit test to verify that the MyProducts component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import MyProducts from '../Components/MyProducts';


it("should render MyProducts component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MyProducts />, div);
  });