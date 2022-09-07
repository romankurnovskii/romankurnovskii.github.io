---
title: How to rename files in Python
description: How to rename files in Python
toc: true
tags: [Python]
series:
categories: [programming, Python]
date: "2022-06-04"
lastmod: "2022-06-04"
featuredImage: featured.en.jpg
authors: [roman-kurnovskii]
---

Learn different ways to rename files in Python using the os and pathlib modules.

## os.rename

Rename files with os

You can use

```python
os.rename(old_name, new_name)
```

For example we can combine it with os.path.splitext() to get the base name and file extension, and then combine it to a new name:

```python
import os
for file in os.listdir():
    name, ext = os.path.splitext(file)
    new_name = f"{name}_new{ext}"
    os.rename(file, new_name)
```

## pathlib

Rename files with pathlib

The same could be achieved with the pathlib module and

```python
Path.rename(new_name)
```

With a Path object we can access `.stem` and `.suffix`:

```python
from pathlib import Path
for file in os.listdir():
    f = Path(file)
    new_name = f"{f.stem}_new{f.suffix}"
    f.rename(new_name)
```

## shutil.move

The shutil module offers a number of high-level operations on files and collections of files. In particular, functions are provided which support file copying and removal. For operations on individual files, see also the os module.

```python
import shutil

old_source = '/Users/r/Desktop/old_source.txt'
new_source = '/Users/r/Desktop/new_source.txt'

newFileName = shutil.move(old_source, new_source)

print("New file:", newFileName)
# New file: /Users/r/Desktop/new_source.txt
```