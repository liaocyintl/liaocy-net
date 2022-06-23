---
title: 树莓派（Raspberry PI）用VNC无法链接显示Error in TightVNC Viewer No security types supported的解决方案
date: 2020-03-22 14:19:25
lang: zh-Hans
tags:
    - Raspberry PI
    - 物联网 IoT
    
categories: 
    - 开发 Development
    - Raspberry PI
---

刚刚设置好的树莓派，用Tight VNC链接远程桌面时会显示
```
Error in TightVNC Viewer: No security types supported. Server sent security types, but we do not support any of their.
```
因此无法链接VNC服务。
本文解决这个问题。

<!-- more -->

## 参考资料

[参考资料1](https://renkin3q.hatenablog.jp/entry/2017/10/07/142412)

## 系统环境

- Raspberry Pi 4 B
- Raspbian

## 解决方案

- 用root权限在 /root/.vnc/config.d/vncserver-x11 里面加入下列行
```
Authentication=VncAuth
```

- 设定 VNC 密码
```
# vncpasswd  -service
```

- 重启 VNC 服务
```
# systemctl restart vncserver-x11-serviced.service
```