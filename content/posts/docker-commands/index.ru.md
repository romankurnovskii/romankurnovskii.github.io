---
title: Популярные команды Docker
description: Основные команды Docker, которыми пользуюсь в процессе разработки.
toc: true
tags: ["docker", "cheatsheet"]
series: ['шпаргалки']
categories: [Docker]
date: "2022-06-07"
lastmod: "2022-06-07"
featuredImage: /ru/posts/docker-commands/featured.jpg
authors: [roman-kurnovskii]
---

## Топ 10 комманд Docker
1. docker ps — смотрим список запущенных контейнеров
2. docker pull — загрузка образа
3. docker build — собирает образ
4. docker logs — смотрим логи
5. docker run — запускаем контейнер
6. docker stop — останавливает контейнер
7. docker kill — «убивает» контейнер
8. docker rm — удаляет контейнер
9. docker rmi — удаляет образ
10. docker volume ls — список томов

## docker build
[Документация](https://docs.docker.com/engine/reference/commandline/build/)
Построить образ из Dockerfile.

```sh
docker build [DOCKERFILE PATH]
```

### Флаги

- `--file -f` Путь, где находится Dockerfile
- `--force-rm` Всегда удалять временные контейнеры.
- `--no-cache` Не использовать кэш при построении образа.
- `--rm` Удалить временные контейнеры после успешного построения.
- `--tag -t` Название и возможный тег в формате `name:tag` или просто тег `my_tag` (опционально)

### Примеры

Построить образ с меткой `my-org/my-image`, используя Dockerfile в `/tmp/Dockerfile`.

```sh
docker build -t my-org:my-image -f /tmp/Dockerfile
```

## docker run
[Документация](https://docs.docker.com/engine/reference/commandline/run/)

Создает и запускает контейнер за один операционный шаг

### Примеры

```sh
docker run -it ubuntu:latest /bin/bash
```
Данная команда запустит контейнер ubuntu и при старте сразу запустит `/bin/bash`. Если  образ ubuntu не был загружен ранее, он загрузится перед запуском.

### Флаги

- `-it` This will not make the container you started shut down immediately, as
it will create a pseudo-TTY session (`-t`) and keep STDIN open (`-i`)
- `--rm` Automatically remove the container when it exit. Otherwise it will be
stored and visible running `docker ps -a`.
- `--detach -d` Run container in background and print container ID
- `--volume -v` Bind mount a volume. Useful for accessing folders on your local
disk inside your docker container, like configuration files or storage that
should be persisted (database, logs etc.).

## docker exec
[Документация](https://docs.docker.com/engine/reference/commandline/exec/)
Выполнить команду внутри **запущенного** контейнера.

```sh
docker exec [CONTAINER ID]
```
### Флаги

- `--detach -d` Detached mode: запуск в фоновом режиме
- `-it` запуск в интерактивном режиме. запуск псевдотерминала pseudo-TTY  (`-t`) и перенаправление ввода-вывода (STDIN) (`-i`). Даёт доступ к выполнению команд в терминале контейнера.

### Примеры

```sh
docker exec [CONTAINER ID] touch /tmp/exec_works
```
## docker images
[Документация](https://docs.docker.com/engine/reference/commandline/images/)
Вывести список всех загруженных/созданных образов

```sh
docker images
```

### Флаги

- `-q` показать только ID образов

## docker inspect
[Документация](https://docs.docker.com/engine/reference/commandline/inspect)

Показать всю информацию о контейнере.

```sh
docker inspect [CONTAINER ID]
```

## docker logs
[Документация](https://docs.docker.com/engine/reference/commandline/logs/)

Вывести логи контейнера.

```sh
docker logs [CONTAINER ID]
```

### Флаги

- `--details`  Показывает дополнительную информацию в логе.
- `--follow -f` Следить за выводом журнала
- `--timestamps -t` Показать журналы с меткой времени

## docker ps
[Документация](https://docs.docker.com/engine/reference/commandline/ps/)

Показывает информацию о всех запущенных контейнерах.


```sh
docker ps
```

### Флаги

- `--all -a` Show all containers (default shows just running)
- `--filter -f` Filter output based on conditions provided, `docker ps -f="name="example"`
- `--quiet -q` Only display numeric IDs

## docker rmi
[Документация](https://docs.docker.com/engine/reference/commandline/rmi/)

Удалить один или несколько образов.

```sh
docker rmi [IMAGE ID]
```

### Флаги

- `--force -f` Force removal of the image


## Советы и рекомендации по докеру

Сборник полезных советов по Docker.

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

### Вывести сколько памяти занимает Docker

```sh
docker system df
```

### Получить IP-адрес работающего контейнера

```sh
docker inspect [CONTAINER ID] | grep -wm1 IPAddress | cut -d '"' -f 4
```

### Сгенерировать образ на основе файла Dockerfile и добавить этому образу имя и версию
  
```sh
docker build -t new_image_name:v1 .
```

`.` означает текущую директорию, где расположен файл Dockerfile.

### Сгенерировать из запущенного контейнера новый образ
  
```sh
docker commit [CONTAINER ID] [NEW IMAGE NAME]
```

### "Убить" все запущенные контейнеры

```sh
docker kill $(docker ps -q)
```

## Ссылки

- [docs.docker.com](https://docs.docker.com/engine/reference/run/)
- [docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)
- [https://sourabhbajaj.com/mac-setup/Docker/](https://sourabhbajaj.com/mac-setup/Docker/)

