---
title: Most Popular Docker Commands
description: Most Popular Docker Commands
toc: true
tags: ["docker", "cheatsheet"]
series: ['шпаргалки']
categories: [Docker]
date: "2022-06-07"
lastmod: "2022-06-07"
featuredImage: featured.en.jpg
authors: [roman-kurnovskii]
---

Here follows a list of useful Docker commands with useful flags for each command.

## docker build
[Docs](https://docs.docker.com/engine/reference/commandline/build/)
Build an image from a Dockerfile.

```sh
docker build [DOCKERFILE PATH]
```

### Example

Build an image tagged `my-org/my-image` where the Dockerfile can be found at
`/tmp/Dockerfile`.

```sh
docker build -t my-org:my-image -f /tmp/Dockerfile
```

### Useful flags

- `--file -f` Path where to find the Dockerfile
- `--force-rm` Always remove intermediate containers
- `--no-cache` Do not use cache when building the image
- `--rm` Remove intermediate containers after a successful build (this is
`true`) by default
- `--tag -t` Name and optionally a tag in the ‘name:tag’ format


## docker run
[Docs](https://docs.docker.com/engine/reference/commandline/run/)

Creates and starts a container in one operation. Could be used to execute a
single command as well as start a long-running container.

Example:

```sh
docker run -it ubuntu:latest /bin/bash
```

This will start a ubuntu container with the entrypoint `/bin/bash`. Note that
if you do not have the `ubuntu` image downloaded it will download it before
running it.

### Useful flags

- `-it` This will not make the container you started shut down immediately, as
it will create a pseudo-TTY session (`-t`) and keep STDIN open (`-i`)
- `--rm` Automatically remove the container when it exit. Otherwise it will be
stored and visible running `docker ps -a`.
- `--detach -d` Run container in background and print container ID
- `--volume -v` Bind mount a volume. Useful for accessing folders on your local
disk inside your docker container, like configuration files or storage that
should be persisted (database, logs etc.).

## docker exec
[Docs](https://docs.docker.com/engine/reference/commandline/exec/)

Execute a command inside a **running** container.

```sh
docker exec [CONTAINER ID]
```

### Example

```sh
docker exec [CONTAINER ID] touch /tmp/exec_works
```

### Useful flags

- `--detach -d` Detached mode: run command in the background
- `-it` This will not make the container you started shut down immediately, as
it will create a pseudo-TTY session (`-t`) and keep STDIN open (`-i`)

## docker images
[Docs](https://docs.docker.com/engine/reference/commandline/images/)

List all downloaded/created images.

```sh
docker images
```

### Useful flags

- `-q` Only show numeric IDs

## docker inspect
[Docs](https://docs.docker.com/engine/reference/commandline/inspect)

Shows all the info of a container.

```sh
docker inspect [CONTAINER ID]
```

## docker logs
[Docs](https://docs.docker.com/engine/reference/commandline/logs/)

Gets logs from container.

```sh
docker logs [CONTAINER ID]
```

### Useful flags

- `--details` Log extra details
- `--follow -f` Follow log output. Do not stop when end of file is reached, but
rather wait for additional data to be appended to the input.
- `--timestamps -t` Show timestamps

## docker ps
[Docs](https://docs.docker.com/engine/reference/commandline/ps/)

Shows information about all running containers.

```sh
docker ps
```

### Useful flags

- `--all -a` Show all containers (default shows just running)
- `--filter -f` Filter output based on conditions provided, `docker ps -f="name="example"`
- `--quiet -q` Only display numeric IDs

## docker rmi
[Docs](https://docs.docker.com/engine/reference/commandline/rmi/)

Remove one or more images.

```sh
docker rmi [IMAGE ID]
```

### Useful flags

- `--force -f` Force removal of the image


## Docker Tips and Tricks

A collection of useful tips and tricks for Docker.

### Delete all containers

**NOTE:** This will remove ALL your containers.

```sh
docker container prune
```

OR, if you're using an older docker client:

```sh
docker rm $(docker ps -a -q)
```

### Delete all untagged containers

```sh
docker image prune
```

OR, if you're using an older docker client:

```sh
docker rmi $(docker images | grep '^<none>' | awk '{print $3}')
```

### See all space Docker take up

```sh
docker system df
```

### Get IP address of running container

```sh
docker inspect [CONTAINER ID] | grep -wm1 IPAddress | cut -d '"' -f 4
```

### Kill all running containers

```sh
docker kill $(docker ps -q)
```


## Links

- [docs.docker.com](https://docs.docker.com/engine/reference/run/)
- [docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)
- [https://sourabhbajaj.com/mac-setup/Docker/](https://sourabhbajaj.com/mac-setup/Docker/)
