# prettier-eslint

Ready-to-use configurations for Prettier and Eslint (TS and React)

## Getting Started

1. Install the package as a development dependency in your project:

   ```bash
   npm install --save-dev @spykerel04d/prettier-eslint
   ```

2. Import or extend the desired configuration files into your project's configuration
   files ( e.g., `.prettierrc.js`, `.eslintrc.js`, etc.).

3. Customize the configurations as needed, adding or overriding rules to fit your project
   requirements.

## ESLint

Typescript/Vanilla

```javascript
// .eslintrc.js

/** @type {import("eslint").Config} */
const eslintConfig = require('@spykerel04d/prettier-eslint').eslintConfig

module.exports = eslintConfig
```

React

```javascript
// .eslintrc.js

/** @type {import("eslint").Config} */
const eslintConfig = require('@spykerel04d/prettier-eslint').eslintReactConfig

module.exports = eslintConfig
```

**Required dependencies:**

```bash
npm install --save-dev @trivago/prettier-plugin-sort-imports @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### How can I extend some configuration locally?

If the rule needs to be local to your project, you can extend any configuration by
overriding or merging the exported object with your custom configuration.

Here's an example of merging:

```javascript
const eslintConfig = require('@spykerel04d/prettier-eslint').eslintConfig

// Merging
module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    'your-game': 'your-rules',
  },
}

// Overriding
module.exports = {
  ...eslintConfig,
  rules: {
    'your-game': 'your-rules',
  },
}
```

## Prettier

To use the Prettier configuration:

```javascript
// prettier.config.js

/** @type {import("prettier").Config} */
const prettierConfig = require('@spykerel04d/prettier-eslint').prettierConfig

module.exports = prettierConfig
```

**Required dependencies:**

```bash
npm install --save-dev prettier
```
