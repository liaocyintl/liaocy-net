---
title: cryptozombies.io Solidity 代码注释笔记
date: 2018-08-03 15:05:21
lang: zh-Hans
tags:
    - Solidity
    - 区块链 Block Chain
    - 以太坊 Ethereum (ETH)
    
categories: 
    - 开发 Development
    - Solidity
---


## 参考资料

本文用作 https://cryptozombies.io 中 Solidity 代码带注释的笔记

## 整理

### 函数修饰符

|  修饰符  |  说明  |
| ---- | ---- |
|  private  | 只能被合约内部调用  |
|  internal  |  就像 private 但是也能被继承的合约调用  |
|  external  |  只能从合约外部调用  |
|  public  |  可以在任何地方调用，不管是内部还是外部  |
|  view  |  告诉我们运行这个函数不会更改和保存任何数据  |
|  pure  |  告诉我们这个函数不但不会往区块链写数据，它甚至不从区块链读取数据。这两种在被从合约外部调用的时候都不花费任何gas（但是它们在被内部其他函数调用的时候将会耗费gas）  |
|  modifiers  |  自定义其对函数的约束逻辑  |
|  payable  |  可以接收以太的特殊函数  |

修饰符可以同时作用于一个函数定义上

### ERC721 标准

```solidity
contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}
```

### 标准注释

Solidity 社区所使用的一个标准是使用一种被称作 natspec 的格式，看起来像这样：

```solidity
/// @title 一个简单的基础运算合约
/// @author H4XF13LD MORRIS 💯💯😎💯💯
/// @notice 现在，这个合约只添加一个乘法
contract Math {
  /// @notice 两个数相乘
  /// @param x 第一个 uint
  /// @param y  第二个 uint
  /// @return z  (x * y) 的结果
  /// @dev 现在这个方法不检查溢出
  function multiply(uint x, uint y) returns (uint z) {
    // 这只是个普通的注释，不会被 natspec 解释
    z = x * y;
  }
}
```

@title（标题） 和 @author （作者）很直接了.

@notice （须知）向 用户 解释这个方法或者合约是做什么的。 @dev （开发者） 是向开发者解释更多的细节。

@param （参数）和 @return （返回） 用来描述这个方法需要传入什么参数以及返回什么值。

注意你并不需要每次都用上所有的标签，它们都是可选的。不过最少，写下一个 @dev 注释来解释每个方法是做什么的。

## 代码


zombiefactory.sol :

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);
    
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    mapping (uint => address) public zombieToOwner;
    mapping (address => uint) ownerZombieCount;

    // 除 public 和 private 属性之外，Solidity 还使用了另外两个描述函数可见性的修饰词：internal（内部） 和 external（外部）。
    // internal 和 private 类似，不过， 如果某个合约继承自其父合约，这个合约即可以访问父合约中定义的“内部”函数。（嘿，这听起来正是我们想要的那样！）。
    // external 与public 类似，只不过这些函数只能在合约之外调用 - 它们不能被合约内的其他函数调用。稍后我们将讨论什么时候使用 external 和 public。
    // 将 _createZombie() 函数的属性从 private 改为 internal ， 使得其他的合约也能访问到它。
    //function _createZombie(string _name, uint _dna) private {
    function _createZombie(string _name, uint _dna) internal { 
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        
        // 在 Solidity 中，有一些全局变量可以被所有函数调用。 其中一个就是 msg.sender，它指的是当前调用者（或智能合约）的 address。
        // 首先，在得到新的僵尸 id 后，更新 zombieToOwner 映射，在 id 下面存入 msg.sender。
        // 然后，我们为这个 msg.sender 名下的 ownerZombieCount 加 1。
        // 如果Key不存在，该value默认为0，因此直接++就可以
        zombieToOwner[id] = msg.sender;
        ownerZombieCount[msg.sender]++;
        
        NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }

    function createRandomZombie(string _name) public {
        // require使得函数在执行过程中，当不满足某些条件时抛出错误，并停止执行：
        // 敲黑板: Solidity 并不支持原生的字符串比较, 我们只能通过比较两字符串的 keccak256 哈希值来进行判断
        // 我们使用了 require 来确保这个函数只有在每个用户第一次调用它的时候执行，用以创建初始僵尸。
        // 在 createRandomZombie 的前面放置 require 语句。 使得函数先检查 ownerZombieCount [msg.sender] 的值为 0 ，不然就抛出一个错误。
        require(ownerZombieCount[msg.sender] == 0);
        
        
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}



```

zombiefeeding.sol :

```solidity

// 在 Solidity 中，当你有多个文件并且想把一个文件导入另一个文件时，可以使用 import 语句：
// 将 zombiefactory.sol 导入到我们的新文件 zombiefeeding.sol 中。

import "./zombiefactory.sol";

//参考 CryptoKitties 源代码
//定义一个名为 KittyInterface 的接口。 请注意，因为我们使用了 contract 关键字， 这过程看起来就像创建一个新的合约一样。
contract KittyInterface {
    //在interface里定义了 getKitty 函数（不过是复制/粘贴上面的函数，但在 returns 语句之后用分号，而不是大括号内的所有内容。
    function getKitty(uint256 _id)external view returns (
        bool isGestating,
        bool isReady,
        uint256 cooldownIndex,
        uint256 nextActionAt,
        uint256 siringWithId,
        uint256 birthTime,
        uint256 matronId,
        uint256 sireId,
        uint256 generation,
        uint256 genes
    );
}

// 我们的游戏代码越来越长。 当代码过于冗长的时候，最好将代码和逻辑分拆到多个不同的合约中，以便于管理。
// 有个让 Solidity 的代码易于管理的功能，就是合约 inheritance (继承)
// 由于 子类 是从 父类 那里 inherits （继承)过来的。 这意味着当你编译和部署了 子类，它将可以访问我们在 父类 中定义的其他 **公共** 函数。
// 在 ZombieFactory 下创建一个叫 ZombieFeeding 的合约，它是继承自 `ZombieFactory 合约的。
contract ZombieFactory is ZombieFactory{
    //我已经将代码中 CryptoKitties 合约的地址保存在一个名为 ckAddress 的变量中。在下一行中，请创建一个名为 kittyContract 的 KittyInterface，并用 ckAddress 为它初始化 —— 就像我们为 numberContract所做的一样。
    address ckAddress = 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d;
    KittyInterface kittyContract = KittyInterface(ckAddress);

    // 在 Solidity 中，有两个地方可以存储变量 —— storage 或 memory。
    // Storage 变量是指永久存储在区块链中的变量。 Memory 变量则是临时的，当外部函数对某合约调用完成时，内存型变量即被移除。 你可以把它想象成存储在你电脑的硬盘或是RAM中数据的关系。
    // 大多数时候你都用不到这些关键字，默认情况下 Solidity 会自动处理它们。 状态变量（在函数之外声明的变量）默认为“存储”形式，并永久写入区块链；而在函数内部声明的变量是“内存”型的，它们函数调用结束后消失。
    // 是时候给我们的僵尸增加“猎食”和“繁殖”功能了！
    // 当一个僵尸猎食其他生物体时，它自身的DNA将与猎物生物的DNA结合在一起，形成一个新的僵尸DNA。
    // 创建一个名为 feedAndMultiply 的函数。 使用两个参数：_zombieId（ uint类型 ）和_targetDna （也是 uint 类型）。 设置属性为 public 的。
    // function feedAndMultiply(uint _zombieId, uint _targetDna) public {
    // 首先，我们修改下 feedAndMultiply 函数的定义，给它传入第三个参数：一条名为 _species 的字符串。
    function feedAndMultiply(uint _zombieId, uint _targetDna, string _species) public {
        // 我们不希望别人用我们的僵尸去捕猎。 首先，我们确保对自己僵尸的所有权。 通过添加一个require 语句来确保 msg.sender 只能是这个僵尸的主人（类似于我们在 createRandomZombie 函数中做过的那样）。
        require(msg.sender == zombieToOwner[_zombieId]);
        
        //在我们计算出新的僵尸的DNA之后，添加一个 if 语句来比较 _species 和字符串 "kitty" 的 keccak256 哈希值。
        if (keccak256(_species) == keccak256("kitty")) {
            // 在 if 语句中，我们用 99 替换了新僵尸DNA的最后两位数字。可以这么做：newDna = newDna - newDna％100 + 99;。
            // 解释：假设 newDna 是 334455。那么 newDna％100 是 55，所以 newDna - newDna％100 得到 334400。最后加上 99 可得到 334499。
            newDna = newDna - newDna % 100 + 99;
        }
        
        
        //为了获取这个僵尸的DNA，我们的函数需要声明一个名为 myZombie 数据类型为Zombie的本地变量（这是一个 storage 型的指针）。 将其值设定为在 zombies 数组中索引为_zombieId所指向的值。
        Zombie storage myZombie = zombies[_zombieId];
        
        // 获取新的僵尸DNA的公式很简单：计算猎食僵尸DNA和被猎僵尸DNA之间的平均值。
        // 首先我们确保 _targetDna 不长于16位。要做到这一点，我们可以设置 _targetDna 为 _targetDna％dnaModulus ，并且只取其最后16位数字。
        _targetDna = _targetDna % dnaModulus;
        // 接下来为我们的函数声明一个名叫 newDna 的 uint类型的变量，并将其值设置为 myZombie的 DNA 和 _targetDna 的平均值（如上例所示）。
        uint newDna = (myZombie.dna + _targetDna) / 2;
        // 一旦我们计算出新的DNA，再调用 _createZombie 就可以生成新的僵尸了。
        // 注意：这段代码编译的时候编译器就会报错。 错误在于，我们尝试从 ZombieFeeding 中调用 _createZombie 函数，但 _createZombie 却是 ZombieFactory 的 private （私有）函数。这意味着任何继承自 ZombieFactory 的子合约都不能访问它。
        _createZombie("NoName", newDna);
    }
    
    // 参考 处理多返回值
    // 我们来定义一个函数，从 kitty 合约中获取它的基因：
    // 创建一个名为 feedOnKitty 的函数。它需要2个 uint 类型的参数，_zombieId 和_kittyId ，这是一个 public 类型的函数。
    function feedOnKitty(uint _nombieId, uint _kittyId) public {
        // 函数首先要声明一个名为 kittyDna 的 uint。
        // 注意：在我们的 KittyInterface 中，genes 是一个 uint256 类型的变量，但是如果你记得，我们在第一课中提到过，uint 是 uint256 的别名，也就是说它们是一回事。
        uint kittyDna;
        // 这个函数接下来调用 kittyContract.getKitty函数, 传入 _kittyId ，将返回的 genes 存储在 kittyDna 中。记住 —— getKitty 会返回一大堆变量。 （确切地说10个 - 我已经为你数过了，不错吧！）。但是我们只关心最后一个-- genes。数逗号的时候小心点哦！
        (,,,,,,,,,kittyDna) = kittyContract.getKitty(_kittyId);
        // 最后，函数调用了 feedAndMultiply ，并传入了 _zombieId 和 kittyDna 两个参数。
        //feedAndMultiply(_zombieId, kittyDna);
        // 最后，我们修改了 feedOnKitty 中的函数调用。当它调用 feedAndMultiply 时，增加 “kitty” 作为最后一个参数。
        feedAndMultiply(_zombieId, kittyDna, "kitty");
    }
    
}
```

## 示例代码

### 关于 storage 和 memory变量：


在 Solidity 中，有两个地方可以存储变量 —— storage 或 memory。

Storage 变量是指永久存储在区块链中的变量。 Memory 变量则是临时的，当外部函数对某合约调用完成时，内存型变量即被移除。 你可以把它想象成存储在你电脑的硬盘或是RAM中数据的关系。

Storage 类似一个指针，可以修改指向的变量。

大多数时候你都用不到这些关键字，默认情况下 Solidity 会自动处理它们。 状态变量（在函数之外声明的变量）默认为“存储”形式，并永久写入区块链；而在函数内部声明的变量是“内存”型的，它们函数调用结束后消失。

然而也有一些情况下，你需要手动声明存储类型，主要用于处理函数内的 结构体 和 数组 时：

```solidity
contract SandwichFactory {
  struct Sandwich {
    string name;
    string status;
  }

  Sandwich[] sandwiches;

  function eatSandwich(uint _index) public {
    // Sandwich mySandwich = sandwiches[_index];

    // ^ 看上去很直接，不过 Solidity 将会给出警告
    // 告诉你应该明确在这里定义 `storage` 或者 `memory`。

    // 所以你应该明确定义 `storage`:
    Sandwich storage mySandwich = sandwiches[_index];
    // ...这样 `mySandwich` 是指向 `sandwiches[_index]`的指针
    // 在存储里，另外...
    mySandwich.status = "Eaten!";
    // ...这将永久把 `sandwiches[_index]` 变为区块链上的存储

    // 如果你只想要一个副本，可以使用`memory`:
    Sandwich memory anotherSandwich = sandwiches[_index + 1];
    // ...这样 `anotherSandwich` 就仅仅是一个内存里的副本了
    // 另外
    anotherSandwich.status = "Eaten!";
    // ...将仅仅修改临时变量，对 `sandwiches[_index + 1]` 没有任何影响
    // 不过你可以这样做:
    sandwiches[_index + 1] = anotherSandwich;
    // ...如果你想把副本的改动保存回区块链存储
  }
}
```

### internal 和 external：

除 public 和 private 属性之外，Solidity 还使用了另外两个描述函数可见性的修饰词：internal（内部） 和 external（外部）。

internal 和 private 类似，不过， 如果某个合约继承自其父合约，这个合约即可以访问父合约中定义的“内部”函数。（嘿，这听起来正是我们想要的那样！）。

external 与public 类似，只不过这些函数只能在合约之外调用 - 它们不能被合约内的其他函数调用。稍后我们将讨论什么时候使用 external 和 public。

声明函数 internal 或 external 类型的语法，与声明 private 和 public类 型相同：

```solidity
contract Sandwich {
  uint private sandwichesEaten = 0;

  function eat() internal {
    sandwichesEaten++;
  }
}

contract BLT is Sandwich {
  uint private baconSandwichesEaten = 0;

  function eatWithBacon() public returns (string) {
    baconSandwichesEaten++;
    // 因为eat() 是internal 的，所以我们能在这里调用
    eat();
  }
}
```

### 与其他合约的交互
如果我们的合约需要和区块链上的其他的合约会话，则需先定义一个 interface (接口)。

先举一个简单的栗子。 假设在区块链上有这么一个合约：

```solidity
contract LuckyNumber {
  mapping(address => uint) numbers;

  function setNum(uint _num) public {
    numbers[msg.sender] = _num;
  }

  function getNum(address _myAddress) public view returns (uint) {
    return numbers[_myAddress];
  }
}
```

这是个很简单的合约，您可以用它存储自己的幸运号码，并将其与您的以太坊地址关联。 这样其他人就可以通过您的地址查找您的幸运号码了。

现在假设我们有一个外部合约，使用 getNum 函数可读取其中的数据。

首先，我们定义 LuckyNumber 合约的 interface ：

```solidity
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}
```

请注意，这个过程虽然看起来像在定义一个合约，但其实内里不同：

首先，我们只声明了要与之交互的函数 —— 在本例中为 getNum —— 在其中我们没有使用到任何其他的函数或状态变量。

其次，我们并没有使用大括号（{ 和 }）定义函数体，我们单单用分号（;）结束了函数声明。这使它看起来像一个合约框架。

编译器就是靠这些特征认出它是一个 **接口** 的。

在我们的 app 代码中使用这个接口，合约就知道其他合约的函数是怎样的，应该如何调用，以及可期待什么类型的返回值。

在下一课中，我们将真正调用其他合约的函数。目前我们只要声明一个接口，用于调用 CryptoKitties 合约就行了。

### CryptoKitties源代码
我们已经为你查看过了 CryptoKitties 的源代码，并且找到了一个名为 getKitty的函数，它返回所有的加密猫的数据，包括它的“基因”（我们的僵尸游戏要用它生成新的僵尸）。

该函数如下所示：

```solidity
function getKitty(uint256 _id) external view returns (
    bool isGestating,
    bool isReady,
    uint256 cooldownIndex,
    uint256 nextActionAt,
    uint256 siringWithId,
    uint256 birthTime,
    uint256 matronId,
    uint256 sireId,
    uint256 generation,
    uint256 genes
) {
    Kitty storage kit = kitties[_id];

    // if this variable is 0 then it's not gestating
    isGestating = (kit.siringWithId != 0);
    isReady = (kit.cooldownEndBlock <= block.number);
    cooldownIndex = uint256(kit.cooldownIndex);
    nextActionAt = uint256(kit.cooldownEndBlock);
    siringWithId = uint256(kit.siringWithId);
    birthTime = uint256(kit.birthTime);
    matronId = uint256(kit.matronId);
    sireId = uint256(kit.sireId);
    generation = uint256(kit.generation);
    genes = kit.genes;
}
```

### 使用接口

继续前面 NumberInterface 的例子，我们既然将接口定义为：

```solidity
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}
```

我们可以在合约中这样使用：

```solidity
contract MyContract {
  address NumberInterfaceAddress = 0xab38...;
  // ^ 这是FavoriteNumber合约在以太坊上的地址
  NumberInterface numberContract = NumberInterface(NumberInterfaceAddress);
  // 现在变量 `numberContract` 指向另一个合约对象

  function someFunction() public {
    // 现在我们可以调用在那个合约中声明的 `getNum`函数:
    uint num = numberContract.getNum(msg.sender);
    // ...在这儿使用 `num`变量做些什么
  }
}
```
通过这种方式，只要将您合约的可见性设置为public(公共)或external(外部)，它们就可以与以太坊区块链上的任何其他合约进行交互。

### 处理多返回值
getKitty 是我们所看到的第一个返回多个值的函数。我们来看看是如何处理的：

```solidity
function multipleReturns() internal returns(uint a, uint b, uint c) {
  return (1, 2, 3);
}

function processMultipleReturns() external {
  uint a;
  uint b;
  uint c;
  // 这样来做批量赋值:
  (a, b, c) = multipleReturns();
}

// 或者如果我们只想返回其中一个变量:
function getLastReturnValue() external {
  uint c;
  // 可以对其他字段留空:
  (,,c) = multipleReturns();
}
```

### kitty 和 web3.js 放在一起

我们只用编译和部署 ZombieFeeding，就可以将这个合约部署到以太坊了。我们最终完成的这个合约继承自 ZombieFactory，因此它可以访问自己和父辈合约中的所有 public 方法。

我们来看一个与我们的刚部署的合约进行交互的例子， 这个例子使用了 JavaScript 和 web3.js：

```javascript
var abi = /* abi generated by the compiler */
var ZombieFeedingContract = web3.eth.contract(abi)
var contractAddress = /* our contract address on Ethereum after deploying */
var ZombieFeeding = ZombieFeedingContract.at(contractAddress)

// 假设我们有我们的僵尸ID和要攻击的猫咪ID
let zombieId = 1;
let kittyId = 1;

// 要拿到猫咪的DNA，我们需要调用它的API。这些数据保存在它们的服务器上而不是区块链上。
// 如果一切都在区块链上，我们就不用担心它们的服务器挂了，或者它们修改了API，
// 或者因为不喜欢我们的僵尸游戏而封杀了我们
let apiUrl = "https://api.cryptokitties.co/kitties/" + kittyId
$.get(apiUrl, function(data) {
  let imgUrl = data.image_url
  // 一些显示图片的代码
})

// 当用户点击一只猫咪的时候:
$(".kittyImage").click(function(e) {
  // 调用我们合约的 `feedOnKitty` 函数
  ZombieFeeding.feedOnKitty(zombieId, kittyId)
})

// 侦听来自我们合约的新僵尸事件好来处理
ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  // 这个函数用来显示僵尸:
  generateZombie(result.zombieId, result.name, result.dna)
})
```