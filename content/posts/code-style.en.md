---
title: Code style notes
description: Code style notes
toc: true
tags: [Code]
series: []
categories: []
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


## Code format

- [Python style](https://google.github.io/styleguide/pyguide.html)
- [JavaScript style](https://google.github.io/styleguide/jsguide.html)