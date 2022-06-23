---
title: CCNA試験のまとめノート 05 Cisco IOSの接続診断ツール
date: 2019-07-14 22:31:00
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---
Ciscoデバイスへの接続、Cisco　IOSのモード、IOS操作とヘルプ機能、コンフィギュレーションの保存、Cisco　IOSの接続診断ツール
<!-- more -->

# Ciscoデバイスへの接続
## 管理アクセスとターミナルソフト
- コンソールポートによる接続
- イーサネット管理ポートによる接続
- AUXポートによる接続
- 仮想端末（VTY）による接続
- Cisco　WebブラウザUIの使用

## コンソールポートによる接続

- 定義：コンソールポートを使って管理アクセスする方法；専用ケーブル；出荷状態でもアクセス可能；
- ケーブル：ロールオーバーケーブル

## イーサーネット管理ポート
- 定義：物理的に装備されているイーサネットポートであり、コンソールポートの代わりとして使用できる
- 特徴：イーサネット管理ポートはIPアドレスを割り当てる可能。ネットワークに完全に隔離される。

## AUXポートによる接続（試験範囲を超える）

- 定義：AUX（Auxiliary: 補助）はモデム経由でルータに管理アクセスする時に使う。

## 仮想端末（VTY）による接続
- VTY：Virtual Teletype
- TelnetまたはSSHによって管理アクセスを行う

## Cisco　WebブラウザUIの使用
- 定義：CiscoIOSコマンドを発行できるWebブラウザユーザインターフェロンが含まれている。

## ターミナルソフトのシリアルポート設定
![](/uploads/postimgs/a92824ef.png)
- Parity(n. 平价；同等；相等):送信されたデータビットにパリティビットが追加されないことを示す。なしの場合、エラーチェックは無効

# Cisco　IOSのモード
## Cisco IOS 
- IOS（Internetwork Operating System）
- CLI（Command Line Interface）: IOS操作の基本

## IOSのEXECモード
- EXECモード
    - 最初に入るとき
    - モニタリング用、pingやtelnet
    - prompt：Router>
- 特権EXECモード（イネーブルモード）
    - 設定情報の消去やコピー、デバッグ機能
    
```cli
Router>enable
Router#disable
Router>exit
```

## IOSのコンフィギュレーションモード
- 場合：設定を行う時
- 特権EXECモードからconfigure terminal
- 種類
    - グローバルコンフィギュレーション：全体にかかわるグローバル設定
    - ラインコンフィギュレーションモード：コンソール、AUX、VTYポートに対する設定
    - ルータコンフィギュレーションモード：RIPやOSPFなどのルーティーンプロトコルに対する設定

```
Router>enable
Router#configure terminal #グローバルコンフィギュレーション
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#line console 0 #ラインコンフィギュレーションモード
Router(config-line)#exit
Router(config)#router rip #ルータコンフィギュレーション
Router(config-router)#exit
```

# IOS操作とヘルプ機能
## 設定の確認（showコマンド）
- 役割：情報の表示
```
Router>show clock
*0:36:49.646 UTC Mon Mar 1 1993
```
## 設定の消去
```
Router(config)#hostname RT1 #ホスト名を設定
RT1(config)#no hostname #設定したホスト名を消去
Router(config)#
```

## 出力結果の検索（フィルタ）
- begin: 検索内容に一致した行から表示する
- include: 検索内容に一致した行のみ表示する
- section: 検索内容に一致したセクションを表示する

```
Router#  show running-config | begin line vty
line vty 0 4
 login
!
!
!
end

Router#show running-config | include vty
line vty 0 4
```

## ヘルプ機能
```
Router#show ?
  aaa                Show AAA values
  access-lists       List access lists
  arp                Arp table
  cdp                CDP information
  class-map          Show QoS Class Map
  clock              Display the system clock
  controllers        Interface controllers status
  crypto             Encryption module
  debugging          State of each debugging option
  dhcp               Dynamic Host Configuration Protocol status
  dot11              IEEE 802.11 show information
  file               Show filesystem information
```

## キーによるコマンドの補完
```
Router#show runn
Router#show running-config
```

## show history
```
Router#show history
  configure terminal 
  show running-config | begin line vty
  configure terminal 
  show running-config 
    show running-config | begin line vty
  show running-config | include ip route
  show running-config | include vty
  show running-config | section vty
  configure terminal 
  show history
```

## エラーメッセージが
```
Router#e
% Ambiguous command: "e" #eだけではコマンドが特定できなかった

Router#show
% Incomplete command. #hostnameコマンドの後ろにホスト名の指定が不足

Router#ipaddress 172.16.1.1 255.255.255.0
                 ^
% Invalid input detected at '^' marker.　#構文ミス
```

# コンフィギュレーションの保存
## コンフィギュレーションの保存
- running-config: システムが動作中に使用する設定情報
- startup-config：NVRAMに保持され、システム起動時に読み込まれる
  - NVRAM：(Non-Volatile Random-Access Memory)起動時設定の保管用に使われる。
- 使い方：管理者は入力した設定値が正しいことを確認したあとには、copyコマンドを使用してRAM上のrunning-configの内容をNVRAMに保存する。

```
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
```

## コンフィギュレーションの表示
```
Router#show running-config
Router#show startup-config
```

## ルータおよびスイッチの初期化
```
Router#erase startup-config #startup-configの削除
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
%SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
```

```
Router#reload #システムの再起動
Proceed with reload? [confirm]
System Bootstrap, Version 15.1(4)M4, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 2010 by cisco Systems, Inc.
.....
```

- スイッチの初期化
  - startup-configを削除
  - vlan.dataを削除
  - スイッチの再起動

```
Router#delete vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
```

## Cisco IOSの接続診断ツール
- pingコマンド
  - 出力
    - !: ICMPエコー応答を受信
    - .: 応答がタイムアウトした。デフォルトは2秒
    - U：Destination Unreachable；宛先到達不能；
    - Q：Source Quench([kwɛntʃ] vt. 熄灭，[机] 淬火；解渴；结束；冷浸)；通信元抑制（よくせい）。宛先がビジー状態
    - M：フラグメンテーション(fragmentation,断片化)に失敗
    - ?：パケットタイプが不明
    - &：ICMP時間超過；TTL、Time To Live通過数は０になった。


```
Router>ping 192.168.8.1

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.8.1, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
```