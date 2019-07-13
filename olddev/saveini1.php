function write_php_ini($array, $file)
{
    $res = array();
    foreach($array as $key => $val)
    {
        if(is_array($val))
        {
            $res[] = "[$key]";
            foreach($val as $skey => $sval) $res[] = "$skey = ".(is_numeric($sval) ? $sval : '"'.$sval.'"');
        }
        else $res[] = "$key = ".(is_numeric($val) ? $val : '"'.$val.'"');
    }
    safefilerewrite($file, implode("\r\n", $res));
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



function IniAsStr(array $a) : string
{
    return array_reduce(array_keys($a), function($str, $sectionName) use ($a) {
        $sub = $a[$sectionName];
        return $str . "[$sectionName]" . PHP_EOL .
            array_reduce(array_keys($sub), function($str, $key) use($sub) {
                return $str . $key . '=' . $sub[$key] . PHP_EOL;
            }) . PHP_EOL;
      });
}



### PHP write_ini_file function to use with parse_ini_file: (choose one of the two example arrays below...)
$array = array('category' => array('color' => 'blue', 'size' => 'large'));
// $array = array('color' => 'red', 'size' => 'small');
function write_ini_file($array, $path) {
    unset($content, $arrayMulti);

    # See if the array input is multidimensional.
    foreach($array AS $arrayTest){
        if(is_array($arrayTest)) {
          $arrayMulti = true;
        }
    }

    # Use categories in the INI file for multidimensional array OR use basic INI file:
    if ($arrayMulti) {
        foreach ($array AS $key => $elem) {
            $content .= "[" . $key . "]\n";
            foreach ($elem AS $key2 => $elem2) {
                if (is_array($elem2)) {
                    for ($i = 0; $i < count($elem2); $i++) {
                        $content .= $key2 . "[] = \"" . $elem2[$i] . "\"\n";
                    }
                } else if ($elem2 == "") {
                    $content .= $key2 . " = \n";
                } else {
                    $content .= $key2 . " = \"" . $elem2 . "\"\n";
                }
            }
        }
    } else {
        foreach ($array AS $key2 => $elem2) {
            if (is_array($elem2)) {
                for ($i = 0; $i < count($elem2); $i++) {
                    $content .= $key2 . "[] = \"" . $elem2[$i] . "\"\n";
                }
            } else if ($elem2 == "") {
                $content .= $key2 . " = \n";
            } else {
                $content .= $key2 . " = \"" . $elem2 . "\"\n";
            }
        }
    }

    if (!$handle = fopen($path, 'w')) {
        return false;
    }
    if (!fwrite($handle, $content)) {
        return false;
    }
    fclose($handle);
    return true;
}

write_ini_file($array,'./data.ini');
$readData = parse_ini_file('./data.ini',true);
print_r($readData);