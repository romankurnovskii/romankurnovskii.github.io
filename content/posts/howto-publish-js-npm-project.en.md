---
title: How to publish JavaScript package to npm registry
seoTitle: How to publish JavaScript package to npm registry
description: A detailed guide on how to create, structure, and publish a JavaScript package to the npm registry
toc: true
tags: [javascript, npm]
series: []
categories: [programming]
date: 2023-05-06
lastmod: 2023-05-06
featuredImage: https://picsum.photos/700/221
authors: [roman-kurnovskii]
---


In this post, we'll dive deeper into the process of creating, structuring, and publishing a JavaScript package to the npm registry. We'll use the repository https://github.com/romankurnovskii/npm-js-package-template as a reference for this guide.

## TLDR

1. Open template: https://github.com/romankurnovskii/npm-js-package-template
2. Click `Use this template`
3. Create repo from this template.
4. git clone new repo
5. update code `src/index.ts`, `src/bin.ts`

How to check if `bin` script works from terminal:

```sh
npm link && npm link mypackage
mypackage
```

**Publish:**

```sh
npm run prepublishOnly
npm publish
```

## Folder Structure

Let's go through the folder structure of the repository:

```
.eslintignore
.eslintrc.json
.gitattributes
.gitignore
.npmrc
.prettierrc
├── .github
│   ├── dependabot.yml
│   └── workflows
│       ├── create-release.yml
│       └── test-environments.yml
├── CHANGELOG.md
├── LICENSE
├── README.md
├── jestconfig.json
├── package.json
├── src
|  ├── bin.js
|  └── index.js
└── tests
   └── index.test.js
```

### File Descriptions

- `.github/dependabot.yml`: This [file](https://github.com/romankurnovskii/npm-js-package-template/blob/main/.github/dependabot.yml) configures Dependabot for your project. Dependabot will automatically create pull requests to update your npm dependencies and GitHub Actions workflows as specified in the file.
- `.github/workflows/create-release.yml`: This GitHub Actions workflow is triggered when you push to the main branch or create a release. It builds, tests, and releases your package. The workflow is configured to create a release with the version specified in `package.json`.
- `.github/workflows/test-environments.yml`: This GitHub Actions workflow is triggered when you push to the main branch or create a pull request. It sets up a matrix of Node.js versions (14, 16, 18) and runs the build and test steps for each version. This ensures your package works correctly across different Node.js environments.
- `.eslintignore`: Specifies the files and directories that should be ignored by ESLint.
- `.eslintrc.json`: Configuration file for ESLint, a popular linting tool for JavaScript.
- `.gitattributes`: Specifies the attributes for paths in the repository.
- `.gitignore`: Specifies the files and directories that should be ignored by Git.
- `.npmrc`: Configuration file for npm, the package manager for JavaScript.
- `.prettierrc`: Configuration file for Prettier, a popular code formatter for JavaScript.
- `CHANGELOG.md`: A file that lists the notable changes made to the project.
- `LICENSE`: The license file for the project, in this case, the MIT License.
- `README.md`: The main documentation file for the project.
- `jestconfig.json`: Configuration file for Jest, a popular testing framework for JavaScript.
- `package.json`: Lists the project's metadata, dependencies, and scripts.
- `src/bin.js`: The main entry point for the command line interface (CLI) of the package.
- `src/index.js`: The main entry point for the package when imported as a module.
- `tests/index.test.js`: The test file for the package, containing test cases for the package's functions.

## Publish to NPM

Before you publish the package, make sure you have followed these steps:

1. Update the `package.json` file with the correct name, version, description, and other metadata.
1. Ensure your code is in the src folder, and the main entry points are `src/index.js` (for modules) and `src/bin.js` (for CLI).
1. Update the test cases in the `tests` folder.


1. After making all the necessary updates to your package, such as updating the README.md, package.json, and other files as needed, ensure that you've built the package by running:

```sh
npm run build
```

2. Before publishing, you should test your package and ensure that all tests pass:
```sh
npm test
```

3. Also, make sure your code is properly formatted and follows the linting rules:

```sh
npm run prettier
npm run lint
```
4. If there are any linting issues, you can try to automatically fix them using:

```sh
npm run lint:fix
```

5. Once everything is set up and ready, you can publish your package to the npm registry by running:

```sh
npm run prepublishOnly
npm publish
```

6. This will build, test, and format your code, ensuring that your package is ready for publishing. Once published, your package will be available for others to install and use through the npm registry.
