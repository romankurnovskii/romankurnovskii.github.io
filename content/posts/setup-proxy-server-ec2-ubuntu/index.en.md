---
title: "Set Up Proxy  on Amazon EC2 Ubuntu"
seoTitle: "Set Up Squid Proxy on Amazon EC2 - Step by Step Guide"
description: "Learn how to set up and configure a Squid proxy server on an Amazon EC2 instance with this comprehensive guide. Perfect for beginners and seasoned users alike."
toc: true
tags: ["Squid Proxy", "Amazon EC2", "Ubuntu", "Server Configuration", "Networking"]
series: ["Amazon Web Services", "Proxy Server Configuration"]
categories: ["Technology", "Networking", "Cloud Computing"]
date: 2023-28-11
lastMod: 2023-28-21
featuredImage: https://picsum.photos/700/237?grayscale
authors: [roman-kurnovskii]
---


## 1. Setting up the EC2 Instance

## Launch an EC2 Instance

1. Choose an Ubuntu Server image.
1. Select an appropriate instance type.
1. Configure instance details, storage, and security group. Ensure your security group allows inbound traffic on the ports you plan to use for your proxy (typically port 3128 for Squid).
1. Review and launch the instance.
1. Create and download a key pair for SSH access. (optional, can connect through AWS console later)

![](./assets/ec2-security-group-inbound-setup.jpg)

## 2. Connect to Your Instance

- Use SSH client with the instance's public DNS/IP and the key pair:

  ```sh
  ssh -i /path/to/your-key.pem ubuntu@your-instance-public-dns
  ```

- Or through AWS Session Manager

## Installing and Configuring Squid

### Install Squid

1. Update package lists: sudo apt-get update
1. Install Squid: sudo apt-get install squid apache2-utils

### Configure Squid with Authentication

- Open the Squid configuration file: sudo nano /etc/squid/squid.conf
- Configure basic settings:
  - Set http_port to your desired port, typically 3128.
  - Add the following lines for basic authentication:

    ```sh
      auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd
      auth_param basic realm proxy
      acl authenticated proxy_auth REQUIRED
      http_access allow authenticated
    ```

  - Create a username and password
    - Use `htpasswd` to create an encrypted password file and user

      ```sh
      apt install apache2-utils

      sudo htpasswd -c /etc/squid/passwd your_username
      ```

    - You'll be prompted to enter and confirm a password for your_username.
    - Save and close the file.
- Restart Squid:
  - Apply configuration changes: `sudo systemctl restart squid`

### Testing the Proxy

- From a client machine, try accessing the internet or a specific website while the proxy settings are enabled.
- You should be able to browse the internet through your EC2 proxy.
