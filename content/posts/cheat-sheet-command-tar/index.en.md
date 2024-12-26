---
title: Tar command Cheat Sheet
description: tar command Cheat Sheet
toc: true
tags: ["Linux", "CLI", "tar", "cheatsheet"]
series: [cheatsheet]
categories: [OS, Linux, MacOS, CLI, cheatsheet]
date: "2022-06-05"
featuredImage: featured.en.jpg
---

## Common options

    z compress with gzip
    c create an archive
    u append files which are newer than 
        the corresponding copy ibn the archive
    f filename of the archive
    v verbose, display what is inflated or deflated
    a unlike of z, determine compression based on file extension

## Create tar named archive.tar containing directory

```bash
tar cf archive.tar /path/files
```

## Concatenate files into a single tar

```bash
tar -cf archive.tar /path/files
```

## Extract the contents from archive.tar

```bash
tar xf archive.tar
```

## Create a gzip compressed tar file name archive.tar.gz

```bash
tar czf archive.tar.gz /path/files
```

## Extract a gzip compressed tar file

```bash
tar xzf archive.tar.gz
```

# Create a tar file with bzip2 compression

```bash
tar cjf archive.tar.bz2 /path/files
```

## Extract a bzip2 compressed tar file

```bash
tar xjf archive.tar.bz2
```

## List content of tar file

```bash
tar -tvf archive.tar
```
