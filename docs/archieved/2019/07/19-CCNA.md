---
title: CCNA試験のまとめノート 10 IPv4アクセスリスト
date: 2019-07-19 11:43
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

IPv4アクセスリストの概要、ワイルドカードマスク、番号付き標準ACL、名前付き標準ACL、ACLの検証、ACLのトラブルシューティング
<!-- more -->
# IPv4アクセスリストの概要
## ACLとは
- 定義：Access Control List。トラフィックを識別し、制御するため条件を記述したリスト
- 役割：特定のホストがネットワーク上のどのノードにアクセスできるかを制御したり、トラフィックの種類ごとに伝送を許可するか拒否するかを指定したりできる。セキュリティ確保できる。
## 種類
- 標準ACL：送信元IPアドレスだけを指定
- 拡張ACL：送信元IP、宛先IP、プロトコル、送信元ポート、宛先ポートを許可または拒否を指定
## ACLの識別方法
- 番号付きACL：番号を指定して、作成したACL
  - IPv4標準：1～99, 1300～1999
  - IPv4拡張：100～199、2000～2699
  - AppleTalk：600～699
  - IPX標準：800～899
  - IPX拡張：900～999
- 名前付きACL：任意の名前が付けられる。FTP-Filterなど
## 適用
- インターフェースの着信と発信の各方向に１つずつ適用できる
- １つのACLを複数のインターフェースに適用れきる。
## インバウンドACLとアウトバウンドACL
- Inbound:ルータはパケットを受信する時。ACL照合＝＞ルーティングテーブル参照
- Outbound:ルータは発信インターフェイスを決定すると、そのインターフェイスに適用されたアウトバウンドACL。ルーティングテーブル参照＝＞ACL照合
## ACL設定の注意事項
- ステートメントの順番：各ステートメント（条件文）はシーケンスバン番号が指定できる。降順に行う。デフォルト10×i。ステートメントの条件と一致したパケットはその時点で許可または拒否の処理が行われ、以降のステートメントは無視される。
- 「暗黙のDeny」：末尾（まつび）に、パケットに拒否するステートメントが存在する。Permit行が最低1行は必要。
- 適用インターフェイス
- ACLの配置：送信元と受信元両方配置すること。
  - 標準ACL＝＞パケットの宛先近くに配置
  - 拡張ACL＝＞パケットの送信元近くに配置（推奨）
- フィルタリングの対象パケット：ICMPのパケットを対象するなど。

# ワイルドカードマスク
- ACL条件文の中でIPアドレスを指定する場合、ワイルドカードマスクを使用する。
## ワイルドカードマスク
- ステップ
  - ３２ビットの値
  - ８ビットずつドット（.）で区切って１０進数で表記
  - 「0」を指定したら、対応するビット一致（チェック）；「1」なら無視（チェックしない）
## ワイルドカードマスクによるIPアドレスの指定
- ホストアドレスの指定
  - 0.0.0.0:　すべてチェックをする。省略：host
  - 255.255.255.255: すべて無視をする。省略：any

# 番号付き標準ACL
## 作成
```
(config)#access-list ACL番号 {permit | deny | remark} 送信元IP ワイルドカードマスク（省略0.0.0.0） log一致する場合ログメッセージを表示
```

![トポロジ](/uploads/postimgs/2019072201.png)

```
RT1(config)#access-list 1 deny 10.1.1.1 0.0.0.0
RT1(config)#access-list 1 deny host 10.1.1.1

RT1(config)#access-list 1 deny 10.2.2.1 0.0.0.0
RT1(config)#access-list 1 deny host 10.2.2.1


C:\>ping 10.2.2.1

Pinging 10.2.2.1 with 32 bytes of data:

Request timed out.

Ping statistics for 10.2.2.1:
    Packets: Sent = 2, Received = 0, Lost = 2 (100% loss),


RT1(config)#access-list 1 permit 0.0.0.0 255.255.255.255
RT1(config)#access-list 1 permit any

RT1#show access-lists 
Standard IP access list 1
    10 deny host 10.1.1.1
    20 deny host 10.2.2.1
    30 permit any

RT1(config)#no access-list 1 deny 10.2.2.1 0.0.0.0
RT1(config)#no access-list 1 deny host 10.1.1.1

```

## ACLのインターフェイスの適用
```
(config-if)#ip access-group <acl-number> {in | out}
```

# 名前付き標準ACL
## 名前付きACLの作成
```
(config)#ip access-list standard <acl-name>
(config-std-nacl)#シーケンス番号（オプション） {permit | deny | remark} <source> <wildcard> [log]
```

## 名前付きACLの適用
```
(config-if)#ip access-group <acl-name> {in | out}
```

# ACLの検証
##  コマンド
- show access-lists: ACL条件の確認
- show ip interface：ACL適用の確認
- show running-config: ACL条件の確認、ACL適用の確認

## ACLカウント数のクリア
```
#clear access-list counter [<acl-number> | <acl_name>]
```

