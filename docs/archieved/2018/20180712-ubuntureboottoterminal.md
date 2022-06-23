---
title: Ubuntu 18.04 LTS 设置为默认启动命令行模式
date: 2018-07-12 12:39:17
lang: zh-Hans
tags:
    - Ubuntu
    
categories: 
    - 开发 Development
    - Ubuntu
---

## 问题背景



使用Desktop版安装Ubuntu非常方便，但如果作为服务器使用，启动Desktop未必太累赘了，因此要将Ubuntu设置成默认启动时进入命令行，不加载Desktop程序。
以前的版本可以通过修改 /etc/default/grub 来实现，但18.04LTS版本下似乎不太管用。
本文解决这两个问题。

## 解决方案

[原文地址](https://www.systutorials.com/239880/change-systemd-boot-target-linux/)

### 原理

众多操作系统，例如RHEL/CentOS 7, Fedora, Ubuntu，使用systemd代替init作为系统初始化。
用户可以按“GUI”或“Text”模式启动系统。
在以前，可以通过修改‘/etc/inittab’来更改启动级别，但这种方法在sytemd系统上无效。
本文介绍一种在sytemd系统上修改“运行级（runlevels）”的方法，以默认启动命令行。

对于systemd系统，运行级的概念被替换为组（term）的“targets”。
这是一种初始化运行级与初始化目标（targets）的对应关系：

| 运行级 | 初始化目标 |
| ---| --- |
| 0 | poweroff.target | 
| 1 | rescue.target | 
| 2, 3, 4 | multi-user.target | 
| 5 | graphical.target | 
| 6 | reboot.target | 

其中两个Targets是最常用的
- multi-user.target：属于运行级 3， 文字模式（命令行模式）
- graphical.target：属于运行级 5， GUI 模式或桌面模式（X server）

<img src="\uploads\postimgs\7a5c7eea.png" alt="系统架构" title="系统架构" />

### 改变启动后的运行级

当Linux系统启动并进入一个目标系统后，你可以改变其目标系统及运行级。
比如说，改变当前目标系统到“multi-user”：

```bash
# systemctl isolate multi-user.target
```
单独使用该命令，它将启动一个命令行并关闭其他全部应用。

### 永久改变开机启动运行级与目标系统

我们尝试改变默认开机启动目标系统。
比如，我们让“multi-user.target”成为开机默认运行级别：

```bash
# systemctl enable multi-user.target
# systemctl set-default multi-user.target
# reboot
```

这样，重启后就会进入命令行模式而不是GUI模式。

### 复原

```bash
# systemctl enable graphical.target
# systemctl set-default graphical.target
# reboot
```

这样，重启后就会默认进入GUI模式。

## 结果和感想