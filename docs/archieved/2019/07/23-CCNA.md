---
title: CCNA試験のまとめノート 14 ネットワークデバイスの管理
date: 2019-07-23 09:26
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

Ciscoデバイスの管理機能、Ciscoルータの管理、CiscoIOSイメージの管理、コンフィギュレーションファイルの管理、NTPによる時刻同期、Cisco IOSイメージのライセンス、パスワードリカバリ
<!-- more -->

# Ciscoデバイスの管理機能
## CDP
- Cisco Discovery Protocol: 隣接するCiscoデバイスを検出し、プロトコルやアドレス情報などを知ることができるシスコ独自のプロトコル
- キーワード：データリンク層、
- 情報表示

```
Router#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone
Device ID    Local Intrfce   Holdtme    Capability   Platform    Port ID
Switch       Gig 0/1/2        126            S       2960        Gig 0/1
Router       Gig 0/0/0        156            R       ISR4300     Gig 0/0/1
```

```
Router#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone
Device ID    Local Intrfce   Holdtme    Capability   Platform    Port ID
Switch       Gig 0/1/2        126            S       2960        Gig 0/1
Router       Gig 0/0/0        156            R       ISR4300     Gig 0/0/1
Router#show cdp neighbors detail

Device ID: Switch
Entry address(es): 
Platform: cisco 2960, Capabilities: Switch
Interface: GigabitEthernet0/1/2, Port ID (outgoing port): GigabitEthernet0/1
Holdtime: 166

Version :
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(25)FX, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2005 by Cisco Systems, Inc.
Compiled Wed 12-Oct-05 22:05 by pt_team

advertisement version: 2
Duplex: full
---------------------------

Device ID: Router
Entry address(es): 
Platform: cisco ISR4300, Capabilities: Router
Interface: GigabitEthernet0/0/0, Port ID (outgoing port): GigabitEthernet0/0/1
Holdtime: 136

Version :
Cisco IOS XE Software, Version 03.13.04.S - Extended Support Release
Cisco IOS Software, ISR Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 15.5(3)S5, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Mon 05-Oct-15 11:24 by mcpre

advertisement version: 2
Duplex: full
```

- デバイスごとCDP情報を出力
```cisco
Router#show cdp entry Switch

Device ID: Switch
Entry address(es): 
Platform: cisco 2960, Capabilities: Switch
Interface: GigabitEthernet0/1/2, Port ID (outgoing port): GigabitEthernet0/1
Holdtime: 147

Version :
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(25)FX, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2005 by Cisco Systems, Inc.
Compiled Wed 12-Oct-05 22:05 by pt_team

advertisement version: 2
Duplex: full
---------------------------
```

- CDP情報を出力

```
Router#show cdp
Global CDP information:
    Sending CDP packets every 60 seconds
    Sending a holdtime value of 180 seconds
    Sending CDPv2 advertisements is enabled
```

- CDPが有効なインターフェイス情報を表示

```
Router#show cdp interface 
Vlan1 is administratively down, line protocol is down
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
GigabitEthernet0/0/0 is up, line protocol is up
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
GigabitEthernet0/0/1 is up, line protocol is down
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
GigabitEthernet0/1/0 is up, line protocol is down
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
GigabitEthernet0/1/1 is up, line protocol is up
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
GigabitEthernet0/1/2 is up, line protocol is up
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
GigabitEthernet0/1/3 is up, line protocol is down
  Sending CDP packets every 60 seconds
  Holdtime is 180 seconds
```

- CDPメッセージの統計情報を表示

```
Router#show cdp traffic
```

- 無効化
```
Router(config)#no cdp run
```

- 特定のインターフェイスで無効化
```
Router(config-if)#no cdp enable
```

- CDPメッセージの送信頻度の設定
```
Router(config)#cdp timer 60
```

- CDPのホールドダウンの設定
```
Router(config)#cdp holdtime 180
```

## LLDP
- Link Layer Discovery Protocol: 自身の情報をアドバタイズする近隣探索プロトコル、IEEE 802.1AB。
- メッセージの中身：タイプ（Type）、長さ（Length）、値（Value）

デバイス全体有効化：
```
Router(config)#lldp run
```

デバイス全体無効化：
```
Router(config)#no lldp run
```

インターフェイスがLLDPを受信しない：
```
Router(config)#no lldp receive
```

インターフェイスがLLDPを送信しない：
```
Router(config)#no lldp transmit
```

LLDP要約情報を表示：
```
Switch#show lldp neighbors 
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other
Device ID           Local Intf     Hold-time  Capability      Port ID
Switch              Fa0/17         120        B               Fa0/1
Switch              Fa0/18         120        B               Fa0/1

Total entries displayed: 2
```

```
Switch#show lldp neighbors detail 
------------------------------------------------
Chassis id: 0060.4727.1A01
Port id: Fa0/1
Port Description: FastEthernet0/1
System Name: Switch
System Description:
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(25)FX, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2005 by Cisco Systems, Inc.
Compiled Wed 12-Oct-05 22:05 by pt_team
Time remaining: 90 seconds
System Capabilities: B
Enabled Capabilities: B
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    100baseT(FD)
    100baseT(HD)
    1000baseT(HD)
Media Attachment Unit type: 10
Vlan ID: 1
------------------------------------------------
Chassis id: 00E0.B0EE.3E01
Port id: Fa0/1
Port Description: FastEthernet0/1
System Name: Switch
System Description:
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(25)FX, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2005 by Cisco Systems, Inc.
Compiled Wed 12-Oct-05 22:05 by pt_team
Time remaining: 90 seconds
System Capabilities: B
Enabled Capabilities: B
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    100baseT(FD)
    100baseT(HD)
    1000baseT(HD)
Media Attachment Unit type: 10
Vlan ID: 1

Total entries displayed: 2
```

LLDP情報を出力：
```
Switch#show lldp

Global LLDP Information:
    Status: ACTIVE
    LLDP advertisements are sent every 30 seconds
    LLDP hold time advertised is 120 seconds
    LLDP interface reinitialisation delay is 2 seconds
```

## 名前解決

```
Switch(config)#ip host RT2 172.16.2.253
Switch(config)#exit
Switch#
%SYS-5-CONFIG_I: Configured from console by console

Switch#ping RT2

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 172.16.2.253, timeout is 2 seconds:
```

```
Switch#show hosts
Default Domain is not set
Name/address lookup uses domain service
Name servers are 255.255.255.255

Codes: UN - unknown, EX - expired, OK - OK, ?? - revalidate
       temp - temporary, perm - permanent
       NA - Not Applicable None - Not defined

Host                      Port  Flags      Age Type   Address(es)
RT2                       None  (perm, OK)  0   IP      172.16.2.253
```

## 接続状況確認（ログイン状況）

```
Switch#show users
    Line       User       Host(s)              Idle       Location
*  0 con 0                idle                 00:00:00 

  Interface    User               Mode         Idle     Peer Address
```

- 中断しているセッションを表示
```
Switch#show sessions 
% No connections open
```

- 直前のセッションを中断
```
#disconnection
```

## Syslog
- フォマード：sql no: timestamp : %facility-severity-MINEMONIC : description
  - sql no: シーケンス番号
  - timestamp: メッセージまたはイベントの日時
  - facility: メッセージが参照する昨日
  - severity: 重大度0～7のコード
  - MNEMONIC: メッセージを一意に示す文字列
  - description: レポートされているイベントの詳細を示すテキスト文字列

- ログ表示の無効化

```
Switch(config)#no logging console
```


- コンソールログ表示のレベルを指定
```
Switch(config)#logging console [<level>]
```

## Syslogサーバの設定

- Syslogサーバを指定
```
Switch(config)#logging 192.168.0.100
```

- Syslogメッセージのseverityの設定
```
Switch(config)#logging trap <severity 0-7>
```

- ロギングバッファの設定
```
Switch(config)#logging buffered <size 4096-2147483647> <severity 0-7>
```

- 内部バッファの表示
```
Switch#show logging
Syslog logging: enabled (0 messages dropped, 0 messages rate-limited,
          0 flushes, 0 overruns, xml disabled, filtering disabled)

No Active Message Discriminator.


No Inactive Message Discriminator.


    Console logging: disabled
    Monitor logging: level debugging, 7 messages logged, xml disabled,
          filtering disabled
    Buffer logging:  level debugging, 0 messages logged, xml disabled,
          filtering disabled

    Logging Exception size (4096 bytes)
    Count and timestamp logging messages: disabled
    Persistent logging: disabled

No active filter modules.

ESM: 0 messages dropped
    Trap logging: level debugging, 9 message lines logged
        Logging to 192.168.0.100  (udp port 514,  audit disabled,
             authentication disabled, encryption disabled, link up),
             2 message lines logged,
             0 message lines rate-limited,
             0 message lines dropped-by-MD,
             xml disabled, sequence number disabled
             filtering disabled
Log Buffer (4096 bytes):
```

## デバッグ機能

- デバッグの有効化
```
Switch#debug ?
  aaa           AAA Authentication, Authorization and Accounting
  crypto        Cryptographic subsystem
  custom-queue  Custom output queueing
  eigrp         EIGRP Protocol information
  ephone        ethernet phone skinny protocol
  frame-relay   Frame Relay
  ip            IP information
  ipv6          IPv6 information
  ntp           NTP information
  ppp           PPP (Point to Point Protocol) information
  standby       Hot Standby Router Protocol (HSRP)
```

```
#debug cdp
```

- デバッグの停止
```
#no debug all
#undebug all
#no debug <options>
```

- デバッグ情報を表示
```
Switch#show debugging 
ICMP packet debugging is on
```

- デバッグおよびごるのタイムスタンプ設定（出力メッセージの先頭には「現在の日付と時刻」、「システムが起動してからの経過時間」）

```
(config)#service timestamps debug [uptime | datetime [msec]]
(config)#service timestamps log [uptime | datetime [msec]]
```

- 時間設定

```
Switch#clock set 10:44:00 23 july 2019

Switch#show clock
10:44:6.835 UTC Tue Jul 23 2019

Switch#show clock detail 
10:49:36.146 UTC Tue Jul 23 2019
Time source is user configuration
```

## プロセス、CPU、メモリの利用状況確認

- CPUまたはメモリの利用状況を確認
```
RT1#show processes [cpu | memory]
```

- 指定プロセスの状況を確認
```
Switch# show processes | include CDP Protocol
```

## 時間設定

- 時間

```
Switch#clock set 10:44:00 23 july 2019

Switch#show clock
10:44:6.835 UTC Tue Jul 23 2019

Switch#show clock detail 
10:49:36.146 UTC Tue Jul 23 2019
Time source is user configuration
```

- タイムゾーン設定

```
Switch#clock timezone JST 9
```

# Ciscoルータの管理
## ルータの内部コンポーネント
CPU、ROM、Flash、インターフェイス、NVRAM、RAM

## メモリの種類
- ROM: Read Only Memory
- フラッシュメモリ：自由に読み書き可能、電源を切っても内容は消えない。IOSソフトウェア。

```
Switch#show flash:

System flash directory:
File  Length   Name/status
  3   8662192  c3560-advipservicesk9-mz.122-37.SE1.bin
  2   28282    sigdef-category.xml
  1   227537   sigdef-default.xml
[8918011 bytes used, 55098373 available, 64016384 total]
63488K bytes of processor board System flash (Read/Write)
```

- NVRAM（Non-Volatile Random Access Memory）：startup-config情報格納
- RAM（Random Access Memory）

## ルータの起動シーケンス
- POST実行（Power-On Self-Test）
- ブートストラップコードのロードと実行
- Cisco　IOSソフトウェアのロード
- コンフィギュレーションファイル
- Cosico IOSソフトウェアの実行

## コンフィギュレーションレジスタ値

- 設定：

```
Switch(config)#config-register 0x2142
```

# Cisco IOSイメージの管理

## Cisco IOSイメージのロード

```
Switch#show version 
Cisco IOS Software, C3560 Software (C3560-ADVIPSERVICESK9-M), Version 12.2(37)SE1, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2007 by Cisco Systems, Inc. <----使用中のIOSソフトウェアのバージョン

...

ROM: C3560 Boot Loader (C3560-HBOOT-M) Version 12.2(25r)SEC, RELEASE SOFTWARE (fc4) <---- ブートに使用されたブートストラップソフトウェアのバージョン

```

## Cisco IOS ファイルシステム（IFS）
- Cisco Integrated File System: Ciscoシステム用のファイルシステム

Switch#show file systems 
File Systems:

       Size(b)       Free(b)      Type  Flags  Prefixes
*     64016384      55098373     flash     rw  flash: <--フラッシュメモリ
         29688         23590     nvram     rw  nvram: <--NVRAM

## Cisco IOSの命名規則
c181x-advipservicesk9-mz.151-4.M5.bin
プラットフォーム - フィーチャセット - ファイル形式 . バージョン . 拡張子

## Cisco IOSイメージのバックアップ

- 確認：

```
Switch#show flash:

System flash directory:
File  Length   Name/status
  3   8662192  c3560-advipservicesk9-mz.122-37.SE1.bin
  2   28282    sigdef-category.xml
  1   227537   sigdef-default.xml
[8918011 bytes used, 55098373 available, 64016384 total]
63488K bytes of processor board System flash (Read/Write)
```

- FTPサーバへバックアップ

```
Switch#copy flash: tftp:
Source filename []? c181x-advipservicesk9-mz.151-4.M5.bin
Address or name of remote host []? 192.168.0.100
Destination filename [c181x-advipservicesk9-mz.151-4.M5.bin]? 

Writing c181x-advipservicesk9-mz.151-4.M5.bin...%Error opening flash:c181x-advipservicesk9-mz.151-4.M5.bin (No such file or directory)
```

## Cisco IOSイメージのアップグレード

```
Switch#copy tftp: flash:
Address or name of remote host []? 192.168.1.100
Source filename []? c181x-advipservicesk9-mz.151-4.M5.bin
Destination filename [c181x-advipservicesk9-mz.151-4.M5.bin]? 

Accessing tftp://192.168.1.100/c181x-advipservicesk9-mz.151-4.M5.bin....
```

# コンフィギュレーションファイルの管理
## コンフィギュレーションの保存

- 保存
```
Switch#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]

または

Switch#copy system:running-config nvram:startup-config
```

- 消去

```
Switch#erase startup-config 
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
%SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
```

## コンフィギュレーションの外部サーバへのバックアップ

```
Switch#copy running-config tftp:
Address or name of remote host []? 192.168.1.100
Destination filename [Switch-confg]? 

Writing running-config....
```

```
Switch#copy startup-config tftp:
Address or name of remote host []? 192.168.1.100
Destination filename [Switch-confg]? 

Writing running-config....
```

# NTPによる時刻同期
- Network Time Protocol: UDP,、ポート123、stratum(階層化)

![トポロジ](/uploads/postimgs/2019072301.png)

RT1設定：
```
RT1#clock set 11:45:00 23 july 2019
RT1#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
RT1(config)#ntp master 3

RT1#show ntp associations 

address         ref clock       st   when     poll    reach  delay          offset            disp
*~127.127.1.1   .LOCL.          2    9        64      17     0.00           0.00              0.12
 * sys.peer, # selected, + candidate, - outlyer, x falseticker, ~ configured
```

RT2設定
```
RT2(config)#ntp server 172.16.2.1
RT2(config)#exit

RT2#show ntp associations 
address         ref clock       st   when     poll    reach  delay          offset            disp
*~172.16.2.1    127.127.1.1     3    13       16      167    0.00           -4.00             0.12
 * sys.peer, # selected, + candidate, - outlyer, x falseticker, ~ configured

RT2#show clock
16:14:34.262 UTC Tue Jul 23 2019

RT2#show clock detail
16:14:56.232 UTC Tue Jul 23 2019
Time source is NTP

RT2#show ntp status
Clock is synchronized, stratum 16, reference is 172.16.2.1
nominal freq is 250.0000 Hz, actual freq is 249.9990 Hz, precision is 2**24
reference time is 0C6D1DFF.000000A6 (3:52:31.166 UTC 木 12 14 2045)
clock offset is -2.00 msec, root delay is 0.00  msec
root dispersion is 10.89 msec, peer dispersion is 0.12 msec.
loopfilter state is 'CTRL' (Normal Controlled Loop), drift is - 0.000001193 s/s system poll interval is 4, last update was 5 sec ago.
```

# Cisco IOS イメージのライセンス
## 新しいライセンスモデル
- ユニバーサルイメージ：すべての機能が含まれている。
- シスコソフトウエアアクティベーション（Cisco Software Activation: CSA）：ソフトウェアフィーチャやコンポーネントを有効にするために使用されるメカニズム。

## ライセンスタイプ
- 永久（パーマネント）ライセンス
- 評価ライセンス：（６０日間）だけ有効なライセンス

## ライセンスの確認

```
RT2#show version


Technology Package License Information:

------------------------------------------------------------------------
Technology    Technology-package                  Technology-package
              Current              Type           Next reboot
------------------------------------------------------------------------
appxk9           None             None             None
uck9             None             None             None
securityk9       securityk9       Permanent        securityk9
ipbase           ipbasek9         Permanent        ipbasek9            <--- IP Baseのみ有効化されている
security         securityk9       Permanent        securityk9
ipbase           ipbasek9         Permanent        ipbasek9

cisco ISR4321/K9 (1RU) processor with 1687137K/6147K bytes of memory.
Processor board ID FLM2041W2HD
2 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
4194304K bytes of physical memory.
3223551K bytes of flash memory at bootflash:.


Configuration register is 0x2102
```

```
RT2#show license feature
Feature name      Enforcement  Evaluation  Subscription   Enabled  RightToUse
hseck9            yes          no          no             no       no
AdvUCSuiteK9      yes          yes         no             no       yes
FoundationSuiteK9 yes          yes         no             no       yes
appxk9            yes          yes         no             no       yes
cme-srst          yes          yes         no             no       yes
ipbasek9          no           no          no             yes      no
securityk9        yes          yes         no             yes      yes
throughput        yes          yes         no             no       yes
uck9              yes          yes         no             no       yes
internal_service  yes          no          no             no       no
```

## 評価ライセンスの有効化

```
RT2(config)#license boot module c1900 technology-package datak9
```

## 固有デバイス識別情報を出力

```
RT2#show license udi
Device#   PID                   SN              UDI
-----------------------------------------------------------------------------
*1        ISR4321/K9            FDO1302C47E-     ISR4321/K9:FDO1302C47E-
```

# パスワードリカバリ
## ルータのパスワードリカバリ
- コンソール接続
- ルータの電源を切断
- ROMモニタ（ROMMON）で起動
  - 60秒内にブレーク信号を送信して、rommon 1 > にする
  - tera term: alt + B
  - PuTTY: Ctrl+Break
- コンフィギュレーションレジスタ値を「0x2142に変更」
```
rommon >confreg 0x2142
rommon >reset
```
- 特権EXECモードに移行
- startup-configをrunning-configにコピー
- パスワードの再設定
- インターフェイスの有効化
- コンフィギュレーションレジスタ値を「0x2102」に戻す
- running-configをstartup-configにコピー