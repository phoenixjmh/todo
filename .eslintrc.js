/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],

  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
};
