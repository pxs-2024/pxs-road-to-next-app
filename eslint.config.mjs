// eslint.config.mjs
import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
// // 1. 启用导入排序插件（先确保已安装：npm install eslint-plugin-simple-import-sort --save-dev）
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// 2. 补充 ESLint 核心规则（包含大量可自动修复的格式规则）
import js from "@eslint/js";

const eslintConfig = defineConfig([
  // 基础 JS 规则（开启可自动修复的格式规则）
  js.configs.recommended,
  // Next.js 核心规则
  ...nextVitals,
  ...nextTs,
  {
    // 3. 配置忽略文件（修正 globalIgnores 使用方式）
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**", // 补充忽略 node_modules
    ],
    // 4. 指定生效的文件范围
    files: ["**/*.{js,jsx,ts,tsx}"],
    // 5. 注册插件
    // plugins: {
    //   "simple-import-sort": simpleImportSort,
    // },
    // 6. 开启可自动修复的规则（核心：这些规则支持 --fix）
    rules: {
      // ========== ESLint 核心可修复规则 ==========
      "semi": ["error", "always", { "omitLastInOneLineBlock": true }], // 自动补充分号
      "quotes": ["error", "single", { "avoidEscape": true }], // 自动转为单引号
      "indent": ["error", 2, { "SwitchCase": 1 }], // 自动调整缩进为2个空格
      "no-trailing-spaces": ["error"], // 自动删除行尾空格
      "comma-dangle": ["error", "always-multiline"], // 多行自动加尾逗号
      "space-before-function-paren": ["error", "never"], // 函数括号前无空格（自动修复）
      "object-curly-spacing": ["error", "always"], // 对象大括号内加空格（自动修复）
      "array-bracket-spacing": ["error", "never"], // 数组括号内无空格（自动修复）
      
      // // ========== 导入排序可修复规则 ==========
      // "simple-import-sort/imports": [
      //   "error",
      //   {
      //     groups: [
      //       // 排序规则：先内置模块 → 第三方模块 → 本地模块 → 相对路径
      //       ["^node:", "^@?\\w"], // Node.js 内置模块 + 第三方模块（如 react、next）
      //       ["^@/"], // 项目别名导入（如 @/components）
      //       ["^\\./", "^\\../"], // 相对路径导入
      //     ],
      //   },
      // ],
      // "simple-import-sort/exports": "error", // 导出排序（自动修复）
      // "import/first": "error", // 导入必须在顶部（自动修复）
      // "import/newline-after-import": ["error", { "count": 1 }], // 导入后空一行（自动修复）
      
      // ========== Next.js 规则优化（可选） ==========
      "@next/next/no-img-element": "off", // 允许使用 img 标签（如需自动修复可调整）
    },
  },
]);

export default eslintConfig;