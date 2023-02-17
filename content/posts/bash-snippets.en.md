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
