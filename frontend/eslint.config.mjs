import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
      "next/core-web-vitals", // Next.js-specific rules
      "next/typescript", // TypeScript support
      "plugin:react/recommended", // React-specific linting
      "plugin:react-hooks/recommended", // React Hooks rules
      "plugin:jsx-a11y/recommended", // Accessibility rules
      "plugin:prettier/recommended" // Integrates Prettier with ESLint
  ),
  {
    rules: {
      // Code Style
      quotes: ["error", "double"], // Enforce double quotes
      indent: ["error", 4], // Enforce 4 spaces for indentation
      "no-unused-vars": ["warn"], // Warn about unused variables
      semi: ["error", "always"], // Enforce semicolons (optional)

      // Tailwind CSS Linting
      "tailwindcss/no-custom-classname": "off", // Disable custom classname warnings for flexibility

      // Import Order
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always", // Add newlines between import groups
        },
      ],
    },
    plugins: [
      "react", // React rules
      "react-hooks", // React Hooks rules
      "jsx-a11y", // Accessibility rules
      "tailwindcss", // TailwindCSS linting
      "import", // Import/export rules
      "prettier", // Prettier integration
    ],
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
      tailwindcss: {
        whitelist: [], // Add custom TailwindCSS classnames if needed
      },
    },
    env: {
      browser: true,
      es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
];
