<?php 


$asset = $get['config'];
$ini_config = parse_ini_file('../config/default/config-local.ini', true);
$config_env_path = $ini_config['config_fe']['absRefPrefix'];

require __DIR__ . '/php/config.php';

?>

<!doctype html>
<html lang="en">
    <head>
        <title>NIVEA Advents Calender Admin</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?php echo $dev_url; ?>assets/bundle/css/app.css<?php echo $dev_cache_bust ?>" type="text/css">
    </head>
    <script type="text/javascript">
        var STATIC_URL = "<?php echo $config_env_path; ?>";
        var STATIC_PARENT_URL = "<?php $rel_path_prefix; ?>";
        var API_URL_ASSETS = "<?php echo $api_url_assets; ?>";
        var API_URL_CONTENT = "<?php echo $api_url_content; ?>";
        var API_URL_SAVE = "<?php echo $api_url_save; ?>";
        var API_URL_PRIZE_IMAGES = "<?php echo $api_url_prize_images; ?>";
        var API_URL_DEFAULT_IMAGE = "<?php echo $api_url_dafault_image; ?>";
        var myApp = {
            user : <?php echo(json_encode($user)); ?>,
            logged : <?php var_export($user->logged); ?>
        };
        
    </script>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="<?php echo $dev_url ?>assets/bundle/main.bundle.js<?php echo $dev_cache_bust ?>">
        </script>

    </body>
</html>
