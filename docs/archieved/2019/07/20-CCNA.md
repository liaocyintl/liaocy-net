---
title: CCNA試験のまとめノート 11 インターネット接続
date: 2019-07-22 10:43
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

DHCPによるインターネット接続、NATとPATの概要、NATの設定、PATの設定、NATとPATの検証、NATとPATのトラブルシューティング

<!-- more -->

# DHCPによるインターネット接続
## DHCPクライアント
- スタティックIPアドレスの設定：固定IPアドレスが静的に割り振られる
  - スタティックIPアドレスの設定：ルータの外部インターフェースにスタティックIPアドレスを設定
  - デフォルトルートの作成：インターネットへ向かうデフォルトルートを設定
- ダイナミックIPアドレスの設定：
- DHCPクライアントの設定

```
Router(config)#interface GigabitEthernet 0/0/0
Router(config-if)#ip address dhcp
Router(config-if)#no shutdown

Router#show running-config

!
interface GigabitEthernet0/0/0
 ip address dhcp
 duplex auto
 speed auto
!

Router#show dhcp lease #DHCPクライアントに割り当てられたIPアドレスのリース情報を表示する
Temp IP addr: 0.0.0.0 for peer on Interface: GigabitEthernet0/0/0
Temp sub net mask: 0.0.0.0
   DHCP Lease server: 0.0.0.0 , state: Initial
   DHCP Transaction id: 158006C1
   Lease: 0 secs,  Renewal: 0 secs,  Rebind: 0 secs
Temp default-gateway addr: 0.0.0.0
   Next timer fires after: 00:00:36 #リース残り時間
   Retry count: 3  Client-ID:cisco-00E0.F72D.2C01-Gig0/0/0
   Client-ID hex dump: 636973636F2D303045302E463732442E
                       24330312D476967302F302F30
   Hostname: Router
```

## DHCPサーバの設定


```
Router(config)#interface GigabitEthernet 0/0/0
Router(config-if)#ip address 172.16.10.254 255.255.255.0 #ポートのIP（デフォルトゲートウェイのIPを設定）
Router(config-if)#exit
	
Router(config)#ip dhcp pool LANUser #DHCPプールを作成
Router(dhcp-config)#network 172.16.10.0 255.255.255.0 #ネットワークアドレスの指定
Router(dhcp-config)#default-router 172.16.10.254 #デフォルトゲートウェイの指定
Router(dhcp-config)#domain-name example.com #ドメイン名の指定
Router(dhcp-config)#dns-server 64.0.0.1 #DNSサーバの指定
Router(dhcp-config)#exit

Router(config)#ip dhcp excluded-address 172.16.10.101 172.16.10.254 #クライアントへ振り当てないアドレス範囲
Router(config)#exit
Router#
%SYS-5-CONFIG_I: Configured from console by console

Router#show running-config | begin dhcp
!
ip dhcp pool LANUser
 network 172.16.10.0 255.255.255.0
 default-router 172.16.10.254
 dns-server 64.0.0.1
 domain-name example.com
!
interface GigabitEthernet0/0/0
 ip address 172.16.10.254 255.255.255.0 #DHCPクライアントのデフォルトゲートウェイ
 duplex auto
 speed auto
!
```

DHCPプールの表示：
```
Router#show ip dhcp pool

Pool LANUser :
 Utilization mark (high/low)    : 100 / 0
 Subnet size (first/next)       : 0 / 0 
 Total addresses                : 254
 Leased addresses               : 2
 Excluded addresses             : 1
 Pending event                  : none

 1 subnet is currently in the pool
 Current index        IP address range                    Leased/Excluded/Total
 172.16.10.1          172.16.10.1      - 172.16.10.254     2    / 1     / 254
```

アドレスバインディング情報の表示：DHCPによって提供されたIPアドレスとMACアドレスを対応付けたマッピング情報
```
Router#show ip dhcp binding
IP address       Client-ID/              Lease expiration        Type
                 Hardware address
172.16.10.1      0001.97B3.5035           --                     Automatic
172.16.10.2      0002.4AE8.E1E7           --                     Automatic
```

アドレス競合の表示：
```
Router#show ip dhcp conflict
IP address        Detection method   Detection time          VRF
```

## DHCPクライアントの確認
```
C:\>ipconfig /all

FastEthernet0 Connection:(default port)

   Connection-specific DNS Suffix..: example.com
   Physical Address................: 0001.97B3.5035
   Link-local IPv6 Address.........: FE80::201:97FF:FEB3:5035
   IP Address......................: 172.16.10.1
   Subnet Mask.....................: 255.255.255.0
   Default Gateway.................: 172.16.10.254
   DNS Servers.....................: 64.0.0.1
   DHCP Servers....................: 172.16.10.254
   DHCPv6 Client DUID..............: 00-01-00-01-61-6A-60-E4-00-01-97-B3-50-35
```

## DHCPリレーエージェント（Relay agent）の設定
- 機能：DHCPサービスを複数のブロードキャストドメインで機能する。

```
Router(config)#interface GigabitEthernet 0/0/1
Router(config-if)#ip helper-address 172.16.10.254
Router(config-if)#ip address 172.16.9.254 255.255.255.0
```

# NATとPATの概要
NAT: Network Address Translation　IPアドレス相互に変換する技術
## NAT用語
- 内部ローカルアドレス：内部ホストのIPアドレス
- 内部グローバルアドレス：外部ホストから見た、内部ホストのアドレス。通常はISPから割り当てられたインターネット接続に使用するグローバルIPアドレス
- 外部ローカルアドレス：内部ホストが宛先として指定する、外部ホストのIPアドレス
- 外部グローバルアドレス：外部ホストに実際に割り当てられたIPアドレス

## NATのアドレス変換の種類
- スタティックNAT（1対1）
- ダイナミックNAT（多対多）：ダイナミックNAT、内部グローバルアドレスをあらかじめNATプールに登録し、通信が開始されたときにプール内のアドレスを使用して内部ローカルアドレスを動的に変換する方式です。

## PAT
NAT: Port Address Translation

# NATの設定
## スタティックNATの設定

![トポロジ](/uploads/postimgs/2019072203.png)

```
Router(config)#interface GigabitEthernet 0/0/0
Router(config-if)#ip nat inside
Router(config-if)#interface GigabitEthernet 0/0/1
Router(config-if)#ip nat outside
Router(config-if)#exit
Router(config)#ip nat inside source static 10.1.1.1 1.1.1.1
```

## ダイナミックNATの設定
- 手順：
  - 内部・外部ネットワークの定義
  - NATプールの作成
  - 変換対象となる内部ローカルアドレスをACLで指定
  - ダイナミックNATの定義

![トポロジ](/uploads/postimgs/2019072204.png)

```
Router(config)#interface GigabitEthernet 0/0/0
Router(config-if)#ip nat inside
Router(config-if)#ip address 10.1.1.254 255.255.255.0
Router(config-if)#no shutdown

Router(config-if)#interface GigabitEthernet 0/0/1
Router(config-if)#ip nat outside
Router(config-if)#ip address 1.1.1.5 255.255.255.248
Router(config-if)#no shutdown

Router(config)#ip nat pool DNAT 1.1.1.1 1.1.1.4 netmask 255.255.255.248 #NATプールの作成
Router(config)#access-list 1 permit 10.1.1.0 0.0.0.255 #ACL作成
Router(config)#ip nat inside source list 1 pool DNAT #ダイナミックNATの定義
```

# NATの設定
## プールを使用したPATの設定
- 内部外部定義

```
Router(config-if)#ip nat inside
Router(config-if)#ip nat outside
Router(config)#ip nat inside source list <ACL番号> interface <インターフェースタイプ> overload
```

- 