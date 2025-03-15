import { render } from "@testing-library/react";
import { useAccess } from "../../../src/hooks/useAccess";
import { BrowserRouter } from "react-router-dom";
import React from "react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("useAccess hook", () => {
  const mockNavigate = jest.fn();

  beforeAll(() => {
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada test
  });

  const TestComponent = () => {
    useAccess();
    return null;
  };

  it("should navigate to /login if auth is not in localStorage", () => {
    localStorage.clear(); // Asegura que no hay datos en localStorage

    render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("should not navigate if auth is present in localStorage", () => {
    localStorage.setItem("auth", JSON.stringify("validToken"));

    render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>
    );

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});