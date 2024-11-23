---
title: Set Up Your First VPS on Debian
description: A step-by-step guide to setting up a secure Debian VPS by creating a new user, disabling root access, and enabling SSH key-based authentication.
toc: true
tags: [linux, Debian, server-security, ssh]
series:
categories: [Linux, Debian]
date: 2024-11-21
authors: [roman-kurnovskii]
---


# Setting Up Your First VPS: Secure Configuration Guide

When setting up a new VPS, securing access is critical to prevent unauthorized usage. In this guide, you'll create a new user, disable SSH root access, and configure SSH key-based authentication for added security.

## Update and Upgrade Packages

```
apt update
apt upgrade -y
```

## Step 1: Initial Login as Root

By default, VPS providers often grant root access. Start by logging in using the provided credentials:

```bash
ssh root@<your-server-ip>
```

## Step 2: Create a New User

Replace <username> with your preferred username:

```bash
useradd -m -s /bin/bash -G sudo <username>
```

In case of delete the User:

```bash
userdel -r <username>
```

`-r`: Removes the user's home directory.

## Step 3: Configure SSH Key-Based Authentication

**3.1. Generate an SSH Key Pair (Local Machine)**
On your local machine (not the VPS), check if you already have an SSH key:

```bash
ls ~/.ssh
```

Look for files like `id_rsa` and `id_rsa.pub`. If these files exist, you already have an SSH key. Skip to **3.2** to retrieve your public key.

If no SSH key exists, generate one with the following command:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- `-t rsa`: Specifies the RSA algorithm.
- `-b 4096`: Sets the key size to 4096 bits (more secure).
- `-C "your_email@example.com"`: Adds a comment to identify the key.

Follow the prompts:

- Press Enter to save the key in the default location (`~/.ssh/id_rsa`).
- Optionally, set a passphrase for additional security.

**3.2. Retrieve Your Public Key**

Your public key is stored in the file `~/.ssh/id_rsa.pub`. To display it, run:

```bash
cat ~/.ssh/id_rsa.pub
```

You’ll see a string that starts with ssh-rsa:

```text
ssh-rsa AAAAB3Nza...your-key... your_email@example.com
```

Copy this entire string to your clipboard.

**3.3. Add Your Public Key to the VPS**
Log in to your VPS as <username>:

```bash
su - <username>
```

Create the `.ssh` directory in the home folder:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Open the authorized_keys file:

```bash
vi ~/.ssh/authorized_keys
```

Paste your public key into the file and save it.

Set the appropriate permissions:

```bash
chmod 600 ~/.ssh/authorized_keys
```

**3.4. Test SSH Key Authentication**
On your local machine, test the connection to your VPS using the myuser account:

```bash
ssh <username>@<your-server-ip>

# if using port:
ssh -p <port> <username>@<your-server-ip>
```

If the setup is correct, you’ll log in without being prompted for a password.

## Step 4: Disable Root SSH Login

Edit the SSH Configuration File

Open the SSH daemon configuration file:

```bash
sudo vi /etc/ssh/sshd_config
```

Update the Following Settings

Disable root login:

```text
PermitRootLogin no
```

Disable password authentication:

```text
PasswordAuthentication no
```

Save and Exit the file, then restart the SSH service:

```bash
sudo systemctl restart sshd
```

## Step 5: Final Security Check

Test New Configuration

Open a new terminal and verify that:

- You can log in with the new user.
- Root login is disabled.
- Password-based login is disabled.
- Firewall Setup (Optional)

Enable the firewall and allow only SSH traffic:

```bash
ufw allow OpenSSH
ufw enable
```

## Step 6: Backup and Monitor

Backup Your SSH Keys Ensure your private key is securely stored on your local machine.

Monitor Login Attempts Check login activity using:

```bash
cat /var/log/auth.log
```
