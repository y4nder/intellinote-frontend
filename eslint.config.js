import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"no-console": "warn", // Warn on console statements
			// Add more strict rules here as needed
			"no-debugger": "error",
			"no-alert": "error",
			"no-shadow": "error",
			eqeqeq: "error",
			"no-extra-parens": "error",
			"no-return-await": "error",
			"no-throw-literal": "error",
			"no-unused-expressions": "error",
			"no-useless-return": "error",
		},
	}
);
