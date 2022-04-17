// Unit test to verify that the ProfileDash component is rendered correctly

import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import ProfileDash from '../Components/ProfileDash';


it("should render ProfileDash component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProfileDash />, div);
  });