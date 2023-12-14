---
title: Bash Special Variables $! $0 $? $$
seoTitle: Bash Special Variables $! $0 $? $$
description: A comprehensive guide to special variables in Bash, including $0, $1, $!, and more, essential for effective script writing.
toc: true
categories: [Linux, Bash, CheatSheet]
series: [CheatSheet, Snippets]
tags:  [Linux, Bash, Programming, Snippets]
date: 2023-02-14
lastMod: 2023-12-14
featuredImage: https://picsum.photos/700/229?grayscale
draft: false
---


## `$0` - The Name of the Script

`$0` represents the name of the Bash script as it was called.

If you execute a script with `bash myscript.sh`, then within `myscript.sh`, `$0` will be `myscript.sh`.

## `$1`, `$2`, `$3`, ... - Positional Parameters

These variables correspond to the arguments passed to the script. `$1` is the first argument, `$2` is the second, and so on.

In the command `bash myscript.sh arg1 arg2`, `$1` equals `arg1`, and `$2` equals `arg2`.

## `$!` - PID of the Last Background Process

This holds the process ID of the most recent background process. It's particularly useful in managing parallel processing in scripts.

## `$#` - Number of Parameters

`$#` provides the count of arguments passed to the script, enabling scripts to adapt based on the number of inputs.

## `$*` and `$@` - All Positional Parameters

Both `$*` and `$@` expand to all positional parameters, but they behave differently when quoted. `"${*}"` merges all parameters into a single string, while `"${@}"` treats each as a separate word.

## `$?` - Exit Status of the Last Command

The exit status of the most recently executed command is stored in `$?`, where `0` typically signifies success.

## Special Cases

- `$$` is the PID of the script itself.
- `$-` shows the current options set for the shell

## dirname

Strips the last component from a file path.

If you have a file path `/home/user/documents/report.txt`, the `dirname` command will extract and return `/home/user/documents`, which is the directory part of the path.

`dirname` can be especially useful in scripting when you need to perform operations relative to the location of a script or file.
