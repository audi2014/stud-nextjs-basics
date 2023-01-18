// https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit --incremental false',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
  'package.json': () => `pnpm prettier-package-json --write`,
};
