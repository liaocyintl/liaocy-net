---
title: Ubuntu 18.04设置Apache的HTTP与HTTPS反向代理
date: 2018-07-25 22:19:25
lang: zh-Hans
tags:
    - Ubuntu
    - Apache
    - 反向代理 Reverse Proxy
    
categories: 
    - 开发 Development
    - Apache
---

## 问题背景

假设你有一台门户服务器，内网有若干台网页服务器。
你需要将域名proxy.liaocy.net反向代理到IP地址为192.168.0.2的网页服务器上，分别代理HTTP（80端口）和HTTPS（443端口）。

## 参考资料

[参考资料1](https://blog.csdn.net/mgsky1/article/details/78692118)
[参考资料2](https://www.digitalocean.com/community/tutorials/how-to-use-apache-as-a-reverse-proxy-with-mod_proxy-on-ubuntu-16-04)
[参考资料3](https://httpd.apache.org/docs/2.2/ja/mod/mod_proxy.html#proxymaxforwards)

## 系统环境

- Ubuntu 18.04
- Apache 2

## 解决方案

### 安装Apache代理插件

```bash
# 安装Apache2
sudo apt-get install apache2

```

启动插件：

```bash
# 启动各种插件hex
sudo a2enmod ssl
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
```

### 配置门户服务器Apache的HTTP与HTTPS配置文件

配置HTTP：

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

输入以下配置：

```bash
<VirtualHost *:80>
    #管理员邮件地址
    ServerAdmin info@liaocy.net
    #要代理的域名
    ServerName proxy.liaocy.net
    #要代理的域名别名
    ServerAlias proxy.liaocy.net
    ProxyRequests Off
    #允许的最大并发数
    ProxyMaxForwards 100
    ProxyPreserveHost On
    #要代理到的主机地址
    ProxyPass / http://192.168.0.2/
    #要代理到的主机地址
    ProxyPassReverse / http://192.168.0.2/
    <Proxy *>
        Order Deny,Allow
        Allow from all
    </Proxy>
</VirtualHost>
```

配置HTTPS：

```bash
sudo nano /etc/apache2/sites-available/default-ssl.conf
```

输入以下配置：

```bash
<IfModule mod_ssl.c>
    <VirtualHost *:443>
        #管理员邮件地址
        ServerAdmin info@liaocy.net
        #要代理的域名
        ServerName proxy.liaocy.net
        #要代理的域名别名
        ServerAlias proxy.liaocy.net
        SSLEngine on
        SSLProxyEngine On
        SSLProxyVerify none
        SSLCertificateFile /etc/ssl/certs/ssl-cert-snakeoil.pem
        SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key
        <Proxy *>
           Order deny,allow
           Allow from all
        </Proxy>
        ProxyPreserveHost On
        ProxyRequests Off
        ProxyPass /  https://192.168.0.2:443/
        ProxyPassReverse / https://192.168.0.2:443/
    </VirtualHost>
</IfModule>
```

注：被认证的SSL加密证书配置在门户机即可，似乎不用配置在被代理服务器上

## 被代理机设置
被代理机正常设置网页服务即可，不一定非得是Apache。
服务开通 HTTP 80 端口和 HTTPS 443 端口即可。



## 结果和感想
