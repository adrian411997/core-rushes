import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage
} from "../../../../src/utils/functions/localStorage";

describe("LocalStorage Utilities", () => {
  beforeEach(() => {
    // Limpia el localStorage antes de cada test
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("debería guardar un valor en localStorage usando setLocalStorage", () => {
    const key = "testKey";
    const value = { data: "testValue" };

    setLocalStorage(key, value);

    // Verifica que el item se guarda como un string JSON
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
  });

  it("debería obtener un valor de localStorage usando getLocalStorage", () => {
    const key = "testKey";
    const value = { data: "testValue" };
    localStorage.setItem(key, JSON.stringify(value));

    const result = getLocalStorage(key);

    // Verifica que el valor sea parseado correctamente
    expect(result).toEqual(value);
  });

  it("debería retornar null si no existe el valor en localStorage", () => {
    const key = "nonExistentKey";

    const result = getLocalStorage(key);

    // Verifica que retorna null para claves inexistentes
    expect(result).toBeNull();
  });

  it("debería eliminar un valor de localStorage usando removeLocalStorage", () => {
    const key = "testKey";
    const value = { data: "testValue" };
    localStorage.setItem(key, JSON.stringify(value));

    removeLocalStorage(key);

    // Verifica que el item sea eliminado del localStorage
    expect(localStorage.getItem(key)).toBeNull();
  });
});