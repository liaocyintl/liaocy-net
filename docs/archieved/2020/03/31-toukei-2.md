---
title: 統計検定2級メモ
date: 2020-03-31 15:00:00
lang: ja
tags:
  - ノート

categories:
  - 資格試験
  - 統計検定
---

統計検定 2 級的一些知识点备忘

<!-- more -->

# データの記述と要約
## 変数の分類
- 個体（ケース）：調査された個個の対象、行
- 変数：調整された項目、列、家賃、間取り
  - 質的変数：カテゴリで示される変数、間取り、方角
    - 名義尺度（名目尺度）：性別、職業、国籍；二値、多値変数；頻度、最頻値；
    - 順序尺度：成績評価（ABCD）；中央値、四分位数；
  - 量的変数：観測値で示される変数、家賃、面積
    - 間隔尺度：0 は絶対意味持たない；温度、偏差値；平均、標準偏差；
      - 例えば、30℃ は 15℃ の 2 倍とは言えないから、比例を持たない（絶対基準点０を持たない）
    - 比例尺度：0 は絶対意味持つ；身長、体重、年齢；変動係数、幾何平均
- 変数の他の分類
  - 離散変数（discrete variable）：1 ヶ月読んだ本
  - 連続変数（continuous Variable）：温度

## 量的データの分布
- ヒストグラム（Histogram）の作成
  - 概念：度数分布表は最小値と最大値の間をいくつかの階級（級、クラス、CLASS）に分け、それぞれの階級に含まれる度数（頻度、frequency）を数え上げ、各階級の割合を示すもの。
  - データの大きさ:$n$、$N$で表示；データの数；
  - 等間隔であるとは限らず
    - ベル型：左右対称
    - 右に裾（すそ、衣襟，末端）が長い：ピーク左
    - 左に裾が長い：ピーク右
    - 一様：範囲内同程度
- その他の図表の作成
  - 幹葉図（みきは・かんよう） stem and leaf plots
  - 累計相対度数 cumulative ralative frequency:
    - 相对度数的累计值，下位开始累计比率
  - 累計分布 cumulative distribution 部件数の割合の累計推移。
    - 右のほうが、大きい値が多いと言える
  - ローレンツ曲線（Lorenz curve, 洛伦兹曲线）：格差評価
    - 例：
      - X 軸：人数の累計相対係数
      - Y 軸：年収の累計相対係数
    - 完全平等線、complete equality line: $y=x$
    - ジニ係数　 Gini's coefficient：完全平等線と弧（こ）と囲まれた面積の 2 倍、$gini \in [0,1]$

## 分布の特長を表す指標
- 平均・分散・標準偏差
  - 平均 mean：$\bar{x} = \frac{1}{n}(x_1+x_2+...+x_n)=\frac{1}{n}\sum _{i=1} ^{n} {x_i}$
  - 偏差 deviation: $(x_i-\bar{x})$
  - 分散 variance: $s^2=\frac{1}{n}\sum _{i=1} ^{n} {(x_i-\bar{x})^2}$
  - 標準偏差：$s=\sqrt{s^2}=\sqrt{\frac{1}{n}\sum _{i=1} ^{n} {(x_i-\bar{x})^2}}$；散（ち）らばり評価
- 標準化得点：
  - Z得点：(観測値-平均)/標準偏差=$\frac{x_i-\bar{x}}{s} (i=1,2,...,n)$
  - 標準化得点１：平均より標準偏差一つ分大きい
  ‐ 機能：単位の異なったデータ比較；外れ値検出
- 変動係数（CV, coefficient of variation）：
  - $CV=\frac{s}{\bar{x}}$
  - 機能：量の異なるデータの偏差を比較；身長と足のサーズ
- 中央値・最頻値
  - 中央値 中位数 median: 観測値を小さい順に並べ、ちょっど真ん中に位置する観測値；偶数の場合は２つの平均
  - 最頻値：最も多い観測値
- 範囲・四分位範囲
  - 範囲：$R=max-min$
  - 四分位(しぶんい)範囲：
    - 25%, 50%, 75%: 第一、第二、第三分位数
    - 四分位範囲 interquartile range：$IQR=Q3-Q1$
    - 機能：歪（ゆが）みを評価

## 量的データの要約とグラフ表現
- 5数要約 five-numbers summary:　最小値、第一四分位数、第二四分位数（中央値）、第三四分位数、最大値
- [箱ひげ図](https://mathtrain.jp/hakohige)：5数要約を表現の図
- 外れ値：例 $x < Q1-1.5*IQR$ || $x > Q1+1.5*IQR$

## 質的テータの度数表現とフラフ表現
- 棒グラフ：度数表現
- 円グラフ：相対度数表現

## 二変数データの記述と要約
- 相関 correlation、散布図 scatter diagram、正の相関、負の相関、略

## 相関係数
- 共分散：
  - $s_{xy}=\frac{1}{n}\sum _{i=1} ^{n} {(x_i-\bar{x})(y_i-\bar{y})}$
  - 機能：正ならば正の相関が、負ならば負の相関がある
- 相関係数　ピアソンの積率相関係数 correlation coefficient
  - 共分散/標準偏差
  - $r_{xy}=\frac{s_{xy}}{s_xs_y}$ 
  - $r_{xy}=\frac{\frac{1}{n}\sum _{i=1} ^{n} {(x_i-\bar{x})(y_i-\bar{y})}}{s_xs_y}$
  - $r_{xy}=\frac{1}{n}\sum _{i=1} ^{n} {\frac{(x_i-\bar{x})}{s_x}\frac{(y_i-\bar{y})}{s_y}}$
  - 範囲 $\in [-1, 1]$
  - 1なら強い正相関；-1なら強い負相関
- 偏相関 partial correlation
  - $r_{(yz·x)} = \frac{r_{yz} - r_{xy}r{xz}}{\sqrt{1-r^2_{xy}}\sqrt{1-r^2_{xz}}}$
  - 機能：変数xの影響を除いて、変数yzの相関を求める
- 回帰直線
  - 説明変数（独立変数 explanatory variable, 予測変数 independent variable）：x；部屋の大きさ
  - 応答変数（目的変数、response variable、dependent variable、explained variable）：y；部屋の家賃
  - 回帰直線： $y= \alpha + \beta x$
  - $\alpha$、$\beta$：回帰係数
  - $\alpha$：かたむき
  - $\beta$: せっぺん
  - 残差 residual：観測値と実際値の差 $e_i = y_i - \hat{y}_i (i = 1, 2)$
  - 残差平方和：$S(\hat{\alpha}, \hat{\beta})=\sum _{i=1} ^{n} {(y_i-\hat{y_i})^2}=\sum _{i=1} ^{n} {[y_i-(\hat{\alpha} + \hat{\beta} x)]^2}$
  - 最小二乗法
    - $\hat{\beta}=\frac{\sum{(y_i-\hat{y})(x_i-\hat{x})}}{\sum{(x_i-\hat{x})^2}}=\frac{x_{xy}}{s_{xx}}=r_{xy}\frac{\sqrt{s_{yy}}}{\sqrt{s_{xx}}}=r_{xy}\frac{s_y}{s_x}$
    - $\hat{\alpha}=\bar{y}-\hat{\beta}\bar{x}$
- [質的データのクロス集計表](https://toukeigaku-jouhou.info/2018/09/09/cross-table/)

## 時系列データの記述と簡単な分析
- 時系列データ
  - time series data: 時間の順に得られたデータ
- 指数化と幾何平均
  - 変化率（伸び率）：$r_t = (y_{t+1}-y_y)/y_t$
  - 指数化：時系列間の値の大きさをそろえるため、ある時点を基準時とする
  - $q_t = y_t / y_s (t=0,1,2,...,T)$
  - 伸び率幾何平均：$r_G = (\prod_{t=1}^{T}r_t)^{1/T}$

- 時系列データの変動分解
  - 傾向変動(TC trend-cycle variation): 基本的な長期に渡る動きを表す変動
  - 季節変動(S)：1年を周期として循環を繰り返す変動
  - 不規則変動(I)：規則ではない変動
  - 組み合わせ：$y_t = TC_t + S_t + I_t (t=1,2,...,T)$
  - $TC_t$を抽出、移動平均法(moving average method)、指数平滑法
    - $\hat{TC_t} = \sum_{s=t-k}^{t+k}\frac{y_s}{sk + 1}$  
    - $m=2k+1$ 
  - 季節変動＋不規則変動: $w_t = y_t - \hat{TC_t}$
  - $w_t$の月別平均: $\bar{w_M} = \frac{\sum{w_t}}{m}$  $(t \in M)$
  - $\hat{I_t} = y_t - \hat{TC_t} - \hat{S_t}$
- 自己相関
  - 概念：同じ時系列の時点をずらした時系列との相関関係；時点差での相関関係
  - 元の時系列：{y_t, t = 1,2,...,T}
  - $h$ずらした時系列：{y_{t+h}, t = 1,2,...,T-h}
  - 自己相関関数 autocorrelation function：上記の二つの相関関係を求める
  - $C_h = \frac{1}{T}\sum^{T-h}_{t=1}{(y_t - \bar{y})(y_{t+h}-\bar{y})}$ $(h=0,1,2,...)$
  - $r_h = \frac{C_h}{C_0}$
- 指数の作成と利用
  - 機能：異なった時点間または地域間における数量や価格を比較する
  - 指数 index number：多数の同種のデータを比較するために、ある値を基準にして他の値を基準値に対する比で表したもの
  - ラスパイレス指数 (Laspeyres Index)： 
    - $\sum_{i}{w_i(p_{ti}/p_{0i})}/\sum_{i}{w_i}$
    - $w = pq$
    - $p$: 価格
    - $q$: 数量
    - $p_{ti}$: $t$時点第$i$品目の価格
    - $w_i$：$i$品目の重み、i品目の総支出額
