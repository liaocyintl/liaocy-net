---
title: 在Ubuntu上用Apache运行Flask网站
date: 2019-04-20 12:19:25
lang: zh-Hans
tags:
    - Ubuntu
    - Apache
    - Flask
    
categories: 
    - 开发 Development
    - Apache
---

本文介绍如何通过Apache2在Ubuntu上部署Flask网站
<!-- more -->


## 参考资料

[参考资料1](https://blog.csdn.net/jolinxia/article/details/53382137)

## 系统环境

- Ubuntu 18.04
- Apache 2
- Python 3.7.2

## 解决方案

我们假设网站文件保存在 /var/www/flask/ 文件夹中。

首先建立网页应用程序 /var/www/flask/server.py 文件：
```python
from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello():
    return "Hello world!"

if __name__ == "__main__":
    app.run()
```

首先建立 /var/www/flask/server.wsgi 文件：
```python
import os,sys
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
from server import app as application
```

建立apache配置 /etc/apache2/sites-available/flask.conf 文件：
```config
<virtualhost *:80>
    ServerName your.server.name

    WSGIDaemonProcess server user=www-data group=www-data threads=5
    WSGIScriptAlias / /var/www/flask/server.wsgi

    <directory /var/www/flask>
        WSGIProcessGroup flask
        WSGIApplicationGroup %{GLOBAL}
        WSGIScriptReloading On
        Order deny,allow
        Allow from all
    </directory>
</virtualhost>
```

启动插件和服务：
```bash
apt-get install libapache2-mod-wsgi-py3
a2enmod wsgi

sudo a2ensite flask
server apache2 restart
```