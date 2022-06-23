---
title: Python透过SSH访问数据库
date: 2018-10-30 16:57:22
lang: zh-Hans
tags:
    - SSH
    - Python
    - MySQL
categories: 
    - 开发 Development
    - Python
---

## 介绍

有时候我们需要透过SSH通道访问服务器里的数据库，这个功能在很多DBMS-GUI上都有集成，
然而如何通过Python代码实现呢？
本文进行讨论。

## 参考资料

- [PythonでSSH経由のMySQLアクセスをして、WordPressの投稿情報を取得する](https://qiita.com/seisyu1985/items/e910d85b2ca6f30db4f2)

## 环境

- Ubuntu: 18.04 LTS
- MariaDB: 5.5

## 代码

首先需要python安装了sshtunnel库：
```text
pip install sshtunnel
```

```python
# -*- coding: utf-8 -*-
# 使用SSH隧道的包
from sshtunnel import SSHTunnelForwarder
# 连接数据库用的包
import pymysql.cursors

# SSH相关设定
with SSHTunnelForwarder(
    ("SSH服务器的IP地址", 22（SSH服务的端口号）),
        ssh_host_key="SSH主机钥匙（如果没有使用的话写None）",
        ssh_pkey="SSH密钥路径",
        ssh_username="在服务器上的用户名（如果没有的话写None）",
        ssh_password="在服务器上的密码 或者 密钥的指纹密码（没有的话写None）",
        remote_bind_address=("127.0.0.1（绑定以后连接数据库的地址）", 3306（MySQL数据库的端口）)
    ) as ssh:
```

之后就可以正常地操作数据库了：

```python
    # 接上面的代码

    conn = pymysql.connect(host='127.0.0.1', # 由于是透过SSH进行本地连接
            user='数据库用户名',
            password='数据库密码',
            db='数据库名称',
            charset='utf8',
            cursorclass=pymysql.cursors.DictCursor)
    # 执行select
    cursor = conn.cursor()
    sql = "show tables"
    cursor.execute(sql)

    # 读出Select的结果
    rets = cursor.fetchall()
    for r in rets:
        print(r)

    # 切断连接
    conn.close()
```
