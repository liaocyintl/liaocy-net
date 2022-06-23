---
title: 自动为Word文档中的日文汉字注音(ふりがな)的VBA脚本
date: 2018-07-20 22:18:17
lang: zh-Hans
tags:
    - VBA
    - Word
    - Office
    
categories: 
    - 日语 Japanese
    - 阅读 Reading
---

## 介绍
本文代码基于[きぬあさ的代码](https://www.ka-net.org/blog/?p=7576)进行改良，向原作者表示致敬，转发此文请一并转发原作者地址。

注：原作者的代码遇到找不到注音的汉字会死循环卡在那里。
我修正了这个问题。
修正后的版本如果遇到找不到注音的汉字，就跳过它而不是卡在那里。
当然这种情况很少，完全不影响阅读，因此可以无人值守地转换Word长文。

## 问题背景
众所周知Word有自动给日文汉字注音的功能：

![Word中给汉字注音的传统方法1/2](/uploads/postimgs/fbcd6570.png)

点击确定以后，相应的汉字就被注音了：

![Word中给汉字注音的传统方法2/2](/uploads/postimgs/5a5e52ad.png)

这种方法对日语学习者很有帮助。
但是可以发现，这种方法无法对大段的文字同时注音，每次只能注音一两句话。
即使你选择了大段的文字，也只能对前一两句话进行注音。
为了解决这个问题，我们写一个Word文档内置的Visual Basic for Applications (VBA)脚本，来实现对大段文字或全文的注音。

## 开发及测试环境

- Microsoft Office Word 2013

## 解决方案

首先，我们设置文章的语言为日语，否则某些汉字可能被当做中文后标记为汉语拼音。
按Ctrl+A全选文本，点击“审阅”选项卡，点击“语言”按钮，在弹出的菜单中选择“设置校对语言”选项。

![](/uploads/postimgs/1f84e296.png)

在弹出的“语言”对话框中，选择日语，勾选“不检查拼写或语法”，不要勾选“自动检测语言”，点击确定保存：

![](/uploads/postimgs/7eb6fb20.png)

这样一来，全体文本就被设置为日语了。
之后，根据下面步骤对文本进行注音：

### 1、 打开Word的“开发工具”菜单

部分Word的“开发工具”默认是不显示的，我们在设置里打开它：

首先，点击word左上角的“文件”按钮：

![](/uploads/postimgs/d992ce56.png)

然后，点击“选项”：

![](/uploads/postimgs/b3aab0b3.png)

之后，在弹开的“Word选项”对话框中，依次选择“自定义功能区”，勾选“开发工具”，并点击“确定”保存设置：

![](/uploads/postimgs/2333e88c.png)

最后，可以在Word的顶部菜单中看到“开发工具”选项卡，选择它，并点击按钮“Visual Basic”打开VBA编辑器：

![](/uploads/postimgs/548797ff.png)

### 2、代码

在打开的VBA编辑器中，粘贴以下代码（按代码下面的图示）：
```VB
Option Explicit
  
Public Sub FuriganaSelectedRange()
  SetPhoneticRange Selection.Range
End Sub
 
Public Sub FuriganaAllDocument()
  SetPhoneticRange ActiveDocument.Range
End Sub
 
Private Sub SetPhoneticRange(ByVal rng As Word.Range)
  Dim r As Word.Range
  Dim past_r As String
  For Each r In rng.Words
    If r.Fields.Count < 1 Then
      If ChkKanjiRange(r) = True And r <> past_r Then
        past_r = r
        r.Select
        Application.Dialogs(wdDialogPhoneticGuide).Show 1
      End If
    End If
  Next
  
  For Each r In rng.Characters
    If r.Fields.Count < 1 Then
      If ChkKanjiRange(r) = True Then
        r.Select
        Application.Dialogs(wdDialogPhoneticGuide).Show 1
      End If
    End If
  Next
End Sub
  
Private Function ChkKanjiRange(ByVal rng As Word.Range) As Boolean
  Dim ret As Boolean
  Dim i As Long
   
  ret = True
  For i = 1 To Len(rng.Text)
    If IsKanji(Mid(rng.Text, i, 1)) = False Then
      ret = False
      Exit For
    End If
  Next
  ChkKanjiRange = ret
End Function
  
Private Function IsKanji(ByVal char As String) As Boolean
  Dim cc As Variant
  Dim ret As Boolean
   
  ret = True
  cc = Val("&H" & Hex(AscW(char)) & "&")
  Select Case cc
    Case 63744 To 64255
    Case 13312 To 19903
    Case 19968 To 40959
    Case 131072 To 173791
    Case 173824 To 177983
    Case 177984 To 178207
    Case 194560 To 195103
    Case Else
      ret = False
  End Select
  IsKanji = ret
End Function
```
将上面代码粘贴在代码区域，并点击绿色三角形“运行”按钮：

![](/uploads/postimgs/8511bcb4.png)

### 3、运行
点击点击绿色三角形“运行”按钮后，出现对话框：
- 选择“FuriganaAllDocument”的话则会对全文档注音（推荐）
- 选择“FuriganaSelectedRange”的话则只会对选择文字注音
选择完成后点击“运行”：

![](/uploads/postimgs/aed595aa.png)

点击“运行”后开始注音：

![](/uploads/postimgs/wordfurigana.gif)

注音过程中点击键盘“ESC”键可以中途退出。
该算法支持断点重新开始，所以不用担心中途退出。

## 参考资料

[代码参考资料](https://www.ka-net.org/blog/?p=7576)

[开发工具菜单开启引用资料](https://jingyan.baidu.com/article/9f7e7ec05965d46f28155496.html)

## 结果和感想

关于执行效率：

注音夏目漱石的「吾輩は猫である」第一章，包含13,622个字符（包含假名），
执行一遍大约需要15分钟。