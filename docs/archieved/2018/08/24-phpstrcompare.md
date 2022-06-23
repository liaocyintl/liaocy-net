---
title: 相同的长字符串PHP比较结果不同的解决办法
date: 2018-08-24 23:04:21
lang: zh-Hans
tags:
    - PHP
    
categories: 
    - 开发 Development
    - PHP
---


## 参考资料

- [PHP下如何过滤掉除了汉字、数字和字母外的所有字符？包括过滤掉特殊字符](https://bbs.csdn.net/topics/392192901)

## 测试环境

- PHP 7.2

## 问题背景

由于各种原因，例如编码问题，PHP在比较一些长字符串，比如从数据库中取出的字符串和用户输入的字符串做比较时，
只用等号==，明明完全相同的两个字符串有时也会返回false。

## 解决方案

我们采用一个非完全解决方法，既通过正则表达式抽取出字符串中的 中文、字母、和数字，然后进行比较。

```php
function strcomp($str1,$str2){

    $pattern = '/[\x{4e00}-\x{9fa5}a-zA-Z0-9]/u'

    preg_match_all($pattern, $str1, $matches);
    $str1 = join('', $matches[0]);

    preg_match_all($pattern, $str2, $matches);
    $str2 = join('', $matches[0]);

    return ($str1 == $str2);
}
```

## 感想

这是一种非完整的解决方案，在需要比较符号的时候就没法使用了，但是能解决一定范围的问题。
