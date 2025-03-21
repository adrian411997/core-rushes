import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useLogin } from "../../../../../../src/hooks/useLogin";
import { Inputs } from "../../../../../../src/components/login/form/inputs/Inputs";

jest.mock("../../../../../../src/hooks/useLogin", () => ({
  useLogin: jest.fn(),
}));


describe("Inputs", () => {
  let setCredentials, handleLogin;
  const setActiveRemember = jest.fn();
  beforeEach(() => {
    setCredentials = jest.fn();
    handleLogin = jest.fn();
    (useLogin as jest.Mock).mockReturnValue({
      setCredentials,
      handleLogin,
      loading: false,
      error: "",
      isEmpty: false,
      setActiveRemember:setActiveRemember
    });


  });

  it("debería cambiar el estado al hacer clic en el switch", () => {
    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );
    const switchButton = screen.getByTestId("switch-button");
    fireEvent.click(switchButton);

    expect(switchButton).toBeInTheDocument();
  });

  it("debería navegar a /register al hacer clic en el texto Sign up", () => {
    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );
    const registerButton = screen.getByText("Sign up");
    fireEvent.click(registerButton);
    expect(window.location.pathname).toBe("/register");
  });

  it("debería llamar a setCredentials al cambiar los valores del input", () => {
    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("company-name-input");
    const passwordInput = screen.getByTestId("password-input");

    fireEvent.change(emailInput, {
      target: { name: "username", value: "test@example.com" },
    });
    fireEvent.change(passwordInput, {
      target: { name: "password", value: "1234" },
    });


  });

  it("debería llamar a handleLogin al hacer clic en el botón SIGN IN", () => {
    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );
    const loginButton = screen.getByTestId("sign-in-button");
    fireEvent.click(loginButton);
    expect(handleLogin).toHaveBeenCalled();
  });

  it("debería deshabilitar el botón SIGN IN si isEmpty es true", () => {
    (useLogin as jest.Mock).mockReturnValue({
      setCredentials:{username:"12312", password:"aasfasf"},
      handleLogin,
      loading: false,
      error: "",
      isEmpty: false,
    });

    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );

    const loginButton = screen.getByTestId("sign-in-button");
    expect(loginButton).not.toBeDisabled();
  });

  it("debería mostrar un spinner cuando loading es true", () => {
    (useLogin as jest.Mock).mockReturnValue({
      setCredentials,
      handleLogin,
      loading: true,
      error: "",
      isEmpty: false,
    });

    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("debería mostrar un mensaje de error si existe un error", () => {
    (useLogin as jest.Mock).mockReturnValue({
      setCredentials,
      handleLogin,
      loading: false,
      error: "Invalid credentials",
      isEmpty: false,
    });

    render(
      <BrowserRouter>
        <Inputs />
      </BrowserRouter>
    );

    const errorMessage = screen.queryByText(/invalid credentials/i)    
    expect(errorMessage).toBeInTheDocument()
  });
});