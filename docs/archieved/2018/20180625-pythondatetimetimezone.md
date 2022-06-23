---
title: Python 初始化 datetime.datetime 时设置时区
date: 2018-06-25 10:51:17
lang: zh-Hans
tags:
    - Python
    - Datetime
    
categories: 
    - 开发 Development
    - Python
---

## 问题背景

在有时区开发需求的情况下，比如将时间对象插入到MongoDB，默认会使用UTC时间。
这时候，需要在初始化datetime对象时设置时区。

## 解决方案

```python
from datetime import datetime, timedelta, timezone
# 定义时区，CST中国标准时间，+8区
CST = timezone(timedelta(hours=+8), 'CST')
# 创建时间对象并设置时区tzinfo为CST
t = dt.datetime(2018, 6, 25, 10, 51, 17, tzinfo=CST)
```

## 结果和感想
在开发跨境的网络系统应用，或处理多个时区的时间数据时，时区的设定非常重要。