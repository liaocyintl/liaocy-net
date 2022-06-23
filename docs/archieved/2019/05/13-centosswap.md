---
title: CentOS系统设置虚拟内存SWAP
date: 2019-05-13 20:54:25
lang: zh-Hans
tags:
    - CentOS
    - SWAP
    
categories: 
    - 开发 Development
    - CentOS
    - SWAP
---

CentOS默认是没有设定虚拟内存SWAP的，系统运行到内存不足的时候，oom killer机制会保护性的杀掉某些进程。
所以设置虚拟内存SWAP绝对是有意义的。
本文介绍如何设置CentOS的SWAP。

<!-- more -->


## 参考资料

[参考资料1](https://qiita.com/wmx/items/631222f2e5a9e7a59fb4)
[参考资料2](https://blog.csdn.net/orchidcat/article/details/78497724)

## 系统环境

- CentOS

## 解决方案

### 查看目前内存状态

```bash
$ free -m

              total        used        free      shared  buff/cache   available
Mem:            957         136         441           0         379         639
Swap:             0           0           0

```
可以看到目前SWAP的量是0。

### 创建SWAP文件

在CentOS里，SWAP是以文件的形式存在的。

1、下面的例子用来创建1GB的SWAP文件（每个Block 1MB，一共创建1,024个）：
```bash
[root@localhost ~]# dd if=/dev/zero of=/swapfile bs=1M count=1024

1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB) copied, 2.56416 s, 419 MB/s
```

一般建议创建虚拟内存大小为无力内存的2倍。比如1GB的机器，可以创建2GB的虚拟内存。

２、变更SWAP文件的权限：
```bash
[root@localhost ~]# chmod 600 /swapfile
```

３、将文件类型转换为SWAP
```bash
[root@localhost ~]# mkswap /swapfile

Setting up swapspace version 1, size = 1048572 KiB
no label, UUID=d0519bf6-8abf-4c0d-9375-8068c9e5e9a1
```

4、激活SWAP

```bash
[root@localhost ~]# swapon /swapfile
```


确认：
```bash
[root@localhost ~]# free -m

              total        used        free      shared  buff/cache   available
Mem:            741          76          57           9         606         537
Swap:          1023           0        1023
```

5、持久化SWAP

上面的过程创建的SWAP，一旦系统重启就消失了，因此我们通过下面的步骤来对SWAP进行持久化。

编辑 /etc/fstab 在其中追加一行：

```bash
/swapfile                                 swap                    swap    defaults        0 0
```

