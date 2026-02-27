module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true
  },
  extends: "eslint:recommended",
  rules: {
    complexity: ["warn", 6],
    "no-magic-numbers": ["warn", { ignore: [0, -1] }],
    "max-depth": ["warn", 3]
  }
};