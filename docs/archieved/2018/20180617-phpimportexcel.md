---
title: 使用PHPExcel导入Excel数据
date: 2018-06-17 09:03:24
lang: zh-Hans
tags:
    - PHP
    - Wordpress
    - PHPExcel
    
categories: 
    - 开发 Development
    - Wordpress
---

## 问题背景

需要上传并导入Excel数据

## 解决方案

### 原料

- PHP 7.0
- [PHPExcel](https://github.com/PHPOffice/PHPExcel)

### 代码

表单代码：

```html
<form method="post" action="http://xxx.com/importexcel" enctype="multipart/form-data">
    选择Excel文件 <input type="file" name="file_excel" hidden>
    <input class="btn btn-primary" type="submit" value="导入Excel"/>
</form>
```

```PHP
if (!empty($_FILES ['file_excel'] ['name'])) {
    $tmp_file = $_FILES ['file_excel'] ['tmp_name'];

    $file_types = explode(".", $_FILES ['file_excel'] ['name']);
    $file_type = $file_types [count($file_types) - 1];
    // 用扩展名判断是不是.xlsx文件
    if (strtolower($file_type) != "xlsx") {
        $msg = '不是Excel文件，请重新上传';
        exit();
    } else {
        $objReader = PHPExcel_IOFactory::createReader('Excel2007');
        $objReader->setReadDataOnly(true);
        // 打开Excel文件
        $objPHPExcel = $objReader->load($tmp_file);
        // 打开工作表
        $objWorksheet = $objPHPExcel->getActiveSheet();

        $highestRow = $objWorksheet->getHighestRow();

        $datarows = array();
        //去掉表头，从第二行开始读取
        for ($row = 2; $row <= $highestRow; ++$row) {
            // 读取第A列数据
            $ID = $objWorksheet->getCellByColumnAndRow(0, $row)->getValue();
            // 读取第B列数据
            $name = $objWorksheet->getCellByColumnAndRow(1, $row)->getValue();
        }
    }
}
exit();
```

## 结果和感想

PHPExcel目前已经由[PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet)代替，有兴趣的读者可以试试。