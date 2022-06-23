---
title: 一个可以输出具体变化字符的编辑距离改进算法
date: 2018-07-03 16:04:00
lang: zh-Hans
tags:
    - 编辑距离 Edit Distance 
    - 莱温斯坦距离 Levenshtein Distance 
    - 动态规划 Dynamic Programming
    
categories: 
    - 研究 Research
    - 语言处理 Language Processing
---

代码
======
[https://github.com/liaocyintl/detail_edit_distance](https://github.com/liaocyintl/detail_edit_distance)

介绍
======
此算法为编辑距离（Edit Distance）又称莱文斯坦距离(Levenshtein distance, LD [1])算法的改良版本。
传统的编辑距离算法，可以得出从原字符串source变更为目标target字符串，所需要最少的变更步骤，或称成本（cost）。
我们的改良算法除了能够输出最小成本以外，还可以给出具体那些字符产生了变更，包括插入（insertions），删除（deletions）和交换（substitutions）.

例如, 字符串"kitten"与"sitting"的编辑距离是3。
我们的算法可以具体地给出哪些字符发生了变更，如下：
- kitten → sitten (交换"k"为"s")
- sitten → sittin (交换"e"为"i")
- sittin → sitting (插入"g"在最后)

关于编辑距离:
(Levenshtein distance)[https://en.wikipedia.org/wiki/Levenshtein_distance]

参考文献:
[1] LEVENSHTEIN, Vladimir I. Binary codes capable of correcting deletions, insertions, and reversals. Soviet physics doklady. Vol.10, No.8, pp.707-710, 1966.

快速开始
======

**克隆代码到本地**：

```bash
git clone https://github.com/liaocyintl/detail_edit_distance
```

**例1.** 获取字符串"kitten"与"sitting"的详细变化:

Python code:
```python
from distance import ded
source = "kitten"
target = "sitting"
rs = ded(source=source, target=target)
print(rs)
```

输出 (rs):
```json
{
  "detail": [
      {"type": "sub", "src_i": [0], "tgt": "s", "src": "k", "tgt_i": [0], "cost": 1}, 
      {"type": "none", "src_i": [1, 2, 3], "tgt": "itt", "src": "itt", "tgt_i": [1, 2, 3], "cost": 0}, 
      {"type": "sub", "src_i": [4], "tgt": "i", "src": "e", "tgt_i": [4], "cost": 1}, 
      {"type": "none", "src_i": [5], "tgt": "n", "src": "n", "tgt_i": [5], "cost": 0},
      {"type": "ins", "src_i": [], "tgt": "g", "src": "", "tgt_i": [6], "cost": 1}
  ], 
  "cost": 3
}
```

- "detail":  字符串"kitten"与"sitting"的详细变化。
    - "type"的值可以是 ["none", "ins", "del", "sub"]， 其中：
        - 'none":  无变更
        - "ins": 发生了插入
        - 'del': 发生了删除
        - "sub": 发生了交换
    - "src" and "tgt": 发生变化的子字符串（原字符串和目标字符串）
    - "src_i" and "tgt_i": 发生变化的子字符串（原字符串和目标字符串）的下脚标
    - "cost": 该变更产生多少成本
- "cost": 总成本

**例2.** 获取分词后字符串的详细变化：

如果你需要以词为单位比较两个句子，可以把分好词的句子作为输入，例如：
```python
from distance import ded
source = 'I have a dream'
source = source.split(" ") #按空格将句子分成["I", "have", "a", "dream"]
target = 'I had a dream about you'
target = target.split(" ")
rs = ded(source=source, target=target)
print(rs)
```

输出:
```json
{
  "cost": 3, 
  "detail": [
      {"src_i": [0], "src": "i", "tgt_i": [0], "tgt": "i", "type": "none", "cost": 0}, 
      {"src_i": [1], "src": "have", "tgt_i": [1], "tgt": "had", "type": "sub", "cost": 1}, 
      {"src_i": [2, 3], "src": "adream", "tgt_i": [2, 3], "tgt": "adream", "type": "none", "cost": 0}, 
      {"src_i": [], "src": "", "tgt_i": [4, 5], "tgt": "aboutyou", "type": "ins", "cost": 2}
  ]
}
```

**例3.** 按字符一个一个输出结果，不要把相邻相同的变更进行合并:

设定 'is_combine_LCS' 为 'False' 则按字符一个一个输出结果，不会把相邻相同的变更进行合并。
默认为 'True'。

```python
from distance import ded
source = "kitten"
target = "sitting"
rs = ded(source=source, target=target, is_combine_LCS=False)
print(rs)
```

输出:
```json
{
  "cost": 3, 
  "detail": [
      {"src": "k", "cost": 1, "type": "sub", "tgt_i": [0], "src_i": [0], "tgt": "s"}, 
      {"src": "i", "cost": 0, "type": "none", "tgt_i": [1], "src_i": [1], "tgt": "i"}, 
      {"src": "t", "cost": 0, "type": "none", "tgt_i": [2], "src_i": [2], "tgt": "t"}, 
      {"src": "t", "cost": 0, "type": "none", "tgt_i": [3], "src_i": [3], "tgt": "t"}, 
      {"src": "e", "cost": 1, "type": "sub", "tgt_i": [4], "src_i": [4], "tgt": "i"}, 
      {"src": "n", "cost": 0, "type": "none", "tgt_i": [5], "src_i": [5], "tgt": "n"}, 
      {"src": "", "cost": 1, "type": "ins", "tgt_i": [6], "src_i": [], "tgt": "g"}
  ]}

```
可以看出子字符串"itt"被拆分成一个一个单字


**例4.** 按照原字符串的最小成本输出:

例如在“打字练习”的应用中，我们需要计算用户有效输入的得分。
打字练习的教材可能包含很长的内容，用户输入只是其中的一部分。

这时候，我们将用户输入内容作为source输入；
将教材作为target输入；
设置 'as_least_cost' 为 'True'， 这样算法会按照在source字符串的最小成本进行输出：

```python
from distance import ded
source = "I had a dream that my"
target = "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character."
rs = ded(source=source.split(" "), target=target.split(" "), as_least_cost=True)
print(rs)
```

```json
{
  "detail": [
    {"tgt_i": [0], "src": "i", "type": "none", "src_i": [0], "tgt": "i", "cost": 0}, 
    {"tgt_i": [1], "src": "had", "type": "sub", "src_i": [1], "tgt": "have", "cost": 1}, 
    {"tgt_i": [2, 3, 4, 5], "src": "adreamthatmy", "type": "none", "src_i": [2, 3, 4, 5], "tgt": "adreamthatmy", "cost": 0}
  ], 
  "cost": 1
}

```
我们可以看到，其实在source里面，只有"had"一处错误。
因此有效输入单词数量为 len(source) - rs["cost"] = 6 - 1 = 5

引用
======
如果该算法对您有帮助的话请引用我们的论文：
```text
@article{liao2013,
    title={Development of the Japanese Input Training System: Four Types of Training and the Fast Algorithm for Automatic Scoring},
    author={Liao, Chenyi and Minoura, Emiko and Takeoka, Saori and Ozaki Masahiro},
    journal={Proceedings of the 75th National Convention of IPSJ},
    pages={655--656},
    year={2013}
}
```