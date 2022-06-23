---
title: 用Apache运行Wordpress时 设置permalink后发生404未相应的处理方法
date: 2018-12-14 16:52:22
lang: zh-Hans
tags:
    - Ubuntu
    - MariaDB
categories: 
    - 开发 Development
    - Wordpress
---

## 介绍

为了对搜索引擎友好，我们往往要设置自定义的permalink。例如 http://www.mysite.net/mydoc。
本文介绍如何配置permalink环境。

## 参考资料

- [パーマリンクの設定 / 404エラー対応メモ](https://qiita.com/tackeyy/items/f71d1ded5735a1cca4ef)

## 环境

- Ubuntu: 18.04 LTS
- Apache: 2+
- Wordpress: 4+

## 步骤

- 打开Apache的rewrite模块
```text
a2enmod rewrite
service apache2 restart
```

- 编辑网站目录下的.htaccess文件，保证包含下面内容

```text
RewriteEngine On
RewriteBase /wordpress/ 
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
```

- 在网站配置文件中，让Apache读取.htaccess文件

```text
nano /etc/apache2/sites-available/000-default.conf
```

保证有：

```text
<Directory /var/www/html>
        AllowOverride All
</Directory>
```

重启服务器即可。