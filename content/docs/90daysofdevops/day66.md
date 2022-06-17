---
title: '#90DaysOfDevOps - Ansible Playbooks Continued... - Day 66'
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-25"
lastmod: "2022-06-25"
featuredImage:
draft: false
id: 1048712
---
## Ansible Playbooks Продолжение...

В нашем последнем разделе мы начали с создания небольшой лаборатории, используя файл Vagrant для развертывания 4 машин, и мы использовали нашу Linux-машину, которую мы создали в этом разделе, в качестве нашей системы управления Ansible. 

Мы также проверили несколько скриптов плейбуков, и в конце у нас был плейбук, который сделал наши web01 и web02 отдельными веб-серверами. 

![](../images/Day66_config1.png?v1)

### Наведение порядка

Прежде чем перейти к дальнейшей автоматизации и развертыванию, мы должны рассказать о том, как сохранить наш плейбук аккуратным и опрятным и как мы можем разделить наши такты и обработчики по подпапкам. 

В основном мы собираемся копировать наши задачи в их собственный файл в папке.
```
- name: ensure apache is at the latest version
  apt: name=apache2 state=latest

- name: write the apache2 ports.conf config file
  template: 
    src=templates/ports.conf.j2 
    dest=/etc/apache2/ports.conf
  notify: restart apache

- name: write a basic index.html file
  template:
    src: templates/index.html.j2
    dest: /var/www/html/index.html
  notify:
  - restart apache

- name: ensure apache is running
  service:
    name: apache2
    state: started
```

и то же для обработчиков.

```
- name: restart apache
  service:
    name: apache2
    state: restarted
```

Затем в нашем плейбуке, который теперь называется `playbook2.yml`, мы указываем на эти файлы. Все эти файлы можно найти по адресу [ansible-scenario2](../../Configmgmt/ansible-scenario2/).

Вы можете проверить это на своей контрольной машине. Если вы скопировали файлы из репозитория, вы должны были заметить, что кое-что изменилось в пункте "написать основной файл index.html"

![](../images/Day66_config2.png?v1)

Давайте выясним, какое простое изменение я сделал. Использование `curl web01:8000` 

![](../images/Day66_config3.png?v1)

Мы только что привели в порядок наш плейбук и начали разделять области, которые могут сделать плейбук очень перегруженным в масштабе.

### Роли и Ansible Galaxy

На данный момент мы развернули 4 виртуальные машины и настроили 2 из них как веб-серверы, но у нас есть еще несколько специфических функций, а именно: сервер базы данных и балансировщик нагрузки или прокси. Для того чтобы сделать это и привести в порядок наш репозиторий, мы можем использовать роли в Ansible. 

Для этого мы воспользуемся командой `ansible-galaxy`, которая предназначена для управления ролями Ansible в общих репозиториях. 

![](../images/Day66_config4.png?v1)

Мы собираемся использовать `ansible-galaxy` для создания роли для apache2, где мы собираемся разместить специфику наших веб-серверов. 

![](../images/Day66_config5.png?v1)

Приведенная выше команда `ansible-galaxy init roles/apache2` создаст структуру папок, которую мы показали выше. Следующим шагом нам нужно переместить существующие задачи и шаблоны в соответствующие папки в новой структуре. 

![](../images/Day66_config6.png?v1)

Копировать и вставить легко для перемещения этих файлов, но нам также нужно внести изменения в tasks/main.yml, чтобы указать его на apache2_install.yml. 

Нам также нужно изменить наш playbook, чтобы он ссылался на нашу новую роль. В playbook1.yml и playbook2.yml мы определяем наши задачи и обработчики по-разному, так как мы изменили их между двумя версиями. Нам нужно изменить наш плейбук, чтобы использовать эту роль, как показано ниже:
```
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - apache2
```

![](../images/Day66_config7.png?v1)

Теперь мы можем запустить наш плейбук снова, на этот раз с новым именем плейбука `ansible-playbook playbook3.yml` Вы заметите обесценивание, мы можем исправить это дальше.  

![](../images/Day66_config8.png?v1)

Хорошо, амортизация хотя наш плейбук запустился, теперь мы должны исправить наши пути, для этого я изменил опцию include в tasks/main.yml на import_tasks, как показано ниже. 

![](../images/Day66_config9.png?v1)

Вы можете найти эти файлы в папке [ansible-scenario3](../Configmgmt/ansible-scenario3).

Мы также собираемся создать еще несколько ролей, используя `ansible-galaxy`, которые мы собираемся создать:
- common = for all of our servers (`ansible-galaxy init roles/common`)
- nginx = for our loadbalancer (`ansible-galaxy init roles/nginx`)

![](../images/Day66_config10.png?v1)

Я собираюсь оставить этот вариант здесь, а в следующей сессии мы начнем работать над другими узлами, которые мы развернули, но еще ничего не сделали.
## Ресурсы 

- [What is Ansible](https://www.youtube.com/watch?v=1id6ERvfozo)
- [Ansible 101 - Episode 1 - Introduction to Ansible](https://www.youtube.com/watch?v=goclfp6a2IQ)
- [NetworkChuck - You need to learn Ansible right now!](https://www.youtube.com/watch?v=5hycyr-8EKs&t=955s)
- [Your complete guide to Ansible](https://www.youtube.com/playlist?list=PLnFWJCugpwfzTlIJ-JtuATD2MBBD7_m3u)

Этот последний плейлист, приведенный выше, является тем местом, откуда было взято много кода и идей для этого раздела, отличным ресурсом и руководством в видеоформате.