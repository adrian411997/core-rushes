import { loginInService, loginOutService } from "../../../src/services/Login";
import { postRequest } from "../../../src/utils/functions/axios";
import {
  URL_BACKEND,
  URL_BACKEND_LOGIN_SIGN_IN,
  URL_BACKEND_LOGIN_SIGN_OUT,
} from "../../../src/common/Endpoints";

jest.mock("../../../src/utils/functions/axios", () => ({
  postRequest: jest.fn(),
}));

describe("loginService", () => {
  it("debería llamar a postRequest con las credenciales correctas en loginInService", () => {
    const mockData = { username: "testUser", password: "testPass" };
    const mockResponse = { token: "fakeToken" };

    // Simula el resultado de postRequest
    (postRequest as jest.Mock).mockResolvedValue(mockResponse);

    const result = loginInService(mockData);

    // Asegúrate de que postRequest sea llamado con los parámetros correctos
    expect(postRequest).toHaveBeenCalledWith(
      `${URL_BACKEND}${URL_BACKEND_LOGIN_SIGN_IN}`,
      mockData
    );

    // Verifica que el resultado sea el esperado
    return expect(result).resolves.toEqual(mockResponse);
  });

  it("debería llamar a postRequest con las credenciales correctas en loginOutService", () => {
    const mockData = { username: "testUser", password: "testPass" };
    const mockResponse = { success: true };

    // Simula el resultado de postRequest
    (postRequest as jest.Mock).mockResolvedValue(mockResponse);

    const result = loginOutService(mockData);

    // Asegúrate de que postRequest sea llamado con los parámetros correctos
    expect(postRequest).toHaveBeenCalledWith(
      `${URL_BACKEND}${URL_BACKEND_LOGIN_SIGN_OUT}`,
      mockData
    );

    // Verifica que el resultado sea el esperado
    return expect(result).resolves.toEqual(mockResponse);
  });
});
