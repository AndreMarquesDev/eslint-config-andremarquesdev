# eslint-config-andremarquesdev

[![npm](https://img.shields.io/npm/v/eslint-config-andremarquesdev)](https://www.npmjs.com/package/eslint-config-andremarquesdev)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/eslint-config-andremarquesdev)
[![David](https://img.shields.io/david/AndreMarquesDev/eslint-config-andremarquesdev)](https://www.npmjs.com/package/eslint-config-andremarquesdev)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-config-andremarquesdev/peer/eslint)](https://eslint.org/)
[![GitHub license](https://img.shields.io/github/license/AndreMarquesDev/eslint-config-andremarquesdev)](https://github.com/AndreMarquesDev/eslint-config-andremarquesdev/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/AndreMarquesDev/eslint-config-andremarquesdev)](https://github.com/AndreMarquesDev/eslint-config-andremarquesdev)

ESLint config used by [AndreMarquesDev](https://github.com/AndreMarquesDev)

## Supports

* JavaScript
* TypeScript
* React
* React Hooks

## How to use

1. Install the package:

```js
npm install --dev eslint-config-andremarquesdev
```

or

```js
yarn add --dev eslint-config-andremarquesdev
```

2. Create a `.eslintrc.js` file in the root of your project's directory (it should live where package.json does). It should look like this:

```js
module.exports = {
    extends: [
        'andremarquesdev',
    ],
};
```

3. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "tsc --noEmit && eslint . --ext .js,.ts,.tsx",
  "lint:fix": "tsc --noEmit && eslint . --ext .js,.ts,.tsx --fix"
},
```
