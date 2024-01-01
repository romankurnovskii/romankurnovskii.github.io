---
title: Linters & Formatters Setup for Python, Groovy, JavaScript in VSCode
seoTitle: Python, Groovy Linters & Formatters setup in VSCode
description: Setting Up Python and Groovy Linters and Formatters in Visual Studio Code
toc: true
tags: [Python, Groovy, VSCode, Template, Linter, Formatter]
series: []
categories: [Python, Groovy, VSCode]
date: 2023-05-25
lastMod: 2023-05-25
featuredImage: https://picsum.photos/700/225?grayscale
---

## Python

To set up Python with Black and Flake8, you will need a couple of configuration files: `pyproject.toml` for Black, and `.flake8` for Flake8.

**Black** is a code formatter for Python. It reformats your entire file in place according to the Black code style, which is a strict subset of PEP 8. Black makes code review faster by producing the smallest diffs possible.

**Flake8** is a powerful tool that checks your Python code against some of the style conventions in PEP 8. It combines the capabilities of several other tools including:

- PyFlakes: Checks for logical errors.
- pycodestyle: Checks for the format errors.
- Ned Batchelder’s McCabe script: Checks the complexity of your code.

### Step 1: Install Python

```
python --version
```

### Step 2: Install Black and Flake8

```python
pip install black
pip install flake8
```

### Step 3: Install Python Extension for VS Code

Go to the Extensions view in VS Code (View -> Extensions), search for "Python," and then install it.

### Step 4: Configure Black and Flake8

In the `pyproject.toml` file, you have the following settings:

- **line-length**: This is the maximum line length that Black will enforce. You've set it to 130.
**target-version**: This specifies the Python versions your project supports. Black may change the way it formats code depending on the Python version targetted.
- **include** and **exclude**: These options define the files Black should format and exclude from formatting, respectively.

Create a `pyproject.toml` file in your project root directory with the following content for **Black**:

```toml
[tool.black]
line-length = 130
target-version = ['py38']
include = '\.pyi?$'
exclude = '''
/(
    \.git
  | \.venv
  | \.eggs
  | \.hg
  | \.mypy_cache
  | \.nox
  | \.tox
  | \.venv
  | _build
  | buck-out
  | build
  | dist
)/
'''
```

And a `.flake8` file with the following content for **Flake8**:

```toml
[flake8]
max-line-length = 150
ignore = E203, E266, E501, W503, F403, F401
max-complexity = 18
select = B,C,E,F,W,T4,B9
```

- **max-complexity**: This is complexity checker setting. It's a measure of the complexity of your functions, methods, and classes. The lower this number, the less complex your code is allowed to be.

### Step 5: Configure VS Code Settings

Go to the Settings in VS Code (File -> Preferences -> Settings) and search for "**Python Formatting Provider**." Select "**black**" from the dropdown list.

To set Flake8 as the linter, search for "**Python Linting**" in the settings and select "flake8."

Now, VS Code will automatically use **Black** and **Flake8** to format and lint your Python code, respectively.

### Step 6: Format on file save

To run the formatter each time you save a Python file, you'll need to modify the VS Code settings. Here's how:

1. Open the Command Palette with `Ctrl+Shift+P` MacOs(`Cmd+Shift+P`).
1. Type "Preferences: Open Settings (JSON)" and select it.
   1. Choose `Default Settings` or `Workspace Settings` depend on global or project specific setup.
   2. For global "Search for "Editor: Format On Save" in Command Palette search bar and check the box to enable it.
1. Add the following lines in the JSON file for local project/workspace setup:

```json
"python.editor.formatOnSave": true,
"python.formatting.provider": "black"
```

This tells VS Code to run the Python formatter (which you've set to Black) every time you save a Python file.

You can do the same with Flake8 by enabling linting on save:

```json
"python.linting.flake8Enabled": true,
"python.linting.lintOnSave": true
```

## Groovy with CodeNarc

### Step 1: Install Groovy

Ensure you have Groovy installed on your system. You can verify the installation by running the following command in your terminal:

```sh
groovy --version
```

### Step 2: Install the Groovy Extension for VS Code

In your `build.gradle` file, add:

### Step 3: Set Up CodeNarc

```groovy
apply plugin: 'codenarc'

dependencies {
    codenarc 'org.codenarc:CodeNarc:1.6'
}

codenarc {
    configFile = file('config/codenarc/rules.groovy')
}
```

Create a `config/codenarc/rules.groovy` file in your project root directory and add the following content:

```groovy
ruleset {
    LineLength {
        enabled = true
        priority = 1
        maximumLineLength = 150
    }
}
```

Now, when you run your Gradle build, CodeNarc will check your Groovy files against the rules defined in `config/codenarc/rules.groovy`.

## JS/TypeScript with ESLint and Prettier

### Step 1: Install Node.js and npm

Before you install ESLint and Prettier, ensure you have Node.js and npm installed on your system. You can verify the installation by running the following commands in your terminal:

```bash
node --version
npm --version
```

### Step 2: Install ESLint and Prettier

You can install ESLint and Prettier as *devDependencies* in your project by running the following command in your terminal:

```bash
npm install eslint prettier --save-dev
```

### Step 3: Install the ESLint and Prettier Extensions for VS Code

Search for ESLint and Prettier - Code formatter in the Extensions view in VS Code (**View -> Extensions**) and install them.

### Step 4: Configure ESLint and Prettier

To configure ESLint and Prettier, you need to create two configuration files, `.eslintrc.json` for ESLint, and `.prettierrc` for Prettier, in your project root directory.

For example, you can create an `.eslintrc.json` file with the following content for ESLint:

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
```

And a `.prettierrc` file with the following content for Prettier:

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Step 5: Configure VS Code Settings

Go to the Settings in VS Code (**File -> Preferences -> Settings**) and search for "Format On Save." Check the box to enable it.

In the settings, search for "Default Formatter" and select "Prettier - Code formatter" from the dropdown list.

You can also add these settings directly to your `settings.json` file:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  }
}
```

These settings tell VS Code to run Prettier as the default formatter, and also to perform any auto-fixes that ESLint can handle on save.

Now, VS Code will automatically use ESLint and Prettier to lint and format your JavaScript and TypeScript code, respectively.
