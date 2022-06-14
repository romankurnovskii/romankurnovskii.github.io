---
title: 46 - Docker Compose
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-05"
lastmod: "2022-06-05"
featuredImage:
draft: false
id: 1048740
---
## Docker Compose 

Возможность запуска одного контейнера может быть отличной, если у вас есть самодостаточный образ, в котором есть все, что вам нужно для одного случая использования, но все становится интересным, когда вы ищете возможность создания нескольких приложений между различными образами контейнеров. Например, если у меня есть фронт-энд сайта, но есть потребность в базе данных бэкенда, я могу поместить все в один контейнер, но лучше и эффективнее было бы иметь собственный контейнер для базы данных. 

Именно здесь на помощь приходит Docker compose - инструмент, позволяющий запускать более сложные приложения в нескольких контейнерах. Преимущество заключается в том, что для запуска приложения можно использовать один файл и команду. Пример, который я собираюсь рассмотреть в этой заметке, взят из [Docker QuickStart sample apps (Quickstart: Compose and WordPress)] (https://docs.docker.com/samples/wordpress/).

В этом первом примере мы собираемся: 

- Использовать Docker compose для создания WordPress и отдельного экземпляра MySQL. 
- Использовать YAML файл, который будет называться `docker-compose.yml`.
- Соберите проект 
- Настроить WordPress через браузер
- Выключение и очистка

### Установка Docker Compose 
Как уже упоминалось, Docker Compose - это инструмент, если вы работаете на macOS или Windows, то compose включен в вашу установку Docker Desktop. Однако вы можете захотеть запустить свои контейнеры на сервере Windows или Linux, и в этом случае вы можете установить их, используя эти инструкции [Install Docker Compose](https://docs.docker.com/compose/install/). 

Чтобы убедиться, что `docker-compose` установлен в нашей системе, мы можем открыть терминал и просто ввести приведенную выше команду. 

![](../images/Day46_Containers1.png?v1)

### Docker-Compose.yml (YAML)

Следующее, о чем нужно поговорить, это docker-compose.yml, который вы можете найти в папке container репозитория. Но что более важно, нам нужно немного обсудить YAML в целом. 

YAML можно было бы посвятить отдельную сессию, поскольку вы можете встретить его в самых разных местах. Но по большей части 

"YAML - это удобный для человека язык сериализации данных для всех языков программирования".

Он обычно используется для файлов конфигурации и в некоторых приложениях, где данные хранятся или передаются. Вы, несомненно, сталкивались с XML-файлами, которые обычно предлагают тот самый файл конфигурации. YAML предоставляет минимальный синтаксис, но нацелен на те же случаи использования. 

YAML Ain't Markup Language (YAML) - это язык сериализации, популярность которого неуклонно растет в течение последних нескольких лет. Возможности сериализации объектов делают его реальной заменой таким языкам, как JSON.

Аббревиатура YAML была сокращением от Yet Another Markup Language. Но сопровождающие переименовали его в YAML Ain't Markup Language, чтобы сделать больший акцент на его функциях, ориентированных на данные.

В любом случае, вернемся к файлу docker-compose.yml. Это файл конфигурации того, что мы хотим сделать, когда речь идет о развертывании нескольких контейнеров на нашей единой системе. 

Прямо из приведенного выше руководства вы можете увидеть, что содержимое файла выглядит следующим образом:  

```
version: "3.9"
    
services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: somewordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    volumes:
      - wordpress_data:/var/www/html
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: {}
  wordpress_data: {}
```

Мы объявляем версию, а затем большая часть этого файла docker-compose.yml состоит из наших служб, у нас есть служба db и служба wordpress. Вы можете видеть, что для каждого из них определено изображение, с которым связан тег версии. В отличие от наших первых прохождений, сейчас мы также вводим состояние в нашу конфигурацию, но теперь мы собираемся создать тома, чтобы мы могли хранить там наши базы данных. 

Затем у нас есть некоторые переменные окружения, такие как пароли и имена пользователей. Очевидно, что эти файлы могут стать очень сложными, но конфигурационный файл YAML упрощает то, как они выглядят в целом. 

### Сборка проекта 

Далее мы можем вернуться в терминал и использовать некоторые команды с помощью нашего инструмента docker-compose. Перейдите в каталог, где находится ваш файл docker-compose.yml. 

В терминале мы можем просто выполнить команду `docker-compose up -d`, которая запустит процесс извлечения образов и создания вашего многоконтейнерного приложения. 

Символ `-d` в этой команде означает отделенный режим, что означает, что команда Run выполняется или будет выполняться в фоновом режиме.

![](../images/Day46_Containers2.png?v1)

Если теперь мы выполним команду `docker ps`, вы увидите, что у нас запущено 2 контейнера, один из которых - wordpress, а другой - mySQL. 

![](../images/Day46_Containers3.png?v1)

Далее мы можем проверить, что у нас запущен WordPress, открыв браузер и перейдя по адресу `http://localhost:8000`, вы должны увидеть страницу установки wordpress. 

![](../images/Day46_Containers4.png?v1)

Мы можем выполнить настройку WordPress, а затем начать создавать наш сайт по своему усмотрению в консоли ниже. 

![](../images/Day46_Containers5.png?v1)

Если мы откроем новую вкладку и перейдем по тому же адресу, что и раньше `http://localhost:8000`, то увидим простую тему по умолчанию с названием нашего сайта "90DaysOfDevOps", а затем образец поста. 

![](../images/Day46_Containers6.png?v1)

Прежде чем мы сделаем какие-либо изменения, откройте Docker Desktop и перейдите на вкладку volumes, здесь вы увидите два тома, связанных с нашими контейнерами, один для wordpress и один для db. 

![](../images/Day46_Containers7.png?v1)

Моя текущая тема для wordpress - "Twenty Twenty-Two", и я хочу изменить ее на "Twenty Twenty" Вернувшись в панель управления, мы можем внести эти изменения. 

![](../images/Day46_Containers8.png?v1)

Я также собираюсь добавить новый пост на свой сайт, и здесь ниже вы видите последнюю версию нашего нового сайта. 

![](../images/Day46_Containers9.png?v1) 

### Очищать или нет

Если мы сейчас используем команду `docker-compose down`, это приведет к остановке наших контейнеров. Но наши тома останутся на месте. 

![](../images/Day46_Containers10.png?v1)

Мы можем просто подтвердить в Docker Desktop, что наши тома все еще там. 

![](../images/Day46_Containers11.png?v1)

Если мы захотим вернуть все обратно, мы можем выполнить команду `docker up -d` из той же директории, и наше приложение снова будет запущено. 

![](../images/Day46_Containers12.png?v1)

Затем мы переходим в браузере по тому же адресу `http://localhost:8000` и замечаем, что наш новый пост и смена темы все еще на месте. 

![](../images/Day46_Containers13.png?v1)

Если мы хотим избавиться от контейнеров и этих томов, то выполнение команды `docker-compose down --volumes` также уничтожит тома. 

![](../images/Day46_Containers14.png?v1)

Теперь, когда мы снова используем `docker-compose up -d`, мы начнем все сначала, однако образы все еще будут локальными в нашей системе, поэтому вам не нужно будет повторно брать их из репозитория DockerHub. 

Я знаю, что когда я начал погружаться в docker-compose и его возможности, я был в замешательстве относительно того, где он находится рядом с инструментами оркестровки контейнеров, такими как Kubernetes, ну, все, что мы сделали здесь в этой короткой демонстрации, сосредоточено на одном хосте, у нас есть wordpress и db, запущенные на локальной настольной машине. У нас нет нескольких виртуальных машин или нескольких физических машин, у нас также нет возможности легко увеличивать и уменьшать требования нашего приложения. 

В следующем разделе мы рассмотрим Kubernetes, но сначала у нас есть еще несколько дней, посвященных контейнерам в целом. 

Это также отличный ресурс для примеров приложений docker compose с множеством интеграций. [Awesome-Compose](https://github.com/docker/awesome-compose).

В вышеупомянутом репозитории есть отличный пример, который развернет Elasticsearch, Logstash и Kibana (ELK) на одном узле. 

Я загрузил файлы в папку [Containers](https://github.com/MichaelCade/90DaysOfDevOps/tree/main/Days/Containers/elasticsearch-logstash-kibana) Когда у вас есть эта папка локально, перейдите туда и вы можете просто использовать `docker-compose up -d`. 

![](../images/Day46_Containers15.png?v1)

Затем мы можем проверить наличие запущенных контейнеров с помощью `docker ps`. 

![](../images/Day46_Containers16.png?v1)

Теперь мы можем открыть браузер для каждого из контейнеров: 

![](../images/Day46_Containers17.png?v1)

Чтобы удалить все, мы можем использовать команду `docker-compose down`.  

## Ресурсы 

- [TechWorld with Nana - Docker Tutorial for Beginners](https://www.youtube.com/watch?v=3c-iBn73dDE)
- [Programming with Mosh - Docker Tutorial for Beginners](https://www.youtube.com/watch?v=pTFZFxd4hOI)
- [Docker Tutorial for Beginners - What is Docker? Introduction to Containers](https://www.youtube.com/watch?v=17Bl31rlnRM&list=WL&index=128&t=61s)
- [WSL 2 with Docker getting started](https://www.youtube.com/watch?v=5RQbdMn04Oc)
- [Blog on gettng started building a docker image](https://stackify.com/docker-build-a-beginners-guide-to-building-docker-images/)
- [Docker documentation for building an image](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [YAML Tutorial: Everything You Need to Get Started in Minute](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)

