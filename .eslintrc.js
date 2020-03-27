module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["jest"],
  rules: {
    "import/extensions": [
      "error",
    ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"]
      }
    }
  }
};
