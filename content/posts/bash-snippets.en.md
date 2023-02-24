---
title: Bash code snippets
seoTitle: Bash code snippets
description: This bash code snippet provides a useful solution for renaming files in the current directory based on a specific pattern. The script loops through all files in the directory and checks if the filename contains the specified pattern (in this case, the "№" symbol). If it does, the script removes everything before and including the symbol and renames the file with the new name. The script then prints a message for each renamed file. This code snippet can be a useful time-saver for those who need to rename many files based on a certain pattern.
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
