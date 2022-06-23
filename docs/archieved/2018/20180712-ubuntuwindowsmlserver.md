---
title: 在Ubuntu 16.04 上部署微软机器学习服务器
date: 2018-07-12 16:33:00
lang: zh-Hans
tags:
    - Ubuntu
    - 微软机器学习服务器 Microsoft Machine Learning Server
    - 机器学习 Machine Learning
    
categories: 
    - 研究 Research
    - 机器学习 Machine Learning
---

## 问题背景

## 环境

- Ubuntu 16.04 Server，Desktop版应该也可以。但是，Ubuntu 18.04 LTS安装不了，不要浪费时间了。
- 硬件要求（官方）：最小2GB内存，500MB硬盘（推荐8GB以上硬盘）

## 解决方案

[原文地址](https://docs.microsoft.com/en-us/machine-learning-server/install/machine-learning-server-linux-offline)

### 软件包列表

全部软件包的列表：

```text
microsoft-mlserver-packages-r-9.3.0         ** 核心
 microsoft-mlserver-python-9.3.0            ** 核心
 microsoft-mlserver-packages-py-9.3.0       ** 核心
 microsoft-mlserver-mml-r-9.3.0             ** microsoftml for R (可选)
 microsoft-mlserver-mml-py-9.3.0            ** microsoftml for Python (可选)
 microsoft-mlserver-mlm-r-9.3.0             ** pre-trained models (需要 mml)
 microsoft-mlserver-mlm-py-9.3.0            ** pre-trained models (需要 mml)
 microsoft-mlserver-hadoop-9.3.0            ** hadoop (需要 for hadoop)
 microsoft-mlserver-adminutil-9.3           ** operationalization (可选)
 microsoft-mlserver-computenode-9.3         ** operationalization (可选)
 microsoft-mlserver-config-rserve-9.3       ** operationalization (可选) 
 microsoft-mlserver-dotnet-9.3              ** operationalization (可选)
 microsoft-mlserver-webnode-9.3             ** operationalization (可选)
 azure-cli-2.0.25-1.el7.x86_64              ** operationalization (可选)
```

### 安装步骤

```bash

# 以root方式安装
sudo su

# 可选步骤, 如果你的系统没有https apt transport的话
apt-get install apt-transport-https

# 增加 **azure-cli** 仓库到你的apt资源列表
AZ_REPO=$(lsb_release -cs)

echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list

# 这里的例子特指ubuntu 16.04， 你可以把16.04更换成你希望的系统版本
wget https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb

# 注册该库
dpkg -i packages-microsoft-prod.deb

# 确认"microsoft-prod.list"配置文件存在
ls -la /etc/apt/sources.list.d/

# 增加微软公共签名 Secure APT
apt-key adv --keyserver packages.microsoft.com --recv-keys 52E16F86FEE04B979B07E28DB02C46DF417A0893

# 更新apt软件包列表
apt-get update

# 安装服务器，全部软件包，大约10GB左右，实际上不需要这么安装
# apt-get install microsoft-mlserver-all-9.3.0
# 安装服务器，只安装python包，其它包参考上面软件包列表
apt-get install microsoft-mlserver-python-9.3.0
apt-get install microsoft-mlserver-packages-py-9.3.0

# 激活Python版本服务器，根据提示按[Enter]看协议，按住[Ctrl+v]一直跳到最后，按[q]跳出，输入[y]同意协议
/opt/microsoft/mlserver/9.3.0/bin/python/activate.sh
# 或者，激活R版本服务器
# /opt/microsoft/mlserver/9.3.0/bin/R/activate.sh

# 列出安装好的列表以确认
apt list --installed | grep microsoft

# 输出某个特定安装包的信息
dpkg --status microsoft-mlserver-packages-py-9.3.0

```

显示已安装的软件包结果：

<img src="\uploads\postimgs\a509738d.png" alt="已安装的软件包" title="已安装的软件包" />


### 常见问题

- dpkg: error processing package microsoft-mlserver-hadoop-9.3.0 (--configure):

原因： microsoft-mlserver-hadoop-9.3.0软件包需要hadoop，如果系统上没有就会报错
解决方案：不要安装microsoft-mlserver-hadoop-9.3.0软件包或者事先安装hadoop

### 有效化Web服务部署与远程连接

当你确认完成了上述的基本安装之后，继续下面的步骤部署Web服务（2019/07/12 应梁鑫辉先生的建议修正，参考评论区）：

1. 在终端输入 az ml admin bootstrap
1. 输入密码：

<img src="\uploads\postimgs\37fa7f8b.png" alt="配置Web服务密码" title="配置Web服务密码" />



## 结果和感想

**注意：Ubuntu 18.04 LTS 无法通过上面步骤部署，不要浪费时间了!**

微软做的东西还是做得很方便的。