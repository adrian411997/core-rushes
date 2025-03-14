import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../../../../src/components/login/Login";

describe("Login", () => {
  it("Login Page should be rendered", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });
});
