---
title: Mac Setup 2022
description: How I set up my M1 MacBook Pro software development...
toc: true
tags: [mac, mac setup web developer, mac setup javascript]
categories: [OS, MacOS]
date: 2022-05-18
featuredImage: img/featured.jpg
authors: []
aliases:
    - /ru/posts/mac-setup-development
---

## MacBook Pro Specification

- 13-inch
- Apple M1 Pro M1 2020
- 16 GB RAM
- 512 GB SSD
- QWERTY = English/Hebrew
- macOS Monterey (Update always)

![](img/mac-monitors.png)

## Homebrew

Install [Homebrew](https://brew.sh) as package manager for macOS:

```bash
## paste in terminal and follow the instructions
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Update everything in Homebrew to recent version:

```bash
brew update
```

Add additional [source for casks](https://github.com/Homebrew/homebrew-cask-versions):

```bash
brew tap homebrew/cask-versions
```

Install GUI applications (read more about these in GUI Applications):

```bash
brew install --cask \
  appcleaner \
  all-in-one-messenger \
  anaconda \
  brewmate \
  deepl \
  discord \
  disk-inventory-x \
  docker \
  figma \
  google-chrome  \
  google-drive \
  grammarly \
  iterm2 \
  itsycal \
  macx-youtube-downloader \
  mongodb-compass \
  notion \
  obs \
  postman \
  rectangle \
  sublime-text \
  syncthing \
  telegram \
  tor-browser \
  transmission \
  utm \
  viber \
  visual-studio-code \
  vlc \
  yandex-disk \
  zoom
```

Install terminal applications (read more about these in Terminal Applications):

```bash
brew install \
  git \
  jupyterlab \
  ffmpeg \
  nvm
```

## Additional GUI Applications

## GUI Applications

### Google Chrome

[Google Chrome](https://www.google.com/chrome/) (web development, web browsing)

- Preferences
  - set default browser
  - always show bookmarks
  - import bookmarks from previous machine
- Chrome Developer Tools
  - Network -> only "Fetch/XHR"
- Search Shortcuts. Add Shortucts for different search engines.
  - chrome://settings/searchEngines
  - Yandex, search only in Russia.
    - Shortcut: `vv`
    - url: `https://yandex.ru/{yandex:searchPath}?text=%s&{yandex:referralID}&lr=101443&rstr=-225`
  - Youtube
    - Shortcut: `yy`
    - url: `https://www.youtube.com/results?search_query=%s&page={startPage?}&utm_source=opensearch`

- Chrome Extensions
  - [ChatGPT for Search Engines](https://chrome.google.com/webstore/detail/chatgpt-for-search-engine/feeonheemodpkdckaljcjogdncpiiban) - Show ChatGPT output on every search request
  - [DeepL Translate](https://chrome.google.com/webstore/detail/deepl-translate-beta-vers/cofdbpoegempjloogbagkncekinflcnj/related?hl=en) - AI translator
  - [DoubleSubs](https://chrome.google.com/webstore/detail/doublesubs/cfmeoknomhdgcbcmgmpbbjiggfboniie)  - dual subs on youtube/netflix + web translator
  - [Google Translate](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [Pocket](https://chrome.google.com/webstore/detail/save-to-pocket/niloccemoadcdkdjlinkgdfekeahmflj) - The easiest, fastest way to capture articles, videos, and more.
  - [Session Buddy](https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko) (Manage Browser Tabs and Bookmarks)
  - [LanguageTool](https://chrome.google.com/webstore/detail/grammar-spell-checker-%E2%80%94-l/oldceeleldhonbafppcapldpdifcinji) (multilingual grammar, style, and spell checker)
  - [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp) (Easy to subscribe/unsubscribe to blogs/no need email + iOS/Android)
  - [Inoreader](https://inoreader.com) (Easy to subscribe/unsubscribe to blogs/no need email + iOS/Android)
  - [30 Seconds of Knowledge](https://chrome.google.com/webstore/search/https%3A%2F%2F30secondsofknowledge.com%2F) (random code snippet on a new tab)
  - [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
  - [picture-in-picture](https://chrome.google.com/webstore/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg) (youtube/video above other screens)
  - [Visual CSS Editor](https://chrome.google.com/webstore/detail/visual-css-editor/cibffnhhlfippmhdmdkcfecncoaegdkh) (Customize any website visually)
  - [Squish](chrome://extensions/?id=iinmigjlcpeckfihbbfajpkiilfmakff) - AI-powered summary tool. Turn any body of text into a few sentences with one click.
  - [Zotero](chrome://extensions/?id=ekhagklcjbdpajgpjgmbionohlpdbjgc) - Add/sync scientific PDF documents
  - [Video Downloader Plus](chrome://extensions/?id=cfejhehdhaaeoiahaojjhmjaihjaodcf)
  - [Opus Guide](https://chrome.google.com/webstore/detail/opus%E2%97%8Fguide/fpnkogmkokahibbdbfoligochippakeb) (Step-by-step for instructions)

### Disk Inventory X

[Disk Inventory X](http://www.derlien.com/) (disk usage utility for macOS)

### Docker

[Docker](https://www.docker.com/products/docker-desktop) (Docker, see [setup](/docker-macos/))

- used for running databases (e.g. PostgreSQL, MongoDB) in container without cluttering the Mac
- Preferences
  - enable "Use Docker Compose"

### Firefox

[Firefox](https://www.google.com/chrome/) (web development)

### Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) (web development IDE)

~~[Settings](https://github.com/romankurnovskii/romankurnovskii.github.io/tree/main/content/posts/mac-setup-development/files/vscode)~~ / Synced

### Sublime Text

[Sublime Text](https://www.sublimetext.com/) (editor)

### Maccy

[Maccy](https://maccy.app/) (clipboard manager)

- enable "Launch at Login"

### Rectangle

Move and resize windows in macOS using keyboard shortcuts or snap areas

- <https://rectangleapp.com>

### OBS

[OBS](https://obsproject.com/) (for video recording and live streaming)

- for Native Mac Screen recorder
  - Base (Canvas) 2880x1800 (Ratio: 16:10)
  - Output 1728x1080
    ![](img/obs-base-canvas.png)

~~### Spotify~~
~~[Spotify](https://www.spotify.com/)~~

### Soundcloud

- <https://soundcloud.com>

### Syncthing

[syncthing](https://syncthing.net/) - Sync folders/files between devices. I use to backup all photos/video from mobile to PC

### Transmission

 [Transmission](https://www.transmissionbt.com/) (A torrent client that I use. Very minimal in its UI but very powerful and has all the features that I need)

### UTM

[UTM](https://mac.getutm.app/) (Virtual machines UI using QEMU)

- download ubuntu for arm, [doc](https://mac.getutm.app/gallery/ubuntu-20-04)
- On error with shared folder: *Could not connect: Connection refused* open in browser: <http://127.0.0.1:9843/>
- For Debian install `spice-webdavd` for shared folder. <https://packages.debian.org/search?keywords=spice-webdavd>, <https://github.com/utmapp/UTM/issues/1204>

```sh
sudo apt install spice-vdagent spice-webdavd -y
```

### VLC

[VLC](https://www.videolan.org/vlc/) (video player)

- use as default for video files

## Terminal Applications

### nvm

[nvm](https://github.com/nvm-sh/nvm) (node version manager)

### jupyterlab

[jupyterlab](https://jupyter.org/) (Jupyter - python development, fast code snippets)

- `jupyter notebook` - to start jupyter notebook

### ffmpeg

[ffmpeg](https://ffmpeg.org/) (Converting video and audio)

- compress video:

  ```bash
  ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 192k output.mp4
  # or
  ffmpeg -i input.mp4 output.avi
  ```

- convert video to .gif:

  ```bash
  - ffmpeg \
  -i input.mp4 \
  -ss 00:00:00.000 \
  -pix_fmt rgb24 \
  -r 10 \
  -s 960x540 \ 
  -t 00:00:10.000 \
  output.gif
  ```

## NVM for Node/npm

The [node version manager (NVM)](https://github.com/nvm-sh/nvm) is used to install and manage multiple Node versions. After you have installed it via Homebrew in a previous step, type the following commands to complete the installation:

```sh
echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc

source ~/.zshrc
## or alias
## zshsource
```

Now install the latest LTS version on the command line:

```text
nvm install <latest LTS version from https://nodejs.org/en/>
```

Afterward, check whether the installation was successful and whether the [node package manager (npm)](https://www.npmjs.com/) got installed along the way:

```text
node -v && npm -v
```

Update npm to its latest version:

```sh
npm install -g npm@latest
```

And set defaults for npm:

```sh
npm set init-author-name "Roman Kurnovskii"
npm set init-author-email "you@example.com"
npm set init-author-url "https://romankurnovskii.com"
```

If you are a library author, log in to npm too:

```sh
npm adduser
```

That's it. If you want to list all your Node.js installation, type the following:

```sh
nvm list
```

If you want to install a newer Node.js version, then type:

```sh
nvm install <version> --reinstall-packages-from=$(nvm current)
nvm use <version>
nvm alias default <version>
```

Optionally install [yarn](https://yarnpkg.com/) if you use it as alternative to npm:

```sh
npm install -g yarn
yarn -v
```

****
If you want to list all globally installed packages, run this command:

```sh
npm list -g --depth=0
```

That's it. You have a running version of Node.js and its package manager.

## OH MY ZSH

MacOS already comes with zsh as default shell. Install [Oh My Zsh](https://ohmyz.sh/#install) for an improved (plugins, themes, ...) experience. Oh My Zsh is an open source, community-driven framework for managing your zsh configuration. It comes with a bunch of features out of the box and improves your terminal experience.

Install:

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Update everything (e.g. plugins) in Oh My Zsh to recent version:

```bash
omz update
```

Install fonts for themes:

```bash
brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

## iTerm2

### Install theme

[Theme description](https://github.com/romkatv/powerlevel10k#batteries-included)

```bash
brew install romkatv/powerlevel10k/powerlevel10k
echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
```

### Enable suggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
echo "plugins=(zsh-autosuggestions)" >>~/.zshrc
```

Open new tab(CMD+T)/restart `iTerm` to proceed with theme setup.

## Terminal Script and Aliases

Update `.zprofile`. The changes will take effect after restarting the terminal

```bash
vi ~/.zprofile
```

### Automatic software updates

Add script to zprofile that updates everything:

1. Update, upgrade all and cleanup
2. softwareupdate - system software update tool

We can execute this command on startup, but i prefer handle it. When I kick of `upd` command in terminal, it will update everything I need:

```bash
alias upd='brew update; brew upgrade; brew cu -a --cleanup -y -v; brew cleanup; softwareupdate -i -a; i'
```

Add aliases to the latest versions pip & python

```bash
# А 
# ❯ which pip
# /opt/homebrew/bin/pip
# ❯ which python
# /opt/homebrew/anaconda3/bin//python

# snippet creates python virtual env in current folder
alias penv='python -m venv venv && source ./venv/bin/activate && pip install --upgrade pip && echo "\n" >> requirements.txt && pip install -r requirements.txt && pip freeze > requirements_freeze.txt && echo "venv/" >> .gitignore'

alias jp="jupyter notebook $@"
```

### Clean space

```sh
alias clean="brew cleanup --prune=all; rm -rf ~/Library/Caches"
```

## Links

- [https://www.robinwieruch.de/mac-setup-web-development/](https://www.robinwieruch.de/mac-setup-web-development/)
- [https://sourabhbajaj.com/mac-setup/iTerm/ack.html](https://sourabhbajaj.com/mac-setup/iTerm/ack.html)
- [https://www.engineeringwithutsav.com/blog/spice-up-your-macos-terminal](https://www.engineeringwithutsav.com/blog/spice-up-your-macos-terminal)
