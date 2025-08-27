// Flat ESLint config for Next.js 15+
import next from 'eslint-config-next';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      // Add custom plugins here if needed
    },
    extends: [
      next, // Next.js recommended config
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      // Adicione regras customizadas aqui se necessário
    },
  },
];
