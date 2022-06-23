---
title: 在Hexo + GithubPage中使用个人域名
date: 2018-06-12 15:38:17
lang: zh-Hans
tags:
    - Github页面 Github page
    - 域名 Domain
    
categories: 
    - 开发 Development
    - Ubuntu
---

本文介绍通过Hexo创建Github Page时，如何解决每次提交后域名失效，必须手动在Github仓库根目录下添加CNAME文件的问题。

本文对博文 [《github page 解析到个人网站》](https://blog.csdn.net/u012589515/article/details/68065608)
进行补充，解释在Hexo中，如何解决每次提交后域名失效的问题

## 前提条件

1. 已经根据 [《github page 解析到个人网站》](https://blog.csdn.net/u012589515/article/details/68065608) 配置好域名解析；
2. 已经根据 上文 配置好Github Page中的个人域名

## 添加CNAME文件

1. 制作文件名为CNAME的文本文件，其中的内容是你的博客所使用的域名，如下例：

![制作CNAME文件](/uploads/postimgs/20180612005.png "制作CNAME文件")

2. 文件放在 /source/CNAME 的位置，这个位置的文件会被部署到仓库的根目录

``` bash
# hexo deploy
```

3. 部署到github，问题解决

