---
title: 使用 Data Brewery 挖掘A股数据之Cubes篇（持续更新）
date: 2018-07-30 17:19:25
lang: zh-Hans
tags:
    - Python
    - Data Mining
    - Data Brewery
    - Cubes
    - SQLLite
    - 在线数据分析 OLAP
    
categories: 
    - 研究 Research
    - 数据挖掘 Data Mining
---

<script text='text/javascript' src='/lib/jquery/index.js'></script>

## 问题背景

本文并非股票量化交易教程，而是通过股票数据挖掘的例子，来学习 Cubes 的笔记。
目前关于Cubes的中文资料不多，当然本文也不可能包含Cubes的全部特性，只能通过例子介绍一部分常用功能。
希望对读者有所帮助。

## 参考资料

[Data Brewery 官网](http://databrewery.org/)

[Cubes](http://cubes.databrewery.org/)

[Cubes 文档](http://cubes.readthedocs.io/en/v1.1/)

[数据挖掘教科书: Data Mining. Concepts and Techniques, 3rd Edition](http://myweb.sabanciuniv.edu/rdehkharghani/files/2016/02/The-Morgan-Kaufmann-Series-in-Data-Management-Systems-Jiawei-Han-Micheline-Kamber-Jian-Pei-Data-Mining.-Concepts-and-Techniques-3rd-Edition-Morgan-Kaufmann-2011.pdf)


## 实验环境及说明

- Python 3.6.1
- Cubes 1.1

Cubes是一个轻量级的Python框架，也是一个工具集。
用来开发数据报告与数据分析应用、在线分析(OLAP)、多维度数据分析和数据聚合。
它是Data Brewery项目的一个子集。

- SQLLite 3


- [Tushare 0.4.3](http://tushare.org/)

Tushare是一个免费、开源的python财经数据接口包。主要实现对股票等金融数据从数据采集、清洗加工 到 数据存储的过程，能够为金融分析人员提供快速、整洁、和多样的便于分析的数据，为他们在数据获取方面极大地减轻工作量，使他们更加专注于策略和模型的研究与实现上。

## Cubes介绍
### 为什么要使用Cubes

Cubes 是一个框架，该框架面向分析师和用户终端程序，提供对于数据立方体（多维数据实体）可理解的、自然的途径。
它可以被提供分析方法的应用程序设计师利用。

特点:
- 被分析数据的逻辑视图： 分析师如何看待数据而不是数据物理地存放在存储器中。
- 在线数据处理（OLAP）和聚合浏览，默认的后端是关系型数据库 - ROLAP。
- 层次维度： 属性可以按层次独立存在，例如类-子类，国家-地区。
- 一个维度上创建多个分层。
- 可定位的元数据（metadata）与数据
- 数据立方体包含数据的认可。
- 可拖拽的数据仓库： 拽入其它的数据集

该框架是可扩展的。

### 数据立方体， 多维度， Facts， 与度量

本框架提供对多维度数据立方体的建模。
![](/uploads/postimgs/13a998f7.png)

Fact是指数据最基本的单元。Fact可以是一个合同，发货单，开销，任务等等。
每一个Fact拥有一个度量：度量是一个可以被测量的属性，比如说价格，数量，收益，持续时间，税，折扣，等等。

维度为Fact提供上下文，例如：

- 过滤检索或报告
- 控制Fact聚合的范围
- 用于排序
- 定义主明细式关系

维度可以包含多个分层，比如一个时间维度可以按年分层，按月分层，和按天分层。

### 特征概览

- 工作空间：立方体分析工作空间。
- 模型：定义数据与Meta数据，包括：数据立方体，维度，分层，属性，标签，定位。
- 浏览器：聚合浏览，切片，下钻。
- 后端：具体实现聚合的应用方法。
- 服务器：基于WSGI的HTTP服务器。
- 格式化器：可对数据进行格式化。
- slicer： 命令行工具

### 模型

逻辑模型从分析师的透视图定义数据，包括数据如何度量、聚合和报告。
模型独立于数据的物理结构。
这种独立使得分析师可以更加专注于数据，而不是如何从难以理解的表单中获取数据。

### 浏览器

数据立方体分析功能的核心是聚合浏览器。
这个浏览器模型包含实用的类和方法。

### 后端

后端提供实际的数据聚合与浏览方法。
数据立方体被创建为 关系型在线数据分析过程 ROLAP 后端，该后端实用以 [SQLAlchemy](http://www.sqlalchemy.org/download.html) 驱动的 SQL 数据库。

该框架是模块化的，因此可以支持多数据库后端，可以有多种立方体计算方法与数据聚合浏览方法。

### 服务器

Cubes有一个内置的WSGI HTTP服务器，叫做 slicer 命令行工具。
对于大多数的框架功能，它都提供JSON API。
这个服务器基于Werkzeug WSGI框架。

## 安装 Cubes 并测试

使用pip安装：
```bash
# 安装cubes， 包含全部模块
pip install cubes[all]

# 克隆代码并进入例子
git clone git://github.com/DataBrewery/cubes.git
cd cubes
cd examples/hello_world

# 准备数据并运行OLAP服务器：
python prepare_data.py
slicer serve slicer.ini

# 尝试一些查询：
curl "http://localhost:5000/cube/irbd_balance/aggregate"
curl "http://localhost:5000/cube/irbd_balance/aggregate?drilldown=year"
curl "http://localhost:5000/cube/irbd_balance/aggregate?drilldown=item"
curl "http://localhost:5000/cube/irbd_balance/aggregate?drilldown=item&cut=item:e"
```

或使用源代码安装：
```bash
git clone git://github.com/DataBrewery/cubes.git
cd cubes
pip install -r requirements.txt
pip install -r requirements-optional.txt
python setup.py install
```

## 对股票数据挖掘

在同一文件夹下创建 stock_model.json ，这是模型的配置文件，并输入下面内容并保存：

```json
{
  "dimensions": [
    {
      "# 日期作为第一个维度": "",
      "name": "date",
      "# 设置这个维度的规则为时间，目前也仅有时间这一个规则 https://cubes.readthedocs.io/en/latest/model.html?highlight=role": "Comment",
      "role": "time"
    },
    {
      "# 收盘价作为另一个维度": "",
      "name": "close"
    }
  ],
  "cubes": [
    {
      "# 数据立方体名称，需要和数据库中那个表统一": "",
      "name": "stock_601398",
      "dimensions": [
      ],
      "# 我们暂时只测量收盘价": "",
      "measures": [
        {
          "name":"close",
          "label":"close"
        }
      ],
      "aggregates": [
        {
          "# 聚合记录数量（日线数据的话表示交易天数）": "function For example: sum, min, max.",
          "name": "record_count",
          "function": "count"
        },
        {
          "# 聚合收盘价最大值": "",
          "name": "close_max",
          "function": "max",
          "# 这个就是我们的测量值": "",
          "measure": "close"
        },
        {
          "# 聚合收盘价最小值": "",
          "name": "close_min",
          "function": "min",
          "measure": "close"
        }
      ],
      "mappings": {
      }
    }
  ]
}
```

在同一文件夹下，用下面的Notebook执行挖掘任务：



可以看到，从2015年1月1日至今（2018年7月31日），工商银行共交易了872天，收盘价最高7.421元/股，最低3.383元/股

## (未完待续)

