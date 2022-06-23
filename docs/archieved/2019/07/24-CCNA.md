---
title: CCNA試験のまとめノート 15 IPv6の導入
date: 2019-07-23 13:28
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

IPv6の概念、IPv6アドレス、IPv6の主要プロトコル、IPv6アドレスの設定と検証、IPv6ルーティング
<!-- more -->

# IPv6の概念
## IPv4の枯渇
- 概要：約43億
- IPv4枯渇回避の技術
  - プライベートアドレス（RFC1918）
  - CIDR（RFC4632）：Classless Inter-Domain Routing、クラスを使わないIPアドレスの割り当てと、経路情報の集成を行う技術。
  - VLSM（FRC950）：可変長サブネットマスク
  - NAT/PAT（RFC2663）：１つのグローバルアドレスを複数の端末で共有する
  - DHCP（RFC2131）

## IPv6アドレスの管理組織
- IANAは世界中のIPアドレスを管理するため、５つの地域にRIRと呼ばれる管理組織を設けた。

## IPv6の特徴
膨大なアドレス数、効率的な経路集約、ヘッダの簡素化、自動設定、ブロードキャスト廃止、IPモビリティ向上、セキュリティ機能の標準化、相互運用と移行技術

## ヘッダフォーマット
- フィールドを簡素化
- 40バイト固定長
- チェックサムのフィールド削除
- フローラベルフィールドを追加
- オプションは可変長の拡張ヘッダで対応
- ルータでのフラグメント処理を禁止

## IPv4からIPv6への移行
- デュアルスタック（Dual stack、双堆栈）：1台の機器でIPv4とIPv6の両方のアドレスを設定し、同じIPネットワーク間で相互に通信する移行技術
- トンネリング：IPv6ネットワーク同士をIPv4ネットワーク経由で、もしくはIPv4ネットワーク同士をIPv6ネットワーク経由で通信させる技術。
- トランスレータ：IPv4ホストとIPv6ホスト間で通信するために、トランスレータでIPv4パケットとIPv6パケットを相互に変換する移行技術。NAT-PT (Network Address Translation - Protocol Translation)がある。

# IPv6アドレス
## IPv6のアドレス表記
- 128ビットの二進数を16ビットずつ区切って、8個のフィールドに分けて、16進数で表記
- 各フィールドの左からの0は省略可能
- 0のフィールドが連続する場合は「::」で表現可能、ただし、1回だけ使用可能
  
## IPv6のプレフィックス
IPv4のCIDR表記と同じ方法で「/」を用いてサブネットマスクのプレフィックスを表現する
例：2001:db8:1234:1::1:1/64

## IPv6 アドレスの種類
- ユニキャストアドレス（1対１通信）
- マルチキャストアドレス（1対多の通信）
- エニーキャストアドレス（Anycast address、1対多の1と通信、最も近いノードと通信）
- ブロードキャストは廃止された

## アドレススコープ
- グローバル：有効範囲に制限はなく、通常はISPから取得するアドレス。インターネットを含め全IPv6ネットワークで利用できる
- ユニークローカル：組織内でのみ有効なユニキャストアドレス。IPv6が多いため、内部のすべてのホストにグローバルアドレスを割り当ててもできる。
- リンクローカル：特定リンクでのみ有効なアドレス。ルータを超えて伝送されない。

## ユニキャストアドレス
- 構成：プレフィックス部（サブネットプレフィックス部）とインターフェイス部（ホスト部）で構成される。
  - グローバルユニキャストアドレス
    - 定義：2000::/3で始まるインターネット上で通信が可能なアドレス
  - ユニークローカルユニキャストアドレス（FC00::/7のアドレスブロック）
    - 定義：FC00::/7またはFC00::/8またはFD00::/8のアドレスブロック。上位８ビットは「1111 1101」で、次の40ビットのグローバルIDは組織内で任意に設定が可能。
    - 特徴：インターネット上で通信できないアドレス
  - リンクローカルユニキャストアドレス
    - 定義：FE80::/10から始まる
    - 役割：ローカルネットワーク内でのみ有効なアドレス；ルータを超えて通信できない；

## 特殊なIPv6アドレス
- ループバックアドレス　::1
- 未指定アドレス（アドレスがない） ::
- 文章用のIPv6アドレス（技術文書に使用されるIPv6アドレス）、2001:db8::/32

## インターフェイスID
- EUI-64 (64bit Extended Unique Identifier)
  - MACアドレスを24ビットと24ビットに分割し、その間に「FFFE」を挿入。64ビットになる。
  - U/L(universal/local)ビットと呼ばれる先頭から7番目のビットを反転する

例：MACアドレス「00-AB-70-12-34-56」からIPv6に変換の場合：
```
00-AB-70-12-34-56
FFFEを挿入:
00-AB-70-FF-FE-12-34-56
第7ビット目反転:
02-AB-70-FF-FE-12-34-56

```

## マルチキャストアドレス（FF00::/8で始まる）
- 役割：マルチキャストアドレスに対して通信されたパケットは同時にグループの複数の受信者に効率よく伝送できる。
- フォマード：[1111 1111 フラグ(flag) スコープ(scope)][112ビットのグループID]
  - スコープ：到達範囲
  - フラグ：マルチキャストのタイプを指定

## エニーキャストアドレス（1対多の1と通信）
- 定義：最も近いノードと通信
- 役割：インターネット上に設置するサーバの分散配置；ユーザは再寄りのDNSサーバにアクセスできるようになる。

## IPv6の経路集約
略

# IPv6の主要プロトコル
## ICMPv6
- Internet Control Message Protocol for IPv6
- 特徴：直前にあるヘッダ内のネクストフィールド「58」で識別される
- エラーメッセージ
  - 1: Destination Unreachable
  - 2: Packet Too Big
  - 3: Time Exceeded
  - 4: Parameter Problem
- 基本情報
  - 128: Echo Request エコー要求
  - 129: Echo Reply エコー応答

## 近隣探索（ND: Neighbor Discovery）
- プロトコル：ICMPを利用して近隣探索をする
- 機能：MACアドレス解決やルータ検出、アドレス重複検出の機能を提供。IPv4ネットワークにおけるARPと同様の役割を果たす。
  - RS/RA: 
    - アドレス自動設定：DHCPサーバなしに、ホストにIPv6アドレスを自動的に割り当てる
    - プレフィックス検出：接続されたリンクのプレフィックスを検出し、直接通信可能なアドレス範囲とルータ経由で通信可能な範囲を識別
    - ネクストホップ決定：パケットの伝送先を決定する。
    - ルータ検出：ノードが同一リンク上で接続可能なルータを検出
    - パラメータ検出：リンクMTUやホップリミットの値を検出する。
  - NS/NA:
    - アドレス解決：リンク層アドレスとIPv6アドレスを関連付ける
    - 重複アドレス検出（DAD）：設定したアドレスが他のノードと重複していないかを検出
    - 近隣ノードの到達不能検出
  - Redirect：最も効率のよい伝送先を通知する



# IPv6アドレスの設定と検証
## IPv6アドレスの手動設定
- IPv6では、1つのインターフェイスに複数のIPv6アドレスを割り当てることができる。「eui-64を付加すると、インターフェイスIDはEUI-64で自動生成される。」

![トポロジ](/uploads/postimgs/2019072302.png)

```
RT1(config)#interface GigabitEthernet 0/0/0
RT1(config-if)#ipv6 address 2001:db8:1:1::1/64 <---IPv6アドレス設定、インターフェイスIDは1
RT1(config-if)#ipv6 address 2001:db8:1:1::/64 eui-64 <---インターフェイスIDをEUI-64で生成
RT1(config-if)#no shutdown

RT1(config-if)#
%LINK-5-CHANGED: Interface GigabitEthernet0/0/0, changed state to up

%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0, changed state to up

RT1(config-if)#exit

RT1(config)#interface GigabitEthernet 0/0/1
RT1(config-if)#ipv6 enable
RT1(config-if)#ipv6 address 2001:db8:2:2::1/64
RT1(config-if)#no shutdown

RT1(config-if)#
%LINK-5-CHANGED: Interface GigabitEthernet0/0/1, changed state to up

%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/1, changed state to up

RT1#show running-config | begin GigabitEthernet
interface GigabitEthernet0/0/0
 no ip address
 duplex auto
 speed auto
 ipv6 address 2001:DB8:1:1::1/64
 ipv6 address 2001:DB8:1:1::/64 eui-64
 ipv6 enable
!
interface GigabitEthernet0/0/1
 no ip address
 duplex auto
 speed auto
 ipv6 address 2001:DB8:2:2::1/64
 ipv6 enable
!
```

IPv6インターフェイスの確認
```
RT1#show ipv6 interface <--IPv6が有効なインターフェイスの情報を表示
GigabitEthernet0/0/0 is up, line protocol is up  <--Fa0インターフェイスの状態
  IPv6 is enabled, link-local address is FE80::20A:F3FF:FE3C:A101 <--リンクローカルアドレス
  No Virtual link-local address(es):
  Global unicast address(es):　<--グローバルユニキャストアドレス
    2001:DB8:1:1::1, subnet is 2001:DB8:1:1::/64  <--インターフェイスID「::1」
    2001:DB8:1:1:20A:F3FF:FE3C:A101, subnet is 2001:DB8:1:1::/64 [EUI]
  Joined group address(es):  <--インターフェイスが属するマルチキャストアドレス
    FF02::1  <--全ノード宛マルチキャストアドレス
    FF02::1:FF00:1　<--要請ノードマルチキャストアドレス
    FF02::1:FF3C:A101　<--要請ノードマルチキャストアドレス
  MTU is 1500 bytes
  ICMP error messages limited to one every 100 milliseconds
  ICMP redirects are enabled
  ICMP unreachables are sent
  ND DAD is enabled, number of DAD attempts: 1　<--近隣探索情報
  ND reachable time is 30000 milliseconds
GigabitEthernet0/0/1 is up, line protocol is up　<--Fa1インターフェイスの状態
  IPv6 is enabled, link-local address is FE80::20A:F3FF:FE3C:A102　<--リンクローカルアドレス
  No Virtual link-local address(es):
  Global unicast address(es):
    2001:DB8:2:2::1, subnet is 2001:DB8:2:2::/64
  Joined group address(es):
    FF02::1
    FF02::1:FF00:1
    FF02::1:FF3C:A102
  MTU is 1500 bytes
  ICMP error messages limited to one every 100 milliseconds
  ICMP redirects are enabled
  ICMP unreachables are sent
  ND DAD is enabled, number of DAD attempts: 1
  ND reachable time is 30000 milliseconds
```