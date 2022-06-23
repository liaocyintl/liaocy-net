---
title: CCNA試験のまとめノート 12 RIPv2
date: 2019-07-22 10:43
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

ディスタンスベクター、RIPv2の特徴、RIPv2の特徴、RIPv2のオプション設定
<!-- more -->

# ディスタンスベクトル
## ディスタンスベクター
- 定義：距離（Distance）と方向（Vector）に基づいて宛先ネットワークへの最適経路を決定するルーティングアルゴリズム。
- 手順：
  - 直接接続されたネットワークを学習
    - ルータのインターフェースにIPアドレスが割り当てられたと、ルーティングテーブルには直接接続されたネットワークの情報が学習される。
  - ルーティングアップデートを隣接ルータに通信
    - 自身のルーティングテーブルにある経路情報にメトリック（ホップカウント）を1加算、ルーティングアップデータをアドバイスする。
  - 定期的にルーティングアップデートを送信
    - 完全なルーティングテーブルのアップデートを定期的に生成し、隣接ルータにアドバタイズする。
  - ルーティングテーブルの保守
    - 受信したアップデートで既存のルーティングテーブルの内容と比較する。
    - メトリックが小さい方をより適切な経路であると更新する。
    - 受信した経路情報に既知の経路情報が含まれなくなった場合、そのネットワークがダウンしたとみなしてルーティングテーブルから削除

## Distance Vectorの問題点と解決法
- 無限カウント：最大値定義（ホップ数の上限は通常１５に）
- ルーティングループの問題：
  - スプリットホライズン：Split horizon；あるインターフェースから受信した経路情報（ルーティングテーブル）を同じインターフェースから送り返さない。
  - ルートポイズニング：Root poisoning；メトリックを最大値にして、隣接ルータに経路情報がだうんしたことを通知
  - ポイズンリバース：Poisoning Reverse；メトリックが最大値（１５）の経路情報を受信すると、同じインタフェースからその経路情報のメトリックを最大値のまま送り返す。
  - ホールドダウンタイマー：Hold down timer；ダウンした経路情報が間違えて再登録されるのを防ぐための待ち時間を作る機能
  - トリガードアップデート
- ディスタンスベクタールーティングのタイマー
  - Update（30秒）：アドバタイズ
  - Invalid（180秒）：アドバタイズを受信しないまま、そのルートを無効だと認識するまでの時間
  - Hold down（180秒）：あるネットワークへのルートがダウンした時、誤った経路情報を受信してルーティングテーブルに再学習しないように、アップデートをしばらく無視して、その経路情報を保持する時間。
  - Flush（Flushed after）：受信した経路情報をルーティングテーブルに保持できる時間。

# RIPv2の特徴
## 特徴
- RFC標準のルーティングプロトコル
- ディスタンスベクター型
- メトリックはホップ数
- ホップ数の上限は15
- 30秒間隔でアップデートを送信
- 等メトリックのロードバランシング：メトリックの等しい最適経路が複数ある場合、デフォルトでは最大4経路をルーティングテーブルに学習してロードバランシングを行う。
- クラスレスルーティングプロトコル：VLSMや不連続サブネットをサポートし、IPアドレスを効率的に使用できる。
- 機能認証サポート

# RIPv2の基本設定

![トポロジ](/uploads/postimgs/2019072205.png)

For each router:
```
RTn(config)#router rip
RTn(config-router)#version 2
RTn(config-router)#network 172.16.0.0
```

```
RT1#show ip route 

Gateway of last resort is not set

     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks
C       172.16.2.0/24 is directly connected, GigabitEthernet0/0/1
L       172.16.2.1/32 is directly connected, GigabitEthernet0/0/1
R       172.16.3.0/24 [120/1] via 172.16.2.2, 00:00:16, GigabitEthernet0/0/1
R       172.16.4.0/24 [120/2] via 172.16.2.2, 00:00:16, GigabitEthernet0/0/1
```

RIP設定の削除：
```
RT1(config)#no router rip
```

# RIPv2の検証
## 検証

- show ip protocols
```
RT1#show ip protocols

Routing Protocol is "rip"
Sending updates every 30 seconds, next due in 21 seconds
Invalid after 180 seconds, hold down 180, flushed after 240
Outgoing update filter list for all interfaces is not set
Incoming update filter list for all interfaces is not set
Redistributing: rip
Default version control: send version 2, receive 2             #RIPが有効なインタフェース名とバージョンを表示
  Interface             Send  Recv  Triggered RIP  Key-chain
  GigabitEthernet0/0/1  2     2     
Automatic network summarization is in effect
Maximum path: 4
Routing for Networks:
	172.16.0.0
Passive Interface(s):
Routing Information Sources:
	Gateway         Distance      Last Update
	172.16.2.2           120      00:00:29
Distance: (default is 120)
```

- show ip route rip
```
RT1#show ip route rip
     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks
R       172.16.3.0/24 [120/1] via 172.16.2.2, 00:00:27, GigabitEthernet0/0/1
R       172.16.4.0/24 [120/2] via 172.16.2.2, 00:00:27, GigabitEthernet0/0/1
```

- show ip rip database
```
RT1#show ip rip database
172.16.2.0/24    auto-summary
172.16.2.0/24    directly connected, GigabitEthernet0/0/1
172.16.3.0/24    auto-summary
172.16.3.0/24
    [1] via 172.16.2.2, 00:00:14, GigabitEthernet0/0/1
172.16.4.0/24    auto-summary
172.16.4.0/24
    [2] via 172.16.2.2, 00:00:14, GigabitEthernet0/0/1
    
注意：
    [2]:宛先ネットワークまでのメトリック値
    172.16.2.2：ネクストホップアドレス
    00:00:14：経路情報を受信してから経過した時間
    GigabitEthernet0/0/1：パケットの出力インターフェース
```

- debug ip rip
```
RT1#debug ip rip
RIP protocol debugging is on
RT1#RIP: received v2 update from 172.16.2.2 on GigabitEthernet0/0/1
      172.16.3.0/24 via 0.0.0.0 in 1 hops
      172.16.4.0/24 via 0.0.0.0 in 2 hops
RIP: received v2 update from 172.16.2.2 on GigabitEthernet0/0/1
      172.16.3.0/24 via 0.0.0.0 in 1 hops
      172.16.4.0/24 via 0.0.0.0 in 2 hops

```

# RIPv2のオプション設定
## RIPv2の経路集約

- 自動経路集約の無効化：
```
RT1(config-router)#no auto-summary
```

- 確認：
```
RT1#show ip protocols
Routing Protocol is "rip"
Sending updates every 30 seconds, next due in 24 seconds
Invalid after 180 seconds, hold down 180, flushed after 240
Outgoing update filter list for all interfaces is not set <-------手動経路集約
Incoming update filter list for all interfaces is not set <-------手動経路集約
Redistributing: rip
Default version control: send version 2, receive 2
  Interface             Send  Recv  Triggered RIP  Key-chain
  GigabitEthernet0/0/1  2     2     
Automatic network summarization is not in effect
Maximum path: 4
Routing for Networks:
	172.16.0.0
Passive Interface(s):
Routing Information Sources:
	Gateway         Distance      Last Update
	172.16.2.2           120      00:00:04
Distance: (default is 120)
```

- 経路集約の設定
```
RT1(config-if)#ip summary-address rip <address> <mask>
```

## パッシブインターフェイス　（Passive interface）
- 定義：指定したインターフェイスからルーティングアップデートが送信されるのを抑制する機能

```
RT1(config-router)#passive-interface GigabitEthernet 0/0/0
```

```
RT1#show ip protocols 

Default version control: send version 2, receive 2
  Interface             Send  Recv  Triggered RIP  Key-chain
  GigabitEthernet0/0/1  2     2     
Automatic network summarization is not in effect
Maximum path: 4
Routing for Networks:
	172.16.0.0
Passive Interface(s):   <----------パッシブインターフェイス
	GigabitEthernet0/0/0
Routing Information Sources:
	Gateway         Distance      Last Update
	172.16.2.2           120      00:00:16
Distance: (default is 120)
```

## RIPのデフォルトルート

- 役割：デフォルトルートを配布し、ルーティングテーブルを小さくする。
- RIPによるデフォルトルートの配布
```
RT1(config-router)#default-information originate
```

## RIPタイマーの変更

```
RT1(config-router)#timers basic 5 15 15 30 # update, invalid, holddown, flush
```

```
RT1#show ip protocols
Routing Protocol is "rip"
Sending updates every 5 seconds, next due in 0 seconds
Invalid after 15 seconds, hold down 15, flushed after 30
```

## RIP認証
略