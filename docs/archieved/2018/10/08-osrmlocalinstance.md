---
title: 创建本地OSRM实例，用OSM做导航数据
date: 2018-10-08 17:40:22
lang: zh-Hans
tags:
    - OSRM
    - Python
    - 深度学习 Deep Learning
categories: 
    - 开发 Development
    - Open Street Map (OSM)
---

## 介绍

Open Source Routing Machine (OSRM) 是一个导航路径计算库。
给定两个地理坐标，通过OSRM可以计算其间的路径、距离、交通时间，并提供 HTTP 和 C++ 的接口。
由于它是一个开源的库，你可以把它的实例安装在本地，以构成一个导航服务。
这样可以避免官方服务器的限额问题。

## 参考文献

- [Building a Local OSRM Instance](https://datawookie.netlify.com/blog/2017/09/building-a-local-osrm-instance/)

## 系统环境

- Ubuntu: 18.04 LTS (OSRM对于内存的要求较高，因此至少保证4GB的swap空间)

## 构建OSRM

安装系统依赖：
```bash
apt update
apt install -y git cmake build-essential jq htop
apt install -y liblua5.2-dev libboost-all-dev libprotobuf-dev libtbb-dev libstxxl-dev libbz2-dev
```

克隆代码：
```bash
git clone https://github.com/Project-OSRM/osrm-backend.git
```

进入文件夹：
```bash
cd osrm-backend/
```

我们测试的时候使用版本v5.18.0，因此我们将代码切换到v5.18.0：
```bash
git checkout v5.18.0
```

创建build文件夹并编译代码：
```bash
mkdir build
cd build/
cmake ..
make
```

安装编译好的程序：
```bash
make install
```

## 导入Open Street Map地图数据
打开[导出地图数据的网页](http://www.openstreetmap.org/export)，
在这个页面里，可见地图的坐标范围显示在左面：

![导出香港的数据](/uploads/postimgs/8924e14c.png)

通过下面的命令，下载相应的地图数据：

```bash
wget -O map.xml http://overpass-api.de/api/map?bbox=114.4306,22.1327,113.8607,22.5398
```

其中四个坐标分别是 右，下，左，上。

将下载好的map.xml文件放在osrm-backend文件夹下面。

## 提取导航数据

在osrm-backend文件夹下执行：
```bash
osrm-extract map.xml -p profiles/car.lua
```

## 创建数据

创建结构化数据以支持高速提取导航最短路径：
```bash
osrm-contract map.xml.osrm
```

## 启动服务
之后我们就可以启动HTTP服务：

```bash
osrm-routed map.xml.osrm
```

## 调用接口
之后我们就可以按照[OSRM的接口](http://project-osrm.org/docs/v5.15.2/api/)进行调用了。
只要把URL改成我们服务器的地址，默认为：http://127.0.0.1:5000/
