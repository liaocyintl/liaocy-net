---
title: 一个我常用的Python工具包
date: 2018-06-18 08:50:17
lang: zh-Hans
tags:
    - MongoDB
    - Python
    - pickle
    - json
    
categories: 
    - 开发 Development
    - Python
---

# Github地址

[https://github.com/liaocyintl/lcypytools](https://github.com/liaocyintl/lcypytools)

## *common.py* 包

- load_csv(path): 从指定路径以二维数组形式返回csv文件。

- load_lines(file): 从指定路径按行读取文件，并删除全部换行符。

- prepare_clean_dir(directory): 当不存在时创建文件夹，并清空该文件夹。

- prepare_dir(directory): 当不存在时创建文件夹。


- get_filename_and_postfix_from_path(path): 抽取指定路径的文件名和扩展名

- current_datetime(): 输出当前时间字符串

- log (class): 写日志到run.log

```python
from common import log
l = log()
l.write("write a line of log")
```

- save_json(path, data): 将一个json对象存储到文件

- load_json(path, encoding="utf-8"): 从文件读取python对象

- clean_folder(folder): 删除一个文件夹下的全部文件

- save_pickle(path, obj): 将一个对象序列化存储到文件

- load_pickle(path): 从文件读取序列化后的对象

- get_hostname_from_url(url): 从URL中抽取主机名

- is_path_exists(path): 检测路径是否存在

## *mongo,py* MongoDB操作包

- 实例化类

```python
from mongo import Mongo
mdb = Mongo(db="test", server='localhost', port=27017)
```

- mdb.insert_with_seqid(col, doc): 插入文档doc到集合col, 并从1开始自增自动生成_id。

- mdb.remove_all_documents(col): 删除集合col中的所有文档。

- mdb.find_all(col): 查找集合col中的全部文档。

- mdb.find_one(col, query): 通过query检索集合col中的第一个文档。

- mdb.save(col, doc): 保存文档doc到集合col，如果_id已经存在则更新它。

- mdb.find(col, query): 通过query在集合col中查询全部文档。

- mdb.find_snapshot(col, query, timeout=False): 按快照方式通过query在集合col中查询全部文档。

- mdb.find_sort(col, query, sortkey, sortorder): 通过query在集合col中查询全部文档并按照sortkey排序。

- mdb.count(col, query): 按照query统计集合col中的文档数量

- mdb.aggregate(col, pipeline): 聚合查询

- mdb.close(): 关闭MongoDB连接

## 结果和感想

我把开发中常用的方法封装在一起，比如读取json一般要两行，这样一行就可以搞定。
增加了效率。

会持续更新。