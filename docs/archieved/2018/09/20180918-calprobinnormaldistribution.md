---
title: Python 计算给定值在给定高斯分布中的概率
date: 2018-09-18 12:06:22
lang: zh-Hans
tags:
    - Python
categories: 
    - 研究 Research
    - 数据挖掘 Data Mining
---

## 背景

当我们用数据拟合一个符合高斯分布的概率密度函数之后，常常需要把另一个值带入该密度函数计算其概率。
我们使用Python可以轻松计算出这个数据。

## 参考资料
- [Calculate probability in normal distribution given mean, std in Python](https://stackoverflow.com/questions/12412895/calculate-probability-in-normal-distribution-given-mean-std-in-python)
- [scipy.stats.norm](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.norm.html)


## 实现

```python
import numpy as np
import scipy.stats

#训练数据
data = [1, 2, 2, 3, 3, 3, 4, 4, 5]
#测试数据
test_value = 2
#平均值
mu = np.mean(data)
#标准差
std = np.std(data)
#概率
prob = scipy.stats.norm(mu, std).pdf(test_value)
print("prob.", prob)

#output： prob. 0.23745442481665455

```
