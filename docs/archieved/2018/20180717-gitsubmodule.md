---
title: Git子项目的创建与克隆
date: 2018-07-17 14:35:17
lang: zh-Hans
tags:
    - Git
    
categories: 
    - 开发 Development
    - Git
---

## 问题背景

在你的项目中引用一个另外的项目。
并且在以后，别人克隆你的项目时，自动地把你引用依赖的项目也克隆下来。

[参考资料](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

## 解决方案

### 在项目中引用另一个项目
引入项目“rack”到我的项目，于是在项目文件夹下，输入：
```bash
git submodule add git://github.com/chneukirchen/rack.git rack
```

### 克隆时同时克隆依赖项目

```bash
git clone git://github.com/schacon/myproject.git
cd myproject
git submodule init
git submodule update
```

## 结果和感想