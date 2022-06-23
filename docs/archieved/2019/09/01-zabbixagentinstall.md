---
title: Zabbix Agent安装在各种系统
date: 2019-09-01 22:42:00
lang: zh-Hans
tags:
    - 监视 Monitoring
    - Zabbix
    
categories: 
    - 运维 Operation
    - 监视 Monitoring
---

本文介绍如何将Zabbix的Agent安装在各种系统

<!-- more -->

# Ubuntu

## 参考资料

- [zabbix ubuntu-agentインストール](http://amachan007.techblog.jp/archives/8170161.html)

## 安装流程

安装：
```
# wget http://repo.zabbix.com/zabbix/4.2/ubuntu/pool/main/z/zabbix/zabbix-agent_4.2.5-1%2Bbionic_amd64.deb
# dpkg -i zabbix-agent_4.2.5-1+bionic_amd64.deb
# apt-get update
```



防火墙开洞（如果防火墙开启的话）：
```
# ufw allow 10050
```

修改配置文件：
```
vi /etc/zabbix/zabbix_agentd.conf

修改下面必要内容：
Server=Zabbix服务器IP地址
Hostname=Agent的Host名
ServerActive=Zabbix服务器IP地址

```

重启动：
```
/etc/init.d/zabbix-agent restart
```

# AWS Amazon Linux AMI 201803

## 参考资料

- [zabbix ubuntu-agentインストール](http://amachan007.techblog.jp/archives/8170161.html)

## 安装流程

安装：
```
# rpm -ivh http://repo.zabbix.com/zabbix/2.2/rhel/6/x86_64/zabbix-release-2.2-1.el6.noarch.rpm
# yum install zabbix
```