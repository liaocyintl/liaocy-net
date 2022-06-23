---
title: 在Ubuntu上配置PPTP
date: 2018-10-22 22:42:22
lang: zh-Hans
tags:
    - VPN
    - PPTP
    - Ubuntu
categories: 
    - 开发 Development
    - Ubuntu
---

## 介绍

本文我们介绍在Ubuntu上配置PPTP VPN。

参考资料：

[Ubuntu 搭建VPN（PPTP）并开机自启](https://blog.csdn.net/m0_37961948/article/details/77871088)

[ubuntu10.4 server 配置VPN 安装pptp无法连接外网解决](http://www.ppkj.net/2011/04/30/ubuntu10-4-server-%E5%AE%89%E8%A3%85pptp%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E5%A4%96%E7%BD%91%E8%A7%A3%E5%86%B3.html)

## 环境

- Ubuntu: 16.04 LTS

## 步骤

安装PPTP服务器

```bash
sudo apt-get install pptpd
```

配置pptpd.conf文件

```bash
sudo nano /etc/pptpd.conf
```

去掉下面两行的注释：

```bash
localip 192.168.0.1
remoteip 192.168.0.234-238,192.168.0.245
```

设置VPN的账号和密码：
```bash
sudo nano /etc/ppp/chap-secrets
```

账号和密码按照下面方式配置：
myusername为你的用户名mypassword为你的密码，第一个星号*代表可以用PPTP也可以用L2TP，最后的*号表示允许在任意IP连接到服务。
```bash
myusername  *  mypassword  *
```

这样VPN服务器就配置好了，但是这时候还上不了外网，于是要进行下面配置：

开启内核IP转发:

```bash
sudo nano /etc/sysctl.conf
```
取消 net.ipv4.ip_forward=1 的注释
然后执行
```bash
sudo sysctl -p
```

配置iptables：
注意这里的eth0是你的网卡名称，用ifconfig确认
```bash
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```
如果网页打开很慢的话，执行下面的命令
```bash
iptables -A FORWARD -p tcp --syn -s 192.168.0.0/24 -j TCPMSS --set-mss 1356
```

保存iptables配置：
```bash
iptables-save
```

# 注意事项

1. PPTP的端口是1723
2. 注意打开防火墙

