---
title: vi 命令速查
date: 2019-05-26 01:06:00
lang: zh-Hans
tags:
    - vi
    - vim
    
categories: 
    - 开发 Development
    - vi
---

我每天都在管理大量的Linux服务器，但是一直以来我竟然不会用vim！！！
这次培训刚好有这个机会就顺便学了。
说实话我不确定vim就一定比nano好用，有的时候只是为了照顾别的工程师的心情。

<!-- more -->

# 环境
- CentOS 7

# VIM

## insert mode

- i: change to input mode (insert)

- a: change to input mode (append)

- A: change to input mode (append at end of current row)

- O: change to input mode (Add a row over current row)

- o: change to input mode (Add a row under current row)

## command mode

- ESC: escape to command mode

- u: undo

- ZZ: save and quit

- (2)dd: delete (2)a row

- (2)x: delete (2)a cheractor

- (2)dw: delete (2)a word

- dG: delete all rows under this row

- yw: yank(copy) a word

- p/P: pause deleted/yanked content

- r + cheractor: replace a cheractor

- .: repeat last operation

- /, ?, n, N: search, next, previous

### cursor control

- h, j, k, l: left, top, bottom, right; 

- w: next term

- ^: cursor goes to head of the row

- G: cursor goes to the last row

- 3G: cursor goes to 3rd row

## ex command mode

- :: ex command mode

- :q: quit this document

- :q!: quit without save

- :wq: save and quit

