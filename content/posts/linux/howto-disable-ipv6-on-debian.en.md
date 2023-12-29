---
title: How to disable IPv6 on Debian/Kali Linux
seoTitle: How to disable IPv6 on Debian/Kali Linux
description: How to disable IPv6 on Debian/Kali Linux
toc: true
tags: [Linux, Debian, Network]
series: []
categories: []
date: 2023-12-24
lastMod: 2023-12-24
featuredImage: https://picsum.photos/700/237?grayscale
authors: [roman-kurnovskii]
---

## TL;DR

```sh
git clone https://github.com/romankurnovskii/kali-shortcuts.git
cd kali-shortcuts
chmod +x disable_ipv6.sh
sudo ./disable_ipv6.sh
```

## Edit sysctl Configuration

- In the terminal, type `sudo vi /etc/sysctl.conf` and press Enter. This opens the `sysctl.conf` file in the text editor with root privileges.

## Add IPv6 Disable Lines

- At the end of the file, add the following lines:

```
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
```

These lines will disable IPv6 on all network interfaces, including the loopback interface.

## Save and Exit

- Save `/etc/sysctl.conf` and exit text editor

## Apply Changes

- To apply the changes without rebooting, run `sudo sysctl -p`` in the terminal. This will reload the sysctl configuration with your changes.

## Verify Changes (Optional)

To confirm that IPv6 is disabled, you can run `cat /proc/sys/net/ipv6/conf/all/disable_ipv6``. If it returns 1, then IPv6 has been successfully disabled.

## Reboot (Optional)

While the `sysctl -p` command applies changes immediately, it's a good idea to reboot your system to ensure that the changes persist after a restart. You can reboot by typing `sudo reboot` in the terminal.

## Troubleshooting

### Linux can't add IPv6 to interface tun0

Can happen when trying to connect through OpenVPN.

In the client file `.ovpn` add lines:

```
pull-filter ignore "ifconfig-ipv6"
pull-filter ignore "route-ipv6"
```
