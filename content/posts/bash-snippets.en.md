---
title: Bash code snippets
seoTitle: Bash code snippets
description: Handy collection of Bash code snippets in this tutorial, perfect for mastering Linux programming tasks. Learn to rename files by a pattern, perform Git operations across multiple repositories, and untrack specific items in your Git setup.
toc: true
categories: [Linux, Bash, CheatSheet]
series: [CheatSheet, Snippets]
tags:  [Linux, Bash, Programming, Snippets]
date: 2023-02-12
lastmod: 2023-06-14
featuredImage: https://picsum.photos/700/229?grayscale
draft: false
---


## Rename all files by pattern in current directory

```sh
files=(*)

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

## Add substring to filename

```sh
#!/bin/bash

DIR="/path/to/folder"
cd "$DIR"

# Rename all .png files and add ".ru" before .png
for file in *.png; do
    base=$(basename "$file" .png)

    mv "$file" "${base}.ru.png"
done
```

## Git Push/Pull for all repos in path

### git pull

```sh
files=(*)
#!/bin/bash

# For every item in the current directory
for d in */; do
    cd "$d"

    if [[ -d ".git" ]]; then
        echo $d
        git pull
    fi

    cd ..
done
```

### git push

```sh
#!/bin/bash

# For every item in the current directory
for d in */; do
    cd "$d"

    if [[ -d ".git" ]]; then
        echo $d
        git add .
        git commit -m "Auto apply"

        # black . # python formatter
        # git add .
        # git commit -m "[chore] formatter"

        git push
    fi

    cd ..
done
```

### git untrack

```sh
#!/bin/bash

items_to_untrack=(".idea" ".vscode" ".DS_Store" "__pycache__" "node_modules" ".env" ".serverless")

# For every item in the current directory
for d in */; do
    echo $d
    cd "$d"

    # Iterate over each item to untrack
    for item in "${items_to_untrack[@]}"; do
        # If the item exists
        if [[ -e "$item" ]]; then
            # Untrack the item
            git rm -r --cached "$item"
        fi
    done

    cd ..
done
```
