---
title: Tar Files Cheat Sheet
description: tar command Cheat Sheet
toc: true
tags: ["Linux", "CLI", "tar", "cheatsheet"]
series:
categories: [Linux, CLI]
date: "2022-06-05"
featuredImage: /posts/cheat-sheet-command-tar/featured.en.jpg
authors: [roman-kurnovskii]
---

## Create tar named archive.tar containing directory

```bash
tar cf archive.tar directory
```

## Extract the contents from archive.tar

```bash
tar xf archive.tar
```

## Create a gzip compressed tar file name archive.tar.gz

```bash
tar czf archive.tar.gz directory
```

## Extract a gzip compressed tar file

```bash
tar xzf archive.tar.gz
```

# Create a tar file with bzip2 compression

```bash
tar cjf archive.tar.bz2 directory
```

## Extract a bzip2 compressed tar file

```bash
tar xjf archive.tar.bz2
```

## List content of tar file

```bash
tar -tvf archive.tar
```