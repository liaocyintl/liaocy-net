---
title: 在Ubuntu 18.04部署SCWS-1.2.3中文分词与PHP支持
date: 2018-07-24 10:20:17
lang: zh-Hans
tags:
    - PHP
    - Ubuntu
    - SCWS
    - 形态分析 Morphological Analysis
    
categories: 
    - 开发 Development
    - SCWS
---

## 问题背景
需要用PHP系统全文检索时，通常要先对文本进行分词操作。
本文介绍一个Linux环境下，支持PHP分词的工具——SCWS，以及其安装部署。

[本文参考](https://blog.csdn.net/hanzengyi/article/details/51736130)

## 系统环境

- Ubuntu 18.04
- SCWS 1.2.3
- PHP 7.2

## 解决方案

### 安装依赖包

```bash
# 更新源
sudo apt update
# 安装编译依赖包
sudo apt install build-essential
# 安装PHP环境
sudo apt install php7.2
# 安装Apache服务器
sudo apt install apache2
```

注意，如果已配置有Apache和PHP，则可省略后两部。

### 下载、编译、安装 SCWS 1.2.3 到系统

```bash
# 下载SCWS的源码
wget http://www.xunsearch.com/scws/down/scws-1.2.3.tar.bz2
# 解压缩
tar xvjf scws-1.2.3.tar.bz2
# 进入目录
cd 
# 编译
./configure --prefix=/usr/local/scws
make
# 安装
sudo make install
# 验证安装
ls -al /usr/local/scws/lib/libscws.la
# 试执行scws-cli文件
/usr/local/scws/bin/scws -h
```

注意，prefix为SCWS的安装目录。
试执行scws-cli文件后，如出现：
```bash
scws (scws-cli/1.2.3)
Simple Chinese Word Segmentation - Command line usage.
Copyright (C)2007 by hightman.
```
表示安装正确！

### 安装词库
```bash
# 进入目录
cd /usr/local/scws/etc
# 安装GBK编码词库
sudo wget http://www.xunsearch.com/scws/down/scws-dict-chs-gbk.tar.bz2
sudo tar xvjf scws-dict-chs-gbk.tar.bz2
# 安装UTF-8编码词库
sudo wget http://www.xunsearch.com/scws/down/scws-dict-chs-utf8.tar.bz2
sudo tar xvjf scws-dict-chs-utf8.tar.bz2
```

### 安装PHP支持

```bash
# 回到源码目录
cd ~/scws-1.2.3/phpext/
# 执行phpize （如果没有这个命令，可能要求安装php7.2-dev，sudo apt install php7.2-dev）
phpize
# 设定安装目录
./configure --with-scws=/usr/local/scws
# 编译
make
# 安装
sudo make install
# 在php.ini中启用插件
sudo nano /etc/php/7.2/apache2/php.ini
# 在最下面加入
extension = scws.so
scws.default.charset = utf-8
scws.default.fpath = /usr/local/scws/etc
# 重启Apache
sudo service apache2 restart
```

之后如果进入phpinfo()页面可以看到：

![SCWS插件已安装](/uploads/postimgs/fcc912dc.png)

### 尝试用PHP分词

建立PHP分词页面
```bash
cd /var/www/html/
sudo nano scws.php

```

输入以下PHP代码，尝试经典分词案例：

```php
<?php
    ini_set('display_errors', 1);
    $so = scws_new();
    $so->set_charset('utf-8');
    $so->add_dict(ini_get('scws.default.fpath') . '/dict.utf8.xdb');
    $so->set_rule(ini_get('scws.default.fpath') . '/rules.utf8.ini');
    $so->set_ignore(true);
    $so->set_multi(false);
    $so->set_duality(false);
    $so->send_text("武汉市长江大桥，我们中出了一个叛徒。");
    $words_array = $so->get_result();
    $words = "";
    foreach ($words_array as $v) {
       // 输出分词结果
       echo var_dump($v) . "<br />";
    }
    $so->close();
?>
```

用浏览器访问：

![](/uploads/postimgs/2b184cde_2.png)

分词成功！（我这儿是因为nano编辑器的原因，所以顺序有点怪）

说明：

- word： 词，Surface表层格
- off： 词偏移量
- len： 词长度
- idf： 逆向文件频率，未做归一化，越大说明该词越重要。应该是训练文本中的频率。
- attr： 词性

## 参考资料

[SCWS](http://www.xunsearch.com/scws/)

[参考资料](https://blog.csdn.net/hanzengyi/article/details/51736130)

[PHP插件参考资料](https://github.com/hightman/scws/blob/master/phpext/README.md)

## 结果和感想

在海外下载资源真慢。