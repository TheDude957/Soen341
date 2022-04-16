// Unit test to verify that the EditProfile component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import EditProfile from '../Components/EditProfile';


it("should render EditProfile component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EditProfile />, div);
  });