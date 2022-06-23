---
title: 在 Ubuntu 18.04 上安装部署 Airflow 1.9.0
date: 2018-07-14 16:33:00
lang: zh-Hans
tags:
    - Ubuntu
    - Airflow
    - Python
    - 数据挖掘 Data Mining
    - Data Pipeline & ETL
    
categories: 
    - 开发 Development
    - Ariflow
---

## 问题背景

Apache Airflow 是Airbnb公司开源的，是用 Python 实现的任务管理、调度、监控工作流的平台[1]。

因依调度赖于 crontab，Airflow 目前只支持在安装在Linux系统平台。
Airflow可以用做data pipeline和 Extract, Transform, Load（ETL），消息队列等监控。
本文介绍如何将Airflow 1.9.0 部署在 Ubuntu 18.04 LTS 平台上。

[1][参考资料：Airflow 1.8 工作流平台搭建](https://blog.csdn.net/kk185800961/article/details/78431484)

## 环境

- Ubuntu 18.04 LTS
- Python 3.6.5 + pip
- Airflow 1.9.0 (20180714最新)

## 解决方案

[官方文档](https://airflow.apache.org/start.html)

## 使用pip安装Airflow

- root登录

```bash
sudo su
cd
```

- 启用测试网页服务器

```bash
# airflow需要一个家目录（home）, 默认为~/airflow,
# 你也可以把它改成你希望的目录
# (可选项目)
export AIRFLOW_HOME=~/airflow

# 使用pip安装Airflow
pip install apache-airflow

# 初始化数据库
airflow initdb

# 开启Web服务，默认端口8080
airflow webserver -p 8080
```

![启动服务器](/uploads/postimgs/d0e49f60.png)

网页服务器已经启动，可以通过浏览器测试：

![网页服务器已启动](/uploads/postimgs/b167208b.png)

网页能够正常打开证明服务器正常

## 在守护程序中后台运行Airflow

[参考档案1](http://site.clairvoyantsoft.com/installing-and-configuring-apache-airflow/)

[参考档案2](https://github.com/apache/incubator-airflow/tree/master/scripts/systemd)

注意：由于版本和环境不同，实际执行步骤和参考档案略有不同，请读者举一反三地理解。


- root登录
```bash
sudo su
cd
```

- 创建airflow用户和airflow用户组
```bash
adduser airflow
```

- 初始化数据文件
```bash
su airflow
airflow initdb
```

系统会自动创建用户airflow并加入用户组airflow
![创建用户airflow并加入用户组airflow](/uploads/postimgs/dfacaf8b.png)

- 把airflow的代码从github上克隆下来
```bash
git clone https://github.com/apache/incubator-airflow.git
```

- 部署服务文件

```bash
# 定位到服务文件
cd incubator-airflow/scripts/systemd/

# 建立Airflow可执行文件的软连接
ln -s /usr/local/bin/airflow /bin/airflow

# 建立线程存放文件的目录并修改权限
mkdir /run/airflow
chmod 0775 /run/airflow/
chown airflow:airflow /run/airflow/

# 部署airflow.conf
cp airflow.conf /etc/tmpfiles.d/

# 部署airflow文件
mkdir /etc/sysconfig
cp airflow /etc/sysconfig

# 配置airflow-*.service文件，你可以设定你想让守护进程启动的用户和用户组，我们这里使用默认的airflow用户
cp airflow-*.service /etc/systemd/system/
```

- 启动守护进程
```bash
# 启动网页服务器
service airflow-webserver start
# 启动后台服务
service airflow-worker start
# 启动定时服务
service airflow-scheduler start
# 启动Flower服务（可选）
service airflow-flower start
```

- 终止守护进程
```bash
# 终止网页服务器
service airflow-webserver stop
# 终止后台服务
service airflow-worker stop
# 终止定时服务
service airflow-scheduler stop
# 终止Flower服务
service airflow-flower stop
```

- 测试服务
浏览器输入网址，端口号8080，网页显示正常：
![守护进程运行正常](/uploads/postimgs/a5700957.png)

## 常见问题
### Airflow中无法添加用户
- 现象：在网页中添加用户(Admin -> User -> Create)时出现Ooops.错误页面

![现象](/uploads/postimgs/1815a952.png)

- 原因：sqlalchemy版本过高
- 解决方法：降级sqlalchemy版本
```bash
pip3 install 'sqlalchemy>=1.1.15, <1.2.0'
```


## 结果和感想
之后写一些关于Airflow配置的文章。