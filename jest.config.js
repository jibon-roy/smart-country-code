module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  testMatch: ["**/src/**/*.test.ts", "**/src/**/*.test.js"], 
  globals: {
    "ts-jest": {
      isolatedModules: true, 
    },
  },
};
