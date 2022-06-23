---
title: CCNA試験のまとめノート 07 Ciscoルータの導入
date: 2019-07-17 11:00
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---
Ciscoルータの導入
<!-- more -->

# Ciscoルータの初期起動
## Cisco　ISR（サービス統合ルータ）
- ISR(Integrated Services Router): セキュリティ機能と企業の高速なネットワーク環境に必要なサービスを統合
- 主力製品：Cisco 4000シリーズ、3900、3800、2900、1900、1800、800

## Ciscoルータの初期起動の流れ
- 手順
  - ケーブリングを行い、配線が適切かどうか確認
  - ルータに電源を投入
  - 起動時のLEDや表示メッセージを確認

```
System Bootstrap, Version 15.1(4)M4, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 2010 by cisco Systems, Inc.
Total memory size = 512 MB - On-board = 512 MB, DIMM0 = 0 MB
CISCO1941/K9 platform with 524288 Kbytes of main memory
Main memory is configured to 64/-1(On-board/DIMM0) bit mode with ECC disabled

Readonly ROMMON initialized

program load complete, entry point: 0x80803000, size: 0x1b340
program load complete, entry point: 0x80803000, size: 0x1b340

IOS Image Load Test
___________________
Digitally Signed Release Software
program load complete, entry point: 0x81000000, size: 0x2bb1c58
Self decompressing the image :
########################################################################## [OK] #IOSをRAM上に展開している
Smart Init is enabled
smart init is sizing iomem
                  TYPE      MEMORY_REQ
     Onboard devices &
          buffer pools      0x01E8F000
-----------------------------------------------
                TOTAL:      0x01E8F000
Rounded IOMEM up to: 32Mb.
Using 6 percent iomem. [32Mb/512Mb]

              Restricted Rights Legend
Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.
           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706

Cisco IOS Software, C1900 Software (C1900-UNIVERSALK9-M), Version 15.1(4)M4, RELEASE SOFTWARE (fc2) #IOSソフトウェアのバージョン
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2012 by Cisco Systems, Inc.
Compiled Thurs 5-Jan-12 15:41 by pt_team
Image text-base: 0x2100F918, data-base: 0x24729040

This product contains cryptographic features and is subject to United
States and local country laws governing import, export, transfer and
use. Delivery of Cisco cryptographic products does not imply
third-party authority to import, export, distribute or use encryption.
Importers, exporters, distributors and users are responsible for
compliance with U.S. and local country laws. By using this product you
agree to comply with applicable laws and regulations. If you are unable
to comply with U.S. and local laws, return this product immediately.

A summary of U.S. laws governing Cisco cryptographic products may be found at:
http://www.cisco.com/wwl/export/crypto/tool/stqrg.html

If you require further assistance please contact us by sending email to
export@cisco.com.

Cisco CISCO1941/K9 (revision 1.0) with 491520K/32768K bytes of memory. # RAMのサイズ
Processor board ID FTX152400KS
2 Gigabit Ethernet interfaces # 搭載されているインターフェースやモジュールの種類と数
DRAM configuration is 64 bits wide with parity disabled.
255K bytes of non-volatile configuration memory.
249856K bytes of ATA System CompactFlash 0 (Read/Write)
```

## ルータのインターフェース番号付けの規則

- Serial 0/0/0: スロット/インターフェースカードスロット/ポート

# ルータの基本設定
## ルータの基本設定

- ホスト名：略
- IPアドレスとサブネットマスク
  - 各インターフェースに対して、IPアドレスとサブネットマスクを設定

```
Router(config)#interface GigabitEthernet 0/0
Router(config-if)#ip address 192.168.1.1 255.255.255.0
```

- インターフェースの有効/無効か
```
Router(config)#interface GigabitEthernet 0/1
Router(config-if)#shutdown
Router(config-if)#no shutdown

Router(config-if)#
%LINK-5-CHANGED: Interface GigabitEthernet0/1, changed state to up
```

## 二重モードと速度の設定
スイッチと一緒。略。

## インターフェース説明文を設定

```
SW1#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z.
SW1(config)#interface fastEthernet 0/1
SW1(config-if)#description to RT1
SW1(config-if)#exit
```

# ルータの基本設定の確認

トポロジ：

![トポロジ](/uploads/postimgs/2019071801.png)

```
Router>enable
Router#configure terminal #設定モードに移行
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#hostname RT1 #ホスト名をRT1に設定
RT1(config)# #プロンプト
RT1(config)#interface Gig0/0/0  #Fa0のインターフェースの設定モードに移行
RT1(config-if)#ip address 172.16.1.1 255.255.255.0 #IPアドレス設定
RT1(config-if)#no shutdown #インターフェースを有効化
RT1(config-if)#
%LINK-5-CHANGED: Interface GigabitEthernet0/0/0, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0, changed state to up

RT1(config-if)#description ** to Sales Dep. Network **
RT1(config-if)#interface Gig0/0/1
RT1(config-if)#ip address 172.16.2.1 255.255.255.0
RT1(config-if)#no shutdown
RT1(config-if)#
%LINK-5-CHANGED: Interface GigabitEthernet0/0/1, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/1, changed state to up
RT1(config-if)#description ** to Engineering Dep. Network **

RT1(config-if)#line console 0 #コンソールのラインの設定モードに移行
RT1(config-line)#exec-timeout 15 #セッションのタイムアウト時間を１５分に変更
RT1(config-line)#logging synchronous #割り込みメッセージのコマンド再表示
```

## 本体情報
スイッチと一緒。略。

## インターフェースの要約情報表示

```
RT1#show ip interface brief #全インターフェースの要約情報を表示
Interface              IP-Address      OK? Method Status                Protocol 
GigabitEthernet0/0/0   172.16.1.1      YES NVRAM  up                    up 
GigabitEthernet0/0/1   172.16.2.1      YES NVRAM  up                    up 
```

## ルーティングテーブルの表示

```
RT1#show ip route
Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       * - candidate default, U - per-user static route, o - ODR
       P - periodic downloaded static route

Gateway of last resort is not set

     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks
C       172.16.1.0/24 is directly connected, GigabitEthernet0/0/0 #直接接続ネットワーク
L       172.16.1.1/32 is directly connected, GigabitEthernet0/0/0 #インターフェースのアドレス
C       172.16.2.0/24 is directly connected, GigabitEthernet0/0/1
L       172.16.2.1/32 is directly connected, GigabitEthernet0/0/1
```