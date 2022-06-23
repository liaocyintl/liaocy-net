---
title: MySQL查询24小时内记录
date: 2018-06-23 14:50:17
lang: zh-Hans
tags:
    - MySQL
    
categories: 
    - 开发 Development
    - MySQL
---

## 问题背景

使用SQL语句筛选查询24小时内结果。

## 解决方案

假设insert_datetime为待筛选的字段，使用以下SQL语句

```sql
SELECT * FROM tablename WHERE insert_datetime > DATE_SUB(NOW(), INTERVAL 24 HOUR);
```

## 结果和感想

在MySQL中测试有效，应该适合大多数SQL标准。