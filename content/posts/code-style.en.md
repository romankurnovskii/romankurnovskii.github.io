---
title: Code style notes
description: Code style notes
toc: true
tags: [code, git, style]
series: []
categories: [git]
date: 2022-12-21
featuredImage: https://picsum.photos/700/230?grayscale
---

## Release notes example

**Changed**

- feat(exports): export mergeConfig #5151

**Fixed**

- fix(CancelledError): include config #4922
- fix(general): removing multiple/trailing/leading whitespace #5022
- fix(headers): decompression for responses without Content-Length header #5306
- fix(webWorker): exception to sending form data in web worker #5139

**Refactors**

- refactor(types): AxiosProgressEvent.event type to any #5308
- refactor(types): add missing types for static AxiosError.from method #4956

**Chores**

- chore(docs): remove README link to non-existent upgrade guide #5307
- chore(docs): typo in issue template name #5159

**Common used**

- `build`: Changes that affect the build system or external dependencies (e.g., updates to package.json, pom.xml, build.gradle, Dockerfile, etc.)
- `chore`: Regular maintenance tasks and changes that don't modify the source code or the test suite (e.g., updating build tasks, package manager config, etc.)
- `ci`: Changes to Continuous Integration configuration files and scripts (e.g., changes in Jenkinsfile, Travis CI configuration, CircleCI, etc.)
- `docs`: Changes only affecting documentation (e.g., changes in README, API docs, comment blocks, etc.)
- `feat`: Introducing a new feature to your application.
- `fix`: A bug fix in your application code.
- `perf`: Performance improvements to your code (e.g., optimizing algorithms, improving efficiency, etc.)
- `refactor`: Changes in the code that neither fix a bug nor add a feature; typically, these changes improve code readability or structure.
- `revert`: If you are reverting a previous commit.
- `style`: Changes to the coding style (e.g., changes in whitespace, formatting, missing semi-colons, etc.) that do not affect the meaning of the code.
- `test`: Adding or updating tests, covering new or existing functionality.

## Code format

- Detailed description in [git commits style](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Python style](https://google.github.io/styleguide/pyguide.html)
- [JavaScript style](https://google.github.io/styleguide/jsguide.html)
