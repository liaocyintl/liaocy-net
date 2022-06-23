---
title: Hexo下Next主题生成静态文件时报错no such file or directory, open themes\next\layout\_scripts\schemes\.swig
date: 2018-06-21 14:55:23
lang: zh-Hans
tags:
    - Hexo
    - Next
    - YAML
    
categories: 
    - 开发 Development
    - Hexo
---

## 问题背景

Hexo下生成静态文件时报错：

```text
Error: ENOENT: no such file or directory, open 'themes\next\layout\_scripts\schemes\.swig'
    at Object.fs.openSync (fs.js:579:3)
    at Object.fs.readFileSync (fs.js:485:33)
    at Object.ret.load (node_modules\swig-templates\lib\loaders\filesystem.js:55:15)
    at exports.Swig.compileFile (node_modules\swig-templates\lib\swig.js:694:31)
    at Object.eval [as tpl] (eval at precompile (node_modules\swig-templates\lib\swig.js:497:13), <anonymous>:429:18)
    at compiled (node_modules\swig-templates\lib\swig.js:618:18)
    at Theme._View.View._compiled.locals [as _compiled] (node_modules\hexo\lib\theme\view.js:124:48)
    at Theme._View.View.View.render (node_modules\hexo\lib\theme\view.js:29:15)
    at route.set (node_modules\hexo\lib\hexo\index.js:386:29)
    at tryCatcher (node_modules\bluebird\js\release\util.js:16:23)
    at node_modules\bluebird\js\release\method.js:15:34
    at RouteStream._read (node_modules\hexo\lib\hexo\router.js:134:3)
    at RouteStream.Readable.read (_stream_readable.js:449:10)
    at resume_ (_stream_readable.js:888:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```

## 解决方案

利用工具 [YAML Validator](https://codebeautify.org/yaml-validator) 检查 站点配置文件 主题配置文件 _config.yml

参考：[在主题配置文件配置友链后，hexo g报错](https://github.com/iissnan/hexo-theme-next/issues/737)

## 结果和感想

yml文件中，key之前不可以有空格。否则会报上面错误信息