FROM centos:latest

# fixes
RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

RUN yum update -y && yum install -y curl vim git

RUN curl -sL https://rpm.nodesource.com/setup_18.x | bash -
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
