---
title: CCNA試験のまとめノート 09 VLANとVLAN間ルーティング
date: 2019-07-18 14:13
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

キャンパスネットワークの設計、VLANの概要、VLANの動作、スタティックVLANの設定と検証、トランクポートの設定と検証、音声VLAN、VLAN間ルーティング
<!-- more -->

# キャンパスネットワークの設計
## キャンパスネットワーク
‐概念：地理的に１つの接続範囲で構成され、主にイーサネットスイッチで接続されている。
## 階層型ネットワーク設計の概要
- 階層型モデル：
  - アクセス層：
    - 役割：エンドデバイスや無線アクセスポイントなどに接続する。アクセススイッチがあり、冗長性を確保するため、２つ別々のディストリビューション層に接続
    - 機能：機器（エンドユーザ）に接続可能、ハイアベイラビリティ（高可用性）、セキュリティサービス、音声及びビデオのサポート
    - 主なデバイス：L2スイッチ
  - ディストリビューション層：
    - 役割：配下のアクセススイッチからのトラフィックを集約し、必要に応じてコア層へ伝送する。
    - 機能：ルーティング、パケットフィルタリング、QoSの実装、トラフィックフォロー、拡張性（新しいスイッチブロックを追加できる）
    - 主なデバイス：L3スイッチ
  - コア層
    - 役割：すべての要素を接続する高速コンバージェンス（高速收敛）

# VLANの概要
## 概要
- VLAN(Virtual LAN)：スイッチでネットワークを分割する機能。L2でブロードキャストドメインの分割を実現する可能。
- VLAN IDの範囲：
  - 0と4095：予約；システム内部使用
  - 1：標準；デフォルト
  - 2～1001：標準；イーサネット用の標準VLAN
  - 1002～1005：標準；FDDI及びトークンリンク用のデフォルトVLAN
  - 1006～4096：拡張；イーサネット用の拡張VLAN
- スイッチのポート単位でブロードキャストドメインを分割できる。
- VLAN導入のメリット
  - 通信効率の向上
    - VLANを複数設定することで、フラッディングされる範囲が挟まり、ノード間の通信効率を高めることができる。
  - 柔軟なネットワーク設計
    - 物理的な接続状況とは分離してノードの仮想的なグループを形成
  - セキュリティの強化
    - トラフィックをL2で分離できる

# VLANの動作
## 動作
- VLAN ID：VLANを識別するための番号。スイッチには、すべてのポートはデフォルトでVLAN1（デフォルトVLAN）。
- スイッチデフォルトでブロードキャストドメインは一つ
## スイッチポートの種類
- アクセスポート：１つのVLANを割り当てることができ、そのVLANのフレームのみを伝送する。
- 割り当てる方法：
  - スタティックVLAN:　ポートにVLANを手動で割り当てる
  - ダイナミックVLAN:　VMPSによって動的にVLANが割り当てられる
    - VMPS（VLAN Management Policy Server）：ダイナミックVLANで使用するサーバ。ホストのMACアドレスと所属するVLANのマッピング情報データベースによって、ダイナミックVLANを設定する。
- 802.1Q
  - 概念：トランク（n. 干线）は1本の物理リンクで複数のVLANトラフィックを伝送する技術。伝送するときにトランクポート（Trunk Port; 主干埠）からフレームを送信する際にVLAN IDなどの識別情報を挿入
  - 送信元MACとタイブの間に４バイトのタグを挿入して、FCSを再計算
    - TPID:　１６ビット、Tag Protocol Identifier。タグが挿入されたフレームであることを受信側に通知。イーサネットの場合[0x8100]
    - プライオリティ（priority）：フレームの優先度
    - CFI（Canonical Format Inficator）：MACアドレスの形式を示す。イーサネットの場合は「０」。
    - VID（12ビット）：VLAN　ID
- ネイティブVLAN:
  - 特徴：VLANのフレームにタグを挿入せず、そのまま送信。

- 管理VLAN
  - 管理インターフェース

## スタティックVLANの設定と検証
- 手順
    - VLANの作成
```
Switch#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#vlan 2
Switch(config-vlan)#exit
```
    - VLAN名の設定（オプション）
```
Switch(config)#vlan 2 #Vlan選択
Switch(config-vlan)#name Sales #Vlan名前を付け
```
    - アクセスオートの設定（オプション）
      - 定義：タグ VLAN を使う場合はポートにトランクポート (trunk port) という設定を入れる必要があります。トランクポートではないポートはアクセスポート (access port) と呼びます。
```
Switch(config)#interface fastEthernet 0/1
Switch(config-if)#switchport mode access
```
    - スイッチポートにVLANを割り当てる
```
Switch(config-if)#switchport access vlan 2
```


## スタティックVLAN検証

```
Switch(config)#vlan 2
Switch(config-vlan)#name Sales
Switch(config-vlan)#exit
Switch(config)#vlan 3
Switch(config-vlan)#exit

Switch(config)#interface fastEthernet 0/3
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 2

Switch(config-if)#interface fastEthernet 0/4
Switch(config-if)#switchport mode access 
Switch(config-if)#switchport access vlan 3
Switch(config-if)#interface fastEthernet 0/5
Switch(config-if)#switchport mode access 
Switch(config-if)#switchport access vlan 3
Switch(config-if)#interface fastEthernet 0/6
Switch(config-if)#switchport mode access 
Switch(config-if)#switchport access vlan 3
```

- VLAN情報を出力:
```
Switch#show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/1, Fa0/2, Fa0/7, Fa0/8
                                                Fa0/9, Fa0/10, Fa0/11, Fa0/12
                                                Fa0/13, Fa0/14, Fa0/15, Fa0/16
                                                Fa0/17, Fa0/18, Fa0/19, Fa0/20
                                                Fa0/21, Fa0/22, Fa0/23, Fa0/24
                                                Gig0/1, Gig0/2
2    Sales                            active    Fa0/3
3    VLAN0003                         active    Fa0/4, Fa0/5, Fa0/6
1002 fddi-default                     active    
1003 token-ring-default               active    
1004 fddinet-default                  active    
1005 trnet-default                    active    

```

- 簡潔出力：
```
Switch#show vlan brief
```

- 特定VLAN　IDで調べる：
```
Switch#show vlan id 3

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
3    VLAN0003                         active    Fa0/4, Fa0/5, Fa0/6

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
3    enet  100003     1500  -      -      -        -    -        0      0
```

- スイッチポートのVLAN情報を表示

```
Switch#show interfaces fastEthernet 0/3 switchport 
Name: Fa0/3
Switchport: Enabled
Administrative Mode: static access
Operational Mode: static access
Administrative Trunking Encapsulation: dot1q
Operational Trunking Encapsulation: native
Negotiation of Trunking: Off
Access Mode VLAN: 2 (Sales) # Vlan情報
Trunking Native Mode VLAN: 1 (default)
Voice VLAN: none
Administrative private-vlan host-association: none
Administrative private-vlan mapping: none
```

- Access, Trunk, and Hybrid
  - Access类型的端口只能属于1个VLAN，一般用于连接计算机的端口；
  - Trunk类型的端口可以允许多个VLAN通过，可以接收和发送多个VLAN的报文，一般用于交换机之间连接的端口；
  - Hybrid类型的端口可以允许多个VLAN通过，可以接收和发送多个VLAN的报文，可以用于交换机之间连接，也可以用于连接用户的计算机。 

# トランクポートの設定と検証
##　スイッチポートのネゴシエーション
- DTP(Dynamic Trunking Protocol): 対向機器のポートとネゴシエーションを行い、その設定に応じてスイッチポートのタイプ（アクセス・トランク）、およびトランクプロトコルを動的に切り替えるため開発されたシスコ独自のプロトコル。
- 動作状態
  - desirable [dɪ'zaɪərəbl] n. 合意: 対面とネゴシエーションを行う
  - auto: 対向がon, desirableの場合ネゴシエーションを行う
  - on(trunk): 明示的に動作モードをTrunkにする
  - off(access): 明示的に動作モードをAccessにする

- 例：
![トポロジ](/uploads/postimgs/2019071802.png)

SW1側：
```
Switch(config)#interface fa0/1
Switch(config-if)#switchport mode dynamic desirable

Switch(config-if)#
%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up
```

SW2側：
```
Switch(config)#interface fa0/2
Switch(config-if)#switchport mode dynamic desirable

Switch(config-if)#
%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/2, changed state to up
```

## 静的なトランクポート設定
- 役割：スイッチポートを明示的にトランクポートとして設定するための手順
  - １、トランクプロトコルの設定（IEEE 802.1QとISLの両方サポートの場合）
  - ２、トランクポートの設定
  - ３、DTPの無効化（オプション）

SW1側：
```
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport nonegotiate 
```

SW2側：
```
SW2(config-if)#switchport mode trunk #明示的にトランクにする
SW2(config-if)#switchport nonegotiate #DTPを無効にする
```

## 対向との組み合わせによるスイッチポートの動作

![トポロジ](/uploads/postimgs/2019071803.png)

- 状态：
  - PC6和PC8使用VLAN 1；PC7和PC9使用VLAN 2；
  - 所有PC使用同一网段
- 结果：
  - 相同VLAN可以PING通，不同VLAN不可以ping通
  - 所有VLAN包都可以通过trunk链路

## トランクポートの情報を表示
```
SW01#show interfaces trunk 
Port        Mode         Encapsulation  Status        Native vlan
Fa0/1       on           802.1q         trunking      1

Port        Vlans allowed on trunk
Fa0/1       1-1005

Port        Vlans allowed and active in management domain #上記のVLANはアクティブのVLAN
Fa0/1       1,2

Port        Vlans in spanning tree forwarding state and not pruned #上記のVLANはSTPでフォワーディング状態およびVTPプルーニングされていないVLAN
Fa0/1       1,2
```

- VTPプルーニング：[参考資料](https://www.infraexpert.com/study/vlanz5.html)

## ネイティブVLANの設定

- ネイティブVLAN：Native VLAN とは、トランクポートの中で、タグを付けない VLAN ID のことを指します。デフォルトVLAN や PVID (Port VLAN ID) も同じ意味です。

在本端口处可以接受和发送多个vlan（默认全部vlan可改动）的帧，并不会改变（剥离或添加）帧的tag；
native vlan的概念在turnk端口上起作用；
native vlan 是一个作用于仅为本交换机的概念，所有未划分vlan的端口默认自动划分到native vlan中，交换机的默认native vlan 是vlan 1；
当turnk端口发送属于native vlan的帧的时候，帧的tag将会被剥离；
当trunk端口接收到untagged的帧的时候，将会给该帧打上该交换机的native vlan的帧；

# VLAN間ルーティング

## VLAN間ルーティングの概要

- 一般の構成：
![トポロジ](/uploads/postimgs/2019071901.png)

- router on a stick (n. 棍；手杖； 单臂路由): ルータの1つのインターフェースを使用して複数のサブネット間のルーティングを行う。

![トポロジ](/uploads/postimgs/2019071902.png)

ルータの設定：
```
RT1(config)#interface GigabitEthernet 0/0/0.1 #サブインタフェース１を作成
RT1(config-subif)#encapsulation dot1Q 1 #802.1Q、VLAN1を指定
RT1(config-subif)#ip address 172.16.1.254 255.255.255.0 #VLAN１のGWを作成
RT1(config-subif)#exit

RT1(config)#interface GigabitEthernet 0/0/0.10　 #サブインタフェース１０を作成
RT1(config-subif)#encapsulation dot1Q 10 #802.1Q、VLAN10を指定
RT1(config-subif)#ip address 172.16.10.254 255.255.255.0 #VLAN10のGWを作成
RT1(config-subif)#exit

RT1(config)#interface GigabitEthernet 0/0/0.20 #サブインタフェース２０を作成
RT1(config-subif)#encapsulation dot1Q 20 #802.1Q、VLAN20を指定
RT1(config-subif)#ip address 172.16.20.254 255.255.255.0 #VLAN20のGWを作成
RT1(config-subif)#exit

RT1(config)#interface GigabitEthernet 0/0/0.99 #サブインタフェース99を作成
RT1(config-subif)#encapsulation dot1Q 99 native #ネイティブVLAN99を指定
RT1(config-subif)#exit

RT1(config)#interface GigabitEthernet 0/0/0 #物理インターフェースを指定
RT1(config-if)#no shutdown #インターフェースを有効化

RT1(config-if)#
%LINK-5-CHANGED: Interface GigabitEthernet0/0/0, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0, changed state to up

%LINK-5-CHANGED: Interface GigabitEthernet0/0/0.1, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0.1, changed state to up

%LINK-5-CHANGED: Interface GigabitEthernet0/0/0.10, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0.10, changed state to up

%LINK-5-CHANGED: Interface GigabitEthernet0/0/0.20, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0.20, changed state to up

%LINK-5-CHANGED: Interface GigabitEthernet0/0/0.99, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0.99, changed state to up
```

スイッチの設定：
```
SW1(config)#vlan 10
SW1(config-vlan)#exit
SW1(config)#vlan 20
SW1(config-vlan)#exit
SW1(config)#vlan 99 #VLAN作成
SW1(config-vlan)#exit

SW1(config)#interface range fastethernet 0/1 - 3 #Fa0/1～3をまとめて設定する
SW1(config-if-range)#switchport mode access #明示的にアクセスポートに設定
SW1(config-if-range)#exit

SW1(config)#interface fastEthernet 0/2 #物理インターフェース指定
SW1(config-if)#switchport access vlan 10
SW1(config-if)#exit

SW1(config)#interface fastEthernet 0/3 #物理インターフェース指定
SW1(config-if)#switchport access vlan 20
SW1(config-if)#exit

SW1(config)#interface GigabitEthernet 0/1
SW1(config-if)#switchport mode trunk　#trunk mode
SW1(config-if)#switchport nonegotiate 
SW1(config-if)#switchport trunk native vlan 99 #ネイティブVLANを99に変更

SW1(config-if)#interface vlan 1 #管理VLANインタフェースの設定
SW1(config-if)#ip address 172.16.1.100 255.255.255.0 #スイッチのIPアドレス
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#ip default-gateway 172.16.1.254 #デフォルトゲートウェイを設定
SW1(config)#exit
```

## L3スイッチを使用したVLAN間ルーティング
- L3スイッチ：マルチレイヤスイッチ。L2スイッチ機能とルータ機能両方を併せ持つ機器
- SVI（Switch Virtual Interface）: スイッチポートに割り当てられているVLANをルーティングするために、VLANが内部ルータと接続する仮想的なインターフェイス。SVIにIPアドレスを割り当てて有効化することで、内部ルータは直接接続ネットワークをルーティングテーブルに登録し、VLAN間のルーティングを行う。

![トポロジ](/uploads/postimgs/2019071903.png)

L3スイッチの作成：
```
DSW(config)#vlan 10
DSW(config-vlan)#exit
DSW(config)#vlan 20
DSW(config-vlan)#exit
DSW(config)#vlan 99
DSW(config-vlan)#exit #VLAN10,20,99を作成

DSW(config)#interface range Fa 0/1 - 3 #Fa0/1～3をまとめて設定
DSW(config-if-range)#switchport trunk encapsulation dot1q #802.1Q設定
DSW(config-if-range)#switchport mode trunk #明示的にトランクポートを設定

DSW(config-if-range)#switchport trunk native vlan 99 #ネイティブVLANを99に変更
DSW(config-if-range)#switchport nonegotiate #DTP送信を停止
DSW(config-if-range)#exit

DSW(config)#ip routing #IPルーティング機能を有効化

DSW(config)#interface vlan 1 #SVI1の設定をする
DSW(config-if)#ip address 172.16.1.254 255.255.255.0
DSW(config-if)#no shutdown
DSW(config-if)#exit

DSW(config)#interface vlan 10 #SVI10の設定をする
DSW(config-if)#ip address 172.16.10.254 255.255.255.0
DSW(config-if)#no shutdown
DSW(config-if)#exit

DSW(config)#interface vlan 20 #SVI20の設定をする
DSW(config-if)#ip address 172.16.20.254 255.255.255.0
DSW(config-if)#no shutdown
DSW(config-if)#end
```

ASW設定：
```
ASW1(config)#VLAN 10
ASW1(config-vlan)#exit
ASW1(config)#VLAN 20
ASW1(config-vlan)#exit

ASW1(config)#interface range fastEthernet 0/1 - 3 #Fa0/1～3をまとめて設定
ASW1(config-if-range)#switchport mode access #VLAN モードをAccessに設定
ASW1(config-if-range)#exit

ASW1(config)#interface Fa0/1
ASW1(config-if)#switchport access vlan 1 #物理インターフェース（Access モード）にVLAN番号を配る
ASW1(config-if)#exit

ASW1(config)#interface Fa0/2
ASW1(config-if)#switchport access vlan 10 #物理インターフェース（Access モード）にVLAN番号を配る
ASW1(config-if)#exit

ASW1(config)#interface Fa0/3
ASW1(config-if)#switchport access vlan 20 #物理インターフェース（Access モード）にVLAN番号を配る
ASW1(config-if)#exit

ASW1(config)#interface Fa0/12 #L3に接続するインターフェースにtrunkモードを設定する
ASW1(config-if)#switchport mode trunk

ASW1(config-if)#switchport trunk native vlan 99　#ネイティブVLANを99に設定する

ASW1(config-if)#switchport nonegotiate #DTPを停止
ASW1(config-if)#exit

ASW1(config)#interface vlan 1
ASW1(config-if)#ip address 172.16.1.100 255.255.255.0 #管理IPを設定
ASW1(config-if)#no shutdown
ASW1(config-if)#exit

ASW1(config)#ip default-gateway 172.16.1.254 #デフォルトゲートウェイを設定
ASW1(config)#exit
```

