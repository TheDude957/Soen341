// Unit tests to verify that the CartProduct component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import CartProduct from '../Components/CartProduct';


it("should render CartProduct component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CartProduct />, div);
  });