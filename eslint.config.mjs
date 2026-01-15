import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
// import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
	// 新增：覆盖规则以允许使用 any 类型
	{
		rules: {
			// 核心：关闭显式 any 的检测（允许 let a: any 写法）
			"@typescript-eslint/no-explicit-any": "off",
			// 可选：如需允许隐式 any（如未指定类型的参数），取消下面注释
			// "@typescript-eslint/no-implicit-any": "off",
		},
	},
	// {
	// 	plugins: {
	// 		"simple-import-sort": simpleImportSort,
	// 	},
	// 	rules: {
	// 		"simple-import-sort/imports": [
	// 			"error",
	// 			{
	// 				groups: [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]],
	// 			},
	// 		],
	// 		"simple-import-sort/exports": "error",
	// 	},
	// },
]);

export default eslintConfig;