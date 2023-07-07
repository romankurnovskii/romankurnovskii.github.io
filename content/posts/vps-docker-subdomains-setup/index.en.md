---
title: Setup subdomains on VPS CentOS
seoTitle: Setup subdomains on VPS CentOS. Example with Docker.
description: Setup subdomains on VPS CentOS. Example with Docker image.
toc: true
tags: [docker, nginx, nodejs, programming]
series: []
categories: [Programming]
date: 2023-03-07
lastmod: 2023-05-15
featuredImage: https://picsum.photos/688/235?grayscale
authors: [roman-kurnovskii]
---

## Create Projects

Creating three example projects:

1. node.js express server that returns json on request
2. another node.js express server
3. static html page

Place projects data in dir 'projects'.

Structure:

```
└── project
   ├── Dockerfile
   ├── nginx.conf
   ├── projects
   |  ├── 1
   |  |  ├── app.js
   |  |  └── package.json
   |  ├── 2
   |  |  ├── app.js
   |  |  └── package.json
   |  └── 3
   |     └── index.html
   └── start.sh
```

## Nginx setup

Server needs to "understand" the initial subdomain and where to forward.

For this use reverse proxy:

```
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    sendfile on;

    server {
        listen 80;
        server_name mydomain1.localhost;

        location / {
            proxy_pass http://localhost:3000;
        }
    }

    server {
        listen 80;
        server_name mydomain2.localhost;

        location / {
            proxy_pass http://localhost:4000;
        }
    }

    server {
        listen 80;
        server_name mydomain3.localhost;
        root /var/www/domains/mydomain_with_static_files;
        location / {
            try_files $uri $uri/ =404;
        }
    }

}
```

## Start apps

To start js applications need to run `node` command.

`start.sh`:

```sh
#!/bin/sh

# Start the first app
node /opt/projects/1/app.js &

# Start the second app
node /opt/projects/2/app.js &

# Start nginx in the foreground
nginx -g 'daemon off;'
```

## Docker file

Next, we'll create a Dockerfile to define the 'centos' Docker container where we can test our setup. Here's what the Dockerfile looks like:

```dockerfile
FROM centos:latest

# fixes
RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

RUN yum update -y && yum install -y curl vim git

RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash -
RUN yum install -y nodejs

# Install Nginx
RUN yum install -y epel-release
RUN yum install -y nginx

RUN mkdir -p /opt/projects/1
ADD ./projects/1 /opt/projects/1
WORKDIR /opt/projects/1
RUN npm install

RUN mkdir -p /opt/projects/2
ADD ./projects/2 /opt/projects/2
WORKDIR /opt/projects/2
RUN npm install

RUN mkdir -p /var/www/domains/mydomain_with_static_files
ADD ./projects/3 /var/www/domains/mydomain_with_static_files

COPY start.sh /opt/projects/start.sh
RUN chmod +x /opt/projects/start.sh

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
RUN ls -la /etc/nginx/

# CMD ["nginx", "-g", "daemon off;"]
CMD ["/opt/projects/start.sh"]
```

## Test run

1. Build docker image and run

```sh
docker build -t myserver .
docker run  -p 80:80 myserver
```

2. Open in browser on host:
   1. project 1: <http://mydomain1.localhost>
   2. project 2: <http://mydomain2.localhost>
   3. project 3: <http://mydomain3.localhost>
