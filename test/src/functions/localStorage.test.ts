import {
  getLocalStorage,
  removeLocalStorage,
} from "../../../src/utils/functions/localStorage";

describe("LocalStorage Utilities", () => {
  beforeEach(() => {
    // Limpiar el localStorage antes de cada test
    localStorage.clear();
  });

  describe("getLocalStorage", () => {
    it("should return parsed data if the key exists in localStorage", () => {
      const key = "testKey";
      const value = { name: "Adrian", role: "developer" };

      localStorage.setItem(key, JSON.stringify(value));

      const result = getLocalStorage(key);
      expect(result).toEqual(value);
    });

    it("should return null if the key does not exist in localStorage", () => {
      const result = getLocalStorage("nonExistentKey");
      expect(result).toBeNull();
    });
  });

  describe("removeLocalStorage", () => {
    it("should remove the item from localStorage if the key exists", () => {
      const key = "testKey";
      const value = "testValue";

      localStorage.setItem(key, value);

      removeLocalStorage(key);
      const result = localStorage.getItem(key);
      expect(result).toBeNull();
    });

    it("should do nothing if the key does not exist", () => {
      // No hay errores o cambios si la clave no existe
      removeLocalStorage("nonExistentKey");
      expect(localStorage.getItem("nonExistentKey")).toBeNull();
    });
  });
});
