---
title: Wireless access point with hostapd on Debian
seoTitle: Wireless access point with hostapd on Debian
description: Wireless access point with hostapd on Debian
toc: true
tags: [Linux, Debian, Network]
series: []
categories: []
date: 2023-12-29
lastMod: 2023-12-29
featuredImage: https://picsum.photos/700/223?grayscale
authors: [roman-kurnovskii]
---

Configure network traffic routing and Network Address Translation (NAT) using `iptables`.

Configure the system to forward packets from one network interface to another, applying NAT to the packets going out of the `eth0` interface.

Network configuration where the system is intended to function as a router or gateway between two networks (e.g., forwarding packets from a Wi-Fi network to an Ethernet network).

```sh
kali@kali:~$ sudo iptables -t nat -F
kali@kali:~$
kali@kali:~$ sudo iptables -F
kali@kali:~$
kali@kali:~$ sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
kali@kali:~$
kali@kali:~$ sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT
kali@kali:~$
kali@kali:~$ echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward # (DNS, dhcp still required)
kali@kali:~$
```

## 1. sudo iptables -t nat -F

- `iptables` is a command-line utility used to set up, maintain, and inspect the tables of IP packet filter rules in the Linux kernel.
- `-t nat` specifies the NAT table, one of the several tables in the `iptables` utility used for network address translation.
- `-F` stands for 'flush', which clears or deletes all the rules in the selected table (in this case, the NAT table).
- Essentially, this command clears all NAT rules that may have been previously set up.

## 2. sudo iptables -F

- `-F` command is used without the `-t` option, which means it applies to the default filter table.
- This command clears all the rules in the filter table, which is responsible for packet filtering.

## 3. sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

`-A POSTROUTING` adds a rule to the POSTROUTING chain. The POSTROUTING chain is used for altering packets after they have been routed.
`-o eth0` specifies the outgoing network interface, `eth0` in this case.
`-j MASQUERADE` sets the `MASQUERADE` target. This is used for NAT. It enables IP masquerading, which hides your private IP address behind the public IP address of your network interface (here, `eth0`). It's often used in situations where your IP address is dynamically assigned, such as a dial-up or DSL connection.
This command sets up NAT for packets going out of the `eth0` interface.

## 4. sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT

- `-A FORWARD` adds a rule to the FORWARD chain. The FORWARD chain is used for packets that are being routed through the device.
- `-i wlan0` specifies the incoming interface, `wlan0` in this case.
- `-o eth0` specifies the outgoing interface, eth0.
- `-j ACCEPT` means that these packets will be accepted and forwarded from `wlan0` to `eth0`.
- This command is typically part of configuring the device to act as a router or gateway, forwarding packets from one interface to another.

## 5. echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

- `/proc/sys/net/ipv4/ip_forward` is a system file that controls the IP forwarding setting of the kernel. When this is set to 1, it enables the system to forward IP packets from one network to another, effectively functioning as a router.
- echo 1 outputs 1, and the | sudo tee part is used to write this value into the `ip_forward` file with the necessary permissions.
- This command is crucial for enabling IP forwarding, allowing the system to route packets between interfaces.

## Resources

- <https://portal.offsec.com/courses/pen-103/books-and-videos/modal/modules/securing-and-monitoring-kali-linux/exercises/securing-the-kali-file-system>
