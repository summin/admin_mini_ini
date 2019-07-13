<?php 
$rel_path_prefix = "http://localhost/AC19";
$admin_url = $rel_path_prefix . "/admin";

// cache busting used to disable browser caching of css and js. assign "" empty to the variable to stop cache busting
$dev_cache_bust = "?".time(); 


$user = (object) [
    'name' => 'AC19user1',
    'email' => 'AC19user1@gmail.com',
    'logged' => true
];

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
        var myApp = {
            user : <?php echo json_encode($user); ?>,
            logged : <?php echo $user->logged; ?>
        };
    </script>
    <body>

        <div id="app"></div>
        <div id="clock"></div>

        <script type="text/javascript" src="<?php echo $rel_path_prefix ?>/admin/app/assets/bundle/main.bundle.js<?php echo $dev_cache_bust ?>">
        </script>
        <script> console.log("1");
        </script>

    </body>
</html>
