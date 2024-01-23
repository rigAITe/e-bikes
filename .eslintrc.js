// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

module.exports = {
  // ... other ESLint configuration ...
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  extends: '@react-native',
};
