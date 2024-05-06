---
title: Initial Setup Guide for Ubuntu 22.04 on a VPS
seoTitle: Initial Setup Guide for Ubuntu 22.04 on a VPS
description: Initial Setup Guide for Ubuntu 22.04 on a VPS
toc: true
tags: [Linux, Ubuntu]
series: []
categories: []
date: 2024-05-02
lastMod: 2024-05-02
featuredImage: https://picsum.photos/700/225?grayscale
authors: [roman-kurnovskii]
---


## Update and Upgrade Packages

```
apt update
apt upgrade -y
```

## Setting Up SSH Keys

Using SSH keys instead of passwords enhances security. First, generate an SSH key pair on your local machine (if you don't already have one):

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Next, copy your public SSH key to the new user's account on your server. You can do this from your local machine:

```bash
ssh-copy-id username@your_server_ip

# or with provided port
ssh-copy-id -p 1234 username@your_server_ip
```

This command uploads your public SSH key and configures the server to recognize it.

## Disabling Password Authentication

To prevent SSH login using a username and password, edit the SSH configuration file:

```sh
sudo nano /etc/ssh/sshd_config
```

Find the following lines and modify them as shown:

```plaintext
PasswordAuthentication no
UsePAM no
```

After making these changes, restart the SSH service to apply them:

```bash
sudo systemctl restart sshd
```
