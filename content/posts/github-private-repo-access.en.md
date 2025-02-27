---
title: "Access Private GitHub Repositories on an EC2 Server"
seoTitle: "Access Private GitHub Repositories on an EC2 Server"
description: "Step-by-step guide to accessing private GitHub repositories from an EC2 instance."
categories: ["AWS", "EC2", "GitHub"]
toc: true
featuredImage: https://picsum.photos/700/121?grayscale
date: 2025-02-25
tags: ["AWS", "EC2", "GitHub", "SSH"]
---


## **Step 1: Generate an SSH Key on EC2**

To securely authenticate with GitHub, generate an SSH key on your EC2 instance.

1. Connect to your EC2 instance via SSH:

   ```bash
   ssh ec2-user@your-ec2-public-ip
   ```

2. Generate an SSH key:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
   ```

   - Press **Enter** to save the key in the default location (`~/.ssh/id_rsa`).
   - Set a passphrase or leave it empty.

3. Start the SSH agent and add the key:

   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_rsa
   ```

## **Step 2: Add the SSH Key to GitHub**

1. Display the **public key**:

   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

2. Copy the output and add it to GitHub:
   - Go to **GitHub** → **Settings** → **SSH and GPG keys** [link](https://github.com/settings/keys)
   - Click **New SSH key**.
   - Paste the key and save.

## **Step 3: Test SSH Connection to GitHub**

Verify that the connection is successful:

```bash
ssh -T git@github.com
```

Expected output:

```
Hi your-github-username! You've successfully authenticated, but GitHub does not provide shell access.
```

## **Step 4: Clone a Private Repository**

Now that authentication is set up, clone the private repository:

```bash
git clone git@github.com:your-username/private-repo.git
```

Replace `your-username` and `private-repo` with the actual repository details.

---

## **Step 5: Configure Git (Optional)**

To avoid re-entering your username and email, configure Git globally:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## **Alternative: Using a Personal Access Token**

If you prefer HTTPS authentication instead of SSH:

1. Generate a **Personal Access Token (PAT)** on GitHub:
   - Go to **GitHub → Settings → Developer Settings → Personal Access Tokens**.
   - Generate a token with **repo** permissions.
2. Use the token instead of a password:

   ```bash
   git clone https://your-username:your-token@github.com/your-username/private-repo.git
   ```
