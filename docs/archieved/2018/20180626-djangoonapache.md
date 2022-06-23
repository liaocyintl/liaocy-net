---
title: 在Ubuntu服务器上使用Apache2部署Django应用
date: 2018-06-26 10:51:17
lang: zh-Hans
tags:
    - Python
    - Django
    - Apache
    - Ubuntu
    
categories: 
    - 开发 Development
    - Django
---

## 问题背景

在Ubuntu服务器上，使用Apache部署Django应用程序

## 解决方案

安装Python
```bash
# apt install python3
# apt install python3-pip
```

安装Python相关的软件包
```bash
# pip3 install -U pip
# pip3 install django
...
```

Python配置好之后，通过命令行启动服务器测试是否正常：
```bash
# python3 manage.py runserver 8000
```
- 此时通过8000端口应该已经能够正常访问服务器
- 如果出现“Error: You don't have permission to access that port.”，说明需要用sudo方式启动

安装Apache2, Django支持程序等等
```bash
# apt install apache2
# apt-get -y install libapache2-mod-wsgi-py3
```
- 注意！如果是Python3环境，一定要安装libapache2-mod-wsgi-py3而不是libapache2-mod-wsgi

修改Apache配置文件
```bash
# nano /etc/apache2/sites-available/000-default.conf

```

```text
<VirtualHost *:80>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # 服务器地址或域名
        ServerName mydomain.net
        

        WSGIDaemonProcess mydomain.net python-path=/home/ubuntu/projectname
        WSGIScriptAlias / /home/ubuntu/projectname/projectname/wsgi.py
        WSGIProcessGroup mydomain.net


        <Directory /home/ubuntu/projectname/projectname/>
                <Files wsgi.py>
                        Require all granted
                </Files>
        </Directory>
</VirtualHost>
```
- WSGIProcessGroup 的位置，要对应于 setting.py 文件中的 ALLOWED_HOSTS，在ALLOWED_HOSTS中必须包含 mydomain.net：
```python
ALLOWED_HOSTS = [" mydomain.net", "127.0.0.1", "localhost"]
```

## 结果和感想
有问题请留言
