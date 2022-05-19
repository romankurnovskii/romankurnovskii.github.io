---
title: Mac Setup 2022
description:
toc: true
authors:
  - roman-kurnovskii
tags: ["mac setup development", "mac setup web developer", "mac setup javascript"]
categories:
series:
date: "2022-05-18"
lastmod: "2022-05-18"
featuredImage:
draft: false
---
# MacBook Pro Specification

* 13-inch
* Apple M1 Pro M1 2020
* 16 GB RAM
* 512 GB SSD
* QWERTY = English/Hebrew
* macOS Monterey

# Homebrew

Install [Homebrew](https://brew.sh) as package manager for macOS:

```bash
# paste in terminal and follow the instructions
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Update everything in Homebrew to recent version:

```bash
brew update
```

Install GUI applications (read more about these in GUI Applications):

```bash
brew install --cask \
  google-chrome  \
  firefox \
  tor \
  visual-studio-code \
  all-in-one-messenger \
  sublime-text \
  docker \
  rectangle \
  discord \
  vlc \
  figma \
  grammarly \
  macx-youtube-downloader \ 
  notion \
  postman \
  tor-browser \
  transmission \
  utm \
  viber \
  yandex-disk \
  zoom \
  mongodb-compass
```

Install terminal applications (read more about these in Terminal Applications):

```bash
brew install \
  git \
  ffmpeg \
  nvm \

```

[inspiration](https://www.robinwieruch.de/mac-setup-web-development/)