<?php
$get = $_GET;
$asset = $get['asset'];
$ini_assets = file_get_contents(__DIR__ . '/assets.json');
$ini_export = json_encode(parse_ini_file('../../'. json_decode($ini_assets)->$asset, true));

echo $ini_export;
// var_export($get['asset'])
?>