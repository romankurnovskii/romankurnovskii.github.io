---
title: Some code snippets
seoTitle: Some code snippets
description: Some code snippets
toc: true
categories: [Programming]
series: []
tags:  [Programming]
date: 2021-02-22
featuredImage: https://picsum.photos/700/231?grayscale
draft: false
---

**pandoc mardown -> pdf**

Create pdf file from .md in multiple folders

prepare:

```
brew install basictex

# search for cyrillic fonts
fc-list | grep к\

brew tap homebrew/cask-fonts
brew install --cask font-m-plus
brew tap homebrew/cask-fonts
brew install --cask font-m-plus
brew install --cask font-m-plus-1
brew install --cask font-m-plus-1-code

```sh
pandoc --pdf-engine xelatex \
--variable mainfont="M+ 1p" --variable sansfont="M+ 1p" --variable monofont="M+ 1m" \
-V geometry:"top=1cm, bottom=2cm, left=1cm, right=1cm" \
--file-scope \
--highlight-style=tango \
-s \
--toc-depth=1 \
--variable=toc-title:" " \
--top-level-division=chapter \
--standalone \
--self-contained \
--from=markdown \
 $(find . -name '*.ru.md') \
-o book.pdf
```

**Convert video -> audio with ffmpeg in current directory**

```sh
#!/bin/bash

# Check if ffmpeg is installed
command -v ffmpeg >/dev/null 2>&1 || { echo >&2 "ffmpeg is required but not installed. Aborting."; exit 1; }

# Get a list of all video files in the current directory
video_files=(*.{mp4,mkv,flv,avi})

# Check if there are any video files in the current directory
if [ ${#video_files[@]} -eq 0 ]
  then
    echo "No video files found in the current directory."
    exit 1
fi

# Loop through all video files and convert them to audio files
for video_file in "${video_files[@]}"
do
  # Get the file name without the extension
  file_name="${video_file%.*}"

  # Convert the video file to an audio file in the current directory
  ffmpeg -i $video_file -vn -acodec libmp3lame -ab 128k $file_name.mp3

  echo "Conversion of $video_file completed. The audio file is located in the current directory."
done

echo "All conversions completed."
```
