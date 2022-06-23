---
title: Docker常用命令笔记
date: 2018-07-17 11:33:17
lang: zh-Hans
tags:
    - Docker
    
categories: 
    - 开发 Development
    - Docker
---

## 参考资料
[Docker Practice](https://legacy.gitbook.com/book/yeasy/docker_practice/details)
[Docker如何固定IP设置的方法](https://www.jb51.net/article/118396.htm)

## 全局基本

### 查看Docker的占用空间

```bash
$ docker system df
```

## 镜像基本

### 检索Ubuntu有关的镜像

```bash
docker search ubuntu
```

### 拉取Ubuntu 18.04到本地

```bash
docker pull ubuntu:18.04
```

### 列出已拉取到本地的镜像 

- -a 显示中间层镜像 
- ubuntu 显示仓库名为ubuntu的镜像 
- -q 列出镜像ID 
- --format 显示ID+仓库名+标签 
- --digests 镜像摘要

```bash
$ docker image ls
$ docker image ls -a
$ docker image ls ubuntu
$ docker image ls -q
$ docker image ls --format "{{.ID}}: {{.Repository}}\t{{.Tag}}"
$ docker image ls --digests
```

### 删除全部虚悬镜像 (dangling image)

```bash
docker image prune
```

### 删除ID以5e8开头的镜像 

```bash
$ docker image rm 5e8
```

### 删除所有仓库名为ubuntu的镜像（Windows和Ubuntu的命令形式不一样）

```bash
$ docker image rm (docker image ls -q ubuntu)
```

## 容器基本

### 启动并运行ubuntu 16.04容器： 

- -it 交互操作+终端 
- --rm 退出时删除容器 
- bash 启动交互式Shell

```bash
$ docker run -it --rm ubuntu:18.04 bash
```

### 启动一个nginx网页服务器容器

- --name 启动后容器名称
- 80:80 宿主端口：容器端口映射
- -d 守护程序后台运行模式
- nginx 要启动的镜像名

```text
docker run --name webserver -d -p 80:80 -p 8080:8080 nginx
```

### 停止容器

```text
docker container stop webserver
```

### 查看Docker容器状态：

- -a：包括终止的容器

```bash
$ docker ps
$ docker ps -a
```

### 接入已启动的容器命令行

```text
$ docker exec -it ubuntu:18.04 bash
```


### 查看容器的改动

```bash
docker diff webserver
```

### 将容器的存储层保存下来成为镜像

- --author 作者
- --message 信息
- webserver 保存为镜像名
- nginx:v2 仓库和标签

```bash
$ docker commit --author "Chenyi Liao <info@liaocy.net>" --message "practice" webserver ubuntu:v2
```

### 删除容器

```text
docker container rm webserver
```

## 网络基本

### 显示现有网络

网络一览：
```
$ docker network ls
```

### 创建一个新的Docker网络

Ref.: [Docker Network Create](https://docs.docker.com/engine/reference/commandline/network_create/)

命名为my-net：
- -d：指定Docker的网络类型，有bridge和Overlay

```text
docker network create -d bridge my-net
```

设定网络地址：
```
$ docker network create \
  --driver=bridge \
  --subnet=172.28.0.0/16 \
  --ip-range=172.28.5.0/24 \
  --gateway=172.28.5.254 \
  my-net
```


### 运行容器时加入网络

仅加入网络，自动分配地址：
```text
docker run -it --rm --name ubuntu --network my-net ubuntu bash
```

加入网络并指定地址：
```text
docker run -it --rm --name ubuntu --network my-net --ip 172.28.5.66 ubuntu bash
```

### 查看指定容器网址

```text
# Linux:
docker inspect <container id> | grep "IPAddress"

# Windows:
docker inspect --format '{{ .NetworkSettings.IPAddress }}' <container id>
```


## 容器例子

1. 启动一个ubuntu容器，加入docker-net网络，映射SSH端口，以守护进程启动

```text
docker run --name my-container -dit --network docker-net -p 2000:22 ubuntu:18.04 /bin/bash
```

1. 固定IP
docker run --name my-container -dit --network host -ip 172.17.0.1 -p 2000:22 ubuntu:18.04 /bin/bash

1. 映射本地文件夹

```text
docker run --name my-container -dit -v d:/:/data ubuntu:18.04 /bin/bash
```

## 容器迁移

建立容器快照：
```bash
docker commit -p 30b8f18f20b4 container-backup
```

导出镜像到文件：
```bash
docker save -o bk.tar container-backup
```

导入文件到镜像：
```bash
docker load < bk.tar
```

## DockerFile脚本

### 以启动Ubuntu18.04服务器上的Azkaban为例：

```text
FROM ubuntu:18.04
MAINTAINER Chenyi Liao <info@liaocy.net>
RUN apt-get update \
    && apt-get install -y openjdk-8-jdk \
    && apt-get install -y git \
    && cd /opt/ \
    && git clone https://github.com/azkaban/azkaban.git \
    && cd azkaban \
    && ./gradlew build -x test installDist
```

### 在Ubuntu18.04上安装LMAP（Linux, MySQL, Apache, PHP）

```text
FROM ubuntu:18.04
MAINTAINER Chenyi Liao <info@liaocy.net>
RUN apt-get update \
    && apt install -y apache2 \
    && apt install -y php7.2 \
    && apt install -y mysql-server-5.7 \
    && service mysql start \
    && service mysql apache2
```

※[Azkaban安装参考资料](http://tracpath.com/works/devops/how-to-install-azkaban/)

### 使用脚本构建镜像

在 Dockerfile 文件所在目录执行：

```text
docker build -t azkaban:v3 .
```

### 查看容器日志

```text
$ docker logs <container>
```