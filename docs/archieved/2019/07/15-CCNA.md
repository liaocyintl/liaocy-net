---
title: CCNA試験のまとめノート 06 Catalystスイッチの導入
date: 2019-07-14 22:31:00
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---
Catalystスイッチの初期起動、スイッチの基本設定、スイッチの基本設定の確認、MACアドレステーブル、二重モードと速度の設定
<!-- more -->

# Catalystスイッチの初期起動
## Catalystスイッチ
- Catalystシステム：シスコシステムズが提供するスイッチ製品シリーズの名称。
- 分類：
  - モジュール型スイッチ
    - シャーシ（Chassis：n. 底盘，底架）筐体（きょうたい）と呼ばれるスロット部分に、モジュールを挿入
    - モジュール
      - スーパバイザエンジン（Supervisor　n. 监督人；管理人；检查员 Engine）
      - インターフェイスモジュール
      - 電源モジュール
    - 特徴：モジュール追加・変更可能；拡張性
  - 固定構成型スイッチ
    - シャーシはなし
- 主なCisco Catalystスイッチシリーズ
  - キャンパス　コア　スイッチ
    - Catalyst 6800 シリーズ
    - 6500
    - 4500E
  - キャンパス　ディストリビューション　スイッチ
    - 6800-X
    - 4500-X
    - 3850
  - キャンパス　アクセス　スイッチ
    - 4500E
    - 3860
    - 2960-X

- キャンパスネットワーク：ビル群をひとまとまりとした構内ネットワークという事ができます。[参考資料](https://macruby.info/network/cisco-campus-network.html)

## 初期起動の流れ
- 流れ：
  - ケーブリングを行い、配線を確認
  - スイッチに電源ケーブルを接続
  - 起動（ブート）時のLEDや表示メッセージを確認
- LEDの意味：
  - システムLED：スイッチが正常に機能しているか
    - 消灯：システムの電源が入っていない
    - グリーン：正常に動作している
    - オレンジ：正常に動作していない
  - RPS（リダンダント Redundant Power Supply）
    - 消灯：RPS電源OFFか、接続されていないか
    - グリーン：バックアップ電力を供給できる状態
    - グリーン点滅：別の装置に電力供給中のため使用できない
    - オレンジ：RPSがスタンバイモードか障害が発生している
    - オレンジ点滅；スイッチの電源装置に障害が発生、RPSからスイッチに電力供給中
  - ステータスLED：ポートステータスを示す
    - 消灯：ケーブル接続なし；ケーブルの種類が適切でない；ポートを管理的にシャットダウンしている；セキュリティ違反などによるerr-disable状態
    - グリーン：リンクはあるが、フレームの受送信なし
    - グリーン点滅：アクティブな状態、送信中
    - グリントとオレンジで交互に点滅：リンク障害（過度のコリジョンcollision　n. （意见，看法）的抵触，冲突　など）
    - オレンジ：STPによってブロックされており、フレーム伝送しない
      - STP：Spanning tree protocol: フレームのループを回避して冗長ネットワークを維持するレイヤ２プロトコル
  - DUPLEX LED：二重モードを示す
    - 消灯：ポートは半二重で動作
    - グリーン：ポートは全二重で動作
  - SPEED LED
    - 消灯：ポートは10Mbpsで動作
    - グリーン：ポートは100Mbpsで動作
    - グリーン点滅：ポートは1000Mbpsで動作
  - PoE LED: PoE (Power over Ethernet)、IEEE 802.3afの基準、1ポート最大15.4W、
    - 消灯：PoEがオフになっている
    - グリーン：PoEがオンで、スイッチポートが電力供給中
    - グリントとオレンジで交互に点滅：供給電力がスイッチの電力容量を超えるため、PoEが無効になっている
    - オレンジ点滅：障害によりPoEがオフになっている
    - オレンジ：そのポートのPoEが無効になっている
    - MODEボタン：モードをSTAT、DUPLX、SPEED、PoEのいずれかに切り替える
  - ポーチLED：各ポートに１つずつあり、表示内容はモードによって違う

## セットアップモード
- 場合：有効なコンフィギュレーションファイルが存在しない

```
         --- System Configuration Dialog ---

Would you like to enter the initial configuration dialog? [yes/no]: y #初期設定開始

At any point you may enter a question mark '?' for help.
Use ctrl-c to abort configuration dialog at any prompt.
Default settings are in square brackets '[]'.


Basic management setup configures only enough connectivity
for management of the system, extended setup will ask you
to configure each interface on the system

Would you like to enter basic management setup? [yes/no]: n #Basic managementとは最小の設定のみ行う
First, would you like to see the current interface summary? [yes]: #インターフェースのステータスを確認

Current interface summary

Interface              IP-Address      OK? Method Status                Protocol

GigabitEthernet0/0/0   unassigned      YES manual administratively down down

GigabitEthernet0/0/1   unassigned      YES manual administratively down down

Vlan1                  unassigned      YES manual administratively down down

Configuring global parameters:

  Enter host name [Router]: SW1 #スイッチの名前を設定

  The enable secret is a password used to protect access to
  privileged EXEC and configuration modes. This password, after
  entered, becomes encrypted in the configuration.
  Enter enable secret: cisco #イナーブルシークレットパスワード（Inner Bull Secret Password）設定

  The enable password is used when you do not specify an
  enable secret password, with some older software versions, and
  some boot images.
```

## スイッチのインターフェース番号付け規則

- 例：FaseEthernet 0/1
- フォマード：インターフェースタイプ　スロット/ポート
  - スロット：固定構成型スイッチの場合、番号は常に０
  - ポート：１から

# スイッチの基本設定
## スイッチの基本設定
- ホスト名の設定
  - 63文字

```
Switch#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname ASW1 #ホスト名設定
ASW1(config)#hostname Switch-A
Switch-A(config)#no hostname #ホスト名削除
Switch(config)#hostname SW1
SW1(config)#
```

- 管理用IPアドレスの設定
  - 役割：管理インターフェイスのIPアドレスを設定する。

```
Switch(config-if)#interface vlan 1 # 管理Vlanの番号を指定する
Switch(config-if)#ip address 192.168.1.1 255.255.255.0 # IPアドレスを指定
Switch(config-if)#no shutdown # インタフェースを有効化

Switch(config-if)#
%LINK-5-CHANGED: Interface Vlan1, changed state to up

Switch(config-if)#
```

- デフォルトゲートウェイの設定

```
Switch(config-if)#interface vlan 1 #VLANの管理インターフェースに移行
Switch(config-if)#ip address 172.16.1.2 255.255.255.0 #IPアドレスとサブネットマスクを設定
Switch(config-if)#no shutdown #インターフェースを有効化
Switch(config-if)#exit
Switch(config)#ip default-gateway 172.16.1.1 #デフォルトゲートウェイを設定
```

# スイッチの基本設定の確認
## スイッチ本体情報の表示


```
SW1#show version
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(25)FX, RELEASE SOFTWARE (fc1)

- C2960-LANBASE-M: IOSソフトウェアの種類
- Version 12.2(25)FX：IOSソフトウェアのバージョン情報

Copyright (c) 1986-2005 by Cisco Systems, Inc.
Compiled Wed 12-Oct-05 22:05 by pt_team

ROM: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(25r)FX, RELEASE SOFTWARE (fc4)
System returned to ROM by power-on
Cisco WS-C2960-24TT (RC32300) processor (revision C0) with 21039K bytes of memory.

- Version 12.2(25r)FX: ブートROMのバージョン情報

24 FastEthernet/IEEE 802.3 interface(s)

- FastEthernetインターフェースの数

2 Gigabit Ethernet/IEEE 802.3 interface(s)

- Gigabit Ethernetインターフェースの数

63488K bytes of flash-simulated non-volatile configuration memory.

- NVRAMのサイズ

Base ethernet MAC Address       : 0002.166C.7C29
Motherboard assembly number     : 73-9832-06
Power supply part number        : 341-0097-02
Motherboard serial number       : FOC103248MJ
Power supply serial number      : DCA102133JA
Model revision number           : B0
Motherboard revision number     : C0
Model number                    : WS-C2960-24TT
System serial number            : FOC1033Z1EY
Top Assembly Part Number        : 800-26671-02
Top Assembly Revision Number    : B0
Version ID                      : V02
CLEI Code Number                : COM3K00BRA
Hardware Board Revision Number  : 0x01


Switch   Ports  Model              SW Version              SW Image
------   -----  -----              ----------              ----------
*    1   26     WS-C2960-24TT      12.2                    C2960-LANBASE-M

Configuration register is 0xF

- コンフィギュレーションレジスタの値

```

## 現在のコンフィギュレーションを表示

```
SW1# show running-config 
Building configuration...

Current configuration : 1119 bytes #現在のコンフィギュレーションであることを表示している
!
version 12.2 # IOSのバージョン
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption #パスワードの暗号化なし
!
hostname SW1 #ホスト名
!
!
spanning-tree mode pvst #STPのモード
spanning-tree extend system-id
!
interface FastEthernet0/1
!
...
!
interface FastEthernet0/24 #FastEthernetポートの情報
!
interface GigabitEthernet0/1 #GigabitEthernetポートの情報
!
interface GigabitEthernet0/2 
!
interface Vlan1
 ip address 172.16.1.2 255.255.255.0 #管理用IPアドレス
!
ip default-gateway 172.16.1.1 #デフォルトゲートウェイ
!
!
!
!
line con 0 #コンソールポートの情報
!
line vty 0 4 #仮想端末(VTY)の情報
 login
line vty 5 15
 login
!
!
!
!
end
```

## スイッチポートの詳細情報の表示

```
SW1#show interfaces fastEthernet 0/1
SW1#sh int fa0/1 #省略形式
FastEthernet0/1 is down, line protocol is down (disabled) #インターフェースの状態
  Hardware is Lance, address is 0003.e499.4d01 (bia 0003.e499.4d01) #MACアドレス
 BW 100000 Kbit, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Half-duplex, 100Mb/s #二重モードと速度（全二重モード/100Mbps）
  input flow-control is off, output flow-control is off
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 00:00:08, output 00:00:05, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue :0/40 (size/max)

# ここからは統計情報

  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     956 packets input, 193351 bytes, 0 no buffer
     Received 956 broadcasts, 0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored, 0 abort
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     2357 packets output, 263570 bytes, 0 underruns
     0 output errors, 0 collisions, 10 interface resets
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier
     0 output buffer failures, 0 output buffers swapped out
```

## スイッチポートの要約情報の表示

- Name: descriptionコマンドで設定したインターフェースの説明文

```
SW1#show interfaces status
Port      Name               Status       Vlan       Duplex  Speed Type
Fa0/1                        notconnect   1          auto    auto  10/100BaseTX
Fa0/2                        notconnect   1          auto    auto  10/100BaseTX
Fa0/3                        notconnect   1          auto    auto  10/100BaseTX
...
```

## 管理インターフェースの情報の表示

```
SW1#show interfaces vlan 1
Vlan1 is up, line protocol is down #インターフェースの状態
  Hardware is CPU Interface, address is 0002.166c.7c29 (bia 0002.166c.7c29)
  Internet address is 172.16.1.2/24 #IPアドレスとプレフィックス
  MTU 1500 bytes, BW 100000 Kbit, DLY 1000000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 21:40:21, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     1682 packets input, 530955 bytes, 0 no buffer
     Received 0 broadcasts (0 IP multicast)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     563859 packets output, 0 bytes, 0 underruns
     0 output errors, 23 interface resets
     0 output buffer failures, 0 output buffers swapped out
```

# MACアドレステーブル
## MACアドレステーブル表示
- CAM(Content Addressable Memory): このメモリを用いてMACアドレステーブルの検索機能をハードウェア化、フレーム伝送処理の高速化を実現

```
SW1#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----

   1    0001.43c5.9501    DYNAMIC     Fa0/1
```
- Type
  - DYNAMIC: 動的に学習した情報
  - STATIC：静的と最初から登録されている情報


## スタティックMACアドレスの登録

```
SW1(config)#mac address-table static 2016.d872.1234 vlan 1 interface fa 0/5

# 2016.d872.1234: MACアドレス
# 1: Vlan番号
# fa 0/5: スイッチポート

SW1(config)#exit
SW1#
%SYS-5-CONFIG_I: Configured from console by console

SW1#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----

   1    0002.1636.6001    DYNAMIC     Fa0/1
   1    2016.d872.1234    STATIC      Fa0/5 #追加した静的MACアドレス
```

## スタティックMACアドレスの削除

```
SW1(config)#no mac-address-table static 2016.d872.1234 vlan 1 interface fa 0/5
SW1(config)#show mac add
SW1(config)#exit

SW1#show mac address-table 
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----

   1    0002.1636.6001    DYNAMIC     Fa0/1
```

```
SW1#clear mac address-table dynamic
```


## MACアドレステーブルのエージングタイム
- エージングタイム：ダイナミックMACアドレスは、使用されなくなると期限切れ（エージアウト　Age out）の時間；デフォルト３００秒

```
SW1#show mac address-table aging-time
```

# 二重モードと速度の設定
## 二重モードの設定

```
SW1(config-if)#duplex auto #自動選択
SW1(config-if)#
%LINK-5-CHANGED: Interface FastEthernet0/1, changed state to up

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up

%LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up

SW1(config-if)#duplex full #全二重通信
SW1(config-if)#duplex half #半二重通信
```

```
SW1(config-if)#speed 10 #10Mbps
SW1(config-if)#speed 100 #100Mbps
SW1(config-if)#speed 1000 #1000Mbps
                        ^
% Invalid input detected at '^' marker.
	
SW1(config-if)#speed auto #auto select
SW1(config-if)#
```

## 二重モードと速度の確認

```
SW1#show interfaces fastEthernet 0/1
FastEthernet0/1 is up, line protocol is up (connected)
  Hardware is Lance, address is 0003.e499.4d01 (bia 0003.e499.4d01)
 BW 100000 Kbit, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Half-duplex, 100Mb/s # 半二重通信
  input flow-control is off, output flow-control is off
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 00:00:08, output 00:00:05, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue :0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     956 packets input, 193351 bytes, 0 no buffer
     Received 956 broadcasts, 0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored, 0 abort
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     2357 packets output, 263570 bytes, 0 underruns
     0 output errors, 0 collisions, 10 interface resets
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier
     0 output buffer failures, 0 output buffers swapped out
```

```
SW1#show interfaces fastEthernet 0/1 status
Port      Name               Status       Vlan       Duplex  Speed Type
Fa0/1                        connected    1          a-half  auto  10/100BaseTX
```

```
SW1#show interfaces status
Port      Name               Status       Vlan       Duplex  Speed Type
Fa0/1                        connected    1          a-half  auto  10/100BaseTX
Fa0/2                        notconnect   1          auto    auto  10/100BaseTX
Fa0/3                        notconnect   1          auto    auto  10/100BaseTX
Fa0/4                        notconnect   1          auto    auto  10/100BaseTX
```

## Auto MDI/MDI-x設定
- 役割：スイッチのポートに接続する端末に合わせてUTPケーブルを自動的に設定

```
SW1(config)#interface Fa0/24
SW1(config-if)#mdix auto
```