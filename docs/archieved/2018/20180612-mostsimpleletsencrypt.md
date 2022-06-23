---
title: 在Ubuntu下使用Let's Encrypt对Apache进行免费HTTPS加密的最简便方法
date: 2018-06-12 13:06:22
lang: zh-Hans
tags:
    - Let's Encrypt
    - Ubuntu
    - Apache
    - HTTPS
categories: 
    - 开发 Development
    - Apache
---

[Let's Encrypt](https://letsencrypt.org/) 提供了免费的网站HTTPS加密证书。

本文介绍一种作者认为最简单的证书部署方法。

本文参考：[Setup Let's Encrypt With Apache on Ubuntu 16.04](https://www.vultr.com/docs/setup-lets-encrypt-with-apache-on-ubuntu-16-04)

## 测试环境

OS: Ubuntu 18.04 LTS
Web Server: Apache2

## 部署Let's Encrypt源文件

``` bash
# apt-get install git
# git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
```

代码说明：
1. 安装git
2. 将Let's Encrypt克隆到/opt/letsencrypt

## 部署前准备
务必确认目前Apache已包含HTTP站点配置，并已经能通过HTTP方式成功访问。

启动apache的ssl组件
```bash
# sudo a2enmod ssl
```

## 创建HTTPS证书并部署到Apache

``` bash
# cd /opt/letsencrypt/
# ./letsencrypt-auto --apache -d yourubuntuserver.example
```

代码说明：
1. 进入Let's Encrypt源文件目录/opt/letsencrypt/
2. 执行自动创建证书并配置到apache，其中yourubuntuserver.example为你的域名

※ 当存在多个域名时，可以执行以下代码

``` bash
# ./letsencrypt-auto --apache -d yourubuntuserver.example -d www.yourubuntuserver.example -d anotherwebsite.example
```

#### 这一步的常见提示以及报错信息
1. 域名DNS未设置或解析未生效：

![域名DNS未设置或未生效](/uploads/postimgs/20180612001.png "域名DNS未设置或解析未生效")

解决办法：去域名提供商网站设置域名DNS，已经设置的等待域名解析生效。尝试在服务器Ping域名确认是否解析已生效。

2. 是否重定向全部HTTP请求到HTTPS：

![是否重定向全部HTTP请求到HTTPS](/uploads/postimgs/20180612002.png "是否重定向全部HTTP请求到HTTPS")

说明：如果选择2，则通过http方式访问网站时，请求会自动重定向到https。

3. 部署成功信息：

![部署成功信息](/uploads/postimgs/20180612003.png "部署成功信息")

4. 成功访问加密的网站

![成功访问加密的网站](/uploads/postimgs/20180612004.png "成功访问加密的网站")
用浏览器访问网站，显示加密成功

## 自动定期更新证书

HTTPS证书默认有三个月的有效期，必须定期更新。

首先打开Cron：

``` bash
# crontab -e
```

在最下方添加：

``` text
15 5 * * 5 /opt/letsencrypt/letsencrypt-auto renew >> /var/log/le-renew.log
```

代码说明：在每周五上午5时15分自动更新证书，并写入日志/var/log/le-renew.log