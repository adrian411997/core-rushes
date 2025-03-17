import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useLogin } from "../../../src/hooks/useLogin";
import { loginInService } from "../../../src/services/Login";
import { getLocalStorage } from "../../../src/utils/functions/localStorage";
import { useNavigate } from "react-router-dom";

jest.mock("../../../src/services/Login", () => ({
  loginInService: jest.fn(),
}));

jest.mock("../../../src/utils/functions/localStorage", () => ({
  setLocalStorage: jest.fn(),
  getLocalStorage:jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Componente de prueba
const TestComponent = () => {
  const { setCredentials, handleLogin, loading, error,isEmpty, setActiveRemember} = useLogin();

  return (
    <div>
      <button disabled={isEmpty }  data-testid="login-button" onClick={handleLogin}>
        Login
      </button>
      <button data-testid="remember-button" onClick={()=>setActiveRemember(true)}>Remember</button>
      <input
        data-testid="username-input"
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      <input
        data-testid="password-input"
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      {loading && <span data-testid="loading-indicator">Loading...</span>}
      {error && <span data-testid="error-message">{error}</span>}
    </div>
  );
};

describe("useLogin Hook (con componente de prueba)", () => {
  let navigateMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  it("debería manejar correctamente el inicio de sesión exitoso", async () => {
    (loginInService as jest.Mock).mockResolvedValue("mockCorporationId");

    render(<TestComponent />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "testPass" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

    expect(loginInService).toHaveBeenCalledWith({
      username: "testUser",
      password: "testPass",
    });
  });

  it("debería manejar errores de inicio de sesión", async () => {
    (loginInService as jest.Mock).mockRejectedValue(new Error("Network error"));

    render(<TestComponent />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "testPass" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

  });

  it("debería mostrar el indicador de carga mientras realiza el login", async () => {
    (loginInService as jest.Mock).mockResolvedValue("mockCorporationId");

    render(<TestComponent />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "testPass" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

  });
  it("should save setLocalStorage when remember button is clicked and login", async () => {
    (loginInService as jest.Mock).mockResolvedValue("mockCorporationId");

    render(<TestComponent />);

    fireEvent.click(screen.getByTestId("remember-button"));
    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "testPass" },
    });

    fireEvent.click(screen.getByTestId("login-button"));
    const credentials = getLocalStorage("credentials")

    expect(credentials).not.toBeNull();
  });
});
