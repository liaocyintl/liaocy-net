---
title: 在Ubuntu上配置MariaDB并设置通过密码访问
date: 2018-10-30 11:25:22
lang: zh-Hans
tags:
    - Ubuntu
    - MariaDB
categories: 
    - 开发 Development
    - MariaDB
---

## 介绍

自从Oracle收购SUN之后，越来越多的人使用MariaDB代替MySQL。
MariaDB没有被收费的风险，据说效率也要比MySQL高一些。

本文我们介绍如何在Ubuntu上安装配置MariaDB，特别是安装之后如何配置通过账号密码访问数据库。

## 参考资料

- [Ubunt 16.04でMariaDBをインストールするとパスワードが変](https://jyn.jp/ubuntu-16-04-mariadb-password-bug/)

## 环境

- Ubuntu: 18.04 LTS
- MariaDB: 5.5

## 步骤

安装MariaDB服务器端：
```bash
apt install mariadb-server
```

启动服务：
```bash
service mysql start
```
可以看到MariaDB和MySql几乎一模一样。

配置安全项目：
```bash
mysql_secure_installation
```

配置安全项目分别是：
```text
Change the root password? [Y/n] #是否改变root密码
Remove anonymous users? [Y/n] #是否删除匿名账户
Disallow root login remotely? [Y/n] #是否不允许root账户远程登录
Remove test database and access to it? [Y/n] #是否删除谁都能登录的测试数据库
Reload privilege tables now? [Y/n] #是否重加载权限表

```
这里我推荐全选Y。

以上，服务器就配置好了。但是此时root采用一种叫做unix_socket的登录方式，因此无法用用户名/密码的形式登录数据库，需要进行以下操作：

使用root登录数据库：
```text
mysql -u root 
```

设定使用密码登录：
```text
MariaDB [(none)]> USE mysql;
MariaDB [(mysql)]> UPDATE user SET plugin='' WHERE User='root';
MariaDB [(mysql)]> flush privileges;
```

之后就可以用用户名和密码登录了，测试：
```text
mysql -rroot -proot
```
