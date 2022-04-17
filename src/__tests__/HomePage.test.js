// Unit tests to verify that the home page is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import HomePage from '../Pages/HomePage';


it("should render HomePage page", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
  });