---
title:  Python实现MQTT接收订阅数据
date: 2018-06-20 14:40:17
lang: zh-Hans
tags:
    - 消息队列遥测传输 MQTT
    - Python
    - 物联网 IoT
    
categories: 
    - 开发 Development
    - MQTT
---

## 问题背景

物联网常使用 "消息队列遥测传输(Message Queuing Telemetry Transport, MQTT)" 协议订阅数据，这里用Python实现从MQTT服务器订阅数据。

## 解决方案

### 环境

- Python 3.6.1
- paho.mqtt 包 pip install paho.mqtt

参考以下代码：

```python
import paho.mqtt.client as mqtt

# 服务器地址
host = 'xxx.xxx'
# 通信端口
port = 1883

# 用户名
username = 'username'
# 密码
password = 'password'

# 订阅主题名
topic = 'topic'

# 连接后事件
def on_connect(client, userdata, flags, respons_code):
    if respons_code == 0:
        # 连接成功
        print('Connection Succeed!')
    else:
        # 连接失败并显示错误代码
        print('Connect Error status {0}'.format(respons_code))
    
    # 订阅信息
    client.subscribe(topic)

# 接收到数据后事件
def on_message(client, userdata, msg):
    # 打印订阅消息主题
    print("topic", msg.topic)
    # 打印消息数据
    print("msg payload", str(msg.payload))


if __name__=="__main__":

    # 初始化客户端，选择MQTT版本
    client = mqtt.Client(protocol = mqtt.MQTTv311)

    # 注册事件
    client.on_connect = on_connect
    client.on_message = on_message

    # 设置账号密码（如果需要的话）
    client.username_pw_set(username, password=password)

    # 连接到服务器
    client.connect(host, port = port, keepalive=60)

    # 守护连接状态
    client.loop_forever()
```

## 结果和感想