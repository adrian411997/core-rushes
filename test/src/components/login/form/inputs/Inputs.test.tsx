import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import { Inputs } from "../../../../../../src/components/login/form/inputs/Inputs";

describe("Inputs", () => {
  it("Should change state when the switch button is clicked", () => {
    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );
    const switchButton = screen.getByTestId("switch-button");
    fireEvent.click(switchButton);
  });
  it("Should navigate to /register when the button is clicked", () => {
    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );
    const registerButton = screen.getByText("Sign up");
    fireEvent.click(registerButton);

    expect(window.location.pathname).toBe("/register")
  });
});
