// Unit test to verify that the ProductSearch component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import ProductSearch from '../Components/ProductSearch';


it("should render ProductSearch component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProductSearch />, div);
  });