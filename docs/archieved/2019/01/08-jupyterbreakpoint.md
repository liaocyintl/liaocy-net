---
title: 在Jupyter里用断点（Break Point）调试Python程序
date: 2019-01-08 16:52:22
lang: zh-Hans
tags:
    - Python
    - Jupyter
categories: 
    - 开发 Development
    - Python
---

本文介绍在Jupyter开发Python程序的时候，如何使用断点（Break Point）方式进行调试。
<!-- more -->

## 参考资料

- [What is the right way to debug in iPython notebook?](https://stackoverflow.com/questions/32409629/what-is-the-right-way-to-debug-in-ipython-notebook)
- [ipdb （python调试工具）](https://blog.csdn.net/u013203733/article/details/60577150)


## 环境

- Ubuntu: 18.04 LTS
- Python: 3.7.0

## 步骤

- 安装 ipdb
```text
pip install ipdb
```

- 用法
```python
def fun(a):
    import ipdb; ipdb.set_trace() # 在这里开始调试
    return do_some_thing_about(b)
fun(a)
```

- 快捷键
    - n：下一个
    - ENTER：重复上次命令
    - q：退出
    - p <变量>：打印变量
    - c：继续
    - l：查找当前在哪里
    - s：进入子程序
    - r：运行直到子程序结束