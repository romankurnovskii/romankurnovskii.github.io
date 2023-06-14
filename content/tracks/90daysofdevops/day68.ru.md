---
title: 68. Теги, переменные, инвентаризация и конфигурация сервера базы данных
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-27"
lastmod: "2022-06-27"
featuredImage:
draft: false
id: 1048780
weight: 68
---

### Теги

Поскольку мы оставили наш плейбук во время вчерашней сессии, нам нужно будет запустить все задачи и пьесы в рамках этого плейбука. Это означает, что нам придется запустить веб-серверы и балансировщик нагрузки до конца.

Однако теги могут позволить нам отделить их друг от друга, если мы захотим. Это может быть эффективным шагом, если в нашей среде есть очень большие и длинные плейбуки.

В нашем файле плейбука, в данном случае мы используем [ansible-scenario5](Configmgmt/ansible-scenario5/playbook5.yml)

```ansible
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - common
    - apache2
  tags: web

- hosts: proxy 
  become: yes
  roles: 
    - common
    - nginx
  tags: proxy
```

Затем мы можем подтвердить это с помощью команды `ansible-playbook playbook5.yml --list-tags`, а список тегов будет содержать теги, которые мы определили в нашем плейбуке.

![](../images/Day68_config1.ru.png?v1)

Теперь, если мы хотим нацелиться только на прокси, мы можем сделать это, выполнив `ansible-playbook playbook5.yml --tags proxy`, и это, как вы можете видеть ниже, запустит плейбук только против прокси.

![](../images/Day68_config2.ru.png?v1)

Теги могут быть добавлены и на уровне задач, так что мы можем получить действительно подробную информацию о том, где и что вы хотите, чтобы произошло. Это могут быть теги, ориентированные на приложения, например, мы можем пройтись по задачам и пометить наши задачи на основе установки, настройки или удаления. Еще один очень полезный тег, который вы можете использовать, это

`tag: always`, который гарантирует, что независимо от того, какие -теги вы используете в вашей команде, если что-то помечено значением always, то оно всегда будет запущено при выполнении команды ansible-playbook.

С помощью тегов мы также можем объединить несколько тегов вместе, и если мы выполним команду `ansible-playbook playbook5.yml --tags proxy,web`, то будут запущены все элементы с этими тегами. Очевидно, что в нашем случае это будет означать то же самое, что и запуск самого плейбука, но если бы у нас было несколько других плейбуков, то это имело бы смысл.

Вы также можете определить более одного тега.

### Переменные

В Ansible существует два основных типа переменных.

- Созданная пользователем (User created)
- Факты Ansible (Ansible Facts)

### Факты Ansible

Каждый раз, когда мы запускали наши плейбуки, у нас была задача, которую мы не определяли, называемая "Сбор фактов", мы можем использовать эти переменные или факты, чтобы заставить вещи происходить с нашими задачами автоматизации.

![](../images/Day68_config3.ru.png?v1)

Если мы выполним следующую команду `ansible proxy -m setup`, то увидим много выходных данных в формате JSON. Однако на вашем терминале будет много информации, чтобы действительно использовать ее, поэтому мы хотим вывести ее в файл, используя команду `ansible proxy -m setup >> facts.json`, вы можете увидеть этот файл в этом репозитории, [ansible-scenario5](Configmgmt/ansible-scenario5/facts.json)

![](../images/Day68_config4.ru.png?v1)

Если открыть этот файл, то можно увидеть всевозможную информацию для нашей команды. Мы можем получить наши IP-адреса, архитектуру, версию биоса. Много полезной информации, если мы захотим использовать ее в наших плейбуках.

Идея заключается в том, чтобы потенциально использовать одну из этих переменных в шаблоне nginx mysite.j2, где мы жестко закодировали IP-адреса наших веб-серверов. Вы можете сделать это, создав цикл for в вашем mysite.j2, который будет проходить через группу [webservers], что позволит нам иметь более двух веб-серверов, автоматически и динамически созданных или добавленных в эту конфигурацию балансировщика нагрузки.

```
#Dynamic Config for server {{ ansible_facts['nodename'] }}
    upstream webservers {
 {% for host in groups['webservers'] %}
        server {{ hostvars[host]['ansible_facts']['nodename'] }}:8000;
    {% endfor %}
    }

    server {
        listen 80;

        location / {   
                proxy_pass http://webservers;
        }
    }
```

Результат вышеописанных действий будет выглядеть так же, как и сейчас, но если мы добавим больше веб-серверов или удалим один, это динамически изменит конфигурацию прокси. Чтобы это работало, необходимо настроить разрешение имен.

### Созданные пользователем

Переменные, созданные пользователем, - это то, что мы создали сами. Если вы посмотрите в наш playbook, то увидите, что у нас есть `vars:`, а затем список из трех переменных, которые мы используем.  

```
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
  roles:
    - common
    - apache2
  tags: web

- hosts: proxy 
  become: yes
  roles: 
    - common
    - nginx
  tags: proxy
```

Однако мы можем очистить наш плейбук от переменных, переместив их в собственный файл. Мы так и сделаем, но перенесем их в папку [ansible-scenario6](Configmgmt/ansible-scenario6). В корне этой папки мы создадим папку group_vars. Затем мы создадим еще одну папку под названием all (все группы получат эти переменные). В ней мы создадим файл под названием `common_variables.yml` и скопируем в него наши переменные из нашего плейбука. Удалим их из плейбука вместе с vars:.

```
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
```

Поскольку мы связываем это с глобальной переменной, мы также можем добавить сюда наши серверы NTP и DNS. Переменные устанавливаются из созданной нами структуры папок. Ниже вы можете видеть, как чисто выглядит наш Playbook.

```yaml
- hosts: webservers
  become: yes
  roles:
    - common
    - apache2
  tags: web

- hosts: proxy 
  become: yes
  roles: 
    - common
    - nginx
  tags: proxy
```

Одной из этих переменных был http_port, мы можем использовать его снова в нашем цикле for в файле mysite.j2, как показано ниже:

```
#Dynamic Config for server {{ ansible_facts['nodename'] }}
    upstream webservers {
 {% for host in groups['webservers'] %}
        server {{ hostvars[host]['ansible_facts']['nodename'] }}:{{ http_port }};
    {% endfor %}
    }

    server {
        listen 80;

        location / {   
                proxy_pass http://webservers;
        }
    }
```

Мы также можем определить ansible fact в нашем файле roles/apache2/templates/index.html.j2, чтобы мы могли понять, на каком веб-сервере мы находимся.

```html
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```

Результаты выполнения команды `ansible-playbook playbook6.yml` с нашими изменениями переменных означают, что когда мы нажимаем на наш loadbalancer, вы можете увидеть, что мы нажимаем на любой из веб-серверов, которые есть в нашей группе.
![](../images/Day68_config5.ru.png?v1)

Мы также можем добавить папку host_vars и создать web01.yml и иметь определенное сообщение или изменить то, как это выглядит для каждого хоста, если захотим.

### Файлы инвентаризации

До сих пор мы использовали файл hosts по умолчанию в папке /etc/ansible для определения наших хостов. Однако мы можем иметь разные файлы для разных окружений, например, production и staging. Я не собираюсь создавать больше окружений. Но мы можем создавать свои собственные файлы хостов.

Мы можем создать несколько файлов для нашего различного количества серверов и узлов. Мы будем вызывать их с помощью `ansible-playbook -i dev playbook.yml` Вы также можете определить переменные в файле hosts и затем распечатать их или использовать эти переменные где-нибудь еще в своих плейбуках. Например, в примере и учебном курсе, за которым я слежу ниже, они добавили переменную окружения, созданную в файле host, в шаблон веб-страницы loadbalancer, чтобы показать окружение как часть сообщения веб-страницы.

### Развертывание нашего сервера базы данных

У нас осталась еще одна машина, которую мы еще не включили и не настроили. Мы можем сделать это с помощью команды `vagrant up db01` из места, где находится наш Vagrantfile. Когда машина будет запущена и доступна, нам нужно убедиться, что SSH-ключ скопирован с помощью `ssh-copy-id db01`, чтобы мы могли получить доступ.

Мы будем работать из папки [ansible-scenario7](Configmgmt/ansible-scenario7).

Затем воспользуемся командой `ansible-galaxy init roles/mysql`, чтобы создать новую структуру папок для новой роли под названием "mysql".

В нашем плейбуке мы собираемся добавить новый блок для конфигурации базы данных. В файле /etc/ansible/hosts мы определили нашу группу базы данных. Затем мы указываем нашей группе базы данных роль common и новую роль mysql, которую мы создали в предыдущем шаге. Мы также помечаем нашу группу базы данных тегами database, что означает, как мы обсуждали ранее, что мы можем выбрать запуск только с этими тегами, если захотим.

```
- hosts: webservers
  become: yes
  roles:
    - common
    - apache2
  tags:
    web

- hosts: proxy
  become: yes
  roles:
    - common
    - nginx
  tags: 
    proxy

- hosts: database
  become: yes
  roles:
    - common
    - mysql
  tags: database
```

Теперь в структуре папок с нашими ролями автоматически создается дерево, в котором нам нужно заполнить следующее:

Handlers - main.yml

```
# handlers file for roles/mysql
- name: restart mysql
  service:
    name: mysql
    state: restarted
```

Tasks - install_mysql.yml, main.yml & setup_mysql.yml

install_mysql.yml - this task is going to be there to install mysql and ensure that the service is running.

```
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - python3-pip
   - mysql-client
   - python3-mysqldb
   - libmysqlclient-dev

- name: Ensure mysql-server is installed latest version
  apt: name=mysql-server state=latest

- name: Installing python module MySQL-python
  pip:
    name: PyMySQL

- name: Ensure mysql-server is running
  service:
    name: mysql
    state: started
```

main.yml is a pointer file that will suggest that we import_tasks from these files.

```
# tasks file for roles/mysql
- import_tasks: install_mysql.yml
- import_tasks: setup_mysql.yml
```

setup_mysql.yml - This task will create our database and database user.

```
- name: Create my.cnf configuration file
  template: src=templates/my.cnf.j2 dest=/etc/mysql/conf.d/mysql.cnf
  notify: restart mysql

- name: Create database user with name 'devops' and password 'DevOps90' with all database privileges
  community.mysql.mysql_user:
    login_unix_socket: /var/run/mysqld/mysqld.sock
    login_user: "{{ mysql_user_name }}" 
    login_password: "{{ mysql_user_password }}" 
    name: "{{db_user}}"
    password: "{{db_pass}}"
    priv: '*.*:ALL'
    host: '%'
    state: present

- name: Create a new database with name '90daysofdevops'
  mysql_db:
    login_user: "{{ mysql_user_name }}" 
    login_password: "{{ mysql_user_password }}"    
    name: "{{ db_name }}"
    state: present
```

Вы можете видеть, что мы используем некоторые переменные для определения некоторых конфигураций, таких как пароли, имена пользователей и базы данных, все это хранится в файле group_vars/all/common_variables.yml.

```
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"

mysql_user_name: root
mysql_user_password: "vagrant"
db_user: devops
db_pass: DevOps90
db_name: 90DaysOfDevOps
```

У нас также есть файл my.cnf.j2 в папке templates, который выглядит следующим образом:

```
[mysql]    
bind-address = 0.0.0.0
```

### Запуск плейбука

Теперь наша виртуальная машина запущена и работает, и у нас есть наши конфигурационные файлы на месте, теперь мы готовы запустить наш плейбук, который будет включать все, что мы сделали раньше, если мы запустим следующий `ansible-playbook playbook7.yml` или мы можем выбрать просто развертывание на нашу группу баз данных с помощью команды `ansible-playbook playbook7.yml --tags database`, которая просто запустит наши новые конфигурационные файлы.

Я запустил только тег database, но наткнулся на ошибку. Эта ошибка говорит мне, что у нас не установлен pip3 (Python). Мы можем исправить это, добавив это в наши общие задачи и установив

![](../images/Day68_config6.ru.png?v1)

Мы исправили вышеуказанное и запустили плейбук снова, и у нас получилось успешное изменение.

![](../images/Day68_config7.ru.png?v1)

Мы должны убедиться, что на нашем новом настроенном сервере db01 все так, как мы хотим. Мы можем сделать это с нашего узла управления с помощью команды `ssh db01`.

Для подключения к MySQL я использовал команду `sudo /usr/bin/mysql -u root -p` и указал пароль vagrant для root.

Когда мы подключились, давайте сначала убедимся, что у нас создан пользователь devops. `select user, host from mysql.user;`

![](../images/Day68_config8.ru.png?v1)

Теперь мы можем выполнить команду `SHOW DATABASES;`, чтобы увидеть нашу новую базу данных, которая также была создана.

![](../images/Day68_config9.ru.png?v1)

На самом деле я использовал root для подключения, но теперь мы можем войти в систему под учетной записью devops, используя команду `sudo /usr/bin/mysql -u devops -p`, но пароль здесь будет DevOps90.

Я обнаружил, что в нашем `setup_mysql.yml` мне пришлось добавить строку `login_unix_socket: /var/run/mysqld/mysqld.sock` для успешного подключения к моему экземпляру db01 mysql, и теперь каждый раз, когда я запускаю это, он сообщает об изменении при создании пользователя, любые предложения будут очень признательны.

## Ресурсы

- [What is Ansible](https://www.youtube.com/watch?v=1id6ERvfozo)
- [Ansible 101 - Episode 1 - Introduction to Ansible](https://www.youtube.com/watch?v=goclfp6a2IQ)
- [NetworkChuck - You need to learn Ansible right now!](https://www.youtube.com/watch?v=5hycyr-8EKs&t=955s)
- [Your complete guide to Ansible](https://www.youtube.com/playlist?list=PLnFWJCugpwfzTlIJ-JtuATD2MBBD7_m3u)

Этот последний плейлист, приведенный выше, является тем местом, откуда было взято много кода и идей для этого раздела, отличным ресурсом и руководством в видеоформате.
