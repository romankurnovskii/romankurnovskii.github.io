---
title: 27 - Работа с сетью в Python
description: Работа с сетью в Python
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-17"
lastmod: "2022-05-17"
featuredImage:
draft: false
id: 1048735
---
## Практическое знакомство с Python и сетью

В этом заключительном разделе основ работы с сетью мы рассмотрим некоторые задачи и инструменты автоматизации с помощью нашей лабораторной среды, созданной [День 26](../day26)

Мы будем использовать туннель SSH для подключения к нашим устройствам с нашего клиента по сравнению с telnet. Туннель SSH, созданный между клиентом и устройством, зашифрован. Мы также рассмотрели SSH в разделе Linux в [День 18](../day18)

## Доступ к нашей виртуальной эмулируемой среде

Чтобы мы могли взаимодействовать с нашими коммутаторами, нам либо нужна рабочая станция внутри сети EVE-NG, и вы можете развернуть там Linux-систему с установленным Python для выполнения вашей автоматизации ([Ресурс для настройки Linux внутри EVE-NG](https://www.youtube.com/watch?v=3Qstk3zngrY)) или можно сделать как я и определить облако для доступа со своей рабочей станции.

![](../images/Day27_Networking3.png?v1)

Для этого мы щелкнули правой кнопкой мыши на нашем холсте и выбрали сеть, а затем выбрали "Management(Cloud0)", чтобы подключиться к нашей домашней сети.

![](../images/Day27_Networking4.png?v1)
Однако внутри этой сети у нас ничего нет, поэтому нам нужно добавить соединения из новой сети на каждое из наших устройств.
Я вошел в систему на каждом из наших устройств и выполнил следующие команды для интерфейсов, применимых к тому месту, где появляется облако.

```
enable
config t
int gi0/0
ip add dhcp 
no sh 
exit 
exit
sh ip int br
```
Последний шаг дает нам адрес DHCP из нашей домашней сети. Список сетей моего устройства выглядит следующим образом:

| Node    | IP Address   | Home Network IP |
| ------- | ------------ | --------------- |
| Router  | 10.10.88.110 | 192.168.169.115 |
| Switch1 | 10.10.88.111 | 192.168.169.178 |
| Switch2 | 10.10.88.112 | 192.168.169.193 |
| Switch3 | 10.10.88.113 | 192.168.169.125 |
| Switch4 | 10.10.88.114 | 192.168.169.197 |

### SSH к сетевому устройству

Имея все вышеперечисленное, мы теперь можем подключаться к нашим устройствам в нашей домашней сети, используя нашу рабочую станцию. Я использую Putty, но также имею доступ к другим терминалам, таким как git bash, которые дают мне возможность подключаться к нашим устройствам по SSH.

Ниже вы можете видеть, что у нас есть SSH-соединение с нашим маршрутизатором. (Р1)

![](../images/Day27_Networking5.png?v1)
### Использование Python для сбора информации с наших устройств

Первый пример того, как мы можем использовать Python, — это сбор информации со всех наших устройств, и, в частности, я хочу иметь возможность подключаться к каждому из них и запускать простую команду, чтобы предоставить мне конфигурацию и настройки интерфейса. Я сохранил этот скрипт:
```
#!/usr/bin/env python
from netmiko import ConnectHandler
from getpass import getpass

#password = getpass()

R1 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.115",
    "username": "admin",
    "password": "access123",
}

SW1 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.178",
    "username": "admin",
    "password": "access123",
}

SW2 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.193",
    "username": "admin",
    "password": "access123",
}

SW3 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.125",
    "username": "admin",
    "password": "access123",
}

SW4 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.197",
    "username": "admin",
    "password": "access123",
}
command = "show ip int brief"
for device in (R1, SW1, SW2, SW3, SW4):
    net_connect = ConnectHandler(**device)
    print(net_connect.find_prompt())
    print(net_connect.send_command(command))
    net_connect.disconnect()
```

Теперь, когда я запускаю это, я вижу каждую конфигурацию порта на всех моих устройствах.

![](../images/Day27_Networking6.png?v1)

Это может быть удобно, если у вас много разных устройств, создайте этот один скрипт, чтобы вы могли централизованно контролировать и быстро понимать все конфигурации в одном месте.

### Использование Python для настройки наших устройств

Вышеупомянутое полезно, но как насчет использования Python для настройки наших устройств, в нашем сценарии у нас есть транковый порт между 'SW1' и 'SW2', снова представьте, если бы это нужно было сделать на многих из тех же коммутаторов, которые мы хотим автоматизировать, и не нужно вручную подключаться к каждому коммутатору, чтобы внести изменения в конфигурацию.

Для этого мы можем использовать следующий скрипт. Это подключится через SSH и выполнит это изменение на нашем 'SW1', которое также изменится на 'SW2'.
```
from netmiko import ConnectHandler

SW2 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.193",
    "username": "admin",
    "password": "access123",
    "secret": "access123",
}

core_sw_config = ["int range gig0/1 - 2", "switchport trunk encapsulation dot1q",
                  "switchport mode trunk", "switchport trunk allowed vlan 1,2"]

print("########## Connecting to Device {0} ############".format(SW2))
net_connect = ConnectHandler(**SW2)
net_connect.enable()

print("***** Sending Configuration to Device *****")
net_connect.send_config_set(core_sw_config)
```

![](../images/Day27_Networking7.png?v1)

Теперь если посмотреть на код, вы увидите, что появляется сообщение «sending configuration to device», но нет подтверждения того, что это произошло. Мы могли бы добавить дополнительный код в наш скрипт, чтобы выполнить эту проверку и проверку на нашем switch или мы могли бы изменить наш сценарий, прежде чем показать нам это.

```
#!/usr/bin/env python
from netmiko import ConnectHandler
from getpass import getpass

#password = getpass()

SW1 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.178",
    "username": "admin",
    "password": "access123",
}

SW2 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.193",
    "username": "admin",
    "password": "access123",
}

SW3 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.125",
    "username": "admin",
    "password": "access123",
}

SW4 = {
    "device_type": "cisco_ios",
    "host": "192.168.169.197",
    "username": "admin",
    "password": "access123",
}
command = "show int trunk"
for device in (SW1, SW2, SW3, SW4):
    net_connect = ConnectHandler(**device)
    print(net_connect.find_prompt())
    print(net_connect.send_command(command))
    net_connect.disconnect()

```

![](../images/Day27_Networking8.png?v1)

### Резервное копирование конфигураций вашего устройства

Другим вариантом использования может быть захват наших сетевых конфигураций и обеспечение их резервного копирования, но опять же, мы не хотим подключаться ко всем устройствам, которые у нас есть в нашей сети, поэтому мы также можем автоматизировать это с помощью скрипта
```
import sys
import time
import paramiko 
import os
import cmd
import datetime

now = datetime.datetime.now()
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
print("Your backup has started at", dt_string)	
tic = time.perf_counter()

#user = input("Enter username:")
#password = input("Enter Paswd:")
#enable_password = input("Enter enable pswd:")
user = "admin"
password = "access123"
enable_password = "access123"

port=22
f0 = open('backup.txt')
for ip in f0.readlines():
       ip = ip.strip()
       filename_prefix ='/Users/shambhu/Documents' + ip 
       ssh = paramiko.SSHClient()
       ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
       ssh.connect(ip,port, user, password, look_for_keys=False)
       chan = ssh.invoke_shell()
       time.sleep(2)
       chan.send('enable\n')
       chan.send(enable_password +'\n')
       time.sleep(1)
       chan.send('term len 0\n')
       time.sleep(1)
       chan.send('sh run\n')
       time.sleep(20)
       output = chan.recv(999999)
       filename = "%s_%.2i%.2i%i_%.2i%.2i%.2i" % (ip,now.year,now.month,now.day,now.hour,now.minute,now.second)
       f1 = open(filename, 'a')
       f1.write(output.decode("utf-8") )
       f1.close()
       ssh.close() 
       f0.close()
toc = time.perf_counter()
print("Congratulations You Have Backed Up Your 90DaysOfDevOps Lab")
print(f"Your backup duration was {toc - tic:0.4f} seconds")

dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
print("Your backup completed at", dt_string)
```

Вам также потребуется заполнить `backup.txt` IP-адресами, для которых вы хотите сделать резервную копию.

```
192.168.169.115
192.168.169.178
192.168.169.193
192.168.169.125
192.168.169.197
```

Запустите свой скрипт, и вы должны увидеть что-то вроде того, что показано ниже.

![](../images/Day27_Networking9.png?v1)

Это может быть я просто пишу простой скрипт печати на питоне, поэтому я также должен показать вам файлы резервных копий.
![](../images/Day27_Networking10.png?v1)

### Paramiko

Широко используемый модуль Python для SSH. Вы можете узнать больше по официальной ссылке GitHub [здесь](https://github.com/paramiko/paramiko)

Мы можем установить этот модуль с помощью команды `pip install paramiko`.

![](../images/Day27_Networking1.png?v1)

Мы можем проверить установку, войдя в оболочку Python и импортировав модуль paramiko.

![](../images/Day27_Networking2.png?v1)


### Netmiko 

Модуль *netmiko* предназначен специально для сетевых устройств, тогда как paramiko — это более широкий инструмент для обработки SSH-соединений в целом.

Netmiko, который мы использовали выше вместе с paramiko, можно установить с помощью `pip install netmiko`.

Netmiko поддерживает множество сетевых поставщиков и устройств, список поддерживаемых устройств можно найти на [странице GitHub](https://github.com/ktbyers/netmiko#supports).

### Другие модули

Также стоит упомянуть несколько других модулей, на которые у нас не было возможности взглянуть, но они дают гораздо больше функциональных возможностей, когда речь идет об автоматизации сети.

`netaddr` используется для работы с IP-адресами и управления ими, опять же установка проста с помощью `pip install netaddr`

вы можете захотеть сохранить большую часть конфигурации вашего коммутатора в электронной таблице Excel, `xlrd` позволит вашим сценариям читать книгу Excel и преобразовывать строки и столбцы в матрицу. `pip install xlrd`, чтобы установить модуль.

Еще несколько случаев использования сетевой автоматизации, которые я не имел возможности изучить, можно найти [здесь](https://github.com/ktbyers/pynet/tree/master/presentations/dfwcug/examples)

Я думаю, что это завершает наш раздел «Сетевые ресурсы» #90DaysOfDevOps. Networking — это одна из областей, которую я действительно не касался какое-то время, и есть так много всего, что нужно осветить, но я надеюсь, что мои заметки и ресурсы, которыми я делюсь, будут полезны для некоторый.

## Ресурсы 

- [Free Course: Introduction to EVE-NG](https://www.youtube.com/watch?v=g6B0f_E0NMg)
- [EVE-NG - Creating your first lab](https://www.youtube.com/watch?v=9dPWARirtK8)
- [3 Necessary Skills for Network Automation](https://www.youtube.com/watch?v=KhiJ7Fu9kKA&list=WL&index=122&t=89s)
- [Computer Networking full course](https://www.youtube.com/watch?v=IPvYjXCsTg8)
- [Practical Networking](http://www.practicalnetworking.net/)
- [Python Network Automation](https://www.youtube.com/watch?v=xKPzLplPECU&list=WL&index=126)
- [Hands-On Enterprise Automation with Python (Book)](https://www.packtpub.com/product/hands-on-enterprise-automation-with-python/9781788998512)

Увидимся [завтра](../day28), где начнем изучать облачные вычисления и получите хорошее представление и базовые знания
