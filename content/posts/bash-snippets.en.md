---
title: Bash code snippets
seoTitle: Bash code snippets
description: Bash code snippets
toc: true
categories: [Linux, programming, Bash, CheatSheet]
series: [CheatSheet]
tags:  [Linux, Bash]
date: 2023-02-12
featuredImage: https://picsum.photos/700/239
draft: false
---


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

**Rename all files by pattern in current directory**

```sh
files=(*)

# Loop through all files
for file in "${files[@]}"
do
  # Check if the file name contains the "№" symbol
  if [[ $file == *"№"* ]]; then
    # Remove everything before and including the "№" symbol
    new_file=${file##*"№"}
    mv "$file" "$new_file"
    echo "Renamed $file to $new_file"
  fi
done
```
