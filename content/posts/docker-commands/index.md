---
title: Популярные команды Docker
description: Основные команды Docker, которыми пользуюсь в процессе разработки.
toc: true
authors:
  - roman-kurnovskii
tags:
  ["docker", "cheatsheet"]
categories: ['шпаргалки']
series: ['шпаргалки']
date: "2022-06-07"
lastmod: "2022-06-07"
featuredImage: /posts/docker-commands/featured.jpg
draft: false
TODO: translate
---

## [docker build](https://docs.docker.com/engine/reference/commandline/build/)

Построить образ из Dockerfile.

```sh
docker build [DOCKERFILE PATH]
```

### Примеры

Построить образ с меткой `my-org/my-image`, используя Dockerfile в `/tmp/Dockerfile`.

```sh
docker build -t my-org:my-image -f /tmp/Dockerfile
```

### Флаги

- `--file -f` Путь, где находится Dockerfile
- `--force-rm` Всегда удалять временные контейнеры.
- `--no-cache` Не использовать кэш при построении образа.
- `--rm` Удалить временные контейнеры после успешного построения.
- `--tag -t` Название и возможный тег в формате `name:tag` или просто тег `my_tag` (опционально)

## [docker exec](https://docs.docker.com/engine/reference/commandline/exec/)

Выполнить команду внутри **запущенного** контейнера.

```sh
docker exec [CONTAINER ID]
```

### Примеры

```sh
docker exec [CONTAINER ID] touch /tmp/exec_works
```

### Флаги

- `--detach -d` Detached mode: запуск в фоновом режиме
- `-it` запуск в интерактивном режиме. запуск псевдотерминала pseudo-TTY  (`-t`) и перенаправление ввода-вывода (STDIN) (`-i`). Даёт доступ к выполнению команд в терминале контейнера.


## [docker images](https://docs.docker.com/engine/reference/commandline/images/)

список всех загруженных/созданных образов

```sh
docker images
```

### Флаги

- `-q` показать только ID образов

## [docker inspect](https://docs.docker.com/engine/reference/commandline/inspect)

Показать всю информацию о контейнере.

```sh
docker inspect [CONTAINER ID]
```

## [docker logs](https://docs.docker.com/engine/reference/commandline/logs/)

Вывести логи контейнера.

```sh
docker logs [CONTAINER ID]
```

### Флаги

- `--details`  Показывает дополнительную информацию в логе.
- `--follow -f` Следить за выводом журнала
- `--timestamps -t` Показать журналы с меткой времени

## [docker ps](https://docs.docker.com/engine/reference/commandline/ps/)

Показывает информацию о всех запущенных контейнерах.


```sh
docker ps
```

### Флаги

- `--all -a` Show all containers (default shows just running)
- `--filter -f` Filter output based on conditions provided, `docker ps -f="name="example"`
- `--quiet -q` Only display numeric IDs

## [docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)

Remove one or more images.

```sh
docker rmi [IMAGE ID]
```

### Флаги

- `--force -f` Force removal of the image

## [docker run](https://docs.docker.com/engine/reference/commandline/run/)

Creates and starts a container in one operation. Could be used to execute a
single command as well as start a long-running container.

Example:

```sh
docker run -it ubuntu:latest /bin/bash
```

This will start a ubuntu container with the entrypoint `/bin/bash`. Note that
if you do not have the `ubuntu` image downloaded it will download it before
running it.

### Флаги

- `-it` This will not make the container you started shut down immediately, as
it will create a pseudo-TTY session (`-t`) and keep STDIN open (`-i`)
- `--rm` Automatically remove the container when it exit. Otherwise it will be
stored and visible running `docker ps -a`.
- `--detach -d` Run container in background and print container ID
- `--volume -v` Bind mount a volume. Useful for accessing folders on your local
disk inside your docker container, like configuration files or storage that
should be persisted (database, logs etc.).

## Советы и рекомендации по докеру

Сборник полезных советов и хитростей для Docker.

### Удалить все контейнеры

**NOTE:** Удалить ВСЕ контенеры.

```sh
docker container prune
```

или

```sh
docker rm $(docker ps -a -q)
```

### Удалить все непомеченные контейнеры

```sh
docker image prune
```

### Посмомтреть сколько памяти занимает Docker

```sh
docker system df
```

### Получить IP-адрес работающего контейнера

```sh
docker inspect [CONTAINER ID] | grep -wm1 IPAddress | cut -d '"' -f 4
```

### Kill all running containers

```sh
docker kill $(docker ps -q)
```


## Ссылки

- [docs.docker.com](https://docs.docker.com/engine/reference/run/)
- A list of more useful Docker commands can be found in the
[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)
- [https://sourabhbajaj.com/mac-setup/Docker/](https://sourabhbajaj.com/mac-setup/Docker/)

