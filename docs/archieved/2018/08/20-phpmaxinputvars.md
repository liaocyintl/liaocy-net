---
title: 调整PHP的POST数量限制
date: 2018-08-20 18:50:21
lang: zh-Hans
tags:
    - PHP
    
categories: 
    - 开发 Development
    - PHP
---


## 参考资料

- [How to Increase max_input_vars value in PHP in Ubuntu](https://thebroodle.com/how-to/how-to-increase-max-input-vars-value-in-php-ubuntu/)

## 测试环境

- Ubuntu 18.04 LTS
- PHP 7.2

## 问题背景

当POST的数量很多的时候，PHP服务器会莫名其妙的不响应。
网页正常打开，但用var_dump($_POST)查看时，POST只被提交一部分。
特别是在POST变量（提交的表单）特别多的时候会出现这种问题，例如在导入某个大表格时。
这是由于PHP设置里有一个 max-input-vars 参数，会限制每次POST时的数量，我们调整这个参数以增加POST最大容许数量。

## 解决方案

```bash
# 编辑PHP配置文件
nano /etc/php/7.2/apache2/php.ini
```

修改 max-input-vars 参数：

![](/uploads/postimgs/c263e960.png)

保存后重载网页服务器即可解决问题。
