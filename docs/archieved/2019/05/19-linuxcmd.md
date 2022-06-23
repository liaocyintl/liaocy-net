---
title: Linux 命令速查
date: 2019-05-19 20:00:00
lang: zh-Hans
tags:
    - Linux
    - CentOS
    
categories: 
    - 开发 Development
    - Linux
---

Linux一些常用的命令整理

<!-- more -->

# 环境
- CentOS 7

# 笔记

## User Operations

### Profile

#### man : Show manual of the following command
format: 
```
$ man {command}
```

e.g: 
```text
$ man date
```

#### whereis : show path of the following command
format: 
```text
$ man {command}
```

e.g.:
```text
$ whereis passwd
```

#### id : show current user identifications

#### who : show current user information

#### whoami: show current user name

#### who am i: show current user name  and last login

#### date: show current system date time

#### /etc/passwd/: saving user identifications

#### /etc/group/: saving group identifications

#### clear: clear current screen

#### echo: print information on the screen

#### pwd: show current directory (Print Working Directory)

#### /opt: save the APPs and products

#### /bin: save the basic linux operation files

#### /usr/lib: user library

#### /sbin: save commands running when system startup and shutdown

#### /etc: system file

#### /dev: containing hardware device files

#### /var: system log and spool file

#### .: current directory

#### ..: parent directory

### File/Director Operations

#### ls: show filenames and directory names

options:
```
-a: show hidden files (dot files)
-d: show directory status
-l: show file detailed information
-F: show files in types. Executable file with * and directory with /ls
-R: show all children files under this directory in Recursive
-i: show inode infomation
```

#### cd: change current directory

#### find: search something in the PC

format:
```
$ find {options} {conditions}
```

options: 
```text
-name: search file name
```

E.g.:
```text
$ find . -name "*file" // search in current folder
```


#### mkdir: create a directory

format:
```text
$ mkdir [-options] {path}
```


operations:
```text
-p: create all directories in the path if not exists
-m {mod}: create and with {mod} (755, 644) permission.
``` 


#### rm: remove a file/directory
format:
```text
$ rm [-options] path
```

options:
```text
-r: directory
-f: forced delete
```


#### cat: show file content

#### more: show file content in pages

#### tail: show the tail in some files

options:
```text
-n: set how many lines will be showed (default 10)
-f: show the file (real time)
```


#### lrp: insert the file into printing queue

#### rm: remove

options:
```text
-f: force remove
-r: remove all directory
-i: interaction
```


#### chmod: change file/dir pomission
format: 
```text
$ chmod [options] {mod} {filename}
```


options:
```text
-R: for directory permission
4 (100): write
2 (010): read
1 (001): excute
u+x: user (owner) for excute
u=rw: user (owner) for read/write permissions
g=rw: group for read/write permissions
o=: other for nothing
```


#### umask: set default permission when file created (Mask code: 002->775)

format: 
```text
$ umask [-options] {mod}
```


options:
```text
-S: show current status
```


e.g.:
```text
$ umask 775
```


#### touch: update file timestamp

options:
```text
-a: update access datetime
-m: update modified datetime
-t: update access and modified datetimes
-c: create if file not exists
```

#### su: change user ID/Group ID

format:
```text
$ su {username}
```

#### alias: give alias for command

e.g.:
```text
$ alias dir=ls
$ alias mstat=/home/abc/scv/
$ alias copy='cp -i'
$ alias (show all alias)
```


#### umalias: remove alias

e.g.:
```text
$ unalias dir
```

#### history: how history commands

#### env: show environment

#### wc: count words in the file

options:
```text
-l: lines count
-w: words count
-c: count Byte
-m: count charactors
```


#### grep: global search regular expression(RE) and print out the line
format:
```text
$ grep [-options] {keyword} {target path}
```


options:
```text
-e: multiple keywords: grep -e i -e love /root/funfile.txt
```

e.g.:
```text
$ ps -ef | grep java : search all proceess about the Java
```

#### |: left as the stdout, right as the stdin; get information from left and process on right

#### cut: show file indented content

#### tr: change text

e.g.:
```text
$ who | tr -s " " : remove all spaces
```

#### tee: output strout and print on screen

e.g.:
```text
$ cat 1.txt | tee 3.txt
```

## Management

### Disk Management

#### dmesg: show hardware information

e.g.: 
```text
$ dmesg | preg usb
```

#### parted: Partition

options:
```text
- unit GB: Change to GB display
- print: Print partition status
- mkpart: Make partition
- rm Number: Remove partition
```

#### pvcreate: instant the partition

#### mkfs.xfs: init file system
e.g.:
```text
$ mkfs.xfs /dev/sda7
```

#### mount: mount partition to direction
format:
```text
$ mount [options] {partition} {direction}
```


e.g.:
```text
$ mkdir /mountdir1
$ mount /dev/sda7 /mountdir1
```


#### mount forever

```
# cat /etc/mtab
# cat /proc/mounts
# cat /etc/fstab
# mount -o remount /mountdir1
# cat /etc/fstab
# blkid /dev/sda7
confirm UUID
```

#### df: monitoring file system status

e.g.:
```text
$ df -h
```

#### swap

create swap:
```
# mkswap /dev/sda8/
```

activate swap:
```
# swapon /dev/sda8/
```

### User Management

#### /etc/passwd : user register file

e.g.:
```
# cat /etc/passwd
```

#### /etc/shadow : user password file

e.g.:
```
# cat /etc/shadow
```

#### /etc/group : group register file

e.g.:
```
# cat /etc/group
```

#### useradd : add a user
format:
```
# useradd [options] <username>
```

options:
```text
-u : UID
-g : GID
-G : GID,GID
-d : /home/path
-m : make new home directory
-s : indicate login shell e.g. /bin/bash
-c : comment
-D : set/change default value
```


#### /etc/skel : this folder will be copied as home folder when user created


#### usermod : change user profile
format:
```
# usermod [options] <username>
```

options:
```text
-u : UID
-g : GID
-G : GID,GID
-d : /home/path
-m : make new home directory
-s : indicate login shell
-l : new user name
-L : lock password
-U : unlock password
```


#### userdel : delete user
format:
```
# userdel [options] <username>
```

options:
```text
-r : delete the home folder
```


### Boot and Shutdown Management

#### /etc/default/grub : change bootloader configration

e.g.:
```
# vim /etc/default/grub
// activate setting
# grub2-mkconfig -o /boot/grub2/grub.cfg 
```

#### systemd.unit=rescue.target : rescue mode

steps:
```
e
[quiet] systemd.unit=rescue.target
ctrl + x
```

#### systemctl : confirm/change target

e.g.:

```
# systemctl get-default //show current target
# systemctl set-default multi-user.target //startup in console
# systemctl isolate multi-user.target //change current target
# systemctl list-units --type=target // show all roaded targets
# systemctl list-dependencies graphical.target // show dependence of indicated target

# systemctl start httpd.service //start apache
# systemctl status httpd.service //show apache status
# systemctl enable/disable httpd.service // run/or not apache when system startup
# systemctl is-enable httpd.service // show is apache.service enable
# systemctl list-unit-files // show all auto running services

# systemctl status systemd-journald //show system status
```

#### /usr/lib/systemd/system : unit setting


#### shutdown

e.g.:

```
# shutdown -h //shutdown immediately
# shutdown -r //reboot
```

### Package Management

#### rpm :  package management
format:
```
# rpm [-options] {package name}
```

options:
```
-i : package name
-v : show detail information
-h : show processbar
--nodeps : do not check depandence
--force : forced install
--test : install to sandbox
```

e.g.:
```
# rpm -ivh {package name} //install package
# rpm -Fvh {package name} //upgrade : do not install if package has not installed
# rpm -Uvh {package name} //upgrade : newly install if package has not installed

# rpm -qa | grep bash //search package about bash
# rpm -e {package name} //remove package
```

### Software Management
#### yum : package management

config:
```
# vim /etc/yum.conf //Yum basic config

# vim /etc/yum.repos.d/*.repo //repository config

```

format:
```
# yum [options] {package name}
```

options:
```
install : install
remove : remove
update : update a package
check-update
info : show package information
search : search a package
grouplist : show list of package group
groupinstall: install all packages in the group
```

e.g.:
```
# yum install system-config-kickstart 
```

### Log Management

#### journalctl : operating log database
format : 
```
$ journalctl [-options] {condition}
```

options:
```
-b : boot logs
-k : kernal logs
-f : show logs on real time
-u {unit name} : show unit logs
--since={yyyy-MM-dd hh:mm::ss} : since datetime
--until={yyyy-MM-dd hh:mm::ss} : until datetime
_PID={process ID} : show logs of process
--no-pager : do not paging
```

Persistence:
```
# mkdir /var/log/journal
# vim /etc/systemd/journald.conf
# systemctl restart systemd-journald
```

#### /etc/rsyslog.conf : config rsyslog

#### logger: save a message
format:
```
# logger [options] {message}
```

options:
```
-p facility.level
-t tag
```

e.g.:
```
# logger -p daemon.err -t rsyslogd Test Test Test
# tail /var/log/messages
```