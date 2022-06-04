---
title: Как переименовывать файлы в Python 
description: Различные способы переименовывания файлов в Python
toc: true
authors:
  - roman-kurnovskii
tags:
  ["Python", ]
categories: ['Code Snippets']
series: ['JavaScript']
date: "2022-06-04"
lastmod: "2022-06-04"
featuredImage: /posts/howto-create-deepclone-js/img/deepclone.jpg
draft: false
---

Learn different ways to rename files in Python using the os and pathlib modules.

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
Rename files with pathlib
The same could be achieved with the pathlib module and
```python
Path.rename(new_name)
```
With a Path object we can access .stem and .suffix:
```python
from pathlib import Path
for file in os.listdir():
    f = Path(file)
    new_name = f"{f.stem}_new{f.suffix}"
    f.rename(new_name)
```