<?php


$asset = $_GET['asset'];
$section = $_GET['section'];
$data_assets = file_get_contents(__DIR__ . '/assets.json');
$data_location = '../../'. json_decode($data_assets)->$asset;
$data_received = json_decode($_GET['data'], true);
$data_opened = parse_ini_file($data_location, true);




function process_ini($source, $input, $section, $data_location)
{   
    foreach($input as $key => $val)
    {
        $source[$section][$key] = $val;
    }
    write_php_ini($source, $data_location);
}

function write_php_ini($array, $data_location)
{
    $res = array();
    foreach($array as $key => $val)
    {
        if(is_array($val))
        {
            $res[] = "[$key]";
            foreach($val as $skey => $sval) $res[] = "$skey = ". "'".$sval."'";
        }
        else $res[] = "$key = ".(is_numeric($val) ? $val : "'".$sval."'");
        $res[] = "\r\n";   
    }
    
    safefilerewrite($data_location, implode("\r\n", $res));
}

function safefilerewrite($fileName, $dataToSave)
{    if ($fp = fopen($fileName, 'w'))
    {
        $startTime = microtime(TRUE);
        do
        {            $canWrite = flock($fp, LOCK_EX);
           // If lock not obtained sleep for 0 - 100 milliseconds, to avoid collision and CPU load
           if(!$canWrite) usleep(round(rand(0, 100)*1000));
        } while ((!$canWrite)and((microtime(TRUE)-$startTime) < 5));

        //file was locked so now we can store information
        if ($canWrite)
        {            fwrite($fp, $dataToSave);
            flock($fp, LOCK_UN);
        }
        fclose($fp);
    }

}

    process_ini($data_opened, $data_received, $section, $data_location);

?>