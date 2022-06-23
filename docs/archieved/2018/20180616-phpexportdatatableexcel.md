---
title: 使用PHPExcel将Wordpress数据库中的某个表导出成Excel表格并下载
date: 2018-06-16 21:05:54
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

需要将Wordpress数据库中的某个表导出成Excel表格并下载。

## 解决方案

### 原料

- PHP 7.0
- [PHPExcel](https://github.com/PHPOffice/PHPExcel)

### 代码

``` PHP
// 导入PHPExcel
require_once get_template_directory() . '/functions/PHPExcel.php';
$objPHPExcel = new PHPExcel();
$objPHPExcel->setActiveSheetIndex(0);

//定义表头
$objPHPExcel->getActiveSheet()->setCellValue("A1", "ID");
$objPHPExcel->getActiveSheet()->setCellValue("B1", "商品名");
$objPHPExcel->getActiveSheet()->setCellValue("C1", "单价");

//数据库查询
global $wpdb;
$table_products = $wpdb->prefix . 'products';
$sql = "SELECT * FROM {$table_products}";
$rows = $wpdb->get_results($sql);
$rowCount = 2;
//遍历数据库行
foreach ($rows as $row) {
    // 从表第二行开始写数据
    $objPHPExcel->getActiveSheet()->SetCellValue('A' . $rowCount, $row->ID);
    $objPHPExcel->getActiveSheet()->SetCellValue('B' . $rowCount, $row->name);
    $objPHPExcel->getActiveSheet()->SetCellValue('C' . $rowCount, $row->price);
    $rowCount++;
}

header('Content-Type: application/vnd.ms-excel');
// filename：定义下载文件名
header('Content-Disposition: attachment;filename="Products_' . date('Y_m_d') . '.xlsx"');
header('Cache-Control: max-age=0');

//输出下载数据
$objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);
$objWriter->save('php://output');

exit();
```

## 结果和感想

PHPExcel目前已经由[PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet)代替，有兴趣的读者可以试试。