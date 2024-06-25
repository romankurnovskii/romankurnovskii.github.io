---
title: Some code snippets
seoTitle: Some code snippets
description: Some code snippets
toc: true
categories: [Programming]
series: []
tags:  [Programming]
date: 2021-02-22
featuredImage: https://picsum.photos/701/231?grayscale
draft: false
---

## pandoc mardown -> pdf

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

## Convert all video to audio with ffmpeg in current directory

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

## Remove audio from video with ffmpeg

```sh
ffmpeg -i input.mp4 -c copy -an output.mp4
```

- `-i input.mp4` specifies the input video file.
- `-c copy` tells FFmpeg to copy the video stream without re-encoding.
- `-an` removes the audio stream from the output file.
- `output.mp4` is the name you choose for the output video file.

## Reduce video size with ffmpeg

```sh
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
```

- `-i input.mp4` specifies the input video file.
- `-c:v libx264` sets the video codec to H.264, which is widely supported and provides good compression.
- `-crf 23` controls the video quality. Lower values result in higher quality but larger file sizes. A value of around 23 is a good balance between quality and size.
- `-preset medium` sets the encoding speed and compression efficiency. The "medium" preset provides a good compromise.
- `-c:a aac -b:a 128k` sets the audio codec to AAC with a bitrate of 128k. This ensures decent audio quality while keeping the file size reasonable.
- `output.mp4` is the name you choose for the output video file.

## Create a new video from all the videos sorted by name in a folder using with ffmpeg

```sh
ffmpeg -f concat -safe 0 -i <(for f in $(ls -v /path/to/folder/*.mp4); do echo "file '$PWD/$f'"; done) -c copy output.mp4
```

## Reduce video size for all videos in dir and sibdirs

### python

- Search for all videos
- Convert
- Set same meta data
- Remove source video

```python
import os
import subprocess
import sys
from datetime import datetime

def convert_to_mp4(src_file):
    new_file = os.path.splitext(src_file)[0] + '.mp4'
    subprocess.run(['ffmpeg', '-i', src_file, new_file])

    # Preserve the modification date of the original file
    mod_time = os.path.getmtime(src_file)
    os.utime(new_file, (mod_time, mod_time))

    os.remove(full_path)

def process_directory(dir_path):
    video_extensions = ['.avi', '.mov', '.wmv', '.flv', '.mkv'] # Define video file extensions

    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if any(file.lower().endswith(ext) for ext in video_extensions):
                full_path = os.path.join(root, file)
                print('='*50)
                print(f'Starting path: {full_path}')
                print('='*50)
                try:
                    convert_to_mp4(full_path)
                    print(f'Processed and converted: {full_path}')
                except Exception as e:
                    print(f'Failed to convert. Error: {str(e)}')

if __name__ == "__main__":
    if len(sys.argv) > 1:
        directory_path = sys.argv[1]
        process_directory(directory_path)
    else:
        print("Please provide a directory path.")
```

### bash

```sh
for file in *.*; do ffmpeg -i "$file" "${file%.*}.avi"; done
```
