import nextPlugin from "@next/eslint-plugin-next"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tailwindcss from "eslint-plugin-tailwindcss"

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      tailwindcss: tailwindcss,
      "@next/next": nextPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
      "react-hooks/exhaustive-deps": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    settings: {
      tailwindcss: {
        // Add any Tailwind CSS specific settings here
      },
    },
    ignores: ["node_modules", "dist", "*.esm.js"],
  },
  // Add configurations from other plugins
  ...nextPlugin.configs["core-web-vitals"],
  // You may need to add other configurations here
]
