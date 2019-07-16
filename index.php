<?php 
require './php/config.php';
?>

<!doctype html>
<html lang="en">
    <head>
        <title>NIVEA Advents Calender Admin</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?php echo $admin_url; ?>/app/assets/css/app.css<?php echo $dev_cache_bust ?>" type="text/css">
    </head>
    <script type="text/javascript">
        var STATIC_URL = "<?php echo $admin_url; ?>";
        var STATIC_PARENT_URL = "<?php $rel_path_prefix; ?>";
        var myApp = {
            user : <?php echo(json_encode($user)); ?>,
            logged : <?php var_export($user->logged); ?>
        };
    </script>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="http://localhost:8080/assets/bundle/main.bundle.js<?php echo $dev_cache_bust ?>">
        </script>

    </body>
</html>
