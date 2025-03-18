import axios from "axios";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../../../../src/utils/functions/axios";

jest.mock("axios");

describe("HTTP Request Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debería realizar una solicitud GET con los parámetros correctos", async () => {
    const mockData = { data: "mockResponse" };
    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await getRequest("https://example.com/api", {
      key: "value",
    });

    expect(axios.get).toHaveBeenCalledWith("https://example.com/api", {
      params: { key: "value" },
    });
    expect(result).toEqual(mockData);
  });

  it("debería realizar una solicitud POST con los datos correctos", async () => {
    const mockData = { success: true };
    (axios.post as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await postRequest("https://example.com/api", {
      name: "test",
    });

    expect(axios.post).toHaveBeenCalledWith("https://example.com/api", {
      name: "test",
    });
    expect(result).toEqual(mockData);
  });

  it("debería realizar una solicitud PUT con los datos correctos", async () => {
    const mockData = { updated: true };
    (axios.put as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await putRequest("https://example.com/api", {
      id: 1,
      value: "newValue",
    });

    expect(axios.put).toHaveBeenCalledWith("https://example.com/api", {
      id: 1,
      value: "newValue",
    });
    expect(result).toEqual(mockData);
  });

  it("debería realizar una solicitud DELETE con los datos correctos", async () => {
    const mockData = { deleted: true };
    (axios.delete as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await deleteRequest("https://example.com/api", { id: 1 });

    expect(axios.delete).toHaveBeenCalledWith("https://example.com/api", {
      data: { id: 1 },
    });
    expect(result).toEqual(mockData);
  });

  it("debería manejar errores de solicitud correctamente", async () => {
    const mockError = new Error("Request failed");
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getRequest("https://example.com/api")).rejects.toThrow(
      "Request failed"
    );
    expect(axios.get).toHaveBeenCalledWith("https://example.com/api", {
      params: undefined,
    });
  });
});
