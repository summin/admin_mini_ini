<?php

///////////////////////////
// ENVIRONMENT VARIABLES //
///////////////////////////

$rel_path_prefix = $config_env_path;
$admin_url = $rel_path_prefix . "admin/app/";
$dev_url = "http://localhost:8080/";
$api_url_assets = $rel_path_prefix .'admin/php/assets.php';
$api_url_content = $rel_path_prefix .'admin/php/content.php';
$api_url_save = $rel_path_prefix . 'admin/php/save_data.php';
$api_url_prize_images = $rel_path_prefix . 'dist/assets/images/prize-images-ch/';
$api_url_dafault_image = $rel_path_prefix . '/dist/assets/images/left_dummy.jpg';

$dev_cache_bust = "?".time();  // cache busting used to disable browser caching of css and js. assign empty string to $dev_cache_bust to stop cache busting, please also remove the string query attachemnt from output file setting in webpack.config.js

$logged = true;
$user = (object) [
    'name' => 'AC19user1',
    'email' => 'AC19user1@gmail.com',
    'logged' => $logged,
];

//////////////////
// DB VARIABLES //
//////////////////

$DB_name = '';
$DB_user = '';
$DB_pwd = '';

?>