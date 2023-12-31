---
title: Monitoring
seoTitle: Monitoring
description: Monitoring
toc: true
tags: [Linux, Debian]
series: []
categories: []
date: 2023-12-29
lastMod: 2023-12-29
featuredImage: https://picsum.photos/700/225?grayscale
authors: [roman-kurnovskii]
---


## Auditing Packages

```
dpkg --verify
```

or

```
dpkg -V
```

```
# dpkg -V
??5??????   /lib/systemd/system/ssh.service
??5?????? c /etc/libvirt/qemu/networks/default.xml
```

- 'ssh.service': reports a change to SSH's service file that the administrator made to the packaged file instead of using an appropriate /etc/systemd/system/ssh.service override
- 'c' letter: legitimately modified

## Monitoring Files

### AIDE

```
apt install aide
aideinit  # first db init
```

`aideinit` creates a cron job in `etc/cron.daily/aide`

DB: `/var/lib/aide/aide.db`

When changes are detected, AIDE records them in log files `/var/log/aide/*.log`

### logcheck

Monitors log files every hour by default and sends unusual log messages in emails to the administrator for further analysis

```
sudo apt install logcheck
```

```
sudo -u logcheck logcheck -o
```

```
debian@debian:~$ sudo -u logcheck logcheck -help
usage: logcheck [-c CFG] [-d] [-h] [-H HOST] [-l LOG] [-L CFG] [-D DIR] [-m MAIL] [-o]
                [-r DIR] [-s|-p|-w] [-R] [-S DIR] [-t] [-T] [-u]
 -c CFG       = override default configuration file
 -d           = debug mode
 -h           = print this usage information and exit
 -H HOST      = use this hostname in the subject of any generated mail
 -l LOG       = check the specified logfile
 -L CFG       = override default logfiles list
 -D DIR       = override default logfiles lists directory
 -m MAIL      = send the report to the specified recipient
 -o           = send the report to stdout, no mail will be sent
 -p           = use the "paranoid" runlevel
 -r DIR       = override default rules directory
 -R           = adds "Reboot:" to email subject
 -s           = use the "server" runlevel
 -S DIR       = override default state directory
 -t           = testing mode, don't update the logfile offsets
 -T           = do not remove the TMPDIR
 -u           = enable syslog-summary
 -v           = print version
 -w           = use the "workstation" runlevel
```

- Save log to some dir path

```
mkdir -p /data/
sudo -u logcheck logcheck -o > /data/$(date +"%m-%d-%Y-%T").log
```

- Run every hour
  - Create script, make it executable and drop it in `/etc/cron.hourly`.

## Resources

- <https://portal.offsec.com/courses/pen-103/books-and-videos/modal/modules/securing-and-monitoring-kali-linux/exercises/monitoring-kali-services>
- <https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands#listing-and-deleting-rules>
