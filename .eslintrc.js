module.exports = {
  env: {
    node: true,
    es2021: true,
    commonjs: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import"],
  rules: {
    "import/no-unresolved": "off",
    "linebreak-style": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": 0,
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-underscore-dangle": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: ["src/__generated__/*", ".github/workflows/*"],
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
}
