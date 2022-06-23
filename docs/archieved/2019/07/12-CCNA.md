---
title: CCNA試験のまとめノート 03 TCP/IP
date: 2019-07-12 09:33:00
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---
TCP/IPプロトコルスタック、インターネット層、トランスポート層、アプリケーション層プロトコル、DHCP、DNS、HTTPとHTTPS、FTPとTFTP、SMTPとPOP、TelnetとSSH
<!-- more -->

# TCP/IPプロトコルスタック
## TCP/IPプロトコルスタック(TCP/IP协议栈)
- TCP/IPはネットワークで必要な機能を４つの階層に分割して構成している。
  - アプリケーション層：HTTP、SMTP、POP3、FTP、TFTP、DNS、DHCP
  - トランスポート層：TCP、UDP
  - インターネット層：IP、ICMP、ARP
  - リンク層：Ethernet、HDLC、PPP

## TCP/IPのカプセルかと非カプセル化
- カプセル化の例
  - アプリケーション層：　　　　　　　HTTPデータ
  - トランスポート層：　　　　　　TCP＋HTTPデータ
  - インターネット層：　　　　IP＋TCP＋HTTPデータ
  - リンク層：　　　　　Ether＋IP＋TCP＋HTTPデータ＋FCS

- TCP/IPのPDU
  - TCP：TCPセグメント
  - UDP：UDPデータグラム
  - IP：IPデータグラム
  - Ethernet：フレーム

- RFC(Request for Comments)：インターネットに関連する技術仕様を公開している文章

# インターネット層
## IP
- 特徴：
  - コネクションレス型(无连接协议)プロトコル：データ確認なし
  - ベストエフォート型(尽力型协议)の配信：パケット配送の保証はしないが最善（さいぜん）の努力はする
  - データ回復機能なし：破棄されたパケットの再送信を要求するエラー回復機能はない。
  - 階層型アドレッシング(Addressing)：IPアドレスの上位の桁はネットワークを識別し、下位の桁はネットワークに接続されたノードを識別する。
  - IPv4とIPv6：略
## IPv4ヘッダ
- 構造
  - バージョン（4ビット）：IPv4 or IPv6
  - ヘッダ長（4ビット）：ｎ×32ビット
  - 最大長（16ビット）：パケット全体（IPヘッダ＋データ）の長さをオクテット（ｎ×8ビット）単位で表示
  - 識別子（16ビット）：伝送データがリンクで許容されるMTUを超え、フラグメンテーションによって複数のパケットに分割されたパケットに割り当てられる識別子。分割された複数パケットに割り当てられ、復元に使用
    - MTU（Maximum Transmission Unit, 最大伝送ユニット）：一度に伝送するデータ量の最大値。イーサネットの場合１５００バイト
    - フラグメンテーション（fragmentation, 断片化、だんぺんか）：データを分割して送り、受信側で再構成する
  - フラグ（３ビット）：第１ビット未使用、第２ビットではフラグメント処理を許可するかどうかを指定。第３ビットは途中のパケットか最後のパケットかを表す
  - 生存時間（８ビット、TTL、Time To Live）：パケットの生存時間を示すが、実際には「パケットが通過できるルータの数」を設定する。０～２５５に設定し、１ずつ減らして、０になるとパケットを破棄。
  - プロトコル（８ビット）：上位プロトコル。ICMP：１；TCP：６；UDP：１７；
  - ヘッダチェックサム（１６ビット、Header checksum、报头校验和）：ヘッダだけチェック。（データのチェックは上位層）
  - 送信元アドレス（３２ビット）
  - 宛先アドレス（３２ビット）
  - オプション（可変長）：通常使わず、テストやデバッグ場合だけ
  - パティング（可変長，Padding，填充项）：IPヘッダが３２ビットの倍数になるよう調整するために０を挿入
  
## ARP
- Address Resolution Protocol (地址转换协议)
- 役割：IPアドレスからMACアドレスを取得
- 動作：パケット送信しようとする場合
    1. ARPテーブル参照
       1. IPアドレスとMACアドレスの一対一対応
    2. APRテーブルにない場合、パケットをバッファに保存、ARPリクエスト（要求）送信（送信元から）
       1. 全員宛（FF-FF-FF-FF-FF-FF）にブロードキャストに送信
    3. APRリプライ（応答）送信（宛先側から）
       1. APRリクエストを受信
       2. 自分に対するARP要求だかを判断
       3. 送信元へ自分のIPアドレスを応答
       4. 送信元のIPとMACを自身のAPRテーブルに登録
    4. APRテーブル更新（送信元側が）
       1. APRテーブルを更新
       2. バッファに保存したパケットを送信
- 別ネットワークの相手と通信する場合のARP
  - やりかた：デフォルトゲートウェイのMACに送信

|                | L2                     | L3       |
|----------------|------------------------|----------|
| 送信元アドレス | 送信元MAC              | 送信元IP |
| 宛先アドレス   | ルータのMAC（ポートA） | 宛先IP   |
| 　　　　　　   | 　　　　　　　　　　　 | 　　　   |
| 送信元アドレス | ルータのMAC（ポートB） | 送信元IP |
| 宛先アドレス   | 宛先MAC　　　　　　　  | 宛先IP   |

- ARPタイブルの表示

```bash
C:\> arp -a
インターフェイス: XX.XX.XX.XX --- 0x6
  インターネット アドレス 物理アドレス           種類
  XX.XX.XX.XX          xx-xx-xx-xx-xx-xx     動的
  [IPアドレス]　  <-> 　[MACアドレス]　　　　[Dynamic/Static]

```

- 動的：自動的に学習したエントリ(entry,登记)。一定時間使用しないと自動消去
- 静的：手で登録したエントリ。永続的に保存される。

- ARPパケットフォーマット
  - 参考資料：[ARPパケットフォーマット](http://www.n-study.com/network/arpheader.htm)

## ICMP (Internet Control Message Protocol)
- 役割：IPプロトコルのエラー通知や制御メッセージを伝送するためのプロトコル。
- フォーマット：
  - IPヘッダ
  - ICMPメッセージ
    - タイプ：８ビット
    - コード：８ビット
    - チェックサム：１６ビット
    - データ：タイプごとに可変長
- エラー通知（Error）一覧 [参考资料](http://www.asahi-net.or.jp/~aa4t-nngk/ipttut/output/icmptypes.html)

| TYPE  | CODE | 意味                                                                                                     | 問合せ | エラー | 参照先        |
|-------|------|----------------------------------------------------------------------------------------------------------|--------|--------|---------------|
| 0     | 0    | Echo Reply (エコー応答)                                                                                  | x      | 　     | RFC792        |
| 3     | 0    | Network   Unreachable (ネットワーク到達不能)                                                             | 　     | x      | RFC792        |
| 3     | 1    | Host Unreachable   (ホスト到達不能)                                                                      | 　     | x      | RFC792        |
| 3     | 2    | Protocol   Unreachable (プロトコル到達不能)                                                              | 　     | x      | RFC792        |
| 3     | 3    | Port Unreachable   (ポート到達不能)                                                                      | 　     | x      | RFC792        |
| 3     | 4    | Fragmentation   needed but no frag. bit set (フラグメント必要だがフラグメント禁止ビットあり)             | 　     | x      | RFC792        |
| 3     | 5    | Source routing   failed (ソースルーティング失敗)                                                         | 　     | x      | RFC792        |
| 3     | 6    | Destination   network unknown (宛先ネットワーク発見できず)                                               | 　     | x      | RFC792        |
| 3     | 7    | Destination host   unknown (宛先ホスト発見できず)                                                        | 　     | x      | RFC792        |
| 3     | 8    | Source host   isolated (送信元ホストへのルートなし) (廃)                                                 | 　     | x      | RFC792        |
| 3     | 9    | Destination   network administratively prohibited (宛先ネットワークは設定によりアクセス禁止)             | 　     | x      | RFC792        |
| 3     | 10   | Destination host   administratively prohibited (宛先ホストは設定によりアクセス禁止)                      | 　     | x      | RFC792        |
| 3     | 11   | Network   unreachable for TOS (TOS種別によりネットワーク到達不能)                                        | 　     | x      | RFC792        |
| 3     | 12   | Host unreachable   for TOS (TOS種別によりホスト到達不能)                                                 | 　     | x      | RFC792        |
| 3     | 13   | Communication   administratively prohibited by filtering (フィルタリング設定により通信禁止)              | 　     | x      | RFC1812       |
| 3     | 14   | Host precedence   violation (ホスト優先順位侵害)                                                         | 　     | x      | RFC1812       |
| 3     | 15   | Precedence cutoff   in effect (優先順位により遮断発動)                                                   | 　     | x      | RFC1812       |
| 4     | 0    | Source quench (輻輳発生による発信抑制)                                                                   | 　     | 　     | RFC792        |
| 5     | 0    | Redirect for   network (指定ネットワークへのリダイレクト要求)                                            | 　     | 　     | RFC792        |
| 5     | 1    | Redirect for host   (指定ホストへのリダイレクト要求)                                                     | 　     | 　     | 　            |
| 5     | 2    | Redirect for TOS   and network (TOSとネットワークのリダイレクト要求)                                     | 　     | 　     | RFC792        |
| 5     | 3    | Redirect for TOS   and host (TOSとホストのリダイレクト要求)                                              | 　     | 　     | RFC792        |
| 8     | 0    | Echo request(エコー要求)                                                                                 | x      | 　     | RFC792        |
| 9     | 0    | Router   advertisement - Normal router advertisement (ルータ広告 - 通常通知)                             | 　     | 　     | RFC1256       |
| 9     | 16   | Router   advertisement - Does not route common traffic (ルータ広告 - 通常トラフィックはルーティング不可) | 　     | 　     | RFC2002       |
| 10    | 0    | Route selection (ルート選択)                                                                             | 　     | 　     | RFC1256       |
| 11    | 0    | TTL equals 0   during transit (搬送中にTTLが0に)                                                         | 　     | x      | RFC792        |
| 11    | 1    | TTL equals 0   during reassembly (再構成時の欠損フラグメント待機中に時間超過)                            | 　     | x      | RFC792        |
| 12    | 0    | IP header bad   (catchall error) (IPヘッダ異常) (あらゆるエラーに共通)                                   | 　     | x      | RFC792        |
| 12    | 1    | Required options   missing (必要なオプションが欠如)                                                      | 　     | x      | RFC1108       |
| 12    | 2    | IP Header bad   length (IPヘッダ長の異常)                                                                | 　     | x      | RFC792        |
| 13    | 0    | Timestamp request   (obsolete) (タイムスタンプ要求) (廃)                                                 | x      | 　     | RFC792        |
| 14    | 　   | Timestamp reply   (obsolete) (タイムスタンプ応答) (廃)                                                   | x      | 　     | RFC792        |
| 15    | 0    | Information   request (obsolete) (情報要求) (廃)                                                         | x      | 　     | RFC792        |
| 16    | 0    | Information reply   (obsolete) (情報応答) (廃)                                                           | x      | 　     | RFC792        |
| 17    | 0    | Address mask   request (ネットマスク通知要求)                                                            | x      | 　     | RFC950        |
| 18    | 0    | Address mask   reply (ネットマスク通知応答)                                                              | x      | 　     | RFC950        |
| 20-29 | 　   | Reserved for   robustness experiment (信頼性試験のための予約域)                                          | 　     | 　     | Zaw-Sing Su   |
| 30    | 0    | Traceroute                                                                                               | x      | 　     | RFC1393       |
| 31    | 0    | Datagram   Conversion Error (データグラム変換エラー)                                                     | 　     | x      | RFC1475       |
| 32    | 0    | Mobile Host   Redirect (移動体ホストのリダイレクト)                                                      | 　     | 　     | David Johnson |
| 33    | 0    | IPv6   Where-Are-You (IPv6位置確認要求)                                                                  | x      | 　     | Bill Simpson  |
| 34    | 0    | IPv6 I-Am-Here   (IPv6位置確認応答)                                                                      | x      | 　     | Bill Simpson  |
| 35    | 0    | Mobile   Registration Request (移動体登録要求)                                                           | x      | 　     | Bill Simpson  |
| 36    | 0    | Mobile   Registration Reply (移動体登録応答)                                                             | x      | 　     | Bill Simpson  |
| 39    | 0    | SKIP                                                                                                     | 　     | 　     | Tom Markson   |
| 40    | 0    | Photuris                                                                                                 | 　     | 　     | RFC2521       |

- ping
  - 役割：特定のIPができるかどうか
  - やりかた：Type8を送信し、Type0をエコー応答
  - コマンド

```
C:\>ping google.com

google.com [172.217.31.142]に ping を送信しています 32 バイトのデータ:
172.217.31.142 からの応答: バイト数 =32 時間 =Xms TTL=XX
172.217.31.142 からの応答: バイト数 =32 時間 =Xms TTL=XX
172.217.31.142 からの応答: バイト数 =32 時間 =Xms TTL=XX
172.217.31.142 からの応答: バイト数 =32 時間 =Xms TTL=XX

172.217.31.142 の ping 統計:
    パケット数: 送信 = 4、受信 = 4、損失 = 0 (0% の損失)、
ラウンド トリップの概算時間 (ミリ秒):
    最小 = Xms、最大 = Xms、平均 = Xms
```

- traceroute
  - 役割：送信元から宛先までの経路情報を取得するためのツール

```
C:\>tracert google.co.jp
```

## トランスポート層
- 機能：TCP（Transmission Control Protocal、传输控制协议）とUDP（User Datagram Protocol、用户数据包协议）
- セッションの多様化：１つのIPアドレスを持つコンピューターで複数のアプリケーションを同時に使用できる
- ポート番号：アプリケーションを指定するため
  - ０～１０２３：ウェルノウンポート；プロトコル別に予約され、主にサーバ使用
  - １０２４～４９１５１：登録済ポート；IANAに登録済のポート
  - ４９１５２～６５５３５：ダイナミックポート。自由に使用できる番号。クライアントがよく利用。
- 体表的なウェルノウンポート
  - 20:FTP-Data:TCP
  - 21:FTP:TCP
  - 22:SSH:TCP
  - 23:Telnet:TCP
  - 25:SMTP:TCP
  - 53:DNS:UDP,TCP
  - 67:DHCP(Bootstrap Protocal Server):UDP
  - 68:DHCP(Bootstrap Protocal Client):UDP
  - 69:TFTP:UDP
  - 80:HTTP:TCP
  - 110:POP3:TCP
  - 123:NTP:UDP
  - 161:SNMP:UDP
  - 162:SNMP(TRAPS):UDP
  - 443:HTTPS:TCP
  - 520:RIP:UDP

- TCP（Transmission Control Protocol）
  - コネクション型：通信相手のコネクションを確立
  - セグメンテーション：アプリケーション層からのデータをMTUに適したサイズに分割
  - TCPヘッダ
    - 送信元ポート（１６ビット）
    - 宛先ポート（１６ビット）
    - シーケンス番号（３２ビット）：断片化されたデータの番号
    - 確認応答番号（３２ビット）：データを受信したことを通知し、次に受信したいデータのシーケンスを通知
    - データオフセット（４ビット）：TCPヘッダの末尾（まつび）を認識し、データ部分の位置を判断
    - 予約（６ビット）：未使用、通常は０
    - 制御ビット（６ビット）：
      - URG (Urgent Point): 緊急に処理すべきデータを含んでいる。緊急ポインタフィールドと一緒に使用
      - ACK (Acknowledgement)：確認応答。SYN以外に常に１
      - PSH (Push)：すぐにアプリケーションに渡す
      - RST (Reset)：コネクションを強制切断
      - SYN (Synchronize)：コネクション確立を要求
      - FIN (Finish)：コネクション終了を要求
    - ウィンドル（１６ビット）：受信側で受信可能なバッファの沖さを通知。単位オクテット（octet、8位组）
    - チェックサム（１６ビット）：TCPヘッダとデータ部のエラーチェック
    - 緊急ポインタ（１６ビット）：URGを１に設定する必要
    - オプション（可変長）：必要なら
    - パティング（可変長）；ヘッダが３２ビットの整数倍になるように０を挿入

- コネクションの確立と終了
  - 確立：３ウェイハンドシェイク
    - 1: Aから送信、SYN=1, ACK=0, 初期シーケンス番号=ランダムな値, 確認応答番号=0
    - 2: Bから返事、SYN=1, ACK=1, 初期シーケンス番号=ランダムな値, 確認応答番号=確認応答番号+1
    - 3: Aから返事、SYN=0, ACK=1, シーケンス番号=初期値+1, 確認応答番号=確認応答番号+1
  - 送信：
    - 4: Aから送信、ACK=1, シーケンス番号=シーケンス番号, 確認応答番号=確認応答番号
    - 5: Bから送信、ACK=1, シーケンス番号=確認応答番号, 確認応答番号=シーケンス番号+データサイズ
  - 終了：4回会話
    - 6: Bから送信、ACK=1, FIN=1, シーケンス番号=シーケンス番号+送信データサーズ, 確認応答番号=確認応答番号と同じ
    - 7: Aから返事、ACK=1, FIN=0, シーケンス番号=シーケンス番号, 確認応答番号=確認応答番号+1
    - 8: Bから返事、ACK=1, FIN=1, シーケンス番号=シーケンス番号, 確認応答番号=確認応答番号
    - 9: Aから返事、ACK=1, FIN=0, シーケンス番号=シーケンス番号, 確認応答番号=確認応答番号+1

- 順序制御と確認応答
  - MMS（Maximum Segment Size）:１つのTCPセグメントで運ぶデータ量の最大値
  - 順序制御：受信側でシーケンス番号を使って正しい順に再構成
  - 確認応答：受信側から確認応答をする。
- 再送制御
  - 条件：TCPタイムーを設定した。
  - 場合：一定の時間内に確認応答が来ない。
  - 処理：データを再送信する
- ウィンドウ制御（フロー制御）
  - ウィンドウサイズ：受信したデータを一時的に溜めておくバッファ領域、この大きさは
  - ウィンドウ制御：ACKを待たず、TCPセグメントを連続して送信する。受信側が受信したら、バッファに保管して上位層のアプリケーションに渡して、バッファからデータを削除して次のセグメントを処理する。
  - スライディングウィンドウ：受信確認したら、ウィンドウを順々に次のデータにスライドしながら送信する。
- 信頼性保証技術
  - 順序制御（シーケンス番号）、エラー制御（確認応答）、再送制御、ウィンドウ制御（フロー制御）、輻輳制御

## UDP (User Datagram Protocol)
- 特徴：コネクションレス型のプロトコル、確認応答なし、順序制御なし、フロー制御なし、ポート番号利用だけ、TCPデータの単位がセグメント、UDPデータの単位はデータグラムと呼ぶ。
- UDPヘッダ
  - 送信元ポート（１６ビット）
  - 宛先ポート（１６ビット）
  - 長さ（１６ビット）：オクテット単位でUDPヘッダとデータ部の長さを合わせた値を表す
  - チェックサム（１６ビット）、UDPヘッダとデータ部のエラーチェック
- 用途：リアルタイム通信、高速性を要求、数百バイトほど

## TCPとUDPの比較

|                | TCP                                                                                                                    | UDP                                                            |
|----------------|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| タイプ         | コネクション型                                                                                                         | コネクションレス型                                             |
| 信頼性         | 高信頼性（あり）                                                                                                       | ベストエフォート（なし）                                       |
| シーケンス番号 | あり                                                                                                                   | なし                                                           |
| オーバーヘッド | 大きい                                                                                                                 | 小さい                                                         |
| 特徴           | ・同期化された通信 ・コネクション確立と終了 ・シーケンス管理、確認応答 ・エラー回復機能 ・ウィンドウ制御（フロー制御） | ・転送効率がよい ・データ回復機能なし                          |
| 主な用途       | ・電子メール ・ファイル共有 ・Webページ閲覧 ・ダウンロード                                                             | ・音声ストリーミング ・ビデオストリーミング ・少量データの伝送 |

## アプリケーション層プロトコル
- アプリケーション層プロトコル
  - DHCP（Dynamic Host Configuration Protocol）
    - 67, 68/UDP
  - DNS (Domain Name System)
    - 53/UDP,TCP
  - HTTP (Hyper Text Transfer Protocol)
    - 80/TCP
  - HTTPS (Hyper Text Transfer Protocol Secure)
    - 443/TCP
  - FTP (File Transfer Protocol)
    - 20, 21/TCP
  - TFTP (Trivial File Transfer Protocol)
    - 69/UDP
  - SMTP (Simple Mail Transfer Protocol)
    - 25/TCP
  - POP3 (Post Office Protocol Version 3)
    - 110/TCP
  - Telnet (Telecommunication network)
    - 23/TCP
  - SHH (Secure Shell)
    - 22/TCP
  - SNMP (Simple Network Management Protocol)
    - 161,162/UDP
  - NTP (Network Time Protocol)
    - 123/UDP

# DHCP
## 概要
- 役割：IPアドレス自動取得
- 特徴：UDP、ポート番号67（サーバ用）、68（クライアント用）
## DHCPサーバ
- 役割：設定情報管理、DHCPクライアントに情報を配信する
- 配布可能情報：IPアドレス、サブネットマスク、リースの有効期限、デフォルトゲートウェイ、ドメイン名、DNSサーバのIPアドレス、NTPサーバのIPアドレスなど
## DHCPクライアント
- 役割：IPアドレスなどの設定情報をDHCPサーバに要求
## DHCPの仕組み
- １　クライアントから、ブロードキャストで、DHCP DISCOVERを送信し、使用可能なDHCPサーバを探す
- ２　サーバから、DHCP OFFERを応答し、設定情報の候補を通知する
- ３　クライアントから、DHCP REQUESTを送信し、設定情報を正式に取得することを要求する。
- ４　サーバから、DHCP ACKを送信し、設定情報をクライアントに提供
## DHCPで割り当てるIPアドレス
- 種類 
  - アドレスプールの範囲から動的に割り当てる
  - 固定アドレスを割り当てる

# DNS
## 概要
- 名前解決：ホスト名とIPアドレスの対応付けを行うこと
## ドメイン名の仕組み
- ドメイン名：
  - ホスト名：ホスト名を「.」でつないで表示、ドメイン最大255文字制限。
  - ラベル：「.」で区切られた部分をラベル。ラベル最大63文字に制限。大文字、小文字の区別がない。
- ドメイン名の構成：
  - TLD (Top Level Domain): 一番右
  - SLD (Second Level Domain): 
- FQDN(Fully Qualified Domain Name): 完全修飾（しゅうしょく）ドメイン名
- 管理：ICANN。日本の場合JPNIC(Japan Network Information Center)
- TLD: 国別(.jp. .cn)と一般(com, net, org, edu)と分類
- SLD：略
- ルートサーバ：最上位DNS、世界中13台（A～M）、アメリカ10台、日本はM
## 名前解決の仕組み
- 方法：DNS、hostsファイル
- 構成要素：
  - リゾルバ(resolver)：ドメイン名を基にIPアドレスを検索
  - DNSサーバ：ドメイン名とIPアドレスの対照表を格納
- ローカルDNSサーバ：企業で用意あるいはISPが管理して、最初に問い合わせるDNSサーバ
- ゾーン情報：ドメイン名とIPアドレスが対応づけられているデータベース

## 名前解決の流れ
- ユーザはWebブラウザで[http://www.example.com]を入力
- ローカルサーバにIPアドレスを問い合わせ
- ローカルサーバに該当する情報のない場合、ルートサーバに問い合わせる。
- ルートサーバのゾーン情報には、com、net、jpなどの下位層情報が登録されているので、下位層DNSサーバのIPアドレスを返事
- ローカルサーバのリゾルバは、教えてもらったIPアドレスのDNSサーバに問い合わせ。
- また、下位のDNSサーバのIPアドレスが返信される。
- また、問い合わせ。
- ドメインのIPが返信されたまで
- Webブラウザは、教えてもらったIPアドレスで目的のWebサーバにアクセスする。

## hostsファイルによる名前解決
- パス：c:\Windows\system32\drivers\etc\hosts
- フォーマット：192.133.219.25 cisco.com

## nslookup
- 役割：DNSを利用してドメイン名とIPアドレスの対応付けを調べる
- 用例：

```
PS C:\> nslookup google.com
服务器:  NETGATE.lan
Address:  192.168.x.x

非权威应答:
名称:    google.com
Addresses:  2404:6800:4004:800::200e
          172.217.161.46
```

## DNSのトランスポート層プロトコル
- UDP：53ポート；通常の名前解決
- TCP：53ポート；DNSサーバ同士でゾーン情報のファイルを伝送する時

## 正引き(せいひき)と逆引き
- 正引き：ドメイン名からIPアドレス検索
- 逆引き：IPアドレスからドメイン名検索

# HTTPとHTTPS
## HTTP概要
- トランスポート層プロトコル：TCP
- HTTP: Hyper Text Markup Language

## Webアクセスの流れ
- HTTPリクエストを送信
- HTTPリスポンスを受信

## HTTPリクエストメッセージ
- リクエスト行：Webサーバにやってほしいこと
  - GET：データを返信するように要求
  - HEAD：データに関する情報を送信するように要求
  - POST：サーバにデータを送信
  - PUT: 指定したURIにデータファイルをアップロードする
  - DELETE：サーバにあるデータの削除を要求する
- メッセージヘッダ：詳細な情報をWebサーバに示す
- メッセージボディ：サーバに対してデータを送るときに使用

## HTTPレスポンスメッセージ
- ステータス行：Webサーバの処理結果
  - 100：情報。まだ情報ある
  - 200：成功
  - 300：別のURLにリダイレクト
  - 400：クライアントエラー
  - 500：サーバエラー
- メッセージヘッダ：ブラウザに使える詳細な情報。データのタイプ、データの圧縮方法など
- メッセージボディ：データを格納するための領域

## HTTPS
- Hypertext Transfer Protocol Secure
- 定義：HTTPにSSL暗号化機能したプロトコル
- ポート：４４３
- 条件：サーバ側にSSLサーバ証明書をインストール

# FTPとTFTP
## FTP
- File Transfer Protocal
- 役割：コンピューターの間でファイル伝送
- プロトコル：TCP
- ポート：20が伝送用、21が制御用
- 二つのモード
  - アクティブモード：サーバ側からコネクション要求
  - パッシブモード：クライアント側からコネクション要求
  - 注意：制御用のコネクションはどちらでもクライアント側から
## TFTP
- Trivial(adj. 不重要的，琐碎的；琐细的) File Transfer Protocol
- 特徴：信頼性を提供なし；効率のよい；確認応答（ACK）機能付き
- ポート：６９利用
- TFTPデータフォーマット
  - 2バイト：OPコード
  - 2バイト：ブロック番号
  - 512バイト以下：データ
- 流れ
  - クライアントからダウンロード要求。クライアント側ポート番号はランダム、サーバ側ポート番号は「６９」
  - サーバから、クライアントへ送信。サーバ側番号がランダム、クライアント側ポートはクライアント側ポート
  - クライアント側は確認応答を送る。クライアント側ポートはクライアント側ポート、サーバ側番号は送信されたポート番号
    - ファイルサイズが512バイトを超える場合、シーケンス番号を１ずつ増加させてデータ伝送を続ける。

# SMTPとPOP
## SMTP
- Simple Mail Transfer Protocol

## POP3
- Post Office Protocol V3
- ポート：２５
- 流れ
  - ユーザの作成したメールはSMTPを使ってメールサーバに送られる。
  - メールサーバは宛先メールアドレスを確認し、さらにSMTPによって送信。

## SMTP
- Internet Mail Access Protocol
- ポート：１１０
- 流れ：
  - ユーザ認証
  - メールボックスにアクセス

# TelnetとSSH
## Telnet
- プロトコル：TCP
- ポート番号：「23」
- 役割：ネットワーク機器の遠隔操作
- ソフトウェア：Tera TermやPuTTY

## SSH
- 機能：
  - 通信の暗号化
  - なりすまし防御（ぼうぎょ）
    - なりすまし：Spoofing, 模仿；哄骗，戏弄；电邮欺骗；干扰；冒充；假扮
  - 認証