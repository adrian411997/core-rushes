module.exports = {
  rootDir: "test",
  coverageDirectory: "../coverage",
  collectCoverage: true,
  testEnvironment: "jsdom",
  verbose: true,
  coverageReporters: ["cobertura", "clover", "json", "lcov", "text"],
  transform: {
    "^.+\\.(j|t)sx?$": ["babel-jest", { configFile: "./babel.config.json" }],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/setupTests.js"],
  preset: "ts-jest",
  /*coverageThreshold: {
    global: {
      branches: 90, // Cobertura mínima para branches
      functions: 90, // Cobertura mínima para funciones
      lines: 90, // Cobertura mínima para líneas
      statements: 90, // Cobertura mínima para declaraciones
    },
  },*/
};
