---
title: 67. Роли и развертывание балансировщика нагрузки
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-26"
lastmod: "2022-06-26"
featuredImage:
draft: false
id: 1048713
weight: 67
---

На последнем занятии мы рассмотрели роли и использовали команду `ansible-galaxy`, чтобы помочь создать структуру папок для некоторых ролей, которые мы будем использовать. В итоге мы получили гораздо более аккуратное рабочее хранилище для нашего кода конфигурации, поскольку все спрятано в папках ролей.

Однако мы использовали только роль apache2 и получили рабочий playbook3.yaml для работы с нашими веб-серверами.

На данном этапе, если вы использовали только `vagrant up web01 web02`, пришло время запустить `vagrant up loadbalancer`, который откроет другую систему Ubuntu, которую мы будем использовать в качестве балансировщика нагрузки/прокси.

Мы уже определили эту новую машину в нашем файле hosts, но у нас нет настроенного ssh-ключа, пока он не доступен, поэтому нам нужно также запустить `ssh-copy-id loadbalancer`, когда система будет запущена и готова.

### Общая роль

В конце вчерашней сессии я создал роль `common`, роль common будет использоваться на всех наших серверах, в то время как другие роли специфичны для конкретных случаев использования, сейчас приложения, которые я собираюсь установить в качестве common, не так просты, и я не вижу много причин для этого, но это показывает цель. В структуре папок нашей общей роли перейдите в папку tasks, и у вас появится файл main.yml. В этом yaml нам нужно указать на наш файл install_tools.yml, и мы делаем это, добавляя строку `- import_tasks: install_tools.yml`. Раньше это был `include`, но он скоро будет устаревшим, поэтому мы используем import_tasks.

```
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - neofetch
   - tree
   - figlet
```

Затем в нашем плейбуке мы добавляем общую роль для каждого блока хоста.

```
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - common
    - apache2
```

### nginx

Следующим этапом будет установка и настройка nginx на нашем виртуальном компьютере loadbalancer. Как и в общей структуре папок, у нас есть nginx, основанный на последнем сеансе.

Прежде всего, мы добавим блок host в наш playbook. Этот блок будет включать нашу общую роль, а затем нашу новую роль nginx.

Плейбук можно найти здесь. [playbook4.yml](.../.../Configmgmt/ansible-scenario4/playbook4.yml)

```
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - common
    - apache2

- hosts: proxy 
  become: yes
  roles: 
    - common
    - nginx
```

Для того чтобы это что-то значило, мы должны определить наши задачи, которые мы хотим запустить, таким же образом мы изменим main.yml в задачах, чтобы указать на два файла, один для установки и один для конфигурации.

Есть и другие файлы, которые я изменил в зависимости от желаемого результата, посмотрите в папке [ansible-scenario4](../Configmgmt/ansible-scenario4) все измененные файлы. Вам следует проверить папки tasks, handlers и templates в папке nginx, и вы найдете эти дополнительные изменения и файлы.

### Запуск обновленного плейбука

Со вчерашнего дня мы добавили роль common, которая теперь будет устанавливать некоторые пакеты в нашей системе, а затем мы также добавили роль nginx, которая включает установку и настройку.

Давайте запустим наш playbook4.yml, используя `ansible-playbook playbook4.yml`.

![](../images/Day67_config1.ru.png?v1)

Теперь, когда мы настроили наши веб-серверы и loadbalancer, мы должны иметь возможность перейти по адресу <http://192.168.169.134/>, который является IP-адресом нашего loadbalancer.

![](../images/Day67_config2.ru.png?v1)

Если вы следите за развитием событий и у вас нет такого состояния, то это может быть связано с IP-адресами серверов в вашем окружении. Файл находится в `templates\mysite.j2` и выглядит примерно так, как показано ниже: Вам необходимо обновить IP-адреса ваших веб-серверов.

```nginx
    upstream webservers {
        server 192.168.169.131:8000;
        server 192.168.169.132:8000;
    }

    server {
        listen 80;

        location / {   
                proxy_pass http://webservers;
        }
    }
```

Я уверен, что все, что мы установили, в порядке, но давайте воспользуемся специальной командой с помощью ansible, чтобы проверить установку этих общих инструментов.

`ansible loadbalancer -m command -a neofetch`.

![](../images/Day67_config3.ru.png?v1)

## Ресурсы

- [What is Ansible](https://www.youtube.com/watch?v=1id6ERvfozo)
- [Ansible 101 - Episode 1 - Introduction to Ansible](https://www.youtube.com/watch?v=goclfp6a2IQ)
- [NetworkChuck - You need to learn Ansible right now!](https://www.youtube.com/watch?v=5hycyr-8EKs&t=955s)
- [Your complete guide to Ansible](https://www.youtube.com/playlist?list=PLnFWJCugpwfzTlIJ-JtuATD2MBBD7_m3u)

TЭтот последний плейлист, приведенный выше, является тем местом, откуда было взято много кода и идей для этого раздела, отличным ресурсом и руководством в видеоформате.
