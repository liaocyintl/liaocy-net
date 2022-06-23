---
title: CCNA試験のまとめノート 13 ネットワークデバイスのセキュリティ
date: 2019-07-22 15:45
lang: ja
tags:
    - ノート
    
categories: 
    - 資格試験
    - CCNA
    
---

パスワードによる管理アクセスの保護、管理アクセスに対するセキュリティの強化、スイッチのセキュリティ機能、未使用サービスの無効化
<!-- more -->
# パスワードによる管理アクセスの保護
## コンソールパスワード

設定：
```
Switch(config)#line console 0
Switch(config-line)#password 123456
Switch(config-line)#login
Switch(config-line)#end
```

確認：
```
Switch#show running-config
!
line con 0
 password 123456
 login
!
```
## 特権モードのパスワード

- イネーブルパスワード：設定したパスワードが暗号化しない

```
Switch(config)#enable password 123456
```

- イネーブルシークレットパスワード：MD5を使って、設定したパスワードを保存する。

```
Switch(config)#enable secret 12345678
```

## コンフィギュレーションファイルのパスワード暗号化
```
Switch(config)#service password-encryption
```

# 管理アクセスに対するセキュリティの強化
## ユーザ認証による管理アクセスの保護
- ローカル認証

```
Switch(config)#username admin1 password admin1 　<---　ユーザアカウントを作成
Switch(config)#username admin2 secret admin2
Switch(config)#line console 0
Switch(config-line)#login local 　<---　コンソール接続時にローカル認証を行う
Switch(config-line)#line vty 0 4
Switch(config-line)#login local 　<---　Telnet接続時にローカル認証を行う
Switch(config-line)#end
```

## 認証サーバ
- 認証サーバ
  - RADIUS: Remote Authentication Dial-In User Service
  - TACACS+: Terminal Access Controller Access-Control System+
  - AAA: Authentication、Authorization、Accounting

- 特権：
  - 0　Router>　5つのコマンド（disable、enable、exit、help、logout）、あまり使わない。
  - 1　Router>　特権なし
  - 15 Router#　特権あり。すべての管理者レベルコマンドを含む

- レベルを指定した特権パスワードの設定
```
Switch(config)#enable secret 15 pass123456
```

- 現在の特権レベルを表示
```
Switch#show privilege
Current privilege level is 15
```

- 特権EXECモードへ移行
```
Switch>enable 15
Password: 
```

## SSHを使用した管理アクセス

- ルータの設定：

```
Router(config)#username sshuser password cisco   <--ユーザアカウントの設定
Router(config)#hostname RT1   <--ホスト名の設定
RT1(config)#ip domain-name example.com   <--ドメイン名の設定
RT1(config)#crypto key generate rsa   <--公開鍵暗号のためにペアの鍵を生成
The name for the keys will be: RT1.example.com
Choose the size of the key modulus in the range of 360 to 2048 for your
  General Purpose Keys. Choosing a key modulus greater than 512 may take
  a few minutes.

How many bits in the modulus [512]: 1024   <--鍵の長さを指定
% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]


RT1(config)#ip ssh version 2   <--SSHバージョンを２に設定
*3 1 0:1:32.797: %SSH-5-ENABLED: SSH 1.99 has been enabled
RT1(config)#line vty 0 4   <--VTY回線の設定モードに入る
RT1(config-line)#transport input ssh   <--SSH接続のみ許可
RT1(config-line)#login local   <--ローカル認証を有効化
RT1(config-line)#end

```

- transport input
  - transport input ssh: SSHのみ
  - transport input telnet: Telnetのみ
  - transport input ssh telnet: SSHとTelnet両方を許可
  - transport input all: すべて許可

- SSHサーバ機能の検証

```
RT1#show crypto key mypubkey rsa   <--公開鍵の確認
% Key pair was generated at: 0:1:16 UTC 3 1 1993
Key name: RT1.example.com   <--鍵の名前
 Storage Device: not specified
 Usage: General Purpose Key
 Key is not exportable.
 Key Data:
 000071f1  00006f29  000074d9  00000cf4  0000258d  000063b3  00005163  0000101c
 00007c04  000041c0  00000f26  00005a55  00007113  00004caa  00000063  00005fef
 00002695  0000626e  00000071  00006ef1  0000524a  00004261  00006fa7  4b68
% Key pair was generated at: 0:1:16 UTC 3 1 1993
Key name: RT1.example.com.server
Temporary key
 Usage: Encryption Key
 Key is not exportable.
 Key Data:
 000038d8  00002c1e  0000267c  000065ff  00005a0f  00006ac3  000023ed  000060d0
 00003271  0000205d  00007b1f  0000567a  000035f2  000065a0  00004446  00001774
 000067fc  000011dc  000014c5  000051a1  000034b6  00003f2c  00004297  5624

RT1#show ip ssh   <--SSHの設定情報を表示
SSH Enabled - version 2.0
Authentication timeout: 120 secs; Authentication retries: 3

RT1#show ssh   <--SSH接続の状態を表示
%No SSHv2 server connections running.
%No SSHv1 server connections running.
```

Attention: for SSH connection, you need to access from any common ethernet port (interface) in IP address.

## EXECセッションのタイムアウト

```
RT1(config-line)#exec-timeout 15 5 #15分5秒タイムアウト
```

## バナーメッセージの設定
- 定義：ルータに管理接続したときに表示されるメッセージのこと
- 分類：
  - motd: 管理者間で共有情報を伝えるメッセージ
  - login: 変更頻度の低い情報を使えるときに利用
  - exec: 正しいパスワード入力後に表示される
- 変更：

```
RT1(config)#banner motd $
Enter TEXT message.  End with the character '$'.

+++++++++++MOTD BANNER++++++++++

$
```

# スイッチのセキュリティ機能
## スイッチのポートセキュリティ
- 機能：スイッチの物理ポートに許可するMACアドレスを登録し、許可していない送信元MACアドレスのフレームを破棄する機能
- 特徴：ルータには設定できない
- セキュアMACアドレスのタイプ
  - スタティック：手動で登録；MACアドレステーブルとrunning-config保存される
  - ダイナミック：フレームを受信することで自動収集。再起動時に消去される。
  - スティッキー：自動収集でrunning-configに保存される
- セキュアMACアドレスの最大数を指定
```
(config-if)#switchport port-security maximum 1 #デフォルトは１
```

- 違反モードの設定
```
(config-if)#switchport port-security violation {protect | restrict | shutdown | shutdown lan}
```

- セキュアMACアドレスの設定
```
(config-if)#switchport port-security mac-address <mac-address>
(config-if)#switchport port-security mac-address sticky
```

- ポートセキュリティ有効化
```
(config-if)#switchport port-security
```

- セキュアMACアドレスの表示
```
(config-if)#show port-security address
```

# 未使用サービスの無効化

- CDPの無効化:
```
(config) #no cdp run
または
(config-if) #no cdp enable
```

- HTTPS (SSL) を使用
```
# HTTPサーバの無効化
(config) #no ip http server

# HTTPSサーバの有効化
(config) #ip http secure-server
```

- TCP/UDPスモールサーバの無効化：ルータ内のメモリに常駐して様々なサービスを提供するプログラムであり診断処理などに役に立つ。
```
# TCPスモールサーバの無効化
(config)# no service tcp-small-servers

#UDPスモールサーバの無効化
(config)# no service udp-small-servers
```
