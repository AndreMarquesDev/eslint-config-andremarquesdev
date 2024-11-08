# eslint-config-andremarquesdev

[![npm](https://img.shields.io/npm/v/eslint-config-andremarquesdev)](https://www.npmjs.com/package/eslint-config-andremarquesdev)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/eslint-config-andremarquesdev)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-config-andremarquesdev/peer/eslint)](https://eslint.org/)
[![GitHub license](https://img.shields.io/github/license/AndreMarquesDev/eslint-config-andremarquesdev)](https://github.com/AndreMarquesDev/eslint-config-andremarquesdev/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/AndreMarquesDev/eslint-config-andremarquesdev)](https://github.com/AndreMarquesDev/eslint-config-andremarquesdev)

ESLint config used by [AndreMarquesDev](https://github.com/AndreMarquesDev)

## Supports

<a href="https://eslint.org/" target="_blank">![ESLint Badge](https://img.shields.io/badge/ESLint_V8-4B3263?style=for-the-badge&logo=eslint&logoColor=white)</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)</a>
<a href="https://www.typescriptlang.org/" target="_blank">![Typescript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)</a>
<a href="https://reactjs.org" target="_blank">![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)</a>
<a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">![React Hooks Badge](https://img.shields.io/badge/React_Hooks-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)</a>
<a href="https://prettier.io/" target="_blank">![Prettier Badge](https://img.shields.io/badge/Prettier-1B2B34?style=for-the-badge&logo=prettier&logoColor=61DAFB)</a>
<a href="https://jestjs.io/" target="_blank">![Jest Badge](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)</a>
<a href="https://testing-library.com/" target="_blank">![Testing Library Badge](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)</a>

## How to use

1. Install the package:

```sh
npm install --dev eslint-config-andremarquesdev
```

or

```sh
yarn add --dev eslint-config-andremarquesdev
```

2. Create a `.eslintrc.js` file in the root of your project's directory (it should live where package.json does). It should look like this:

```sh
module.exports = {
    extends: [
        'andremarquesdev',
    ],
};
```

3. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint . --ext .js,.ts,.tsx",
  "lint:fix": "eslint . --ext .js,.ts,.tsx --fix"
},
```

## How to publish to npm

1. Manually increment the `version` field in [package.json](package.json);
2. Commit the changes, including the [package.json](package.json) change mentioned in the previous step;
3. Create a new git tag with `git tag <version>`;
4. Push the commit as usual;
5. Push the new tag with `git push origin --tags`;
6. Run `yarn npm publish`.

### Author

André Marques  
[Website](https://andremarquesdev.com)  
[GitHub](https://github.com/AndreMarquesDev)  
[CodePen](https://codepen.io/AndreMarquesDev)  
[Twitter](https://twitter.com/axxyJS)  

### License

MIT
