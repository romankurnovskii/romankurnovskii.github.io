---
title: 60. Контейнеры, провайдеры и модули Docker
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-19"
lastmod: "2022-06-19"
featuredImage:
draft: false
id: 1049052
---
## Контейнеры и модули Docker 

[Вчера](../day59) мы развернули виртуальную машину с помощью Terraform в нашей локальной среде FREE virtualbox. В этом разделе мы собираемся развернуть контейнер Docker с некоторой конфигурацией в нашей локальной среде Docker. 

### Docker Demo

Для начала мы используем приведенный ниже блок кода, суть которого заключается в том, что мы хотим развернуть простое веб-приложение в docker и опубликовать его, чтобы оно было доступно в нашей сети. Мы будем использовать nginx и сделаем его доступным извне на нашем ноутбуке через localhost и порт 8000. Мы используем провайдера docker из сообщества, и вы можете видеть образ docker, который мы используем, также указанный в нашей конфигурации.

```
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "tutorial"
  ports {
    internal = 80
    external = 8000
  }
}
```

Первой задачей является использование команды `terraform init` для загрузки провайдера на нашу локальную машину. 

![](../images/Day60_IAC1.png?v1)

Затем мы запускаем команду `terraform apply`, а затем `docker ps`, и вы можете увидеть, что у нас есть запущенный контейнер. 

![](../images/Day60_IAC2.png?v1)

Если мы откроем браузер, то перейдем по адресу http://localhost:8000/ и увидим, что у нас есть доступ к нашему контейнеру NGINX. 

![](../images/Day60_IAC3.png?v1)

Вы можете узнать больше информации о [Docker Provider](https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs/resources/container). 

Выше приведена очень простая демонстрация того, что можно сделать с помощью Terraform плюс Docker и как мы теперь можем управлять этим в состоянии Terraform. Мы рассматривали docker compose в разделе о контейнерах, и есть небольшое пересечение между этим, инфраструктурой как код, а также Kubernetes. 

Для демонстрации того, как Terraform может справиться с более сложными задачами, мы возьмем файл docker compose для wordpress и mysql, который мы создали с помощью docker compose, и поместим его в Terraform. Вы можете найти [docker-wordpress.tf](/Days/IaC/Docker-Wordpress/docker-wordpress.tf)

```tf
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }
}

provider "docker" {}

variable wordpress_port {
  default = "8080"
}

resource "docker_volume" "db_data" {
  name = "db_data"
}

resource "docker_network" "wordpress_net" {
  name = "wordpress_net"
}

resource "docker_container" "db" {
  name  = "db"
  image = "mysql:5.7"
  restart = "always"
  network_mode = "wordpress_net"
  env = [
     "MYSQL_ROOT_PASSWORD=wordpress",
     "MYSQL_PASSWORD=wordpress",
     "MYSQL_USER=wordpress",
     "MYSQL_DATABASE=wordpress"
  ]
  mounts {
    type = "volume"
    target = "/var/lib/mysql"
    source = "db_data"
    }
}

resource "docker_container" "wordpress" {
  name  = "wordpress"
  image = "wordpress:latest"
  restart = "always"
  network_mode = "wordpress_net"
  env = [
    "WORDPRESS_DB_HOST=db:3306",
    "WORDPRESS_DB_USER=wordpress",
    "WORDPRESS_DB_NAME=wordpress",
    "WORDPRESS_DB_PASSWORD=wordpress"
  ]
  ports {
    internal = "80"
    external = "${var.wordpress_port}"
  }
}
```

Мы снова помещаем это в новую папку и затем запускаем команду `terraform init`, чтобы извлечь необходимые нам провайдеры. 

![](../images/Day60_IAC4.png?v1)

Затем мы запускаем команду `terraform apply` и смотрим на вывод docker ps, мы должны увидеть наши только что созданные контейнеры. 

![](../images/Day60_IAC5.png?v1)

Затем мы можем перейти к нашему фронт-энду WordPress. Точно так же, как мы проходили этот процесс с docker-compose в разделе о контейнерах, теперь мы можем выполнить установку, и наши посты wordpress будут жить в нашей базе данных MySQL. 

![](../images/Day60_IAC6.png?v1)

Очевидно, что теперь мы рассмотрели контейнеры и Kubernetes в некоторых деталях, мы, вероятно, знаем, что это подходит для тестирования, но если бы вы действительно собирались запустить веб-сайт, вы бы не стали делать это только с помощью контейнеров и рассмотрели бы использование Kubernetes для достижения этой цели, Далее мы рассмотрим использование Terraform с Kubernetes. 

### Provisioners 

Провайдеры существуют для того, чтобы если что-то не может быть декларировано, у нас был способ разобрать это для нашего развертывания. 

Если у вас нет другой альтернативы, и добавление такой сложности в ваш код - это то, что вам нужно, то вы можете сделать это, выполнив что-то похожее на следующий блок кода. 

```
ресурс "docker_container" "db" {  # ...

  provisioner "local-exec" {
    command = "echo The server's IP address is ${self.private_ip}"
  }
}

```

Удаленный исполнительный провайдер вызывает скрипт на удаленном ресурсе после его создания. Это может быть использовано для чего-то специфического для ОС, или это может быть использовано для обертывания в инструмент управления конфигурацией. Хотя заметьте, что некоторые из них мы уже рассмотрели в собственных провайдерах.


Средство подготовки удаленных исполняемых файлов вызывает скрипт на удаленном ресурсе после его создания. Это может быть использовано для чего-то определенного для ОС или может быть использовано для включения инструмента управления конфигурацией. Хотя обратите внимание, что у нас есть некоторые из них, покрытые их собственными провизорами.
Подробнее о провизорах](https://www.terraform.io/language/resources/provisioners/syntax)	
- file
- local-exec 
- remote-exec 
- vendor 
    - ansible
    - chef
    - puppet 

### Модули 

Модули - это контейнеры для нескольких ресурсов, которые используются вместе. Модуль состоит из коллекции файлов .tf в одном каталоге. 

Модули - это хороший способ разделить ресурсы инфраструктуры, а также возможность использовать уже созданные сторонние модули, чтобы не изобретать колесо. 

Например, если бы мы хотели использовать один и тот же проект для создания нескольких виртуальных машин, VPC, групп безопасности, а затем кластера Kubernetes, мы бы, вероятно, захотели разделить наши ресурсы на модули, чтобы лучше определить наши ресурсы и их группировку. 

Еще одним преимуществом модулей является то, что вы можете взять эти модули и использовать их в других проектах или публично поделиться ими, чтобы помочь сообществу. 

Мы разбиваем нашу инфраструктуру на компоненты, компоненты известны здесь как модули.

## Ресурсы 

- [What is Infrastructure as Code? Difference of Infrastructure as Code Tools ](https://www.youtube.com/watch?v=POPP2WTJ8es)
- [Terraform Tutorial | Terraform Course Overview 2021](https://www.youtube.com/watch?v=m3cKkYXl-8o)
- [Terraform explained in 15 mins | Terraform Tutorial for Beginners ](https://www.youtube.com/watch?v=l5k1ai_GBDE)
- [Terraform Course - From BEGINNER to PRO!](https://www.youtube.com/watch?v=7xngnjfIlK4&list=WL&index=141&t=16s)
- [HashiCorp Terraform Associate Certification Course](https://www.youtube.com/watch?v=V4waklkBC38&list=WL&index=55&t=111s)
- [Terraform Full Course for Beginners](https://www.youtube.com/watch?v=EJ3N-hhiWv0&list=WL&index=39&t=27s)
- [KodeKloud -  Terraform for DevOps Beginners + Labs: Complete Step by Step Guide!](https://www.youtube.com/watch?v=YcJ9IeukJL8&list=WL&index=16&t=11s)
- [Terraform Simple Projects](https://terraform.joshuajebaraj.com/)
- [Terraform Tutorial - The Best Project Ideas](https://www.youtube.com/watch?v=oA-pPa0vfks)
- [Awesome Terraform](https://github.com/shuaibiyy/awesome-terraform)
