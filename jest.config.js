/** @type {import('jest').Config} */

module.exports = {
    moduleNameMapper: {
      "^react-dom((\\/.*)?)$": "react-dom-17$1",
      "^react((\\/.*)?)$": "react-17$1",
      "^axios$": require.resolve("axios"),
    },
    transformIgnorePatterns: ["/node_modules/(?!(axios|react)/)"],
    transform: {
      "^.+\\.(js|ts)$": "js-jest",
    },
  };