// Unit tests to verify that the AboutPage is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import AboutPage from '../Pages/AboutPage';


it("should render AboutPage page", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AboutPage />, div);
  });