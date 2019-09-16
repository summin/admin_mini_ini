<?php

$assets = file_get_contents(__DIR__ . '/assets.json');
$export = json_encode($assets);
echo $assets;

?>