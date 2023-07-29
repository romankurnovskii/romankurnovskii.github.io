---
title: Interactive vs. Non-Interactive Users in Linux
seoTitle: Differences between Interactive and Non-Interactive Users in Linux
description: An in-depth comparison between interactive and non-interactive users in Linux.
toc: true
tags: [Linux, User Management, Docker]
categories: [System Administration, Docker, User Management]
date: 2023-08-24
lastMod: 2023-08-24
featuredImage: https://picsum.photos/700/241?grayscale
---

## Characteristics

In a Linux environment, users can be broadly categorized as "interactive" and "non-interactive". These distinctions stem from how these user accounts interact (or don't interact) with the system.

## Definition

- **Interactive Users:** These are users who interact directly with the system, usually through a shell. When you log into a computer using SSH or a terminal, you're operating as an interactive user.
- **Non-Interactive Users:** These users are designed to perform specific tasks without direct human intervention. Examples include system accounts running services like *apache* or *mysql*.

## Interaction, Usage, Environment

**Interaction:**

- Interactive: Engages with the system via interfaces like shells.
- Non-Interactive: Executes tasks automatically, often without a shell or user interface.

**Usage:**

- Interactive: Utilized for general-purpose tasks, from browsing directories to installing software.
- Non-Interactive: Specific to particular duties, often system-related.

**Environment:**

- Interactive: Has a full user environment. This includes a `HOME` directory, user-specific settings, etc.
- Non-Interactive: Limited or no user environment. Typically lacks things like a `HOME` directory.

## Creating user

When creating users in Linux, there's often no distinction between interactive and non-interactive users. The difference arises in <mark>how the user is utilized</mark>. However, for security and operational reasons, non-interactive users might have restricted shells or no shell at all.

**Why Not Simply Create a User and Use It Non-Interactively?**

Even if a user is created as interactive, it can be used non-interactively. However, for security reasons, services or tasks might be assigned to users with restricted permissions or shells to minimize potential risks.

## Practice

### Manual

Create a file `Dockerfile`

```dockerfile
FROM ubuntu:20.04

## Create interactive and non-interactive users
RUN useradd interactiveUser && \
    useradd -s /sbin/nologin noninteractiveUser
```

Build image

```sh
docker build -t custom-users-ubuntu .
```

**Connect/Switch to each user:**

For interactiveUser:

```sh
❯ docker run -it custom-users-ubuntu su - interactiveUser
su: warning: cannot change directory to /home/interactiveUser: No such file or directory
$
$ id
uid=1000(interactiveUser) gid=1000(interactiveUser) groups=1000(interactiveUser)
```

For noninteractiveUser (This will not give a shell because of the nologin shell):

```sh
❯ docker run -it custom-users-ubuntu su - noninteractiveUser
su: warning: cannot change directory to /home/noninteractiveUser: No such file or directory
This account is currently not available.
```

**Verify that noninteractiveUser exists:**

```sh
❯ docker run -it custom-users-ubuntu bash

root@495500b9c069:/## cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
...
interactiveUser:x:1000:1000::/home/interactiveUser:/bin/sh
noninteractiveUser:x:1001:1001::/home/noninteractiveUser:/sbin/nologin
```

**Run commands for each user:**

- You'll find that the interactiveUser can run commands, but the noninteractiveUser cannot due to its restricted shell.

**Show difference in environments:**

```sh
❯ docker run -it custom-users-ubuntu /bin/bash -c "su - interactiveUser -c env > /tmp/interactiveEnv; su - noninteractiveUser -c env > /tmp/noninteractiveEnv; diff /tmp/interactiveEnv /tmp/noninteractiveEnv"
su: warning: cannot change directory to /home/interactiveUser: No such file or directory
su: warning: cannot change directory to /home/noninteractiveUser: No such file or directory
1,8c1
< MAIL=/var/mail/interactiveUser
< USER=interactiveUser
< HOME=/home/interactiveUser
< LOGNAME=interactiveUser
< TERM=xterm
< PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
< SHELL=/bin/sh
< PWD=/
---
> This account is currently not available.
```
