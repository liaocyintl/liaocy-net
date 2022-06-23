---
title: CentOS设置Apache的HTTP与HTTPS反向代理
date: 2019-03-13 18:19:25
lang: zh-Hans
tags:
    - CentOS
    - Apache
    - 反向代理 Reverse Proxy
    
categories: 
    - 开发 Development
    - Apache
---

以前写过一篇[在Ubuntu下配置Apache反向代理](/2018/07/25-ubuntuapacheproxy/)的文章。
本文介绍如何在CentOS环境下配置Apache反向代理。

假设你有一台门户服务器，内网有若干台网页服务器。
你需要将域名proxy.liaocy.net反向代理到IP地址为192.168.0.2的网页服务器上，分别代理HTTP（80端口）和HTTPS（443端口）。
你可以通过本文介绍的方法进行反向代理设置。
<!-- more -->

## 参考资料

[参考资料1](https://qiita.com/Esfahan/items/364462502b6d19dea1fe)
[参考资料2](https://www.digitalocean.com/community/tutorials/how-to-use-apache-as-a-reverse-proxy-with-mod_proxy-on-centos-7)

## 系统环境

- CentOS
- Apache 2

## 解决方案

### 安装Apache

在CentOS下，Apache不叫Apache，叫httpd。
通过yum命令安装：

```bash
$ sudo yum install -y httpd
```

启动Apache：
```bash
$ sudo service httpd start
```

查看Apache版本：
```bash
$ httpd -v
```

### 安装Apache代理插件

首先通过命令查看已经Apache插件状态：


```bash
$ httpd -M

```

会看到一个可用的插件列表，其中作为代理服务器需要用到下面四个：

```text
Output
. . .
 proxy_module (shared)
. . . 
 lbmethod_byrequests_module (shared)
. . . 
 proxy_balancer_module (shared)
. . . 
 proxy_http_module (shared)
. . . 
```

CentOS下插件的启用是通过在配置文件中反注释插件路径的弱智方法实现的，
因此，我们先打开配置文件（这个文件应该已经存在）：

```text
$ sudo nano /etc/httpd/conf.modules.d/00-proxy.conf
```

在该文件中讲下面插件前面的 **#** 井号去掉，并保存：
```text: /etc/httpd/conf.modules.d/00-proxy.conf
. . . 
LoadModule proxy_module modules/mod_proxy.so
. . . 
LoadModule lbmethod_byrequests_module modules/mod_lbmethod_byrequests.so
. . . 
LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
. . . 
LoadModule proxy_http_module modules/mod_proxy_http.so
. . . 
```

然后重启Apache，没错误的话插件就启用成功了。

```text
$ sudo systemctl restart httpd
```


### 配置门户服务器Apache的HTTP与HTTPS配置文件

配置HTTP：

Apache会读取/etc/httpd/conf.d/目录下面全部.conf配置文件。

```bash
sudo nano /etc/httpd/conf.d/http.conf
```

输入以下配置：

```bash
<VirtualHost *:80>
    ServerAdmin info@liaocy.net
    ServerName proxy.liaocy.net
    ServerAlias proxy.liaocy.net
    ProxyRequests Off
    ProxyMaxForwards 100
    ProxyPreserveHost On
    ProxyPass / http://192.168.0.2/
    ProxyPassReverse / http://192.168.0.2/
    <Proxy *>
        Order Deny,Allow
        Allow from all
    </Proxy>
</VirtualHost>
```

配置HTTPS：

```bash
sudo nano /etc/httpd/conf.d/https.conf
```

输入以下配置：

```bash
<IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerAdmin info@liaocy.net
        ServerName proxy.liaocy.net
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

然后重启Apache，没错误的话再使用proxy.liaocy.net访问进行测试。

```text
$ sudo systemctl restart httpd
```

## 被代理机设置
被代理机正常设置网页服务即可，不一定非得是Apache。
服务开通 HTTP 80 端口和 HTTPS 443 端口即可。

## 结果和感想
