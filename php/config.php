<?php

///////////////////////////
// environemnt variables //
///////////////////////////

$rel_path_prefix = "http://localhost/AC19";
$admin_url = $rel_path_prefix . "/admin";

$dev_cache_bust = "?".time();  // cache busting used to disable browser caching of css and js. assign empty string to $dev_cache_bust to stop cache busting, please also remove the string query attachemnt from output file setting in webpack.config.js

$logged = true;

$user = (object) [
    'name' => 'AC19user1',
    'email' => 'AC19user1@gmail.com',
    'logged' => $logged,
];

//////////////////
// DB variables //
//////////////////

$DB_name = '';
$DB_user = '';
$DB_pwd = '';

/////////////////////////
// functional elements //
/////////////////////////



?>