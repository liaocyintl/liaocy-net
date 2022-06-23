---
title: Wordpress的wpdb查询时防止SQL注入的方法
date: 2018-06-22 13:08:17
lang: zh-Hans
tags:
    - Wordpress
    - SQL注入 SQL injection
    
categories: 
    - 开发 Development
    - Wordpress
---

## 问题背景

在Wordpress二次开发过程中，使用wpdb查询数据库，SQL语句中使用用户输入字段时有SQL注入的风险。
本文介绍一种Wordpress推荐的防止SQL注入的方法。

## 解决方案

使用$wpdb->prepare($sql)防止SQL注入，请参考下面代码：

```php
function select_something($where){
    global $wpdb;
    $table_name = $wpdb->prefix . 'table_name';
    
    //当$where为用户输入字段时，直接执行下面的SQL时会有被注入的风险
    $sql = "SELECT * FROM {$table_name} WHERE {%s}";
    //使用$wpdb->prepare($sql)方法避免SQL注入
    $sql = $wpdb->prepare($sql, $where);
    return $wpdb->get_results($sql);
}
```

## 结果和感想
