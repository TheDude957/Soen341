// Unit tests to verify that the puchase page is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import PurchasePage from '../Pages/PurchasePage';


it("should render PurchasePage page", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PurchasePage />, div);
  });