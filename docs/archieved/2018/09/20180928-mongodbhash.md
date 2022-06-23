---
title: dbHash，检查MongoDB数据库一致性或数据变更
date: 2018-09-28 10:53:22
lang: zh-Hans
tags:
    - MongoDB
categories: 
    - 开发 Development
    - MongoDB
---

## 背景

在做数据备份或回复，或做数据流（Data Pipline）时，我们常常要检查前后数据的一致性，数据是否发生了变换。
这时候需要从数据库的某一个Collection导出其中数据的散列值，作为该数据的指纹。
MongoDB提供了一个dbHash方法，用来实现这个功能。

## 参考文献

- [dbHash](https://docs.mongodb.com/manual/reference/command/dbHash/)

## 实现：

命令格式：
```bash
db.runCommand ( { dbHash: 1, collections: [ <collection1>, ... ] } )
```

注意：
- collection是可选项，省略则输出整个数据库和全部collection的散列值，当然速度要慢一些。

实例，检索test表的散列值：
```text
db.runCommand({dbHash:1,collections:["test"]})
```

![输出结果](/uploads/postimgs/f7ba637c.png)

## 关于性能
对于1,672,321个文档，大小3,503,632,319的数据表计算散列值，我的笔记本大约需要10秒左右，这个性能相当可观。

