---
title: Docker运行Coder时 code-server is unable to watch for file changes in this large workspace 的解决方案
date: 2019-05-26 14:30:00
lang: zh-Hans
tags:
    - Docker
    - Coder
    - IDE
    
categories: 
    - 开发 Development
    - IDE
    - VSCode
---

[Coder](https://coder.com/)是[Visual Studio Code](https://code.visualstudio.com/)的Web版本。
通过把Coder部署在服务器上，你就可以随时随地的用浏览器编程序了。
用Docker部署Coder出奇的简单，我就不赘述了。
本文要讲的是Docker Coder成功部署，并且登录IDE以后，会出现code-server is unable to watch for file changes in this large workspace的提示。
那么如何在docker环境下，我们如何增加这个max_user_watches的数值。

<!-- more -->

# 问题背景
使用Docker安装Web版本VScode，既[Coder](https://coder.com/)，的时候。如果按照官方的安装命令：
~~~bash
# docker run -it -p 127.0.0.1:8443:8443 -v "${PWD}:/home/coder/project" codercom/code-server --allow-http --no-auth
~~~
程序运行以后IDE会提示错误信息：
~~~info
code-server is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.
~~~
按照[官方解决方案](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc),
需要修改 **/etc/sysctl.conf** ，在里面添加：
~~~info
fs.inotify.max_user_watches=524288
~~~

但是，如果Coder是通过Docker运行的，在运行 **sudo sysctl -p** 会显示错误信息:
~~~info
sysctl: setting key "fs.inotify.max_user_watches": Read-only file system
~~~

本文说明如何解决这个问题。

# 参考资料

[资料1](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)
[资料2](https://github.com/flathub/com.visualstudio.code/issues/29)
[资料3](https://askubuntu.com/questions/353041/how-to-change-value-of-proc-sys-fs-inotify-max-user-watches)

# 解决方法1
在启动Docker的时候添加 **--privileged** 参数：
~~~bash
# docker run -it --privileged -p 127.0.0.1:8443:8443 -v "${PWD}:/home/coder/project" codercom/code-server --allow-http --no-auth
~~~

# 解决方法2
如果是已经运行的Docker容器，先导出其镜像，再重新加载并添加 **--privileged** 参数：
~~~bash
# docker commit coder mycoder
# docker run -it --privileged -p 127.0.0.1:8443:8443 -v "${PWD}:/home/coder/project" mycoder --allow-http --no-auth
~~~

# 最后
之后按照[官方文档](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)要求:
```bash
Run this in terminal:
# sudo vim /etc/sysctl.conf
Scroll to the bottom and paste:
fs.inotify.max_user_watches=524288
Save and clode the editor, then run this:
# sudo sysctl -p
To check your success:
# cat /proc/sys/fs/inotify/max_user_watches
This should return 524288
```

完成