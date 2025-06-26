import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      js,
      prettier: pluginPrettier,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      '@typescript-eslint': tseslint.plugin,
      next: pluginNext,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // 타입스크립트 전용 룰 설정
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn',
        { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js에서는 필요 없음
      'react/prop-types': 'off', // TypeScript를 쓰므로 불필요
    },
  },
]);
