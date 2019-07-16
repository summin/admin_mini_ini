<?php

$ini_assets = json_decode(file_get_contents('assets.json'), true);

foreach ($ini_assets as $value) {
    $ini_export = json_encode(parse_ini_file('../../'.$value['path'], true));
    var_export($ini_export);
}

?>