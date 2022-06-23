---
title: 统计学常用公式汇总
date: 2020-05-02 14:30:00
lang: zh-Hans
tags:
  - 统计学

categories:
  - 研究 Research
  - 统计学
---

本文总结统计学常用公式，便于查询。

参考资料：
1. [统计学辅导教学讲解视频——知识点精讲](https://www.bilibili.com/video/BV1aE411a7gJ?p=1)
1. [LaTeXの特殊文字・特別記号](http://www.ic.daito.ac.jp/~mizutani/tex/special_characters.html)
1. [参数估计与置信区间](http://webdataanalysis.net/data-analysis-method/parameter-estimation/)
1. [正态总体均值与方差的区间估计](https://blog.csdn.net/weixin_42578658/article/details/90572988)
1. [样本容量的确定](https://blog.csdn.net/weixin_33890499/article/details/92154677)
1. [泊松分布的现实意义是什么，为什么现实生活多数服从于泊松分布？](https://www.zhihu.com/question/26441147)
1. [怎样用通俗易懂的文字解释正态分布及其意义？](https://www.zhihu.com/question/56891433)
1. [指数分布公式的含义是什么？](https://www.zhihu.com/question/24796044/answer/673838656)
1. [統計検定2級対応 統計学基礎 (日本語) ](http://www.tokyo-tosho.co.jp/books/978-4-489-02227-2/)
1. [方差分析（ANOVA)原理及其实现](https://www.jianshu.com/p/59cf0337c4d9)
1. [三大抽样分布：卡方分布，t分布和F分布的简单理解](https://blog.csdn.net/anshuai_aw1/article/details/82735201)
1. [统计学上标准差与标准误的区别与联系是什么？](https://www.zhihu.com/question/22864111)
1. [八种样本抽样方法介绍](https://blog.csdn.net/fendouaini/article/details/102579343)

<!-- more -->
# 抽样和研究
## 抽样方法
### 简单随机抽样（単純無作為抽出）
- 方法：从总体里完全随机抽取样本
- 例子：一个班里的同学里随便叫出来3人
- 特点：每个样本被抽中的概率相同

### 系统抽样（系統抽出）
- 方法：等概率抽取总体的各个样本
- 例子：俄罗斯轮盘赌；随机确定第一个样本，然后等间隔抽取
- 特点：可能是定位样本比较容易；每个样本被抽中的概率相同

### 分层抽样（層化無作為抽出）
- 方法：以某种特征将总体分为若干个层，在每个层里随机抽取若干样本
- 例子：一个班里的同学分为男生和女生两层，男生随机抽取3人，女生也随机抽取3人
- 特点：层分的越多精度越高

### 多段抽样
- 方法：先确定一个层次级别，再确定层次里的层次进行抽样
- 例子：学校一共有4个年级，先抽出一个年级，再从这个年级里抽出三个班，再从这三个班里抽取样本
- 特点：段数越多精度越差

### 整群抽样（クラスター抽出）
- 方法：将整体分割成小集团，然后抽取某几个集团中的全部样本
- 例子：一个年级的同学分成10个班，从中抽取3个班的全体同学
- 特点：如果有事先有列表的话可以解决时间和费用；但会降低精度

## 研究
### 实验研究
- 特点：实验者干涉实验对象的活动；
- 例子：一半人喂药，另一半人喂安慰剂
- 实验设计的原则（费雪三原则）：
  - 重复(replication)：多次重复相同的处理，使得偶然误差的大小可以评估；例如，个体差异。
  - 随机化(randomization)：随机的，无作为的抽取样本；把无法控制的影响因素转化为随机误差；
  - 局部控制(local control)：对实验对象设计区组，哪些投药哪些投安慰剂；

### 观察研究
- 特点：实验者不去干涉实验对象的活动；由实验对象进行选择；
- 例子：观察动物迁徙状况，观察气象状况；


# 概率
## 事件概率计算
### 一般计算
{% cq %}

$P(A \cap B) = P(A) + P(B) - P(A \cup B)$ 

{% endcq %}

其中：
- $P(A \cap B)$：事件A与事件B同时发生的概率，互斥事件这一项为0
- $P(A \cup B)$：和事件，事件A与事件B至少有一个发生


### 条件概率
{% cq %}

$P(B | A) = \frac{P(A \cap B)}{P(A)}$ 

{% endcq %}

物理意义：
- A发生的情况下B发生的概率等于，从A和B同时发生的概率中除去A发生的概率

### 贝叶斯定理 Bayes' Theorem
{% cq %}

$P(H_i | A) = \frac{ P(H_i)P(A|H_i) }{P(A)}$ 

$P(H_i | A) = \frac{ P(H_i)P(A|H_i) }{\sum P(H_j)P(A|H_j)}$ 

{% endcq %}

其中：
- $P(H_i)$：独自发生的概率，即$H_i$的先验概率（Prior Probability）
- $P(H_i | A)$：A发生以后$H_i$发生的概率，即$H_i$的后验概率（Posterior Probability）

## 常见的分布

### 伯努利分布 Bernoulli Distribution
概率密度函数：
{% cq %}

$P(X = 1) = f(1) = p$

$P(X = 0) = f(0) = 1 - p$

$(0 \leq p \leq 1)$

{% endcq %}

其中：
- $p$：正例发生的概率

物理意义：
- 投一次硬币
- 只有两种结果，且结果互斥

特性：
- 期望：$\mu = E[X] = p$
- 方差：$\sigma^2 = E[X^2] = p(1-p)$

### 二项分布 binomial distribution

{% cq %}

$P(X=x)=f(x)=C_{n}^{x} p^x(1-p)^{n-x}$

$(x = 0,1,2....)$

$C_{n}^{x} = \frac{n!}{x!(n-x)!} = C_{n}^{n-x}$

{% endcq %}


物理意义：
- 多次独立重复实验，刚好出现x次正例的概率
- 投n次硬币，刚好有x次正面朝上的概率

特性：
- 期望：$E[X] = np$
- 方差：$V[X] = np(1-p)$

### 泊松分布 Poisson distribution
概率密度函数：
{% cq %}

$f(x) = e^{-\lambda} \lambda^x / x!$

$\lambda = np$

{% endcq %}

其中：
- $x$：一段事件内事件发生的次数
- $\lambda$：一段事件内事件发生的次数的平均，可以用样本均值来计算。例如，一周中的每天平均卖5个包子。

物理意义：
- 当一个随机事件，单位事件内发生的次数$\lambda$独立地出现时，那么这个事件在单位时间（或空间）内出现的次数或个数就近似地服从泊松分布
- 例如：一周内机器坏掉x次的概率

特性：
- 均值：$E[X] = \lambda$
- 方差：$V[X] = \lambda$
- 再生性：if $X_1 \sim Po(\lambda_1)$ and $X_2 \sim Po(\lambda_2)$ then $X_1:X_2 \sim Po(\lambda_1 + \lambda_2)$

### 几何分布
{% cq %}

$f(X = x) = f(x) = p(1-p)^{x-1}$

$(x=1, 2, 3, ...)$

{% endcq %}

物理意义：
- 成功概率为$p$的伯努利实验连续进行，从一开始连续$X$次都成功的概率

性质：
- 期望：$E[X] = \frac{1}{p}$
- 方差：$V[X] = \frac{1 - p}{p^2}$

### 均匀分布（Uniform distribution）
{% cq %}

$f(x) = \frac{1}{b-a} (a \leq x \leq b)$

$f(x) = 0 (other)$

{% endcq %}

物理意义：
- 在区间$[a, b]$内，概率处处相等；区间外概率为0

特性：
- 均值：$E[X] = \frac{a + b}{2}$
- 方差：$V[X] = \frac{(b - a)^2}{12}$

### 正态分布 （Normal distribution）
概率密度（一般形式）：
{% cq %}
$f(x)=\frac{1}{\sqrt{2 \pi \sigma^2}}e^{(\frac{x-\mu}{2\sigma})^2}$
{% endcq %}

概率密度（标准化形式）：
{% cq %}
$Z=\frac{(X-\mu)}{\sigma} \sim N(0, 1)$
{% endcq %}

物理意义：
- 万金油，[参考](https://www.zhihu.com/question/56891433)

### 指数分布
概率密度：
{% cq %}

$W(T>t) = f(t) = \lambda e ^ {\lambda t}$

$(0 \leq t)$

{% endcq %}

物理意义：
- 泊松过程在一定时间内没有发生事件的概率
- 例子：上午八点开店，到十二点一个人都没进来的概率

性质：
- 期望：$E[W] = \frac{1}{\lambda}$
- 方差：$V[W] = \frac{1}{\lambda ^ 2}$
- 无记忆性 (memoryless property, lack of memory)，赌徒悖论

## 抽样常用分布

### 卡方分布 K-Square ($\chi ^ 2$)

概率密度函数（这个不考）：

{% cq %}

$g_n(x) = \frac{1}{2^{\frac{n}{2}} \Gamma (\frac{n}{2})} x^{\frac{n}{2} - 1} e ^ {-\frac{x}{2}} , x > 0$

$g_n(x) = 0 , x > 0$

{% endcq %}

其中：
- $\Gamma (\cdot)$：Gamma函数

定义：
- 设$X_1$、$X_2$ ... $X_n$ 服从标准正态分布 $N(0, 1)$， 且为独立同分布
- 则$X=\sum^n_{i=1} X_i^2$是自由度为$n$的$\chi ^ 2$卡方分布
- 记作 $X \sim \chi _n ^ 2$

特性：
- 当n=1,2时单调递减
- 当n>=3时有峰值
- 当n足够大时趋近于对称
- 期望：$E(X) = n$
- 方差：$Var(X) = 2n$
- $Z_1 + Z_2 \sim \chi^2_{n_1 + n_2}$ ($Z_1, Z_2$)相互独立

### t分布

概率密度函数（这个也不考）：
{% cq %}

$t_n(x) = \frac{\Gamma(\frac{n+1}{2})}{\Gamma(\frac{n}{2}) \sqrt{n \pi}} (1 + \frac{x^2}{n})^{-\frac{n+1}{2}} , -\infty < x < \infty$


{% endcq %}

定义：
- 随机变量 $X \sim N(0, 1), Y \sim X_n^2$
- $X, y$独立
- 则 $T = \frac{X}{\sqrt{Y/n}}$ 为自由度 $n$ 的 $t$ 变量
- 其分布称为自由度 $n$ 的 $t$ 分布
- 记为 $T \sim t_n$

性质
- 当$n$极大时，t分布退化为标准正态分布
- 期望：$E(T) = 0 , n >= 2$
- 方差：$Var(T) = \frac{n}{n-2} , n >= 3$

### F分布

概率密度函数（这个还是不考）：
- [参考](https://blog.csdn.net/anshuai_aw1/article/details/82735201)

定义：
- 随机变量 $X \sim \chi_m^2, Y \sim \chi_n^2$，且互相独立
- 则 $F = \frac{X/m}{T/n}$ 为自由度分别是$\nu_1 = m, \nu_2 = n$的F分布
- 记为 $F \sim F_{m, n}$

性质：
- 如果$Z \sim F_{m, n}$，则$1/Z \sim F_{n, m}$
- 如果$T \sim t_n$，则$T^2 \sim F_{1, n}$
- $F_{m, n}(1 - \alpha) = 1/F_{n,m}(\alpha)$

## 样本均值和方差的分布

### 正态变量线性函数的分布

- 样本的均值服从分布$\bar{X} \sim N(\mu, \sigma^2/n)$
- 个人理解，从总体X里抽取若干个样本，那么样本的均值的期望等于总体的均值
- 样本均值和总体均值的偏差，实际上是标准误（SE）等于样本标准差的$1/n$
- 比如说只抽取一个样本，n=1，那么均值的标准误=总体标准差，标准误最大；
- 如果抽取全体样本，n=N，那么两个偏差就相等了，标准误就变成0；

### 样本均值和方差的分布

- $\bar{X} \sim N(\mu, \sigma^2/n)$
- $(n-1)S^2/\sigma^2 \sim \chi^2_{n-1}$
- $\bar{X}$ 和 $S^2$ 独立

# 数据离散程度的度量

## 异众比率 Variation Ratio
{% cq %}

$V_r = \frac{\sum f_i - f_m}{f_i} = 1 - \frac{f_m}{\sum f_i}$

{% endcq %}

其中：
- $\sum f_i$：总次数
- $f_m$：众数组次数

## 四分位差
{% cq %}

$Q_d = Q_u - Q_l$

{% endcq %}

其中：
- $Q_u$：第三四分位数
- $Q_l$：第一四分位数


物理意义：
- 衡量数据内聚

## 极差 range
{% cq %}

$R = max(x_i) - min(x_i)$

{% endcq %}

其中：
- $max(x_i)$：数据最大值
- $min(x_i)$：数据最小值

物理意义：
- 数据范围

## 离差绝对值的平均数（分组条件下）
{% cq %}

$M_d = \frac{n\sum |M_i - \bar{x}|f_i}{\sum f_i}$

{% endcq %}

其中：
- $M_i$：组中值
- $\bar{x}$：总体均值
- $f_i$：组内次数
- $\sum f_i$：总次数

## 方差 $\sigma^2$ 标准差 $\sigma$ Variance & Standard Deviation
总体方差：
{% cq %}
$\sigma^2 = \frac{\sum (x_i - \bar{X}) ^ 2}{N}$
{% endcq %}

样本方差（失去一个自由度）：
{% cq %}
$S^2 = \frac{\sum (x_i - \bar{X}) ^ 2}{N-1}$
{% endcq %}

## 标准化分数 Standard Score
{% cq %}
$Z^i = \frac{x_i - \bar{X}}{S}$
{% endcq %}

其中：
- $S$：样本标准差
- $\bar{X}$：样本平均

物理意义：
- 判断离群点 outlier
- 将函数投影到标准正态分布的范围

性质
- 均值为0，方差为1
- 进行线性变换，但不改变数据的位置

## 切比雪夫不等式 Chebyshev's Inequality
物理意义：
- 对于任意数据，不一定符合正态分布
- 至少有 $1 - \frac{1}{k^2} \times 100%$ 的数据落在 $ \bar{X} \pm k \sigma $
- 其中$k \in 2,3 ...$

## 离散系数 coefficient of variation
{% cq %}

$V_s = \frac{\sigma}{\bar{x}}$

{% endcq %}

物理意义：
- 单位均值上的离散程度，常用在两个总体均值不等的离散程度的比较上。
- 若两个总体的均值相等，则比较标准差系数与比较标准差是等价的。

## 偏态 skewness ['skjʊnɪs]

{% cq %}

$SK = \frac{n \sum (x_i - \bar{X}) ^ 3}{N \sigma ^ 3}$

{% endcq %}

物理意义：
- 偏态系数是三阶动差 （平均是一阶；方差是二阶；峰态系数是四阶段；）

性质：
- 如果 $sk = 0$，说明数据对称
- 如果 $sk > 0$，说明数据右偏，右侧长尾
- 如果 $sk < 0$，说明数据左偏，左侧长尾

## 峰态 Kurtosis [kɝ'tosɪs]

{% cq %}

$K = \frac{n \sum (x_i - \bar{X}) ^ 4}{N \sigma ^ 4}$

{% endcq %}

性质：
- 如果 $K = 0$，说明峰度适中
- 如果 $K > 0$，说明峰度尖峰
- 如果 $K < 0$，说明峰度扁平

## 方差的一些性质

### 协方差和相关系数

{% cq %}

$R_{XY} = \frac{Cov[X, Y]}{\sqrt{Cov[X]Cov[Y]}}$

{% endcq %}

### 用期望求协方差
{% cq %}

$Cov[X, Y] = E[XY] - E[X]E[Y]$

{% endcq %}

其中：
- $Cov[X, Y]$：X，Y的协方差
- $E[XY]$：$XY$的期望，概率变量XY的积
- $E[X]$：$X$的期望
- $E[Y]$：$Y$的期望

### 协方差的放大
{% cq %}

$Cov[3X, 2Y] = 3 \times 2 \times Cov[X, Y]$

{% endcq %}

### 指数的期望

{% cq %}

$E[X^2] = V[X] + (E[X])^2$

{% endcq %}

# 参数估计

## 总体的均值估计
物理意义：
- 抽样统计后，用样本均值估计总体的均值

### 大样本的置信区间 （$N>=30$）
Z统计量：
{% cq %}

$Z=\frac{\bar{x} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1)$

{% endcq %}

其中：
- $Z$：正态统计量
- $\bar{x}$：样本均值
- $\mu$：总体均值
- $\sigma$：总体标准差

物理意义：
- 在标准正态分布模型中Z代表概率量

置信区间：
{% cq %}

$\bar{x} \pm Z_{a/2} \frac{S}{\sqrt{n}}$

{% endcq %}


其中：
- $Z_{a/2}$：在置信水平$1-\alpha$下的Z统计量的值，双尾
- $S$：样本标准差
- $\bar{x}$：样本均值

物理意义：
- 用于通过样本均值来估计总体均值
- 总体均值$\mu$在置信水平$1-\alpha$下的置信区间
- 即有$(1-\alpha) \times 100%$的可能性$\mu$落在这一范围之内

### 小样本的置信区间 （$N<30$）
T统计量：
{% cq %}

$t=\frac{\bar{x} - \mu}{\sigma / \sqrt{n}} \sim t(n-1)$

{% endcq %}

其中：
- $t(n-1)$：自由度为n-1的t分布

物理意义：
- t代表t分布的概率量

置信区间：
{% cq %}

$\bar{x} \pm t_{a/2}(n-1) \frac{S}{\sqrt{n}}$

{% endcq %}


其中：
- $t_{a/2}(n-1)$：在自由度$n-1$下，置信水平$1-\alpha$下的t统计量的值
- $S$：样本标准差，如果总体标准差知道的话也可以用$\sigma$
- $\bar{x}$：样本均值

物理意义：
- 用于通过样本均值来估计总体均值（小样本情况下）
- 总体均值$\mu$在置信水平$1-\alpha$下的置信区间
- 即有$(1-\alpha) \times 100%$的可能性$\mu$落在这一范围之内

### 总体比例的区间估计
Z统计量：
{% cq %}

$Z=\frac{p - \pi}{\sqrt{\frac{p(1-p)}{n}}} \sim N(0, 1)$

{% endcq %}

物理意义：
- 二项分布样本的正例的概率$p$其实就是其均值（期望），所以与均值估计其实差不多

其中：
- $p$：样本中的正例的概率
- $\pi$：总体的正例的概率
- $\sqrt{\frac{p(1-p)}{n}}$：二项分布的样本标准差

置信区间：
{% cq %}

$p \pm z_{a/2} \sqrt{\frac{p(1-p)}{n}}$

{% endcq %}

物理意义：
- 在二项分布数据中，用于通过样本正例概率来估计总体的正例概率
- 置信区间：总体正例概率$\pi$在置信水平$1-\alpha$下
- 即有$(1-\alpha) \times 100%$的可能性$\pi$落在这一区间之内

## 总体方差的区间估计
置信区间：
{% cq %}

$\frac{(n-1)S^2}{\chi_{\alpha/2}^2 (n-1)} \leq \sigma^2 \leq \frac{(n-1)S^2}{\chi_{1 - \alpha/2}^2(n-1)}$

{% endcq %}

其中：
- $\chi_{\alpha/2}^2 (n-1)$：在自由度$n-1$下，置信水平$1-\alpha$下的卡方（k-square）统计量
- $s^2$：样本方差
- $\sigma^2$：总体方差

物理意义：
- 用于通过样本方差来估计总体方差
- 即有$(1-\alpha) \times 100%$的可能性$\sigma^2$落在这一置信范围之内

## 双总体的均值差
大样本置信区间：
{% cq %}

$(\bar{x_1} - \bar{x_2}) \pm Z_{a/2} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$

{% endcq %}

小样本置信区间（方差不知道但相等）：
{% cq %}

$S_p^2 = \frac{(n_1 - 1) S_1^2 + (n_2 - 1) S_2^2}{ (n_1 - 1) + (n_2 - 1)}$

$(\bar{x_1} + \bar{x_2}) \pm t_{a/2}(n_1-n_2-2) \sqrt{S_p^2 (\frac{1}{n_1} + \frac{1}{n_2})}$

{% endcq %}

小样本置信区间（方差不相等）：
{% cq %}

$\nu = \frac{(\frac{s^2_1}{n_1} + \frac{s^2_2}{n_2})^2}{ \frac{(s^2_1/n_1)^2}{n_1 - 1} + \frac{(s^2_2/n_2)^2}{n_2 - 1} }$

$(\bar{x_1} - \bar{x_2}) \pm t_{a/2}(\nu) \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$

{% endcq %}

## 双总体的比例差
{% cq %}

$(\bar{x_1} - \bar{x_2}) \pm Z_{a/2} \sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}}$

{% endcq %}

## 双总体的方差比
置信区间：
{% cq %}

$\frac{\frac{s^2_1}{s^2_2}}{F_{\alpha / 2}} \leq \frac{\sigma^2_1}{\sigma^2_2} \leq \frac{\frac{s^2_1}{s^2_2}}{F_{1 - \alpha / 2}}$

{% endcq %}

## 正态分布样本容量的确定
{% cq %}

$n_p = \frac{(Z_{\alpha / 2}) ^ 2 \sigma ^ 2}{E^2}$

$E = Z_{\alpha / 2} \frac{\sigma}{\sqrt{n}}$

{% endcq %}

其中：
- E:估计误差。一般小于0.1；

## 二项分布样本容量的确定
{% cq %}

$n_p = \frac{(Z_{\alpha / 2}) ^ 2 \pi (1 - \pi)}{E^2}$

$E = Z_{\alpha / 2} \sqrt{\frac{\pi (1 - \pi)}{n}}$

{% endcq %}

# 假设检验
## 陈述

|          | 双侧                                   | 左侧 （单侧）         | 右侧 （双侧）    |
|----------|----------------------------------------|------------------|------------------|
| 原假设$H_0$ | $\mu=\mu_0$      | $\mu \geq \mu_0$ | $\mu \geq \mu_0$ |  
| 备择假设$H_1$ |   $\mu \ne \mu_0$ |  $\mu < \mu_0$  | $\mu > \mu_0$  |    
| 拒绝域   | $+Z > Z_{\alpha/2}$ | $Z < Z_{\alpha}$ | $Z > Z_{\alpha}$  |    
| 例       | 药品无（有）显著效果 |  灯泡寿命不得低于700小时（关注下限）  | 次品不得高于10件（关注上限）  |    

## 总体均值检验
### Z检验（大样本）
统计量：
{% cq %}

$Z=\frac{\bar{X} - \mu}{\sqrt{\frac{\sigma^2}{n}}} \sim N(0, 1)$

{% endcq %}


### t检验（小样本切不知道分布状况）
{% cq %}

$t=\frac{\bar{X} - \mu}{\sqrt{\frac{S^2}{n}}} \sim N(0, 1)$

{% endcq %}

## 总体比例检验

{% cq %}

$Z=\frac{p - \pi}{\sqrt{\frac{\pi_0(1-\pi_0)}{n}}} \sim N(0, 1)$

{% endcq %}

性质：
- 概率不知道时用0.5代替

## 总体方差检验
{% cq %}

$\chi^2=\frac{(n-1)S^2)}{\sigma_0^2} \sim \chi^2(0, 1)$

{% endcq %}

## 均值差检验
{% cq %}

$Z=\frac{(\bar{x_1} - \bar{x_2}) + (\mu_1 - \mu_2)}{\sqrt{\frac{(\sigma_1)^2}{n_1} + \frac{(\sigma_2)^2}{n_2}}}$

{% endcq %}

## 比例差检验
{% cq %}

$Z=\frac{(p_1 - p_2) + (\pi_1 - \pi_2)}{\sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}}}$

{% endcq %}

# 方差分析 (Analysis of Variance，ANOVA)
- 作用：多个总体平均数的比较

## 缩写
- B (Between)：组间，有的国家用A
- W (Within)：组内，有的国家用B
- T (Total)：整体，所有总体只和
- R (Row): 双因子的行
- C (Column)：双因子的列

## 单因素方差分析

### 计算误差平方和

总平方和 total sum of squares：
{% cq %}
$SST = \sum_i \sum_j (\bar{x_{ij}} - x_{ij}) ^ 2$
{% endcq %}

其中：
- $i$：组内数据编号；组就是总体，一个总体就是一个组
- $j$：组编号，总体的编号

组间平方和 SSA：
{% cq %}

$SSA = \sum_i \sum_j (\bar{x_{i}} - \bar{\bar{x}}) ^ 2$

{% endcq %}

组内平方和 SSE：
{% cq %}

$SSE = \sum_i \sum_j (x{ij} - \bar{x_i}) ^ 2$

$SST = SSA + SSE$

{% endcq %}


### 自由度
{% cq %}

$fn_{(SST)} = n - 1$

$fn_{(SSA)} = k - 1$

$fn_{(SSE)} = n - k$

{% endcq %}

其中：
- $n$：总数据数
- $k$：组数

### 计算均方差
组间均方差 MSA：
{% cq %}
$MSA = \frac{SSA}{k - 1}$
{% endcq %}

组内均方差 MSE：
{% cq %}
$MSE = \frac{SSE}{n - k}$
{% endcq %}

### 检验统计量
{% cq %}
$F = \frac{MSA}{MSE} \sim F(k-1, n-k)$
{% endcq %}

### 关系强度的测量
{% cq %}
$R = \frac{SSA}{SST} \times 100%$
{% endcq %}

### ANOVA表

| 来源 | 平方和 | 自由度 | 均方和          | F值         |
|------|--------|--------|-----------------|-------------|
| 组间 | SSB(A)    | K-1 $(\nu_1)$ | MSB = SSB/(K-1) | F = MSB/MSW |
| 组内 | SSW(E)    | N-K $(\nu_2)$ | MSW=SSW/(N-K)   |             |
| 总和 | SST =  SSB + SSW     | N-1    |                 |             |

## 无交互的双因素方差分析 two-way analysis of variance

### 计算平方和（SS）

- 总误差平方和：$SST=\sum_{i=1}^k \sum_{j=1}^r (x_{ij} - \bar{\bar{x}}) ^ 2$， 所有数据减去全部均值的平方和
- 行因素误差平方和：$SSR=\sum_{i=1}^k \sum_{j=1}^r (x_{i.} - \bar{\bar{x}}) ^ 2$， 各行的平均减去全部平均的平方和
- 列因素误差平方和：$SSC=\sum_{i=1}^k \sum_{j=1}^r (x_{.j} - \bar{\bar{x}}) ^ 2$， 各列的平均减去全部平均的平方和
- 随机误差项平方和：$SSE=\sum_{i=1}^k \sum_{j=1}^r (x_{ij} - x_{i.} - x_{.j} + \bar{\bar{x}}) ^ 2$，这个用上面那三个解方程，直接算太麻烦

其中：
- $i$：行下标
- $j$：列下标

关系：
- $SST = SSR + SSC + SSE$

自由度：
- $SST$：$kr -1$
- $SSR$：$k -1$
- $SSC$：$r -1$
- $SSE$：$(k-1) \times (r-1)$

### 计算均方（MS）差：
- 行因素均方 $MSR=\frac{SSR}{k-1}$
- 列因素均方 $MSC=\frac{SSC}{k-1}$
- 误差项均方 $MSE=\frac{SSE}{(k-1)(r-1)}$

### 检验统计量（F统计量）：
- 行因素：$F_R = \frac{MSR}{MSE} \sim F(k-1, (k-1)(r-1))$
- 列因素：$F_C = \frac{MSC}{MSE} \sim F(r-1, (k-1)(r-1))$

结果分析：
- 趋近1：对因变量无影响，不拒绝$H_0$
- 大于1：对因变量有影响，拒绝$H_0$

### 关系强度的测量
{% cq %}
$R^2 = \frac{SSR + SSC}{SST} \times 100%$
{% endcq %}

物理意义：
- 联合因素总共解释了因变量差异的$R^2$
- 其他残差影响了剩下的
- 开方以后看相关系数

### ANOVA表

| 来源 | 平方和 | 自由度     | 均方和               | F值          |
|------|--------|------------|----------------------|--------------|
| 行   | SSR    | K-1  行数-1   | MSR = SSR/(K-1)      | FR = MSR/MSE |
| 列   | SSC    | R-1  列数-1   | MSC=SSC/(R-1)        | FC = MSC/MSE |
| 残差 | SSE    | (K-1)(R-1) | MSE=SSE/{(K-1)(R-1)} |              |
| 总和 | SST = SSR + SSC + SSE  | KR-1       |                      |              |

## 有交互的双因素方差分析 two-way analysis of variance with interaction

### 误差平方和（增加项）：
- 交互作用：SSRC

### 关系
- $SST=SSR+SSC+SSRC+SSE$

### 自由度（增加项）：
- 交互作用$df(SSRC) = (k-1)(r-1)$
- 误差$df(SSE) = Kr(m-1)$

### 计算均方差（增加项）
- 互相作用均方差：$MSRC$

### F统计量
- 行F统计量：$F_R$
- 列F统计量：$F_C$
- 互相作用F统计量：$F_RC$

### ANOVA表

| 来源 | 平方和 | 自由度     | 均方和               | F值          |
|------|--------|------------|----------------------|--------------|
| 行   | SSR    | K-1  行数-1   | MSR = SSR/(K-1)      | FR = MSR/MSE |
| 列   | SSC    | R-1  列数-1   | MSC = SSC/(R-1)        | FC = MSC/MSE |
| 交互 | SSE    | (K-1)(R-1) | MSRC=SSRC/{(K-1)(R-1)} | FRC = MSRC/MSE |
| 残差 | SSE    | KR(N-1) | MSE=SSE/{KR(N-1)} |              |
| 总和 | SST = SSR + SSC + SSRC + SSE  | KRN-1       |           |          |

# 相关分析与回归分析

## 变量间相关度的度量

### 相关系数（correlation coefficient）


计算式：
{% cq %}

$r_{xy} = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2} \cdot \sqrt{\sum (y_i - \bar{y})^2}}$

$=\frac{\sigma^2_{XY}}{\sigma_x \cdot \sigma_y}$

$= \frac{n \sum{x_i y_i} - \sum{x_i}\sum{y_i}}{\sqrt{n \sum{x^2 - (\sum{x})^2} \cdot \sqrt{n\sum{y_i^2}}-(\sum{y_i})^2}}$

{% endcq %}

其中：
- $r$：样本的相关系数；如果是总体的，相关系数用$\rho$
- $\sigma^2_{XY} = \sum (x_i - \bar{x})(y_i - \bar{y})$：总体X和Y的协方差

性质：
- $r \in [-1, +1]$
- $r_{xy} = r_{yx}$


结论：
- $|r| = 1$：完全相关
- $r = 1$：完全正相关
- $r = -1$：完全负相关
- $r > 0$：正相关
- $r < 0$：负相关

### 相关系数显著性检验
假设：
- $H_0$：$\rho = 0$ 不显著
- $H_1$：$\rho \neq 0$ 显著

计算t统计量：
{% cq %}
$t = |r|\sqrt{\frac{n-2}{1 - r^2}} \sim t(n-2)$
{% endcq %}

其中：
- $n$：样本容量
- $n-2$：自由度
- $r$：相关系数

结论：
- $|t| \geq t_{\alpha / 2}$：拒绝$H_0$，存在线性关系
- $|t| < t_{\alpha / 2}$：不拒绝$H_0$

## 单回归分析

### 单回归模型（Regression Model）

理论模型：
{% cq %}
$y=\beta_0 + \beta_1 x + \varepsilon$
{% endcq %}

回归方程：
{% cq %}
$E(y)=\beta_0 + \beta_1 x$
{% endcq %}

估计回归方程：
{% cq %}
$\hat{y}=\hat{\beta_0} + \hat{\beta_1} x$
{% endcq %}

其中：
- $x$：自变量，解释变量，Independent Variable
- $y$：因变量，被解释变量，目标变量，随机变量，响应变量，Dependent Variable
- $\varepsilon$：误差项，随机因素对y的影响；$E(\varepsilon) = 0$；对于所有$y$，误差项的方差$\sigma_{\varepsilon}^2$是相同的。
- $\beta_0$：y轴截距，当x=0时y的期望
- $\beta_1$：斜率，回归系数；当$x_1$变动一个单位时，$y$的变动率
- $\hat{\beta}$：观测样本得到的回归统计量

性质：
- 回归方程的均值和样本均值相同
  - $\bar{y} = \hat{\beta_0} + \hat{\beta_1} \bar{x}$

### 最小二乘法（method of least squares）

目标函数：
{% cq %}

$\sum{(y_i - \hat{y})} = \sum{(y_i - \beta_0 - \beta_1 \hat{x}_i)^2}$

{% endcq %}

其中：
- $\hat{y_i}$：因变量的估计值
- $y_i$：因变量观测值

物理意义：
- 最小化因变量估计值和观测值的误差的平方和

推导方法：
{% cq %}

$\frac{\partial{Q}}{\partial{\beta_0}}|_{\beta_0=\hat{\beta_0}} = -2 \sum{(y_i - \hat{\beta_0} - \beta_1 x_i)} = 0$

$\frac{\partial{Q}}{\partial{\beta_1}}|_{\beta_1=\hat{\beta_1}} = -2 \sum{x_i(y_i - \hat{\beta_0} - \beta_1 x_i)} = 0$

{% endcq %}

回归系数的计算方法：
{% cq %}

$\hat{\beta_1}=\frac{n \sum{x_i y_i} - (\sum{x_i})(\sum{y_i})}{n \sum{x_i^2} - (\sum{x_i})^2}$

$\hat{\beta_0}=\bar{y} - \hat{\beta_1} \bar{x}$

{% endcq %}

### 拟合优度指标 - 总离差平方和

计算式：
{% cq %}

$\sum{(y_i - \bar{y})^2} = \sum{(\hat{y_i} - \bar{y}) ^ 2} + \sum{(\hat{y} - \bar{y}) ^ 2}$

$SST = SSR + SSE$

{% endcq %}

其中：
- $\hat{y_i}$：因变量的估计值
- $y_i$：因变量的观测值
- $\bar{y}$：因变量的样本均值
- $SST = \sum{(y_i - \bar{y})^2}$：总离差平方和，total sum of square
- $SSR = \sum{(\hat{y_i} - \bar{y}) ^ 2}$：回归平方和，sum of squares on regression
- $SSE = \sum{(\hat{y} - \bar{y}) ^ 2}$：残差平方和，sum of squares on error

### 拟合优度指标 - 判定系数$R^2$（coefficient of determination）

{% cq %}

$R^2 = \frac{SSR}{SST} = \frac{1}{SSE} \in [0, 1]$

{% endcq %}

性质：
- $R^2 \in [0, 1]$
- $R^2 \rightarrow 1$：模型优度越好
- $R^2 \rightarrow 0$：模型优度越差

### 拟合优度指标 - 估计标准误差
{% cq %}

$S_e = \sqrt{\frac{\sum{(y_i - \hat{y_i}) ^ 2}}{n - 2}} = \frac{SSE}{n-2} = \sqrt{MSE}$

{% endcq %}

其中：
- $n-2$：一元线性回归时的自由度

### 线性关系的检验

假设：
- $H_0$：$\beta_1 = 0$ 线性关系不显著，除了常数项其它所有系数都是0
- $H_1$：$\beta_1 \neq 0$ 显著

计算F统计量：
{% cq %}

$F = \frac{SSR / 1}{SSE / (n - 2)} = \frac{MSR}{MSE} \sim F(n-2)$

{% endcq %}

结论：
- $F \geq F_{\alpha}$：拒绝$H_0$，显著
- $F < F_{\alpha}$：不拒绝$H_0$，不显著

### 区间估计

置信区间：
{% cq %}

$\hat{y_0} \pm t_{\alpha / 2}(n - 2) S_e \sqrt{\frac{1}{n} + \frac{(x_0 - \bar{x}) ^ 2}{\sum{(x_i - \bar{x})^2}}}$

{% endcq %}

估计区间：
{% cq %}

$\hat{y_0} \pm t_{\alpha / 2}(n - 2) S_e \sqrt{1 + \frac{1}{n} + \frac{(x_0 - \bar{x}) ^ 2}{\sum{(x_i - \bar{x})^2}}}$

{% endcq %}

物理意义：
- 当$x=x_0$时$y$可能落在的置信区间和估计区间

## 多元线性回归

### 回归方程
理论方程：
{% cq %}

$y = \beta_0 + \beta_1 x_1 + ... + + \beta_k x_k + \varepsilon$

{% endcq %}

回归方程：
{% cq %}

$E(y) = \beta_0 + \beta_1 x_1 + ... + + \beta_k x_k$

{% endcq %}

### 多重判定系数 $R^2$ （multiple coefficient of determination）

{% cq %}

$R^2 = \frac{\sum{(\hat{y_i} - \bar{y})^2}}{\sum{(y_i - \bar{y})^2}} = \frac{SSR}{SST} = 1 - \frac{SSE}{SST}$

{% endcq %}

### 修正多重判定系数 $R_{\alpha}^2$

{% cq %}

$R_{\alpha}^2 = 1 - (1 - R ^ 2) \times \frac{n-1}{n-k-1}$

{% endcq %}

性质：
- 与$R^2$类似，单小于$R^2$

物理意义：
- 避免自变量x增加后对$R^2$的高估；

### 估计标准误差 $S_e$

算式：
{% cq %}

$S_e = \frac{\sqrt{\sum{(y_i - \hat{y_i})^2}}}{n - k - 1}$

$=\sqrt{\frac{SSE}{n-k-1}}$

{% endcq %}

物理意义：
- 该模型用来估计时的平均误差为$S_e$

### 总体显著性检验

假设：
$H_0$：$\beta_1=\beta_2=...=\beta_k=0$ 不显著
$H_1$：$\beta_1 \beta_2 ... \beta_k$ 至少有一个不等于0

F统计量：
{% cq %}

$F = \frac{SSR / k}{SSE / (n-k-1)} \sim F(k, n-k-1)$

{% endcq %}

结论：
$F \geq F_{\alpha}$：拒绝$H_0$， 显著
$F < F_{\alpha}$：不拒绝$H_0$，不显著

### 任意$\beta$统计量的计算例：
假设：
- $H_0$：$\beta = 1$
- $H_0$：$\beta \ne 1$

统计量：
{% cq %}

$t = \frac{\beta - 1}{\sigma}$

{% endcq %}

### 多重共线性
原因：
- 自变量之间强相关，含有相同或相近的对因变量说明的信息

特征：
- 不能因为是大样本就无视多重共线性问题。

## 回归分析的输出结果解读

通过R语言做回归分析时，对输出结果进行解读

### R语言回归结果解读

![一元回归结果解读](/uploads/202005/01.png)

- Coefficients: 回归系数
- Estimate：回归系数
- Std. Error：标准差
- t value：该维度的t统计量
- Pr(>|t|)：显著水准，比如说这个值比5%小的话，说明这个变量是显著的
- Residual standard error: 1.878 on 45 degrees of freedom：
  - 自由度为n-k；本例在45个自由度上，k=1，所以样本容量是45+1+1=47
  - 残差标准差，等于$\sqrt{SSE/(n-2)}$；因此$SEE=\sigma^2(n-2)$
- Multiple R-squared：多重判定系数$R^2$
- Adjusted R-squared：修正多重判定系数$R_{\alpha}^2$，这个值越大，模型越好
- p-value：弃真概率，$1-p$值就是置信度a


![多元回归结果解读](/uploads/202005/02.png)

- F-statistic: 25.53 on 2 and 44 DF：
  - F统计量为25.53
  - 自由度$k=2$，$n-k-1=44$

### R语言的输出例

```
R output
> model <- lm(sf ~ year + rain)
> summary(model)
Call: lm(formula = sf ~ year + rain)
Residuals:
Min 1Q Median 3Q Max
-0.61072 -0.20317 0.06129 0.16329 0.51992
Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept) 388.412083 49.573690 7.835 1.41e-05 ***
year -0.195703 0.025112 -7.793 1.48e-05 ***
rain 0.034288 0.009655 3.551 0.00526 **
---
Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
Residual standard error: 0.3224 on 10 degrees of freedom
Multiple R-Squared: 0.9089, Adjusted R-squared: 0.8906
F-statistic: 49.87 on 2 and 10 DF, p-value: 6.286e-06
```

# 时间序列分析

## 时序平均数

### 时期数列
{% cq %}

$\bar{a} = \frac{a_1 + a_2 + ... + a_n}{n} = \frac{\sum{a}}{n}$

{% endcq %}

物理意义：
- 平均每时期数量的均值
- 例：平均每年的煤炭消耗量

### 时点数列
{% cq %}

$\bar{a} = \frac{\frac{a_1 + a_2}{2}f_1 + ... + \frac{a_{n-1} + a_n}{2}f_n}{\sum{f_i}}$

{% endcq %}

其中：
- $\frac{a_{i-1} + a_i}{2}$：当期均值
- $f_i$：当期间隔的时间

### 相对数和平均数计算序列

{% cq %}

$\bar{c} = \frac{\bar{a}}{\bar{b}}$

{% endcq %}

### 等间隔时点数列 - 首末折半法
{% cq %}

$\bar{a} = \frac{\frac{a_1}{2} + a_2 + ... + a_{n-1}+ \frac{a_n}{2}}{n - 1}$

{% endcq %}

## 速度指标

### 发展速度

{% cq %}

$发展速度 = \frac{报告期水平}{基期水平} = \frac{a_i}{a_0}$

$环比发展速度 = \frac{当期水平}{上一期水平} = \frac{a_i}{a_{i - 1}}$

$基期发展速度 = \frac{a_i}{a_0}$

{% endcq %}

性质1：
- $\prod \frac{a_i}{a_i a_{i - 1}} = \frac{a_n}{a_0}$

物理意义：
- 环比发展速度的连乘等于定基发展速度

性质2：
- $\frac{a_i}{a_0} / \frac{a_{i - 1}}{a_0} = \frac{a_i}{a_{i - 1}}$

物理意义：
- 当期定基发展速度 / 上一期定基发展速度 = 当期环比发展速度

### 平均发展速度
{% cq %}

$\bar{G} = \sqrt[n]{x_1 \cdot x_2 \cdot ... \cdot x_n} = \sqrt[n]{\prod x}$

$\bar{G} = \sqrt[n]{ \frac{a_1}{a_0} \cdot \frac{a_2}{a_1} \cdot ... \cdot \frac{a_n}{a_{n-1}}} = \sqrt[n]{\frac{a_n}{a_0}}$

{% endcq %}

物理意义：
- 总速度
- 环比发展速度的时序平均数

### 增长率 增长速度 （growth rate）

{% cq %}

$增长速度 = \frac{增长量}{基期水平} = \frac{报告水平 - 基期水平}{基期水平} = 发展速度 - 1$

{% endcq %}

### 平均增长率
{% cq %}

$\bar{G} = \frac{a_n}{a_0} - 1$

$a_n = a_0(1 + \bar{G}) ^ n$

{% endcq %}

物理意义：
- 第n期的增长速度 = 基期 × 发展率的n次方

### 增长的1%绝对值

{% cq %}

$增长1%绝对值 = \frac{前期水平(前期总量)}{100}$

{% endcq %}

## 构成要素分析

{% cq %}

$Y = T \cdot S \cdot C \cdot I$

{% endcq %}

特性：
- 四个因素相互关联

{% cq %}
$Y = T + S + C + I$


{% endcq %}

特性：
- 四个因素相互独立

### 长期趋势 T（trend）

#### 移动平均法

#### 指数平滑法（一次）
{% cq %}

$F_{t + 1} = \alpha Y_t + (a + \alpha) F_t$

$(F_1 = Y_1)$

{% endcq %}

其中：
- $Y_t$：t期实际观测值
- $F_t$：t期预测值
- $\alpha$：平滑系数 $(0<\alpha<1)$
  - $\alpha$接近1：平滑度强
  - $\alpha$接近0：平滑度弱

预测误差：
{% cq %}

$F_{t + 1} = \alpha Y_t + (1 - \alpha) F_t$

$= \alpha Y_t + F_t - \alpha F_t$

$= F_t + \alpha (Y_t - F_t)$

{% endcq %}

#### 线性趋势模型法
{% cq %}

$\hat{Y_t} = a + bt$

$b=\frac{n \sum Y - \sum t \sum Y}{n \sum t ^ 2 - (\sum t) ^ 2}$

$a=\bar{Y} - b\bar{t} = \frac{\sum Y_t}{n} - b \frac{\sum t}{n}$

{% endcq %}

物理意义：
- 利用线性回归的方法对原时间序列进行拟合

其中：
- $t$：现象时间
- $Y$：现象
- $a$：基期水平
- $b$：平均变动量

特性：
- 可以用线性回归的统计量进行检验


### 季节变动 S（seasonality）

#### 季节比例指数

{% cq %}

$S_i = \frac{\bar{Y_i}}{\bar{Y}}$

$\sum S_i = n \bar{Y}$

{% endcq %}

其中：
- $\bar{Y}$：总平均数
- $\bar{Y_i}$：小（季節ごと）平均数

#### 趋势循环剔除法

### 循环变动 C（cyclity）

### 不规则变动 I