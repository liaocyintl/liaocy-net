---
title: 解决Python在Linux环境、Mac环境或Windows环境下，文件路径不同的问题
date: 2018-08-01 19:02:25
lang: zh-Hans
tags:
    - Python
    
categories: 
    - 开发 Development
    - Python
---


## 参考资料

[本文参考：Python 3 Quick Tip: The easy way to deal with file paths on Windows, Mac and Linux](https://medium.com/@ageitgey/python-3-quick-tip-the-easy-way-to-deal-with-file-paths-on-windows-mac-and-linux-11a072b58d5f)

## 实验环境

- Python 3.6.5
- pathlib 11.1
[文档](https://docs.python.org/3/library/pathlib.html)

## 问题背景

操作系统，文件的路径也是不同的：

```text
Windows的文件路径:
C:\some_folder\some_file.txt

很过其它操作系统的文件:
/some_folder/some_file.txt
```

这其实是从上个世纪80年代，从MS-DOS系统遗留下来的疑难杂症。

这就造成一个问题，如果包含文件路径的Python代码是在Linux上测试的，那Windows下面可能就没法用了。

还好，可以用一个叫做 **pathlib** 的库来解决。


## 解决方案

### 安装pathlib

```bash
pip install pathlib
```

### 让路径兼容

假如你的python代码写在my_program.py里，你要定位到下面这个叫raw_data.txt的文件：

![](/uploads/postimgs/9c379859.png)

你可以这样写：

```python
from pathlib import Path
data_folder = Path("source_data/text_files/")
file_to_open = data_folder / "raw_data.txt"
f = open(file_to_open)
print(f.read())
```

或者你可以直接写绝对路径：

```python
from pathlib import Path
filename = Path("source_data/text_files/raw_data.txt")
```

它甚至可以直接取文件名，扩展名，判断文件是否存在：

```python
from pathlib import Path

filename = Path("source_data/text_files/raw_data.txt")
print(filename.name)
# 输出全部文件名："raw_data.txt"
print(filename.suffix)
# 输出文件扩展名："txt"
print(filename.stem)
# 输出文件名："raw_data"
if not filename.exists():
    print("奥普斯，文件不存在！")
else:
    print("耶，文件存在！")
```

可以返回Windows格式的路径：

```python
from pathlib import Path, PureWindowsPath
filename = Path("source_data/text_files/raw_data.txt")
# 转换为 Windows 格式
path_on_windows = PureWindowsPath(filename)
print(path_on_windows)
# 输出： "source_data\text_files\raw_data.txt"
```

便利文件夹里的全部json文件：

```python
for file in Path("dir/dir/").glob('*.json'):
    open(file)
```