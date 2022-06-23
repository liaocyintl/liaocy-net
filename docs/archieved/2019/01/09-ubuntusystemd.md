---
title: 在Ubuntu设置守护进程systemd（例：后台启动JupyterHub）
date: 2019-01-09 19:38:00
lang: zh-Hans
tags:
    - Ubuntu
    - Python
    - Jupyter
categories: 
    - 开发 Development
    - Ubuntu
---

在Ubuntu上部署JupyterHub以后，需要用守护进程启动该服务。
本文介绍如何使用systemd建立守护进程并在后台启动JupyterHub。
<!-- more -->

## 参考资料

- [Tutorials/Ubuntu startup script](https://minecraft.gamepedia.com/Tutorials/Ubuntu_startup_script)
- [How to enable service to run on boot in Ubuntu 18.04?](https://maslosoft.com/kb/how-to-enable-service-to-run-on-boot-in-ubuntu-18-04/)


## 环境

- Ubuntu: 18.04 LTS

## 步骤

编辑文件：文件名为xx.service
```text
sudo nano /etc/systemd/system/jupyterhub.service
```

在该文件中写入(后面的井号和注释要删掉)：
```text
[Unit] 

Description=start and stop the jupyterhub #描述要启动的进程



[Service]

WorkingDirectory=/opt/jupyterhub #启动进程的文件夹

User=root #你想用什么用户启动该进程

Group=root #你希望用什么用户组启动该进程

Restart=on-failure #进程错误时重启

RestartSec=20 5

ExecStart=/home/root/.pyenv/shims/jupyterhub #启动命，要用绝对路径，否则会报错



[Install]

WantedBy=multi-user.target
```

启动jupyterhub：（没有报错就是启动成功了）
```text
sudo service jupyterhub start
```

设置开机自启动该服务：
```text
sudo systemctl enable jupyterhub.service
```

停止jupyterhub：
```text
sudo service jupyterhub stop
```