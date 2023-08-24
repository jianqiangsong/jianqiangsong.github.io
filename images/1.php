<?php

$handle = scandir('/Users/songjianqiang/www/blog/source/images/originals');
$data = $data1 = [];
foreach ($handle as $item) {
    $dir = '/Users/songjianqiang/www/blog/source/images/originals/' . $item;
    if (in_array($item, ['.', '..', '.DS_Store'])) {
        continue;
    }

    if (!is_file($dir)) {
        $file = scandir($dir);
        foreach ($file as $value) {
            if (in_array($value, ['.', '..', '.DS_Store'])) {
                continue;
            }
            $r = pathinfo($dir . '/' . $value);
            if ($r['extension'] === 'mov' || $r['extension'] === 'mp4' || $r['extension'] === 'heic') {
                unlink($dir . '/' . $value);
                continue;
            }
//            $data[] = [
//                "img_url" => "/images/originals/{$item}/" . $value,
//                "title" => "个人照片",
//                "describe" => "个人照片"
//            ];
        }
    }
   // file_put_contents("$item.txt", json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
//    $data = [];
}

