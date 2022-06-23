---
title: Docker容器内设置全局代理
date: 2019-04-30 12:19:25
lang: zh-Hans
tags:
    - Docker
    - Proxy
    
categories: 
    - 开发 Development
    - Docker
---

本文介绍如何设置Docker容器的全局代理。通过在Docker容器内设置全局代理，可以让容器内的应用程序通过代理获取网络资源。
<!-- more -->

## 参考资料

[参考资料1](https://www.cnblogs.com/dazhoushuoceshi/p/7066041.html)
[参考资料2](https://kebingzao.com/2019/02/22/docker-container-proxy/)

## 系统环境

- Docker 18.09

## 解决方案

### 创建Dockerfile文件

```Dockerfile: Dockerfile
FROM Ubuntu:18.04
ENV MY_PROXY_URL="http://{username}:{password}@{proxy_ip}:{proxy_port}/"
ENV HTTP_PROXY=$MY_PROXY_URL \
    HTTPS_PROXY=$MY_PROXY_URL \
    FTP_PROXY=$MY_PROXY_URL \
    http_proxy=$MY_PROXY_URL \
    https_proxy=$MY_PROXY_URL \
    ftp_proxy=$MY_PROXY_URL
```

其中：
- {username}: 代理服务器用户名
- {password}: 代理服务器密码
- {proxy_ip}: 代理服务器IP地址
- {proxy_port}: 代理服务器端口

注意：
这个程序段应该放在RUN apt-get ... 和 CMD 之间，这样每次更改代理服务器不会影响编译速度。

### 编译容器

```bash
$ docker build -t proxy-test .
```

### 运行容器

```bash
$ docker run -it --rm --name proxy-test proxy-test /bin/bash
```

### 测试

```bash
$ curl cip.cc
```
输出：
![](/uploads/postimgs/b700cb03.png)

### 结果
代理设置成功，容器内的应用程序可以通过代理访问互联网了