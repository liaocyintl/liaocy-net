---
title: 一种网页分割算法 Web Segment
date: 2018-07-08 17:22:17
lang: zh-Hans
tags:
    - 网页分割 Web Segment
    - 数据挖掘 Data Mining
    - 算法 Algorithm
    - Python
    - 爬虫 Crawler
    
categories: 
    - 研究 Research
    - 数据挖掘 Data Mining
---

## 介绍
HTML文档是一种半结构化（semi-structured）数据，这种数据直接处理是很困难的。
我们设计一种网页分割算法，试图自动地将半结构化的HTML文档转换为结构化数据。
通过这个算法，一个HTML文档被分割成“分割（Segment）”与“记录（Record）”，分别对应结构化数据库中的“表”和“行”。

例如下面的事例，一张网页被分割成 Segment 1，其中包含Record 1-6；和Segment 2，其中包括Record 7-12。

<img src="\uploads\postimgs\487e62df.png" alt="网页分割的例子" title="网页分割的例子" />

对应到关系型数据库，表示为：

Segment 1:

| Record ID | Images | Texts |
| ---- | ---- | ---- |
| 1 |  https://img.alicdn.com/imgextr... | 优美喇叭袖清新碎花... |
| 2 |  https://img.alicdn.com/imgextr... | D&G紫色手提包 |
| ... | ...  | ... |

Segment 2:



| Record ID | Images | Texts |
| ---- | ---- | ---- |
| 7 |  https://img.alicdn.com/imgextr... | 潮范时光机 |
| 8 |  https://img.alicdn.com/imgextr... | 放飞自我的兔小姐 |
| ... | ...  | ... |

我们的算法可以自动地将网页转换成上面的形式。

## 快速开始

- 我们的测试环境（本算法也可以兼容Linux或Mac）
    - 操作系统： Microsoft Windows 10 Pro
    - Python： 3.6.5
    - Chrome： 67.0.3396.79 (Official Build) (64-bit)
    - Chrome-driver: 2.4
    
- 用下面的命令从Github上克隆代码
```bash
$ git clone --recursive https://github.com/liaocyintl/WebSegment.git
```

- 调整 setting.py
    - CHROME_BINARY_LOCATION 是Chrome的应用程序路径
        - Windows默认安装的情况下是 "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
        - Linux默认情况下是 "/usr/bin/google-chrome"，安装方法[参考这里](https://qiita.com/shinsaka/items/37436e256c813d277d6d)
        - Mac OS默认情况下是 "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"，安装方法[参考这里](https://duo.com/decipher/driving-headless-chrome-with-python)
    - DRIVER_PATH: 这是Chrome无头浏览器的驱动，您需要[下载对应您操作系统的版本](https://chromedriver.storage.googleapis.com/index.html?path=2.40/)。

- 完成上面的步骤，您可以使用 **demo.py** 中的代码尝试分割一个网页

```python
from segment import Segment
spliter = Segment()
spliter.segment(url="http://www.sukiya.jp/", output_folder="data/sukiya", is_output_images=True)
```

参数设定：

|  参数  |  解释  |
| ---- | ---- |
|  url  |  您需要分割的网页地址 |
|  output_folder  |  输出分割结果的文件夹路径  |
|  is_output_images  |  是否输出网页图片，默认为"False" |

## 输出结果

### result.json

result.json 是最主要的输出文件，其中包含转化为结构化数据的网页内容。其例子为：

```json
{
  "title":"淘宝",
  "url":"http://taobao.com/",
  "segments": [
    {
      "records": [
        {
          "texts": ["淘宝网"],
          "css_selectors": [
            "html > body:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div"
          ],
          "links": [
            {
              "href": "http://www.taobao.com/"
            }
          ],
          "images": [
            {
              "alt": "",
              "src": "http://www.taobao.com/common/img/hd_logo.png",
              "path": "data/taobao/images/66_0.png",
              "bg_color": "255,255,255"
            }
          ],
          "record_id": 66
        }
      ],
      "segment_id": 13,
      "css_selector": "html > body:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div"
    }
  ]
}
```

其结构为：
- title: 网页的标题
- url: 网页的URL
- segments: Segment的集合，包含多个Record
    - segment_id: 该Segment的ID，在result.json中的唯一标识
    - css_selector: 该Segment的css_selector路径（每个Segment仅有一个根节点）
    - records: Record的集合，属于该Segment
        - record_id: 该Record的ID，在result.json中的唯一标识
        - css_selectors: 该Record的css_selector路径（一个Record可能包含多个根节点）
        - texts: Record中包含的文字的集合
        - links: Record中包含的超链接的集合
            - href: 超链接的URL (已全部转化为绝对URL)
        - images: Record中包含的图片集合
            - alt: 图片的alt属性
            - src: 图片的URL (已全部转化为绝对URL)
            - path: 图片在本地转存的路径（仅当设置is_output_images为True时）
            - bg_color: 图片的背景颜色，表示为[R,G,B]

### screenshot.png
网页截屏快照

### images (文件夹)
当设置is_output_images为True时，网页图片被下载并转存到这里，并全部转化为JPG格式（可在Setting中设置）。
文件名格式为“RecodeID_序数.jpg”

## 一些算法细节

- 某些网页图片会隐藏在节点CSS的Background image当中，当其存在时我们的爬虫会抽取这些图片。
- 某些有透明背景的PNG图片会以自身颜色和背景颜色共同显示图案，例如白色文字绿色背景。我们的爬虫会探测其背景颜色，并抽取图层合并后的图片。

## 引用

如果您喜欢我们的工作，请引用我们的论文：

```text
@article{websegment,
  title={An Event Data Extraction Method Based on HTML Structure Analysis and Machine Learning},
  author={Liao, Chenyi and Hiroi, Kei and Kaji, Katsuhiko and Kawaguchi, Nobuo},
  journal={Computer Software and Applications Conference (COMPSAC)},
  volume={3},
  pages = {217-222},
  year={2015}
}
```