module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  env: {
    es6: true,
    browser: false,
    node: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": [
      2,
      {
        allow: ["warn", "error"],
      },
    ],
  },
};