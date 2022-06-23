---
title: 用区块链和智能合约做遗产继承
date: 2018-08-27 13:27:21
lang: zh-Hans
tags:
    - 区块链 Block Chain
    - 以太坊 Ethereum
    - 智能合约 Smart Contract
    
categories: 
    - 研究 Research
    - 区块链 Block Chain
---


## 参考资料

- [Interacting With Ethereum Smart Contracts Through Web3.js](https://medium.com/@amkurian/interacting-with-ethereum-smart-contracts-through-web3-js-e0efad17977)



## 源代码

- [源代码Github](https://github.com/liaocyintl/writelastwordonblockchain)

## 测试环境

- Node JS

## 介绍
该项目是属于OPERA（人間機械協奏）2018黑客松的Demo。

由于区块链具有不可篡改性，我们考虑将区块链用于遗产继承问题。
用户可以将他们的遗言上载到区块链上，当他们去世以后，他们的遗言和资产会通过智能合约自动转移到指定用户账户。

## 团队成员

Daikichi Mukoyama, Wataru Nagai, Yuji Hayashi, Toshiyuki Aso, Kanta Kurazumi, Chenyi Liao

## 用法

克隆源代码:
```text
git clone https://github.com/liaocyintl/writelastwordonblockchain.git
``` 
用Node JS安装并运行:
```text
npm install
node app.js
```
用浏览器浏览：
```test
http://localhost:3000
```

## 流程

![](/uploads/postimgs/30081eed.png)

↑用户留下他们的遗言和去世以后资产转移的地址和转移资产数量。
点击蓝色按钮，这些数据将被上载到区块链（以太坊）上。

（要先安装配置MetaMask）


![](/uploads/postimgs/7dbac290.png)

↑这里模拟一个生物传感器。用来监视人类心跳并给出客观的死亡判断。
你可以点Die按钮来模拟这个人死亡。

![](/uploads/postimgs/f036419c.png)

↑这个人死亡后，他的遗言将被转移到指定的用户地址。
但我们没有实现资产的转移。

# 智能合约

```solidity
pragma solidity ^0.4.17;
contract Heritage {
    string lastWord;
    address to;
    uint money;
    
    function writeLastWords(string x, address y, uint z) public {
        lastWord = x;
        to = y;
        money = z;
    }
    
    function loadLastWords() public view returns (string x) {
        return lastWord;
    }
}
```
