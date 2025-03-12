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
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  preset: "ts-jest", // Alternativa si usas ts-jest.
};
