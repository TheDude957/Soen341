// Unit test to verify that the Footer component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import Footer from '../Components/Footer';


it("should render Footer component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
  });