---
title: Top Docker Commands
description: Most Popular Docker Commands
toc: true
tags: ["docker", "cheatsheet"]
series: ['CheatSheet']
categories: [docker, CheatSheet]
date: "2022-06-07"
lastmod: "2022-06-07"
featuredImage: featured.en.jpg
authors: [roman-kurnovskii]
---


## most popular
    
    docker images                       ##  lists the images
    docker pull imagename               ##  Pull an image or a repository from a registry
    docker ps -a                        ##  See a list of all containers, even the ones not running
    docker build -t imagename .         ##  Create image using this directory's Dockerfile
    docker run -p 4000:80 imagename     ##  Run "imagename" mapping port 4000 to 80
    docker rmi                          ##  removes the image
    docker rm                           ##  removes the container
    docker stop                         ##  stops the container
    docker volume ls                    ##  lists the volumes
    docker kill                         ##  kills the container
    docker logs                         ##  see logs
    docker inspect                      ##  shows all the info of a container

##  docker

    docker cp                                   ##  Copy files/folders between a container and the local filesystem
    docker pull imagename                       ##  Pull an image or a repository from a registry
    docker build -t imagename .                 ##  Create image using this directory's Dockerfile
    docker run -p 4000:80 imagename             ##  Run "imagename" mapping port 4000 to 80
    docker run -d -p 4000:80 imagename          ##  Same thing, but in detached mode
    docker exec -it [container-id] bash         ##  Enter a running container
    docker ps                                   ##  See a list of all running containers
    docker stop <hash>                          ##  Gracefully stop the specified container
    docker ps -a                                ##  See a list of all containers, even the ones not running
    docker kill <hash>                          ##  Force shutdown of the specified container
    docker rm <hash>                            ##  Remove the specified container from this machine
    docker rm -f <hash>                         ##  Remove force specified container from this machine
    docker rm $(docker ps -a -q)                ##  Remove all containers from this machine
    docker images -a                            ##  Show all images on this machine
    docker rmi <imagename>                      ##  Remove the specified image from this machine
    docker rmi $(docker images -q)              ##  Remove all images from this machine
    docker top  <container-id>                  ##  Display the running processes of a container
    docker logs <container-id> -f               ##  Live tail a container's logs
    docker login                                ##  Log in this CLI session using your Docker credentials
    docker tag <image> username/repository:tag  ##  Tag <image> for upload to registry
    docker push username/repository:tag         ##  Upload tagged image to registry
    docker run username/repository:tag          ##  Run image from a registry
    docker system prune                         ##  Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes. (Docker 17.06.1-ce and superior)
    docker system prune -a                      ##  Remove all unused containers, networks, images not just dangling ones (Docker 17.06.1-ce and superior)
    docker volume prune                         ##  Remove all unused local volumes
    docker network prune                        ##  Remove all unused networks

##  docker compose

    docker-compose up                               # Create and start containers
    docker-compose up -d                            # Create and start containers in detached mode
    docker-compose down                             # Stop and remove containers, networks, images, and volumes
    docker-compose logs                             # View output from containers
    docker-compose restart                          # Restart all service
    docker-compose pull                             # Pull all image service 
    docker-compose build                            # Build all image service
    docker-compose config                           # Validate and view the Compose file
    docker-compose scale <service_name>=<replica>   # Scale special service(s)
    docker-compose top                              # Display the running processes
    docker-compose run -rm -p 2022:22 web bash      # Start web service and runs bash as its command, remove old container.

##  docker services 

    docker service create <options> <image> <command>   # Create new service
    docker service inspect --pretty <service_name>      # Display detailed information Service(s)
    docker service ls                                   # List Services
    docker service ps                                   # List the tasks of Services
    docker service scale <service_name>=<replica>       # Scale special service(s)
    docker service update <options> <service_name>      # Update Service options

##  docker stack 

    docker stack ls                                 # List all running applications on this Docker host
    docker stack deploy -c <composefile> <appname>  # Run the specified Compose file
    docker stack services <appname>                 # List the services associated with an app
    docker stack ps <appname>                       # List the running containers associated with an app
    docker stack rm <appname>                       # Tear down an application

##  docker machine

    docker-machine create --driver virtualbox myvm1                           # Create a VM (Mac, Win7, Linux)
    docker-machine create -d hyperv --hyperv-virtual-switch "myswitch" myvm1  # Win10
    docker-machine env myvm1                                                  # View basic information about your node
    docker-machine ssh myvm1 "docker node ls"                                 # List the nodes in your swarm
    docker-machine ssh myvm1 "docker node inspect <node ID>"                  # Inspect a node
    docker-machine ssh myvm1 "docker swarm join-token -q worker"              # View join token
    docker-machine ssh myvm1                                                  # Open an SSH session with the VM; type "exit" to end
    docker-machine ssh myvm2 "docker swarm leave"                             # Make the worker leave the swarm
    docker-machine ssh myvm1 "docker swarm leave -f"                          # Make master leave, kill swarm
    docker-machine start myvm1                                                # Start a VM that is currently not running
    docker-machine stop $(docker-machine ls -q)                               # Stop all running VMs
    docker-machine rm $(docker-machine ls -q)                                 # Delete all VMs and their disk images
    docker-machine scp docker-compose.yml myvm1:~                             # Copy file to node's home dir
    docker-machine ssh myvm1 "docker stack deploy -c <file> <app>"            # Deploy an app



## Options for popular commands
### docker build

[Docs](https://docs.docker.com/engine/reference/commandline/build/)
Build an image from a Dockerfile.

```sh
docker build [DOCKERFILE PATH]
```

**Example**

Build an image tagged `my-org/my-image` where the Dockerfile can be found at
`/tmp/Dockerfile`.

```sh
docker build -t my-org:my-image -f /tmp/Dockerfile
```

**Flags**

- `--file -f` Path where to find the Dockerfile
- `--force-rm` Always remove intermediate containers
- `--no-cache` Do not use cache when building the image
- `--rm` Remove intermediate containers after a successful build (this is
`true`) by default
- `--tag -t` Name and optionally a tag in the ‘name:tag’ format


### docker run
[Docs](https://docs.docker.com/engine/reference/commandline/run/)

Creates and starts a container in one operation. Could be used to execute a
single command as well as start a long-running container.

**Example**

```sh
docker run -it ubuntu:latest /bin/bash
```

This will start a ubuntu container with the entrypoint `/bin/bash`. Note that
if you do not have the `ubuntu` image downloaded it will download it before
running it.

**Flags**

- `-it` This will not make the container you started shut down immediately, as
it will create a pseudo-TTY session (`-t`) and keep STDIN open (`-i`)
- `--rm` Automatically remove the container when it exit. Otherwise it will be
stored and visible running `docker ps -a`.
- `--detach -d` Run container in background and print container ID
- `--volume -v` Bind mount a volume. Useful for accessing folders on your local
disk inside your docker container, like configuration files or storage that
should be persisted (database, logs etc.).

### docker exec

[Docs](https://docs.docker.com/engine/reference/commandline/exec/)

Execute a command inside a **running** container.

```sh
docker exec [CONTAINER ID]
```

**Example**

```sh
docker exec [CONTAINER ID] touch /tmp/exec_works
```

**Flags**

- `--detach -d` Detached mode: run command in the background
- `-it` This will not make the container you started shut down immediately, as
it will create a pseudo-TTY session (`-t`) and keep STDIN open (`-i`)

###  docker images
[Docs](https://docs.docker.com/engine/reference/commandline/images/)

List all downloaded/created images.

```sh
docker images
```

**Flags**

- `-q` Only show numeric IDs

### docker inspect
[Docs](https://docs.docker.com/engine/reference/commandline/inspect)

Shows all the info of a container.

```sh
docker inspect [CONTAINER ID]
```

### docker logs
[Docs](https://docs.docker.com/engine/reference/commandline/logs/)

Gets logs from container.

```sh
docker logs [CONTAINER ID]
```

**Flags**

- `--details` Log extra details
- `--follow -f` Follow log output. Do not stop when end of file is reached, but
rather wait for additional data to be appended to the input.
- `--timestamps -t` Show timestamps

### docker ps
[Docs](https://docs.docker.com/engine/reference/commandline/ps/)

Shows information about all running containers.

```sh
docker ps
```

**Flags**

- `--all -a` Show all containers (default shows just running)
- `--filter -f` Filter output based on conditions provided, `docker ps -f="name="example"`
- `--quiet -q` Only display numeric IDs

### docker rmi
[Docs](https://docs.docker.com/engine/reference/commandline/rmi/)

Remove one or more images.

```sh
docker rmi [IMAGE ID]
```

**Flags**

- `--force -f` Force removal of the image


## Snippets

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


### Remove all docker images with none tag

```sh
docker rmi --force $(docker images --filter "dangling=true" -q)
```

###  See all space Docker take up

```sh
docker system df
```

###  Get IP address of running container

```sh
docker inspect [CONTAINER ID] | grep -wm1 IPAddress | cut -d '"' -f 4
```

###  Kill all running containers

```sh
docker kill $(docker ps -q)
```

##  Resources

- [docs.docker.com](https://docs.docker.com/engine/reference/run/)
- [docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet)
- [docker-cheat-sheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/docker.sh)
- [https://sourabhbajaj.com/mac-setup/Docker/](https://sourabhbajaj.com/mac-setup/Docker/)
