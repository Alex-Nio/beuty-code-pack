# ESLint Setup

This project uses ESLint for code linting. Below are the commands to run ESLint with a `.eslintrc.cjs` configuration file.

## Commands

### Install ESLint

First, make sure you have ESLint installed in your project. Run the following command to install ESLint as a development dependency:

```bash
npm install eslint --save-dev
```

### Lint Files

To lint your JavaScript files using the `.eslintrc.cjs` configuration file, run:

```bash
npx eslint -c .eslintrc.cjs "path_to_your_files/*.js"
```

#### Example:

To lint all JavaScript files in the `src` directory, run:

```bash
npx eslint -c .eslintrc.cjs "src/**/*.js"
```

### Automatic Configuration Detection

You can also run ESLint without specifying the configuration file. ESLint will automatically detect and use the `.eslintrc.cjs` file if it is present in your project root:

```bash
npx eslint "src/**/*.js"
```

## Additional Information

For more information about configuring and using ESLint, please refer to the [ESLint documentation](https://eslint.org/docs/user-guide/getting-started).

